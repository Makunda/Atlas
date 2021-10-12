/* eslint-disable max-len */
import { Neo4JAccessLayer } from "@database/Neo4JAccessLayer";
import { logger } from "@shared/Logger";
import Excel from "exceljs";
import { int, QueryResult } from "neo4j-driver";
import { CloudProvider } from "@enum/highlight/CloudProvider";
import ExcelUtils from "@utils/Excel/ExcelUtils";
import CloudServiceRecommendation from "@interfaces/highlight/recommendations/CloudServiceRecommendation";
import ArchitectureService from "@services/extensions/demeter/ArchitectureService";
import SubsetDocumentNode from "@entities/Imaging/Documents/SubsetDocumentNode";
import LevelDocumentNode from "@entities/Imaging/Documents/LevelDocumentNode";
import AggregationService from "@services/extensions/demeter/AggregationService";
import AggregationDocumentNode from "@entities/Imaging/Documents/AggregationDocumentNode";

export default class HighlightServiceRecommendationService {
  private static NEO4JAL: Neo4JAccessLayer = Neo4JAccessLayer.getInstance();

  /**
   * Treat a specific tab of the excel for the services
   * @param application Name of the application
   * @param path Path to the excel file to treat
   * @param cloudProvider Name of the cloud provider ( )
   */
  private processTab(application: string, workbook: Excel.Workbook, cloudProvider: string): CloudServiceRecommendation[] {
    // Verify that the tabs exist in the workbook
    if (!workbook.worksheets.map(x => x.name).includes(cloudProvider)) {
      throw new Error(`Excel report is not correct. Failed to find '${cloudProvider}' tab.`);
    }

    const worksheet = workbook.getWorksheet(cloudProvider);

    // Find origin value as starting point
    const [row, col] = ExcelUtils.findStartCoord(worksheet, "Cloud Service");
    // Launch discovery
    const columnMapping: Map<string, number> = ExcelUtils.mapColumnTitle(worksheet, row, col);

    // Component	Version	Description	Release Date	Url	License	License Change	Origin	CWEs	CVEs	Applications
    const recommendation: CloudServiceRecommendation[] = [];
    let stop: boolean = false;
    let indexR = row;
    while (!stop) {
      indexR++;

      // Requirements
      const serviceName = ExcelUtils.getValueOrEmpty(worksheet, indexR, "Cloud Service", columnMapping);

      if (!serviceName) {
        stop = true;
        continue;
      }

      const description = ExcelUtils.getValueOrEmpty(worksheet, indexR, "Description", columnMapping);
      const documentation = ExcelUtils.getValueOrEmpty(worksheet, indexR, "Documentation", columnMapping);
      const ruleType = ExcelUtils.getValueOrEmpty(worksheet, indexR, "Rule Type", columnMapping);
      const rule = ExcelUtils.getValueOrEmpty(worksheet, indexR, "Rule", columnMapping);
      const trigger = ExcelUtils.getValueOrEmpty(worksheet, indexR, "Trigger", columnMapping);

      // Push the reco
      recommendation.push({
        application: application,
        cloudProvider: cloudProvider,
        serviceName: serviceName,
        description: description,
        documentation: documentation,
        rule: rule,
        ruleType: ruleType,
        trigger: trigger,
      });
    }

    return recommendation;
  }

  /**
   * Process the excel file and create recommendation
   * @param application Name of the application
   * @param path Path to the Excel report
   */
  public async processExcel(application: string, path: string): Promise<CloudServiceRecommendation[]> {
    // Read the cloud blocker file
    const workbook = new Excel.Workbook();

    try {
      await workbook.xlsx.readFile(path);
    } catch (err) {
      logger.error(`Failed to process the file at: ${path}.`, err);
      throw new Error("Failed to open the excel file.");
    }

    // Process all the tabs
    const serviceReco: CloudServiceRecommendation[] = [];

    Object.values(CloudProvider).forEach(x => {
      try {
        serviceReco.push(...this.processTab(application, workbook, x));
      } catch (ignored) {
        logger.error(`Failed to process the ${x} tab in the excel file.`);
      }
    });

    return serviceReco;
  }

