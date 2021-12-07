import Excel from "exceljs";

export default class ExcelUtils {
  /**
   *  Map the header of the file
   * @param worksheet Worksheet to explore
   * @param x X coord
   * @param y Y coord
   * @returns Return a bind of the cols
   */
  public static mapColumnTitle(worksheet: Excel.Worksheet, x: number, y: number): Map<string, number> {
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
  public static getValueOrEmpty(
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
  public static getStringArrayOrEmpty(
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
  public static findStartCoord(worksheet: Excel.Worksheet, value: string): [number, number] {
    let startingTableIndexR = 1;
    let startingTableIndexC = 1;

    // Search in the table
    search_loop: for (let indexR = 1; indexR <= 100; indexR++) {
      try {
        for (let indexC = 1; indexC <= worksheet.actualColumnCount; indexC++) {
          const element = worksheet.getCell(indexR, indexC);
          if (element.text == value) {
            startingTableIndexC = indexC;
            startingTableIndexR = indexR;
            break search_loop; // Break entire loop since index was found
          }
        }
      } catch (ignored) {
        // Failed to get a cel value
      }
    }

    return [startingTableIndexR, startingTableIndexC];
  }
}
