import { Neo4JAccessLayer } from "@database/Neo4JAccessLayer";
import { wrapLogger } from "@shared/Logger";
import { int, Node } from "neo4j-driver";
import DataCallGraphNode from "./interface/DataCallGraphNode";
import ImagingNode from "../ImagingNode";

/**
 * SDK for the data call graph
 */
export default class DataCallGraphUtils {

  private static neo4jAl: Neo4JAccessLayer = Neo4JAccessLayer.getInstance();
  private static logger = wrapLogger("SDK DataCall Graph");

  /**
   * Find a Data call graph using its ID
   * @param id Id of the data call graph
   * @returns Promise returning the data call graph
   */
  public static async findById(id: number): Promise<Node> {
    try {
      const req = "MATCH (d:DataGraph) WHERE ID(d)=$id RETURN d as datacall";
      const results = await this.neo4jAl.execute(req, { id: id });
      if (!results || results.records.length == 0) throw new Error("No Data Call graph returned");
      return results.records[0].get("datacall");
    } catch (e) {
      this.logger.error(`Failed to retrieve the Data Call graph with id [${id}]`, e);
      throw new Error("Failed to get the data call graph.");
    }
  }

  /**
   * Find a Data call graph using its ID
   * @param id Id of the data call graph
   * @param name New name
   * @param fullName New full name
   * @returns Promise returning the data call graph
   */
  public static async renameById(id: number, name: string, fullName: string): Promise<Node> {
    try {
      const req = "MATCH (d:DataGraph) WHERE ID(d)=$id " +
        "WITH d " +
        "SET d.Name=$name " +
        "SET d.FullName=$fullName" +
        "RETURN d as datacall";
      const results = await this.neo4jAl.execute(req, { id: id, name: name, fullName: fullName });
      if (!results || results.records.length == 0) throw new Error("No Data Call graph returned");
      return results.records[0].get("datacall");
    } catch (e) {
      this.logger.error(`Failed to rename the Data Call graph with id [${id}]`, e);
      throw new Error("Failed to rename the data call graph.");
    }
  }

  /**
   * Find nodes linked to a Data call graph using its ID
   * @param id Id of the data call graph
   * @returns Promise returning the data call graph
   */
  public static async findDataGraphNodesById(id: number): Promise<Node[]> {
    try {
      const req = "MATCH (d:DataGraph) WHERE ID(d)=$id " +
        "WITH d " +
        "MATCH (d)-[:Contains]->(c) " +
        "RETURN DISTINCT c as obj";
      const results = await this.neo4jAl.execute(req, { id: id });
      if (!results || results.records.length == 0) return [];
      return results.records.map(x => x.get("obj") as Node);
    } catch (e) {
      this.logger.error(`Failed to retrieve  attached to the Data Call graph with id [${id}]`, e);
      throw new Error("Failed to get the nodes attached to the  data call graph.");
    }
  }


  /**
   * Find the size of the data call graph
   * @param id Id of the TransactionUtils
   * @returns Promise returning the TransactionUtils
   */
  public static async findDataGraphSizeById(id: number): Promise<number> {
    try {
      const req = "MATCH (d:DataGraph) WHERE ID(d)=$id " +
        "WITH d " +
        "MATCH (d)-[:Contains]->(c) " +
        "RETURN COUNT(DISTINCT c) as size";
      const results = await this.neo4jAl.execute(req, { id: id });
      if (!results || results.records.length == 0) return 0;
      return int(results.records[0].get("size")).toNumber();
    } catch (e) {
      this.logger.error(`Failed to retrieve the size of the Data Call graph with id [${id}]`, e);
      throw new Error("Failed to retrieve the size of the Data Call graph.");
    }
  }

  /**
   * Find the size of the data call graph
   * @param id Id of the TransactionUtils
   * @returns Promise returning the TransactionUtils
   */
  public static async findDataGraphTypesById(id: number): Promise<string[]> {
    try {
      const req = "MATCH (d:DataGraph) WHERE ID(d)=$id " +
        "WITH d " +
        "MATCH (d)-[:Contains]->(c) " +
        "RETURN DISTINCT c.Type as type";
      const results = await this.neo4jAl.execute(req, { id: id });
      if (!results || results.records.length == 0) return [];

      const types = [] as string[];
      for (const record of results.records) {
        types.push(record.get("type"));
      }

      return types;
    } catch (e) {
      this.logger.error(`Failed to retrieve the types of the Data Call graph with id [${id}]`, e);
      throw new Error("Failed to retrieve the types of the Data Call graph.");
    }
  }