  /**
   * Apply a service recommendation on Level5 of the application
   * @param blockers List of the blockers to apply
   */
  private async applyOnLevel5(blockers: CloudServiceRecommendation[]): Promise<[CloudServiceRecommendation[], CloudServiceRecommendation[]]> {
    const returnList: CloudServiceRecommendation[] = [];
    const errorList: CloudServiceRecommendation[] = [];

    try {
      // find name of the application
      const applications = [...new Set(blockers.map(item => item.application))]; // Select distinct providers

      // Iterate on the different application found in the blockers
      for (const app of applications) {
        // Filter blockers
        const applicationBlockers: CloudServiceRecommendation[] = blockers.filter(item => item.application == app);

        // Select all the subsets in the architecture to create the document
        const req = `MATCH (l:Level5:\`${app}\`) 
          return DISTINCT ID(l) as idNode;`;
        const res: QueryResult = await HighlightServiceRecommendationService.NEO4JAL.execute(req);

        // Get nodes ID and ignore is nothing has been created
        if (!res || res.records.length == 0) continue;
        const idNodes = res.records.map(x => int(x.get("idNode")).toNumber());

        // Apply documents for each blockers
        for (const block of applicationBlockers) {
          try {
            // Apply documents on the  new architecture
            const description = `${block.description} 

You can find more documentation about this service at ${block.documentation}.
This recommendation has been triggered because '${block.rule}' was detected.`;
            // Create the documents
            const doc = new LevelDocumentNode(block.application, block.serviceName, description, idNodes);
            await doc.create();

            returnList.push(block);
          } catch (err) {
            errorList.push(block); // Failed to apply the recommendation
          }
        }
      }

      return [returnList, errorList];
    } catch (err) {
      logger.error("Failed to apply a service recommendation on levels", err);
      return [[], []];
    }
  }

  /**
   * Apply Recommendations on a new architecture
   * @param application Name of the application
   * @param blockers List of blockers to apply
   */
  private async applyOnArchitecture(blockers: CloudServiceRecommendation[]): Promise<[CloudServiceRecommendation[], CloudServiceRecommendation[]]> {
    const returnList: CloudServiceRecommendation[] = [];
    const errorList: CloudServiceRecommendation[] = [];

    try {
      // Declare controller
      const archiController = new ArchitectureService();

      // find name of the application
      const applications = [...new Set(blockers.map(item => item.application))]; // Select distinct providers

      // Iterate on the different application found in the blockers
      for (const app of applications) {
        // Filter blockers
        const applicationBlockers: CloudServiceRecommendation[] = blockers.filter(item => item.application == app);

        // Find an architecture or create
        const toCreate = [...new Set(applicationBlockers.map(item => item.cloudProvider))]; // Select distinct providers
        const existingArchitectureNames = (await archiController.getAllArchitectures(app)).map(x => x.name); // Get the name of the architectures

        // Create view based on the Service name found
        for (const archi of toCreate) {
          // Verify that the architecture not already exist
          if (!existingArchitectureNames.includes(archi)) {
            // Create an architecture and replicate the architecture there
            logger.info(`Failed to find ${archi}. Creating the architecture.`);
            await archiController.duplicateCastTaxonomy(app, archi);
            await archiController.executeGroupingInApplication(app);
          }

          // Select all the subsets in the architecture to create the document
          const req = `MATCH (a:ArchiModel:\`${app}\`)-[]->(s:\`${app}\`:Subset) 
          WHERE a.Name=$archiName  
          return DISTINCT ID(s) as idNode;`;
          const params: any = { archiName: archi };
          const res: QueryResult = await HighlightServiceRecommendationService.NEO4JAL.executeWithParameters(req, params);

          // Get nodes ID and ignore is nothing has been created
          if (!res || res.records.length == 0) continue;
          const idNodes = res.records.map(x => int(x.get("idNode")).toNumber());

          // filter the blockers to create for the actual architecture
          const filtered = applicationBlockers.filter(x => x.cloudProvider == archi);

          // Apply documents for each blockers
          for (const block of filtered) {
            try {
              // Apply documents on the  new architecture
              const description = `${block.description} 

You can find more documentation about this service at ${block.documentation}.
This recommendation has been triggered because '${block.rule}' was detected.`;
              // Create the documents
              const doc = new SubsetDocumentNode(block.application, archi, block.serviceName, description, idNodes);
              await doc.create();

              returnList.push(block);
            } catch (err) {
              errorList.push(block); // Failed to apply the recommendation
              return [[], []];
            }
          }
        }
      }
      return [returnList, errorList];
    } catch (err) {
      logger.error("Failed to apply a service recommendation on architectures", err);
    }
  }

