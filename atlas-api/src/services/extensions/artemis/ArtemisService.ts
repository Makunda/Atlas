import { logger } from "@shared/Logger";
import { Neo4JAccessLayer } from "@database/Neo4JAccessLayer";
import * as fs from "fs";
import path from "path";

class ArtemisService {
  private static neo4jAl: Neo4JAccessLayer = Neo4JAccessLayer.getInstance();

  /**
   * Get the version of Artemis
   */
  public static async getVersion(): Promise<string> {
    const req = "CALL artemis.version()";

    try {
      const val = await this.neo4jAl.execute(req);
      if (!val.records || val.records.length == 0) {
        logger.error("No version of Artemis was sent");
        throw new Error("Failed to get the version.");
      }

      return String(val.records[0].get(0));
    } catch (err) {
      logger.error("Failed to verify the installation of artemis...", err);
      throw new Error("Artemis is not installed.");
    }
  }

  /**
   * Set the Online mode of artemis
   */
  public static async setOnlineMode(value: boolean): Promise<boolean> {
    try {
      const request = "CALL artemis.set.onlineMode($value);";

      const results = await this.neo4jAl.executeWithParameters(request, {
        value: value,
      });
      const newValue: string = results.records[0].get(0);
      const ret = String(newValue);
      return /true/i.test(ret);
    } catch (error) {
      logger.error("Something went wrong trying to change the online mode parameter.", error);
      throw error;
    }
  }

  /**
   * Get the Repository mode of artemis
   * @returns A promise returning the new value of the repo
   */
  public static async getRepositoryMode(): Promise<boolean> {
    const req = "CALL artemis.get.repositoryMode();";

    try {
      const val = await this.neo4jAl.execute(req);
      if (!val.records || val.records.length == 0) {
        logger.error("No version of Artemis was sent");
        throw new Error("Failed to get the version.");
      }

      const ret = String(val.records[0].get(0));
      return /true/i.test(ret);
    } catch (err) {
      logger.error("Failed to verify the installation of artemis...", err);
      throw new Error("Artemis is not installed.");
    }
  }

  /**
   * Set the repository mode of artemis
   */
  public static async setRepositoryMode(value: boolean): Promise<boolean> {
    try {
      const request = "CALL artemis.set.repositoryMode($value);";

      const results = await this.neo4jAl.executeWithParameters(request, {
        value: value,
      });
      const newValue: string = results.records[0].get(0);

      const ret = String(newValue);
      return /true/i.test(ret);
    } catch (error) {
      logger.error("Something went wrong trying to change the repository mode parameter.", error);
      throw error;
    }
  }

  /**
   * Get the Online mode of artemis
   */
  public static async getOnlineMode(): Promise<boolean> {
    const req = "CALL artemis.get.onlineMode();";

    try {
      const val = await this.neo4jAl.execute(req);
      if (!val.records || val.records.length == 0) {
        logger.error("No version of Artemis was sent");
        throw new Error("Failed to get the version.");
      }

      const ret = String(val.records[0].get(0));
      return /true/i.test(ret);
    } catch (err) {
      logger.error("Failed to verify the installation of artemis...", err);
      throw new Error("Artemis is not installed.");
    }
  }

  /**
   * Generate an export of the Framework
   */
  public static async launch_export(): Promise<string> {
    const appDir = path.dirname(require.main.filename);
    const filePath: string = appDir + "/../temp";

    if (!fs.existsSync(filePath)) {
      fs.mkdirSync(filePath);
    }

    const sanitized_path: string = filePath.replace("\\", "\\\\");
    const req = `CALL artemis.api.export.all("${sanitized_path}")`;

    try {
      const val = await this.neo4jAl.execute(req);
      if (!val.records || val.records.length == 0) {
        logger.error("No file path was returned.");
        throw new Error("No file path was returned.");
      }

      // Retrieve the file created
      return String(val.records[0].get(0));
    } catch (err) {
      logger.error("Failed to verify the download the export...", err);
      throw new Error("Failed to verify the download the export.");
    }
  }

  /**
   * Launch import of the frameworks
   * @param filePath
   */
  public static async launch_import(filePath: string): Promise<string> {
    const sanitized_path: string = filePath.replace(/\\/g, "\\\\");
    const req = `CALL artemis.api.import.data("${sanitized_path}")`;

    try {
      const res = await this.neo4jAl.execute(req);
      for (let i = 0; i < res.records.length; i++) {
        logger.info(`Import : ${String(res.records[i].get(0))}`);
      }

      // Retrieve the file created
      return "done";
    } catch (err) {
      logger.error("Failed import the frameworks", err);
      throw new Error("Failed import the frameworks.");
    }
  }
}

export default ArtemisService;