  /**
   * Find nodes linked to a Data call graph using its ID and delete the link
   * @param id Id of the data call graph
   * @param toDetach List of nodes to detach
   * @returns Promise returning the data call graph
   */
  public static async removeNodesById(id: number, toDetach: number[]): Promise<void> {
    try {
      const req = "MATCH (d:DataGraph) WHERE ID(d)=$id " +
        "WITH d " +
        "MATCH (d)-[r:Contains]->(c) WHERE ID(c) IN $toDetach " +
        "DELETE r";
      await this.neo4jAl.execute(req, { id: id, toDetach: toDetach });
    } catch (e) {
      this.logger.error(`Failed to detach nodes in the Data Call graph with id [${id}]`, e);
      throw new Error("Failed to detach nodes in the data call graph.");
    }
  }

  /**
   * Find and return the starting node
   * @param id ID of the data call graph
   * @returns Promise returning the start node of the datacall graph
   */
  public static async findStartNodeById(id: number): Promise<Node> {
    try {
      const req = "MATCH (d:DataGraph)-[:StartsWith]->(dn:DataGraphNode) WHERE ID(d)=$id " +
        "RETURN dn as startNode";
      const results = await this.neo4jAl.execute(req, { id: id });
      if (!results || results.records.length == 0) throw new Error("No Data Call graph start node returned");
      return results.records[0].get("startNode");
    } catch (e) {
      this.logger.error(`Failed to retrieve the start of data call graph with id [${id}]`, e);
      throw new Error("Failed to get the start node of the data call graph.");
    }
  }

  /**
   * Find and return the starting node
   * @param id ID of the data call graph
   * @returns Promise returning the start node of the datacall graph
   */
  public static async findStartingObjectById(id: number): Promise<Node> {
    try {
      const req = "MATCH (d:DataGraph)-[:StartsWith]->(dn:DataGraphNode)-[]->(o) " +
        "WHERE ID(d)=$id " +
        "RETURN dn as startNode";
      const results = await this.neo4jAl.execute(req, { id: id });
      if (!results || results.records.length == 0) throw new Error("No Data Call graph start node returned");
      const node = results.records[0].get("startNode") as Node;

      // If O
      return ImagingNode.getObjectNode(node);

    } catch (e) {
      this.logger.error(`Failed to retrieve the start of data call graph with id [${id}]`, e);
      throw new Error("Failed to get the start node of the data call graph.");
    }
  }

  /**
   * Find and return the ending node
   * @param id ID of the data call graph
   * @returns Promise returning the end node of the datacall graph
   */
  public static async findEndNodeById(id: number): Promise<Node> {
    try {
      const req = "MATCH (d:DataGraph)-[:EndsWith]->(dn:DataGraphNode) WHERE ID(d)=$id " +
        "RETURN dn as endNode";
      const results = await this.neo4jAl.execute(req, { id: id });
      if (!results || results.records.length == 0) throw new Error("No Data Call graph end node returned");
      return results.records[0].get("endNode");
    } catch (e) {
      this.logger.error(`Failed to retrieve the end of data call graph with id [${id}]`, e);
      throw new Error("Failed to get the end node of the data call graph.");
    }
  }

  /**
   * Convert the node to a dataclass graph if applicable
   * @param n1 Node to convert
   */
  public static convertNode(n1: Node): DataCallGraphNode {
    if (!n1.labels.includes("DataGraph")) throw new Error("Failed to convert the node.");
    return {
      id: n1.identity.toNumber(),
      labels: n1.labels,
      aipId: String(n1.properties.AipId || ""),
      name: String(n1.properties.Name || ""),
      fullName: String(n1.properties.FullName || ""),
    } as DataCallGraphNode;
  }
}