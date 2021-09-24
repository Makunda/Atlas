/* eslint-disable max-len */
import { Neo4JAccessLayer } from "@database/Neo4jAccessLayer";
import DocumentNode from "@entities/Imaging/DocumentNode";
import OssRecommendation from "@interfaces/highlight/recommendations/OssRecommendation";
import { logger } from "@shared/Logger";
import Excel from "exceljs";
import { int, QueryResult } from "neo4j-driver";

/**
 * Service in Charge of the processing of Open source service
 */
export default class HighlightOssService {
  private static NEO4JAL: Neo4JAccessLayer = Neo4JAccessLayer.getInstance();
  private static PORTFOLIO_LEVEL_TAB = "Portfolio-Level Components";
  private static APPLICATION_LEVEL_TAB = "Detected Components";

  private static INDEX_TABLE_COL_NAME = "Component";

  /**
   *  Map the header of the file
   * @param worksheet Worksheet to explore
   * @param x X coord
   * @param y Y coord
   * @returns Return a bind of the cols
   */
  private static mapColumnTitle(
    worksheet: Excel.Worksheet,
    x: number,
    y: number,
  ): Map<string, number> {
    const map = new Map<string, number>();
    let end = false;
    let colName: string;

    let initialCol = y;
    do {
      try {
        colName = worksheet.getCell(x, initialCol).text;
      } catch (ignored) {
        // ignored
      }

      if (colName && colName.length != 0) {
        map.set(colName, initialCol);
        initialCol++;
      } else {
        end = true;
      }
    } while (!end);

    return map;
  }

  /**
   * Get a value in the worksheet as a string, or return an empty string
   * @param worksheet Worksheet
   * @param row Row index
   * @param colName Column name to search
   * @param colMapping
   */
  private static getValueOrEmpty(
    worksheet: Excel.Worksheet,
    row: number,
    colName: string,
    colMapping: Map<string, number>,
  ): string {
    // Verification on the mapping
    if (!colMapping.has(colName)) return "";

    const y = colMapping.get(colName);
    return worksheet.getCell(row, y).text;
  }

  /**
   * Get a value in the worksheet as a string, or return an empty string
   * @param worksheet Worksheet
   * @param row Row index
   * @param colName Column name to search
   * @param colMapping
   */
  private static getStringArrayOrEmpty(
    worksheet: Excel.Worksheet,
    row: number,
    colName: string,
    colMapping: Map<string, number>,
  ): string[] {
    // Verification on the mapping
    if (!colMapping.has(colName)) return [];

    const y = colMapping.get(colName);
    const arrayASstring = worksheet.getCell(row, y).text;

    // Filter empty values / string
    return arrayASstring.split("\n").filter((item) => item);
  }

  /**
   * Find a value in a worksheet
   * @param worksheet Worksheet to parse
   * @param value Value to look for
   * @returns The 2D coords as [row, col]
   */
  private static findStartCoord(
    worksheet: Excel.Worksheet,
    value: string,
  ): [number, number] {
    let startingTableIndexR = 1;
    let startingTableIndexC = 1;

    // Search in the table
    search_loop: for (
      let indexR = 1;
      indexR <= worksheet.actualRowCount;
      indexR++
    ) {
      for (let indexC = 1; indexC <= worksheet.actualColumnCount; indexC++) {
        const element = worksheet.getCell(indexR, indexC);

        if (element.text == value) {
          startingTableIndexC = indexC;
          startingTableIndexR = indexR;
          break search_loop; // Break entire loop since index was found
        }
      }
    }

    return [startingTableIndexR, startingTableIndexC];
  }

