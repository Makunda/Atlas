/* eslint-disable max-len */
import { Neo4JAccessLayer } from "@database/Neo4JAccessLayer";
import ObjectDocumentNode from "@entities/Imaging/Documents/ObjectDocumentNode";
import ContainerRecommendation from "@interfaces/highlight/recommendations/ContainerRecommendation";
import { logger } from "@shared/Logger";
import ExcelUtils from "@utils/Excel/ExcelUtils";
import Excel from "exceljs";
import { int, QueryResult } from "neo4j-driver";
import CloudBlocker from "@interfaces/highlight/recommendations/CloudBlocker";

export default class HighlightContainerService {
  private static NEO4JAL: Neo4JAccessLayer = Neo4JAccessLayer.getInstance();
  private static CONTAINER_WORKSHEET = "Containerization Improvement";
  private static INDEX_TABLE_COL_NAME = "Requirement";

  /**
   * Process the excel file and create recommendation
   * @param application Name of the application
   * @param path Path to the Excel report
   */
  public async processExcel(application: string, path: string): Promise<CloudBlocker[]> {
    const workbook = new Excel.Workbook();

    try {
      await workbook.xlsx.readFile(path);
    } catch (err) {
      logger.error(`Failed to process the file at: ${path}.`, err);
      throw new Error("Failed to open the excel file.");
    }

    if (!workbook.worksheets.map(x => x.name).includes(HighlightContainerService.CONTAINER_WORKSHEET)) {
      throw new Error(`Excel report is not correct. Failed to find '${HighlightContainerService.CONTAINER_WORKSHEET}' tab.`);
    }

    const worksheet = workbook.getWorksheet(HighlightContainerService.CONTAINER_WORKSHEET);

    // Find origin value as starting point
    const [row, col] = ExcelUtils.findStartCoord(worksheet, HighlightContainerService.INDEX_TABLE_COL_NAME);

    // Launch discovery
    const columnMapping: Map<string, number> = ExcelUtils.mapColumnTitle(worksheet, row, col);

    // Component	Version	Description	Release Date	Url	License	License Change	Origin	CWEs	CVEs	Applications
    const recommendation: ContainerRecommendation[] = [];
    // Parse all the lines from the start
    for (let indexR = row + 1; indexR < worksheet.actualRowCount; indexR++) {
      // Requirements
      const requirement = ExcelUtils.getValueOrEmpty(worksheet, indexR, "Requirement", columnMapping);

      let containerReq = "";
      let blocker = "";

      const split = requirement.split(":");
      if (split.length > 1) {
        containerReq = split[0].trim();
        blocker = split[1].trim();
      }

      const technology = ExcelUtils.getValueOrEmpty(worksheet, indexR, "Technology", columnMapping);
      const file = ExcelUtils.getValueOrEmpty(worksheet, indexR, "File", columnMapping);

      // Push the reco
      recommendation.push({
        application: application,
        requirement: containerReq,
        blocker: blocker,
        technology: technology,
        file: file,
      });
    }

    return recommendation;
  }

  /**
   * Apply a recommendation for an application as a tag
   * @param blocker Blocker to apply
   */
  private async applyTag(blocker: ContainerRecommendation): Promise<boolean> {
    try {
      const req = `MATCH (p:ObjectProperty)<-[r]-(o:\`${blocker.application}\`:Object) 
    WHERE p.Description='File' AND r.value ENDS WITH $file 
    WITH o as o LIMIT 1 
    SET o.Tags = CASE WHEN o.Tags IS NULL THEN [$tag] ELSE [ x in o.Tags WHERE NOT x=$tag ] + $tag END
    return o as node;`;

      const params: any = { file: blocker.file, tag: `Container Blocker : ${blocker.blocker}` };
      const res: QueryResult = await HighlightContainerService.NEO4JAL.executeWithParameters(req, params);
      return res && res.records.length > 0;
    } catch (ignored) {
      return false;
    }
  }

  /**
   * Apply a recommendation for an application as a document
   * @param blocker Blocker to apply
   */
  private async applyDocument(blocker: ContainerRecommendation): Promise<boolean> {
    const req = `MATCH (p:ObjectProperty)<-[r]-(o:\`${blocker.application}\`:Object) 
    WHERE p.Description='File' AND r.value ENDS WITH $file 
    WITH o as o LIMIT 1 
    return ID(o) as idNode;`;

    const params: any = { file: blocker.file, tag: blocker.blocker };
    const res: QueryResult = await HighlightContainerService.NEO4JAL.executeWithParameters(req, params);

    // Get nodes ID
    if (!res || res.records.length == 0) return false;

    const idNodes = res.records.map(x => int(x.get("idNode")).toNumber());

    // Create the document
    const title = `Container Blocker : ${blocker.blocker}`;
    const description = `The implementation of these objects contains patterns that prevent the containerization of the application. 
    It is necessary to refactor these objects before wrapping the app in a container.
    '${blocker.blocker}' is affecting the '${blocker.requirement}'`;

    try {
      const doc = new ObjectDocumentNode(blocker.application, title, description, idNodes);
      await doc.create();

      return true;
    } catch (error) {
      logger.error("Failed to create a Document.", error);
      return false;
    }
  }

  /**
   * Apply a list of blocker as recommendation in cast imaging
   * @param {string} application Name of the application
   * @param {CloudBlocker[]} blockers List of blockers to apply
   * @return {Promise<CloudBlocker[]>} List of blockers not applied
   */
  public async applyRecommendations(blockers: CloudBlocker[], taggingType: string): Promise<[CloudBlocker[], CloudBlocker[]]> {
    const returnList: CloudBlocker[] = [];
    const errorList: CloudBlocker[] = [];

    let res;
    // Parse the blockers and apply the recommendations
    for (const blocker of blockers) {
      res = taggingType == "tag" ? await this.applyTag(blocker) : await this.applyDocument(blocker);

      if (res) returnList.push(blocker);
      else errorList.push(blocker);
    }

    return [returnList, errorList];
  }

  /**
   * Test a blocker
   * @param {Blocker} blocker Blocker to test
   * @returns True if the test is successful, False otherwise
   */
  public async testRecommendation(blocker: CloudBlocker): Promise<boolean> {
    try {
      const req = `MATCH (p:ObjectProperty)<-[r]-(o:\`${blocker.application}\`:Object) 
      WHERE p.Description='File' AND r.value ENDS WITH $file 
      return o as node LIMIT 1;`;

      const params: any = { file: blocker.file, tag: blocker.file };
      const res: QueryResult = await HighlightContainerService.NEO4JAL.executeWithParameters(req, params);
      if (!res || res.records.length == 0) return true;
      else return false;
    } catch (ignored) {
      return false;
    }
  }
}
