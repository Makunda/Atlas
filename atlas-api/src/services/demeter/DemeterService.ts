import { Neo4JAccessLayer } from "@database/Neo4JAccessLayer";
import HttpException from "@exceptions/HttpException";
import { logger } from "@shared/Logger";

class DemeterService {
  private static neo4jAl: Neo4JAccessLayer = Neo4JAccessLayer.getInstance();

  /**
   * Get the version of Demeter
   */
  public static async getVersion(): Promise<string> {
    const req = `CALL demeter.version()`;

    try {
      const val = await DemeterService.neo4jAl.execute(req);
      if (!val.records || val.records.length == 0) {
        logger.error("No version of demeter was sent.");
        throw new HttpException(500, "Internal error");
      }

      return String(val.records[0].get(0));
    } catch (err) {
      logger.error("Failed to verify the installation of Demeter...", err);
      throw new Error("Demeter is not installed.");
    }
  }
}

export default DemeterService;
