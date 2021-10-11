/* eslint-disable max-len */
import { Neo4JAccessLayer } from "@database/Neo4JAccessLayer";
import DocumentNode from "@entities/Imaging/Documents/DocumentNode";
import OssRecommendation from "@interfaces/highlight/recommendations/OssRecommendation";
import { logger } from "@shared/Logger";
import ExcelUtils from "@utils/Excel/ExcelUtils";
import Excel from "exceljs";
import { int, QueryResult } from "neo4j-driver";
import fs from "fs";
import ObjectDocumentNode from "@entities/Imaging/Documents/ObjectDocumentNode";

/**
 * Service in Charge of the processing of Open source service
 */
export default class HighlightOssService {
  protected static NEO4JAL: Neo4JAccessLayer = Neo4JAccessLayer.getInstance();
  protected static PORTFOLIO_LEVEL_TAB = "Portfolio-Level Components";
  protected static APPLICATION_LEVEL_TAB = "Detected Components";

  /**
   * Sanitize the component based on the technology
   * @param name Name of the component
   * @param technology Technology of the component
   * @returns [root, info] Return the root and additional information
   */
  private sanitizeComponentName(name: string, technology: string): [string, string] {
    if (technology == "java") {
      let info = "";
      if (name.includes(":")) {
        const tab = name.split(":");
        name = tab[0];
        info = tab[1];
      }
      return [name, info];
    }

    // Else return plain
    return [name, ""];
  }

  /**
   * Treat a portfolio level Excel sheet
   * @param workbook Workbook to treat
   * @todo Quick implementation need to make this approach generic
   */
  public treatPortfolioLevel(workbook: Excel.Workbook): OssRecommendation[] {
    const worksheet = workbook.getWorksheet(HighlightOssService.PORTFOLIO_LEVEL_TAB);

    // Find origin value as starting point
    const [row, col] = ExcelUtils.findStartCoord(worksheet, "Origin");

    // Launch discovery
    const columnMapping: Map<string, number> = ExcelUtils.mapColumnTitle(worksheet, row, col);

    // Component	Version	Description	Release Date	Url	License	License Change	Origin	CWEs	CVEs	Applications
    const recommendation: OssRecommendation[] = [];
    // Parse all the lines from the start
    for (let indexR = row; indexR < worksheet.actualRowCount; indexR++) {
      // Sanitize component name
      const component = ExcelUtils.getValueOrEmpty(worksheet, indexR, "Component", columnMapping);
      const technology = ExcelUtils.getValueOrEmpty(worksheet, indexR, "Technologies", columnMapping);

      const [componentName, info] = this.sanitizeComponentName(component, technology);
      let description = ExcelUtils.getValueOrEmpty(worksheet, indexR, "Description", columnMapping);

      if (info) {
        description = `Additional component's info: ${info}. ` + componentName;
      }

      recommendation.push({
        application: ExcelUtils.getValueOrEmpty(worksheet, indexR, "Applications", columnMapping),
        origin: ExcelUtils.getValueOrEmpty(worksheet, indexR, "Origin", columnMapping),
        component: componentName,
        description: description,
        version: ExcelUtils.getValueOrEmpty(worksheet, indexR, "Version", columnMapping),
        status: "",
        technology: technology,
        link: ExcelUtils.getValueOrEmpty(worksheet, indexR, "Version", columnMapping),
        release: ExcelUtils.getValueOrEmpty(worksheet, indexR, "Release Date", columnMapping),
        lastVersion: "",
        lastRelease: "",
        gap: "",
        releaseFrequency: "",
        licenses: [],
        vulnerabilityCritical: [],
        vulnerabilityHigh: [],
        vulnerabilityMedium: [],
        vulnerabilityLow: [],
      });
    }

    return recommendation;
  }

