/* eslint-disable max-len */
import { Neo4JAccessLayer } from "@database/Neo4jAccessLayer";
import { logger } from "@shared/Logger";
import { Node } from "neo4j-driver";
import SDKResources from "./SDKResources";
import Technology from "./Technology";

/**
 * Related to all the operations on the application
 */
export default class SDKTechnology {
  private static neo4jAccessLayer = Neo4JAccessLayer.getInstance();
  private static sdkResources = SDKResources.getInstance();

  /**
   * Find all the objects matching a specific technology in the application
   * @param application Name of the application
   * @param technology Technology to search
   * @returns The list of objects matching the technology
   */
  public static async getObjectsByTechnology(application: string, technology: Technology): Promise<Node[]> {
    const req = `MATCH (o:Object:\`${application}\`) WHERE o.Type in $typeList RETURN o as node`;

    try {
      const res = await this.neo4jAccessLayer.executeWithParameters(req, { typeList: technology.imaging.type });
      if (!res || res.records.length == 0) return [];
      return res.records.map((x) => x.get("node") as Node);
    } catch (err) {
      logger.error(`Failed to get the technologies in the application.`, err);
      throw err;
    }
  }

  /**
   * Find all the levels matching a specific technology in the application
   * @param application Name of the application
   * @param technology Technology to search
   * @returns The list of levels matching the technology
   */
  public static async getLevelsByTechnology(application: string, technology: Technology): Promise<Node[]> {
    const req = `MATCH (o:Object:\`${application}\`)<-[:Aggregates]-(l:Level5) WHERE o.Type in $typeList RETURN l as node`;

    try {
      const res = await this.neo4jAccessLayer.executeWithParameters(req, { typeList: technology.imaging.type });
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
  public static async getTechnologiesByCategory(application: string, category: string): Promise<Technology[]> {
    try {
      const databasesList = this.sdkResources.getTechnologiesByCategories(category);
      const matchedDatabase = [];

      let res;
      // Parse database list in the application
      for (const db of databasesList) {
        res = await this.getObjectsByTechnology(application, db);
        if (res && res.length > 0) {
          matchedDatabase.push(db);
        }
      }

      return matchedDatabase;
    } catch (err) {
      logger.error(`Failed to get the list of technologies flagged as '${category}''.`, err);
      throw err;
    }
  }

  /**
   * Get the id of the databases in the application
   * Warning this is a costly operation
   * @param application Name of the application
   * @returns The id of
   */
  public static getDatabasesListAsString(application: string): Promise<Technology[]> {
    return this.getTechnologiesByCategory(application, "database");
  }
}