  /**
   * Apply Recommendations on a new architecture
   * @param application Name of the application
   * @param blockers List of blockers to apply
   */
  private async applyOnAggregation(blockers: CloudServiceRecommendation[]): Promise<[CloudServiceRecommendation[], CloudServiceRecommendation[]]> {
    // Declare controller and labels
    const aggregationController = new AggregationService();
    const aggregationLabel = AggregationService.getAggregationLabel();
    const customLabel = AggregationService.getCustomLabel();

    // Return lists
    const returnList: CloudServiceRecommendation[] = [];
    const errorList: CloudServiceRecommendation[] = [];

    try {
      // find names of the applications
      const applications = [...new Set(blockers.map(item => item.application))]; // Select distinct providers

      // Iterate on the different application found in the blockers
      for (const app of applications) {
        // Filter blockers
        const applicationBlockers: CloudServiceRecommendation[] = blockers.filter(item => item.application == app);

        // Find an aggregation or create
        const toCreate = [...new Set(applicationBlockers.map(item => item.cloudProvider))]; // Select distinct providers

        // Create view based on the Service name found
        for (const aggregation of toCreate) {
          // Merge new aggregation
          await aggregationController.duplicateCastTaxonomy(app, aggregation);

          // Select all the subsets in the architecture to create the document
          const req = `MATCH (a:${aggregationLabel}:\`${app}\`)-[:HAS]->(s:\`${app}\`:${customLabel}) 
          WHERE a.Name=$aggregationName  
          return DISTINCT ID(s) as idNode;`;
          const params: any = { aggregationName: aggregation };
          const res: QueryResult = await HighlightServiceRecommendationService.NEO4JAL.executeWithParameters(req, params);

          // Get nodes ID and ignore is nothing has been created
          if (!res || res.records.length == 0) continue;
          const idNodes = res.records.map(x => int(x.get("idNode")).toNumber());

          // filter the blockers to create for the actual architecture
          const filtered = applicationBlockers.filter(x => x.cloudProvider == aggregation);

          // Apply documents for each blockers
          for (const block of filtered) {
            try {
              // Apply documents on the  new architecture
              const description = `${block.description} 

You can find more documentation about this service at ${block.documentation}.
This recommendation has been triggered because '${block.rule}' was detected.`;
              // Create the documents
              const doc = new AggregationDocumentNode(block.application, aggregation, block.serviceName, description, idNodes);
              await doc.create();

              returnList.push(block);
            } catch (err) {
              errorList.push(block); // Failed to apply the recommendation
              return [[], []];
            }
          }
        }
      }
      return [returnList, errorList];
    } catch (err) {
      logger.error("Failed to apply a service recommendation on architectures", err);
    }
  }

  /**
   * Apply a list of blocker as recommendation in cast imaging
   * @param {string} application Name of the application
   * @param {CloudServiceRecommendation[]} blockers List of blockers to apply
   * @return {Promise<[CloudServiceRecommendation[], CloudServiceRecommendation[]]>} List of recommendations not applied
   */
  public async applyRecommendations(
    blockers: CloudServiceRecommendation[],
    taggingType: string,
  ): Promise<[CloudServiceRecommendation[], CloudServiceRecommendation[]]> {
    switch (taggingType) {
      case "level5":
        return this.applyOnLevel5(blockers);
      case "architecture":
        return this.applyOnArchitecture(blockers);
      case "aggregation":
        return this.applyOnAggregation(blockers);
      default:
        throw new Error(`Cannot apply cloud service recommendations for '${taggingType}'`);
    }
  }
}