  /**
   * Treat an application level Excel sheet
   * @param workbook Workbook to treat
   * @todo Quick implementation need to make this approach generic
   */
  public treatApplicationLevel(workbook: Excel.Workbook, application: string): OssRecommendation[] {
    const worksheet = workbook.getWorksheet(HighlightOssService.APPLICATION_LEVEL_TAB);

    // Find origin value as starting point
    const [x, y] = ExcelUtils.findStartCoord(worksheet, "Origin");

    // Launch discovery
    // Origin	Third-Party Component	Status	Technologies	Link	Version	Release Date	Last Version	Last Release Date	Gap	Releases / 12 months	Licenses	Critical	High	Medium	Low

    // Launch discovery
    const columnMapping: Map<string, number> = ExcelUtils.mapColumnTitle(worksheet, x, y);

    logger.info(`columnMapping : ${worksheet.actualRowCount} rows & ${worksheet.actualColumnCount} cols `);

    const recommendation: OssRecommendation[] = [];
    // Parse all the lines from the start
    for (let indexR = x + 1; indexR <= 32767; indexR++) {
      // Check if line empty  to avoid inserting empty rows
      const component = ExcelUtils.getValueOrEmpty(worksheet, indexR, "Third-Party Component", columnMapping);

      if (component === "") break;

      const technology = ExcelUtils.getValueOrEmpty(worksheet, indexR, "Technologies", columnMapping);

      const [componentName, info] = this.sanitizeComponentName(component, technology);

      let description = ExcelUtils.getValueOrEmpty(worksheet, indexR, "Description", columnMapping);

      if (info) {
        description = `Additional component's info: ${info}. ` + description;
      }

      recommendation.push({
        application: application,
        origin: ExcelUtils.getValueOrEmpty(worksheet, indexR, "Origin", columnMapping),
        component: componentName,
        description: description,
        version: ExcelUtils.getValueOrEmpty(worksheet, indexR, "Version", columnMapping),
        status: ExcelUtils.getValueOrEmpty(worksheet, indexR, "Status", columnMapping),
        technology: technology,
        link: ExcelUtils.getValueOrEmpty(worksheet, indexR, "Link", columnMapping),
        release: ExcelUtils.getValueOrEmpty(worksheet, indexR, "Release Date", columnMapping),
        lastVersion: ExcelUtils.getValueOrEmpty(worksheet, indexR, "Last Version", columnMapping),
        lastRelease: ExcelUtils.getValueOrEmpty(worksheet, indexR, "Last Release Date", columnMapping),
        gap: ExcelUtils.getValueOrEmpty(worksheet, indexR, "Gap", columnMapping),
        releaseFrequency: ExcelUtils.getValueOrEmpty(worksheet, indexR, "Releases / 12 months", columnMapping),
        licenses: ExcelUtils.getStringArrayOrEmpty(worksheet, indexR, "Licenses", columnMapping),
        vulnerabilityCritical: ExcelUtils.getStringArrayOrEmpty(worksheet, indexR, "Critical", columnMapping),
        vulnerabilityHigh: ExcelUtils.getStringArrayOrEmpty(worksheet, indexR, "High", columnMapping),
        vulnerabilityMedium: ExcelUtils.getStringArrayOrEmpty(worksheet, indexR, "Medium", columnMapping),
        vulnerabilityLow: ExcelUtils.getStringArrayOrEmpty(worksheet, indexR, "Low", columnMapping),
      });
    }

    return recommendation;
  }

  /**
   * Process the excel file and create recommendation
   * @param application Name of the application
   * @param path Path to the Excel report
   */
  public async processExcel(application: string, path: string): Promise<OssRecommendation[]> {
    const workbook = new Excel.Workbook();

    try {
      await workbook.xlsx.readFile(path);
    } catch (err) {
      logger.error(`Failed to process the file at: ${path}.`, err);
      throw new Error("Failed to open the excel file.");
    }

    // Verify that the file can be processed
    const tabs = workbook.worksheets.map((x) => x.name);

    if (tabs.includes(HighlightOssService.PORTFOLIO_LEVEL_TAB)) {
      logger.info("Treating a portfolio level Excel.");
      return this.treatPortfolioLevel(workbook);
    } else if (tabs.includes(HighlightOssService.APPLICATION_LEVEL_TAB)) {
      logger.info("Treating a application level Excel.");
      return this.treatApplicationLevel(workbook, application);
    } else {
      // No worksheet has been identified, so throw an error
      throw new Error(
        `Excel report is not correct. Failed to find '${HighlightOssService.APPLICATION_LEVEL_TAB}' or '${HighlightOssService.PORTFOLIO_LEVEL_TAB}'.`
      );
    }
  }

  /**
   * Apply a list of blocker as recommendation in cast imaging
   * @param {string} application Name of the application
   * @param {OssRecommendation[]} blockers List of blockers to apply
   * @return {Promise<OssRecommendation[]>} List of blockers not applied
   */
  public async applyRecommendations(
    blockers: OssRecommendation[],
    taggingType: string
  ): Promise<[OssRecommendation[], OssRecommendation[]]> {
    const returnList: OssRecommendation[] = [];
    const errorList: OssRecommendation[] = [];
    for (const blocker of blockers) {
      try {
        let res: boolean;

        // Process the blockers
        if (taggingType == "tag") {
          res = await this.createTagContains(blocker);
        } else {
          res = await this.createDocumentContains(blocker);
        }

        if (res) returnList.push(blocker);
        else errorList.push(blocker);
      } catch (ignored) {
        returnList.push(blocker);
      }
    }

    return [returnList, errorList];
  }

