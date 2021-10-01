import { Neo4JAccessLayer } from "@database/Neo4jAccessLayer";
import path from "path";
import * as fs from "fs";

class ExportService {
  private neo4jAl: Neo4JAccessLayer = Neo4JAccessLayer.getInstance();

  /**
   * Generate a zip file containing the data of Paris. And return the path to it
   * @return The path of the generated file
   */
  public async exportParisData(): Promise<string> {
    const timestamp = String(new Date().getTime());
    const fileName = `ParisExport_${timestamp}`;

    const appDir = path.dirname(require.main.filename);
    const pathToTemp = appDir + "/temp";

    // Create the folder if it doesn't exist
    if (!fs.existsSync(pathToTemp)) {
      fs.mkdirSync(pathToTemp);
    }

    const req = "CALL paris.export.all($path, $filename)";
    const params = { path: pathToTemp, filename: fileName };

    const res = await this.neo4jAl.executeWithParameters(req, params);

    // Grab the path returned by the procedure
    if (!res.records || res.records.length == 0) {
      throw new Error("Failed to generate the export zip file.");
    }

    // Return the path created
    return String(res.records[0].get(0));
  }
}

export default ExportService;
