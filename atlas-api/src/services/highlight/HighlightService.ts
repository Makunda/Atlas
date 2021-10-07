/* eslint-disable max-len */
import { Neo4JAccessLayer } from "@database/Neo4JAccessLayer";
import ObjectDocumentNode from "@entities/Imaging/Documents/ObjectDocumentNode";
import { logger } from "@shared/Logger";
import Excel from "exceljs";
import { int, QueryResult } from "neo4j-driver";
import CloudBlocker from "../../interfaces/highlight/recommendations/CloudBlocker";

export default class HighlightService {
  private static NEO4JAL: Neo4JAccessLayer = Neo4JAccessLayer.getInstance();
  private static CLOUD_WORKSHEET = "CloudReady Improvement";
  private static INDEX_TABLE_COL_NAME = "Cloud Requirement";

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

    if (!workbook.worksheets.map((x) => x.name).includes(HighlightService.CLOUD_WORKSHEET)) {
      throw new Error(`Excel report is not correct. Failed to find '${HighlightService.CLOUD_WORKSHEET}' tab.`);
    }

    const worksheet = workbook.getWorksheet(HighlightService.CLOUD_WORKSHEET);

    let found = false;
    let startingTableIndexR = 0;
    let startingTableIndexC = 0;

    // Search in the first 15 x 15 zone
    search_loop: for (let indexR = 1; indexR < worksheet.actualRowCount; indexR++) {
      for (let indexC = 1; indexC < worksheet.actualColumnCount; indexC++) {
        const element = worksheet.getCell(indexR, indexC);
        if (String(element.text) == HighlightService.INDEX_TABLE_COL_NAME) {
          startingTableIndexC = indexC;
          startingTableIndexR = indexR;
          found = true;
          break search_loop; // Break entire loop since index was found
        }
      }
    }

    if (!found) {
      throw new Error(
        `The excel file is not valid. Missing ${HighlightService.INDEX_TABLE_COL_NAME} table in worksheet ${HighlightService.CLOUD_WORKSHEET}`
      );
    }

    const blockerList: CloudBlocker[] = [];
    // While values are found in the column
    let valid = true;
    do {
      startingTableIndexR++;
      const requirement = worksheet.getCell(startingTableIndexR, startingTableIndexC).text;
      const blocker = worksheet.getCell(startingTableIndexR, startingTableIndexC + 1).text;
      const technology = worksheet.getCell(startingTableIndexR, startingTableIndexC + 2).text;
      const file = worksheet.getCell(startingTableIndexR, startingTableIndexC + 3).text;

      // If end of the table is reached
      if (requirement == "") {
        valid = false;
      } else {
        blockerList.push({
          application: application,
          requirement: requirement,
          blocker: blocker,
          technology: technology,
          file: file,
        });
      }
    } while (valid);

    return blockerList;
  }

  /**
   * Apply a recommendation for an application as a tag
   * @param blocker Blocker to apply
   */
  private async applyTag(blocker: CloudBlocker): Promise<boolean> {
    try {
      const req = `MATCH (p:ObjectProperty)<-[r]-(o:\`${blocker.application}\`:Object) 
    WHERE p.Description='File' AND r.value ENDS WITH $file 
    WITH o as o LIMIT 1 
    SET o.Tags = CASE WHEN o.Tags IS NULL THEN [$tag] ELSE [ x in o.Tags WHERE NOT x=$tag ] + $tag END
    return o as node;`;

      const params: any = { file: blocker.file, tag: `Cloud Blocker : ${blocker.blocker}` };
      const res: QueryResult = await HighlightService.NEO4JAL.executeWithParameters(req, params);
      return res && res.records.length > 0;
    } catch (ignored) {
      return false;
    }
  }

  /**
   * Apply a recommendation for an application as a document
   * @param blocker Blocker to apply
   */
  private async applyDocument(blocker: CloudBlocker): Promise<boolean> {
    const req = `MATCH (p:ObjectProperty)<-[r]-(o:\`${blocker.application}\`:Object) 
    WHERE p.Description='File' AND r.value ENDS WITH $file 
    WITH o as o LIMIT 1 
    return ID(o) as idNode;`;

    const params: any = { file: blocker.file, tag: blocker.blocker };
    const res: QueryResult = await HighlightService.NEO4JAL.executeWithParameters(req, params);

    // Get nodes ID
    if (!res || res.records.length == 0) return false;

    const idNodes = res.records.map((x) => int(x.get("idNode")).toNumber());

    // Create the document
    const title = `Cloud Blocker : ${blocker.blocker}`;
    const description = `The implementation of these objects contains patterns that prevent the migration of the application to a PAAS platform. 
    It is necessary to refactor these objects before a migration.
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
  public async applyRecommendations(
    blockers: CloudBlocker[],
    taggingType: string
  ): Promise<[CloudBlocker[], CloudBlocker[]]> {
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
      const res: QueryResult = await HighlightService.NEO4JAL.executeWithParameters(req, params);
      if (!res || res.records.length == 0) return true;
      else return false;
    } catch (ignored) {
      return false;
    }
  }
}
