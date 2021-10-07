/* eslint-disable max-len */
import { Neo4JAccessLayer } from "@database/Neo4JAccessLayer";
import { logger } from "@shared/Logger";
import SDKResources from "./SDKResources";

export default class SDKUtils {
  private static neo4jAccessLayer = Neo4JAccessLayer.getInstance();

  /**
   * Find all the objects matching a specific list of type in the application
   * @param application Name of the application
   * @param typeList List of type to match
   * @returns The list of objects matching the list of type
   */
  public static async getObjectsByType(application: string, typeList: string[]): Promise<Node[]> {
    if (!application) throw Error("Parameter error: 'application' cannot be a null value or an empty string.");

    const req = `MATCH (o:Object:\`${application}\`) WHERE o.Type in $typeList RETURN o as node`;

    try {
      const res = await this.neo4jAccessLayer.executeWithParameters(req, { typeList: typeList });
      if (!res || res.records.length == 0) return [];
      return res.records.map((x) => x.get("node") as Node);
    } catch (err) {
      logger.error(`Failed to get the technologies in the application.`, err);
      throw err;
    }
  }
}