  /**
   * Create a Document on objects
   * @param blocker Blocker to tag
   * @returns True if the document creation
   */
  protected async createDocumentContains(blocker: OssRecommendation): Promise<boolean> {
    const req = `MATCH (o:\`${blocker.application}\`:Object)
    WHERE o.FullName CONTAINS $Pattern
    return ID(o) as idNode;`;

    // Filter by technos

    const pattern = this.patternByTechnology(blocker);
    const params: any = { Pattern: pattern };
    const res: QueryResult = await HighlightOssService.NEO4JAL.executeWithParameters(req, params);

    // Get nodes ID
    if (!res || res.records.length == 0) return false;

    const idNodes = res.records.map((x) => int(x.get("idNode")).toNumber());

    // Create the document
    const title = this.getBlockerTitle(blocker);
    const description = this.getDescription(blocker);

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
   * Create a pattern based on the component names and the technology
   * @param blocker Blocker
   */
  protected patternByTechnology(blocker: OssRecommendation): string {
    switch (blocker.technology) {
      case "java":
        return blocker.component + ".";
      case "C#":
        return (blocker.component.includes("/") ? blocker.component.split("/")[1] : blocker.component) + ".";
    }
  }

  /**
   * Append vulnerable to the title if contains a CVE
   * @param blocker Blocker to create
   */
  protected getBlockerTitle(blocker: OssRecommendation): string {
    const baseTitle = blocker.component;
    if (blocker.vulnerabilityCritical.length > 0) return "OSS Critical Risk: " + baseTitle;
    if (blocker.vulnerabilityHigh.length > 0) return "OSS High Risk: " + baseTitle;
    if (blocker.vulnerabilityMedium.length > 0) return "OSS Medium Risk: " + baseTitle;
    if (blocker.vulnerabilityLow.length > 0) return "OSS Low Risk: " + baseTitle;

    return "Framework: " + baseTitle;
  }

  /**
   * Create a human friendly description
   * @param blocker Blocker
   * @returns
   */
  private getDescription(blocker: OssRecommendation): string {
    const total =
      blocker.vulnerabilityCritical.length +
      blocker.vulnerabilityHigh.length +
      blocker.vulnerabilityMedium.length +
      blocker.vulnerabilityLow.length;
    let description = `This open-source component contains ${total} well known vulnerabilities.\n`;

    if (blocker.vulnerabilityCritical.length > 0)
      description +=
        `${blocker.vulnerabilityCritical.length} CVEs with a critical risk : ` +
        blocker.vulnerabilityCritical.join(", ") +
        ".\n";
    if (blocker.vulnerabilityHigh.length > 0)
      description +=
        `${blocker.vulnerabilityHigh.length} CVEs with a high risk : ` + blocker.vulnerabilityHigh.join(", ") + ".\n";
    if (blocker.vulnerabilityMedium.length > 0)
      description +=
        `${blocker.vulnerabilityMedium.length} CVEs with a medium risk : ` +
        blocker.vulnerabilityMedium.join(", ") +
        ".\n";
    if (blocker.vulnerabilityLow.length > 0)
      description +=
        `${blocker.vulnerabilityLow.length} CVEs with a low risk : ` + blocker.vulnerabilityLow.join(", ") + ".\n";

    return description;
  }

  /**
   * Create a tag on objects
   * @param blocker Blocker to tag
   * @returns True if the tag creation worked
   */
  protected async createTagContains(blocker: OssRecommendation): Promise<boolean> {
    const req = `MATCH (o:\`${blocker.application}\`:Object)
    WHERE o.FullName CONTAINS $Pattern
    SET o.Tags = CASE WHEN o.Tags IS NULL THEN [$tag] ELSE [ x in o.Tags WHERE NOT x=$tag ] + $tag END
    return o as node;`;

    // Filter by techno
    const pattern = this.patternByTechnology(blocker);
    const params: any = {
      Pattern: pattern,
      tag: this.getBlockerTitle(blocker),
    };

    // Create file
    const tag = this.getBlockerTitle(blocker);
    const reqWrite = `MATCH (o:\`${blocker.application}\`:Object)
    WHERE o.FullName CONTAINS ${pattern} 
    SET o.Tags = CASE WHEN o.Tags IS NULL THEN ['${tag}'] ELSE [ x in o.Tags WHERE NOT x='${tag}' ] + '${tag}' END
    return o as node;`;

    const res: QueryResult = await HighlightOssService.NEO4JAL.executeWithParameters(req, params);

    return res && res.records.length > 0;
  }

  /**
   * Test a blocker
   * @param {Blocker} blocker Blocker to test
   * @returns True if the test is successful, False otherwise
   */
  public async testRecommendation(blocker: OssRecommendation): Promise<boolean> {
    try {
      const req = `MATCH (o:\`${blocker.application}\`:Object) 
 WHERE p.FullName STARTS WITH $OssRecommendation
  return o as node LIMIT 1;`;

      // Get root
      let root: string;
      if (blocker.component.includes(":")) {
        root = blocker.component.split(":")[0];
      } else {
        root = blocker.component;
      }

      const params: any = { file: root };
      const res: QueryResult = await HighlightOssService.NEO4JAL.executeWithParameters(req, params);
      if (!res || res.records.length == 0) return true;
      else return false;
    } catch (ignored) {
      return false;
    }
  }
}
