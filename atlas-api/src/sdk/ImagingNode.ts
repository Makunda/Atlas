import { Node } from "neo4j-driver";
import { Neo4JAccessLayer } from "@database/Neo4JAccessLayer";
import { wrapLogger } from "@shared/Logger";
import { Direction } from "./Direction";

export default class ImagingNode {

  private static neo4jAl: Neo4JAccessLayer = Neo4JAccessLayer.getInstance();
  private static logger = wrapLogger("SDK Imaging Node");

  /**
   * Check if the node is an object
   * @param n1 Node
   */
  public static isObject(n1: Node) {
    return n1.labels.includes("Object");
  }

  /**
   * Check if the node is an sub object
   * @param n1 Node
   */
  public static isSubObject(n1: Node) {
    return n1.labels.includes("SubObject");
  }

  /**
   * Get the other objects linked to the object
   * @param n1 Node to explore
   * @param direction Direction of the relationship
   * @param types (Optional) List of link types
   */
  public static async getLinkedObjects(n1: Node, direction: Direction, types?: string[]): Promise<Node[]> {
    const relationship = this.getLinkDirection("r", direction);
    const req = `MATCH (o:Object)${relationship}(other:Object) ` +
      "WHERE ID(o)=$id " +
      (types && types.length > 0 ? "AND TYPE(r) IN $types " : "") + // Types
      "RETURN DISTINCT other as node";

    const params = { id: n1.identity.toNumber(), types: types };
    const results = await this.neo4jAl.execute(req, params);

    const nodes = [] as Node[];
    for (const record of results.records) {
      nodes.push(record.get("node") as Node);
    }

    return nodes;
  }

  /**
   * Get the other objects linked to the object
   * @param n1 Node to explore
   * @param direction Direction of the relationship
   * @param types (Optional) List of link types
   */
  public static async getLinkedSubObjects(n1: Node, direction: Direction, types?: string[]): Promise<Node[]> {
    const relationship = this.getLinkDirection("r", direction);
    const req = `MATCH (o:Object)${relationship}(other:SubObject) ` +
      "WHERE ID(o)=$id " +
      (types && types.length > 0 ? "AND TYPE(r) IN $types " : "") + // Types
      "RETURN DISTINCT other as node";

    const params = { id: n1.identity.toNumber(), types: types };
    const results = await this.neo4jAl.execute(req, params);

    const nodes = [] as Node[];
    for (const record of results.records) {
      nodes.push(record.get("node") as Node);
    }

    return nodes;
  }

  /**
   * Get the Object node link to the subObject
   * @param n1 Node to explore
   */
  public static async getObjectNode(n1: Node): Promise<Node> {
    if (this.isObject(n1)) return n1;

    try {
      const req = "MATCH (s:SubObject)-[:BELONGTO]->(o:Object) " +
        "WHERE ID(s)=$id " +
        "RETURN o as object LIMIT 1";
      const results = await this.neo4jAl.execute(req, { id: n1.identity.toNumber() });
      if (!results || results.records.length == 0) throw new Error("No object node returned");
      return results.records[0].get("object");
    } catch (e) {
      this.logger.error("Failed to retrieve object linked", e);
      throw new Error("Failed to retrieve object linked.");
    }

  }

  /**
   * Get the link direction
   * @param relName Name of the relationship
   * @param direction Direction
   * @param type
   * @private
   */
  private static getLinkDirection(relName: string, direction: Direction, type?: string) {
    switch (direction) {
      case Direction.INCOMING:
        return `-[${relName}${type ? ":" + type : ""}]->`;
      case Direction.OUTGOING:
        return `<-[${relName}${type ? ":" + type : ""}]-`;
      case Direction.BOTH:
        return `-[${relName}${type ? ":" + type : ""}]-`;
    }
  }
}