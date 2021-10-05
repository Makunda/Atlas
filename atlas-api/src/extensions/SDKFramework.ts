/* eslint-disable max-len */
import { Neo4JAccessLayer } from "@database/Neo4jAccessLayer";
import { logger } from "@shared/Logger";
import { Node } from "neo4j-driver";
import Framework from "./Framework";
import SDKResources from "./SDKResources";
import SDKUtils from "./SDKUtils";

/**
 * Related to all the operations on the application
 */
export default class SDKFramework {
  private static neo4jAccessLayer = Neo4JAccessLayer.getInstance();
  private static sdkResources = SDKResources.getInstance();

  /**
   * Find all the levels matching a specific technology in the application
   * @param application Name of the application
   * @param technology Technology to search
   * @returns The list of levels matching the technology
   */
  public static async getLevelsByFramework(application: string, framework: Framework): Promise<Node[]> {
    const req = `MATCH (o:Object:\`${application}\`)<-[:Aggregates]-(l:Level5) WHERE o.Type in $typeList RETURN l as node`;

    try {
      logger.info("Req", req);
      logger.info("Params", { typeList: framework.imaging.type });
      const res = await this.neo4jAccessLayer.executeWithParameters(req, { typeList: framework.imaging.type });
      if (!res || res.records.length == 0) return [];
      return res.records.map((x) => x.get("node") as Node);
    } catch (err) {
      logger.error(`Failed to get the levels in the application.`, err);
      throw err;
    }
  }

  /**
   * Get the ID list of the technologies by category in an application
   * Warning this is a costly operation
   * @param application Name of the application
   * @param category Category of the technology
   * @returns
   */
  public static async getFrameworksByCategory(application: string, category: string): Promise<Framework[]> {
    try {
      const catList = this.sdkResources.getFrameworksByCategories(category);
      const matchedFrameworks = [];

      let res;
      // Parse database list in the application
      for (const el of catList) {
        res = await SDKUtils.getObjectsByType(application, el.imaging.type);
        if (res && res.length > 0) {
          matchedFrameworks.push(el);
        }
      }

      return matchedFrameworks;
    } catch (err) {
      logger.error(`Failed to get the list of frameworks flagged as '${category}''.`, err);
      throw err;
    }
  }

  /**
   * Get the id of the logging frameworks in the application
   * Warning this is a costly operation
   * @param application Name of the application
   * @returns The id of matching frameworks
   */
  public static getLoggingFrameworks(application: string): Promise<Framework[]> {
    return this.getFrameworksByCategory(application, "logging");
  }
}