  /**
   * Sanitize the component based on the technology
   * @param name Name of the component
   * @param technology Technology of the component
   * @returns [root, info] Return the root and additional information
   */
  private sanitizeComponentName(
    name: string,
    technology: string,
  ): [string, string] {
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
    const worksheet = workbook.getWorksheet(
      HighlightOssService.PORTFOLIO_LEVEL_TAB,
    );

    // Find origin value as starting point
    const [row, col] = HighlightOssService.findStartCoord(worksheet, "Origin");

    // Launch discovery
    const columnMapping: Map<string, number> =
      HighlightOssService.mapColumnTitle(worksheet, row, col);

    // Component	Version	Description	Release Date	Url	License	License Change	Origin	CWEs	CVEs	Applications
    const recommendation: OssRecommendation[] = [];
    // Parse all the lines from the start
    for (let indexR = row; indexR < worksheet.actualRowCount; indexR++) {
      // Sanitize component name
      const component = HighlightOssService.getValueOrEmpty(
        worksheet,
        indexR,
        "Component",
        columnMapping,
      );
      const technology = HighlightOssService.getValueOrEmpty(
        worksheet,
        indexR,
        "Technologies",
        columnMapping,
      );

      const [componentName, info] = this.sanitizeComponentName(
        component,
        technology,
      );
      let description = HighlightOssService.getValueOrEmpty(
        worksheet,
        indexR,
        "Description",
        columnMapping,
      );

      if (info) {
        description = `Additional component's info: ${info}. ` + componentName;
      }

      recommendation.push({
        application: HighlightOssService.getValueOrEmpty(
          worksheet,
          indexR,
          "Applications",
          columnMapping,
        ),
        origin: HighlightOssService.getValueOrEmpty(
          worksheet,
          indexR,
          "Origin",
          columnMapping,
        ),
        component: componentName,
        description: description,
        version: HighlightOssService.getValueOrEmpty(
          worksheet,
          indexR,
          "Version",
          columnMapping,
        ),
        status: "",
        technology: technology,
        link: HighlightOssService.getValueOrEmpty(
          worksheet,
          indexR,
          "Version",
          columnMapping,
        ),
        release: HighlightOssService.getValueOrEmpty(
          worksheet,
          indexR,
          "Release Date",
          columnMapping,
        ),
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
  public treatApplicationLevel(
    workbook: Excel.Workbook,
    application: string,
  ): OssRecommendation[] {
    const worksheet = workbook.getWorksheet(
      HighlightOssService.APPLICATION_LEVEL_TAB,
    );

    // Find origin value as starting point
    const [x, y] = HighlightOssService.findStartCoord(worksheet, "Origin");

    // Launch discovery
    // Origin	Third-Party Component	Status	Technologies	Link	Version	Release Date	Last Version	Last Release Date	Gap	Releases / 12 months	Licenses	Critical	High	Medium	Low

    // Launch discovery
    const columnMapping: Map<string, number> =
      HighlightOssService.mapColumnTitle(worksheet, x, y);

    const recommendation: OssRecommendation[] = [];
    // Parse all the lines from the start
    for (let indexR = x + 1; indexR <= worksheet.actualRowCount; indexR++) {
      // Check if line empty  to avoid inserting empty rows
      const component = HighlightOssService.getValueOrEmpty(
        worksheet,
        indexR,
        "Third-Party Component",
        columnMapping,
      );

      if (component === "") continue;

      const technology = HighlightOssService.getValueOrEmpty(
        worksheet,
        indexR,
        "Technologies",
        columnMapping,
      );

      const [componentName, info] = this.sanitizeComponentName(
        component,
        technology,
      );

      let description = HighlightOssService.getValueOrEmpty(
        worksheet,
        indexR,
        "Description",
        columnMapping,
      );

      if (info) {
        description = `Additional component's info: ${info}. ` + description;
      }

      recommendation.push({
        application: application,
        origin: HighlightOssService.getValueOrEmpty(
          worksheet,
          indexR,
          "Origin",
          columnMapping,
        ),
        component: componentName,
        description: description,
        version: HighlightOssService.getValueOrEmpty(
          worksheet,
          indexR,
          "Version",
          columnMapping,
        ),
        status: HighlightOssService.getValueOrEmpty(
          worksheet,
          indexR,
          "Status",
          columnMapping,
        ),
        technology: technology,
        link: HighlightOssService.getValueOrEmpty(
          worksheet,
          indexR,
          "Link",
          columnMapping,
        ),
        release: HighlightOssService.getValueOrEmpty(
          worksheet,
          indexR,
          "Release Date",
          columnMapping,
        ),
        lastVersion: HighlightOssService.getValueOrEmpty(
          worksheet,
          indexR,
          "Last Version",
          columnMapping,
        ),
        lastRelease: HighlightOssService.getValueOrEmpty(
          worksheet,
          indexR,
          "Last Release Date",
          columnMapping,
        ),
        gap: HighlightOssService.getValueOrEmpty(
          worksheet,
          indexR,
          "Gap",
          columnMapping,
        ),
        releaseFrequency: HighlightOssService.getValueOrEmpty(
          worksheet,
          indexR,
          "Releases / 12 months",
          columnMapping,
        ),
        licenses: HighlightOssService.getStringArrayOrEmpty(
          worksheet,
          indexR,
          "Licenses",
          columnMapping,
        ),
        vulnerabilityCritical: HighlightOssService.getStringArrayOrEmpty(
          worksheet,
          indexR,
          "Critical",
          columnMapping,
        ),
        vulnerabilityHigh: HighlightOssService.getStringArrayOrEmpty(
          worksheet,
          indexR,
          "High",
          columnMapping,
        ),
        vulnerabilityMedium: HighlightOssService.getStringArrayOrEmpty(
          worksheet,
          indexR,
          "Medium",
          columnMapping,
        ),
        vulnerabilityLow: HighlightOssService.getStringArrayOrEmpty(
          worksheet,
          indexR,
          "Low",
          columnMapping,
        ),
      });
    }
    return recommendation;
  }

  /**
   * Process the excel file and create recommendation
   * @param application Name of the application
   * @param path Path to the Excel report
   */
  public async processExcel(
    application: string,
    path: string,
  ): Promise<OssRecommendation[]> {
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
      return this.treatPortfolioLevel(workbook);
    } else if (tabs.includes(HighlightOssService.APPLICATION_LEVEL_TAB)) {
      return this.treatApplicationLevel(workbook, application);
    } else {
      // No worksheet has been identified, so throw an error
      throw new Error(
        `Excel report is not correct. Failed to find '${HighlightOssService.APPLICATION_LEVEL_TAB}' or '${HighlightOssService.PORTFOLIO_LEVEL_TAB}'.`,
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
    taggingType: string,
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
  private async createDocumentContains(
    blocker: OssRecommendation,
  ): Promise<boolean> {
    const req = `MATCH (o:\`${blocker.application}\`:Object)
    WHERE o.FullName CONTAINS $Pattern
    return ID(o) as idNode;`;

    // Filter by technos

    const pattern = this.patternByTechnology(blocker);
    const params: any = { Pattern: pattern };
    const res: QueryResult =
      await HighlightOssService.NEO4JAL.executeWithParameters(req, params);

    // Get nodes ID
    if (!res || res.records.length == 0) return false;

    const idNodes = res.records.map((x) => int(x.get("idNode")).toNumber());

    // Create the document
    const title = this.getBlockerTitle(blocker);
    const description = this.getDescription(blocker);
    const doc = new DocumentNode(
      blocker.application,
      title,
      description,
      idNodes,
    );

    doc.create();

    return true;
  }

  /**
   * Create a pattern based on the component names and the technology
   * @param blocker Blocker
   */
  private patternByTechnology(blocker: OssRecommendation): string {
    switch (blocker.technology) {
      case "java":
        return blocker.component + ".";
      case "C#":
        return (
          (blocker.component.includes("/")
            ? blocker.component.split("/")[1]
            : blocker.component) + "."
        );
    }
  }

  /**
   * Append vulnerable to the title if contains a CVE
   * @param blocker Blocker to create
   */
  private getBlockerTitle(blocker: OssRecommendation): string {
    const baseTitle = blocker.component;
    if (blocker.vulnerabilityCritical.length > 0)
      return "Critical Risk: " + baseTitle;
    if (blocker.vulnerabilityHigh.length > 0) return "High Risk: " + baseTitle;
    if (blocker.vulnerabilityMedium.length > 0)
      return "Medium Risk: " + baseTitle;
    if (blocker.vulnerabilityLow.length > 0) return "Low Risk: " + baseTitle;

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
        `${blocker.vulnerabilityHigh.length} CVEs with a critical risk : ` +
        blocker.vulnerabilityHigh.join(", ") +
        ".\n";
    if (blocker.vulnerabilityMedium.length > 0)
      description +=
        `${blocker.vulnerabilityMedium.length} CVEs with a critical risk : ` +
        blocker.vulnerabilityMedium.join(", ") +
        ".\n";
    if (blocker.vulnerabilityLow.length > 0)
      description +=
        `${blocker.vulnerabilityLow.length} CVEs with a critical risk : ` +
        blocker.vulnerabilityLow.join(", ") +
        ".\n";

    return description;
  }

  /**
   * Create a tag on objects
   * @param blocker Blocker to tag
   * @returns True if the tag creation worked
   */
  private async createTagContains(
    blocker: OssRecommendation,
  ): Promise<boolean> {
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
    const res: QueryResult =
      await HighlightOssService.NEO4JAL.executeWithParameters(req, params);

    console.log(`${res.records.length} for pattern : ${pattern}`);
    return res && res.records.length > 0;
  }

  /**
   * Test a blocker
   * @param {Blocker} blocker Blocker to test
   * @returns True if the test is successful, False otherwise
   */
  public async testRecommendation(
    blocker: OssRecommendation,
  ): Promise<boolean> {
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
      const res: QueryResult =
        await HighlightOssService.NEO4JAL.executeWithParameters(req, params);
      if (!res || res.records.length == 0) return true;
      else return false;
    } catch (ignored) {
      return false;
    }
  }
}
