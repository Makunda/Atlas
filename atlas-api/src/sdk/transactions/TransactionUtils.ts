import { Neo4JAccessLayer } from "@database/Neo4JAccessLayer";
import { wrapLogger } from "@shared/Logger";
import { int, Node } from "neo4j-driver";
import TransactionNode from "./interface/TransactionNode";

/**
 * SDK for the Transaction
 */
export default class TransactionUtils {

  private static neo4jAl: Neo4JAccessLayer = Neo4JAccessLayer.getInstance();
  private static logger = wrapLogger("SDK TransactionUtils Graph");

  /**
   * Find a transaction using its ID
   * @param id Id of the transaction
   * @returns Promise returning the transaction
   */
  public static async findById(id: number): Promise<Node> {
    try {
      const req = "MATCH (d:Transaction) WHERE ID(d)=$id RETURN d as tran";
      const results = await this.neo4jAl.execute(req, { id: id });
      if (!results || results.records.length == 0) throw new Error("No transaction graph returned");
      return results.records[0].get("tran");
    } catch (e) {
      this.logger.error(`Failed to retrieve the Transaction with id [${id}]`, e);
      throw new Error("Failed to get the TransactionUtils.");
    }
  }

  /**
   * Find a TransactionUtils using its ID
   * @param id Id of the TransactionUtils
   * @param name New name
   * @param fullName New full name
   * @returns Promise returning the TransactionUtils
   */
  public static async renameById(id: number, name: string, fullName: string): Promise<Node> {
    try {
      const req = "MATCH (d:Transaction) WHERE ID(d)=$id " +
        "WITH d " +
        "SET d.Name=$name " +
        "SET d.FullName=$fullName" +
        "RETURN d as tran";
      const results = await this.neo4jAl.execute(req, { id: id, name: name, fullName: fullName });
      if (!results || results.records.length == 0) throw new Error("No transaction returned");
      return results.records[0].get("tran");
    } catch (e) {
      this.logger.error(`Failed to rename the transaction with id [${id}]`, e);
      throw new Error("Failed to rename the transaction.");
    }
  }

  /**
   * Find nodes linked to a TransactionUtils using its ID
   * @param id Id of the TransactionUtils
   * @returns Promise returning the TransactionUtils
   */
  public static async findTransactionNodesById(id: number): Promise<Node[]> {
    try {
      const req = "MATCH (d:Transaction) WHERE ID(d)=$id " +
        "WITH d " +
        "MATCH (d)-[:Contains]->(c) " +
        "RETURN DISTINCT c as obj";
      const results = await this.neo4jAl.execute(req, { id: id });
      if (!results || results.records.length == 0) return [];
      return results.records.map(x => x.get("obj") as Node);
    } catch (e) {
      this.logger.error(`Failed to retrieve nodes attached to the Transaction with id [${id}]`, e);
      throw new Error("Failed to get nodes attached to the TransactionUtils.");
    }
  }


  /**
   * Find the size of the transaction
   * @param id Id of the TransactionUtils
   * @returns Promise returning the TransactionUtils
   */
  public static async findTransactionSizeById(id: number): Promise<number> {
    try {
      const req = "MATCH (d:Transaction) WHERE ID(d)=$id " +
        "WITH d " +
        "MATCH (d)-[:Contains]->(c) " +
        "RETURN COUNT(DISTINCT c) as size";
      const results = await this.neo4jAl.execute(req, { id: id });
      if (!results || results.records.length == 0) return 0;
      return int(results.records[0].get("size")).toNumber();
    } catch (e) {
      this.logger.error(`Failed to retrieve the size of the transaction with id [${id}]`, e);
      throw new Error("Failed to retrieve the size of the transaction.");
    }
  }

  /**
   * Find nodes linked to a TransactionUtils using its ID and delete the link
   * @param id Id of the data call graph
   * @param toDetach List of nodes to detach
   * @returns Promise returning the data call graph
   */
  public static async removeNodesById(id: number, toDetach: number[]): Promise<void> {
    try {
      const req = "MATCH (d:Transaction) WHERE ID(d)=$id " +
        "WITH d " +
        "MATCH (d)-[r:Contains]->(c) WHERE ID(c) IN $toDetach " +
        "DELETE r";
      await this.neo4jAl.execute(req, { id: id, toDetach: toDetach });
    } catch (e) {
      this.logger.error(`Failed to detach nodes in the Transaction with id [${id}]`, e);
      throw new Error("Failed to detach nodes in the TransactionUtils.");
    }
  }

  /**
   * Find and return the starting node
   * @param id ID of the transaction
   * @returns Promise returning the start node of the transaction
   */
  public static async findStartNodeById(id: number): Promise<Node> {
    try {
      const req = "MATCH (d:Transaction)-[:StartsWith]->(dn:TransactionNode) WHERE ID(d)=$id " +
        "RETURN dn as startNode";
      const results = await this.neo4jAl.execute(req, { id: id });
      if (!results || results.records.length == 0) throw new Error("No TransactionUtils start node returned");
      return results.records[0].get("startNode");
    } catch (e) {
      this.logger.error(`Failed to retrieve the start of transaction with id [${id}]`, e);
      throw new Error("Failed to get the start node of the transaction.");
    }
  }

  /**
   * Find and return the ending node
   * @param id ID of the transaction
   * @returns Promise returning the end node of the transaction
   */
  public static async findEndNodeById(id: number): Promise<Node> {
    try {
      const req = "MATCH (d:Transaction)-[:EndsWith]->(dn:TransactionNode) WHERE ID(d)=$id " +
        "RETURN dn as endNode";
      const results = await this.neo4jAl.execute(req, { id: id });
      if (!results || results.records.length == 0) throw new Error("No TransactionUtils end node returned");
      return results.records[0].get("endNode");
    } catch (e) {
      this.logger.error(`Failed to retrieve the transaction with id [${id}]`, e);
      throw new Error("Failed to get the end node of the transaction.");
    }
  }

  /**
   * Convert the node to a dataclass graph if applicable
   * @param n1 Node to convert
   */
  public static convertNode(n1: Node): TransactionNode {
    if (!n1.labels.includes("Transaction")) throw new Error("Failed to convert the node.");
    return {
      id: n1.identity.toNumber(),
      labels: n1.labels,
      aipId: String(n1.properties.AipId || ""),
      name: String(n1.properties.Name || ""),
      fullName: String(n1.properties.FullName || ""),
    } as TransactionNode;
  }


}