/* eslint-disable max-len */
import { Neo4JAccessLayer } from "@database/Neo4jAccessLayer";
import { logger } from "@shared/Logger";
import Excel from "exceljs";
import { file } from "find";
import { QueryResult } from "neo4j-driver";
import CloudBlocker from "./CloudBlocker";

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

    if (
      !workbook.worksheets
        .map((x) => x.name)
        .includes(HighlightService.CLOUD_WORKSHEET)
    ) {
      throw new Error(
        `Excel report is not correct. Failed to find ${HighlightService.CLOUD_WORKSHEET}.`
      );
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
      const requirement = worksheet.getCell(
        startingTableIndexR,
        startingTableIndexC
      ).text;
      const blocker = worksheet.getCell(
        startingTableIndexR,
        startingTableIndexC + 1
      ).text;
      const technology = worksheet.getCell(
        startingTableIndexR,
        startingTableIndexC + 2
      ).text;
      const file = worksheet.getCell(
        startingTableIndexR,
        startingTableIndexC + 3
      ).text;

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
   * Apply a list of blocker as recommendation in cast imaging
   * @param {string} application Name of the application
   * @param {CloudBlocker[]} blockers List of blockers to apply
   * @return {Promise<number>} the number of modification 
   */
  public async applyRecommendations(blockers: CloudBlocker[]) : Promise<number> {

    

    let numResults = 0;
    for (const blocker of blockers) {
        const req = `MATCH (p:ObjectProperty)<-[r]-(o:\`${blocker.application}\`:Object) 
    WHERE p.Description='File' AND r.value CONTAINS $file
    WITH o as o LIMIT 1 
    SET o.Tags = CASE WHEN o.Tags IS NULL THEN [$tag] ELSE o.Tags + $tag END
    return o as node;`;

        const params: any =  { file: blocker.file, tag: blocker.file };
        const res:QueryResult = await HighlightService.NEO4JAL.executeWithParameters(req, params);
        if(res && res.records.length > 0) numResults++;
    }

    return numResults;

  }
}
