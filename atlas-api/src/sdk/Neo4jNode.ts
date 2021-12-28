import { Neo4JAccessLayer } from "@database/Neo4JAccessLayer";
import { wrapLogger } from "@shared/Logger";
import { Node } from "neo4j-driver";

export default class Neo4jNode {

  private static neo4jAl: Neo4JAccessLayer = Neo4JAccessLayer.getInstance();
  private static logger = wrapLogger("SDK Node");

  /**
   * Duplicate a neo4j node
   * @param id Id of the node to duplicate
   * @param labels Labels to duplicate as a list of string
   */
  public static async duplicateNodeById(id: number, labels: string[]): Promise<Node> {
    try {
      const sLabels = labels.map(x => "`" + x + "`").join(":"); // Wrapped and join
      const reqDuplicate = `MATCH (n:${sLabels}) ` +
        "WHERE ID(n)=$id " +
        "WITH n AS map " +
        `CREATE (copy:${sLabels}) ` +
        "SET copy=map " +
        "RETURN copy as copy ";
      const results = await this.neo4jAl.execute(reqDuplicate, { id: id });
      if (!results || results.records.length == 0) throw new Error("No record was returned");
      return results.records[0].get("copy") as Node;
    } catch (e) {
      this.logger.error("Failed to duplicate te node", e);
      throw new Error("Duplication of the node failed");
    }
  }

  /**
   * Duplicate the node
   * @param n Node to duplicate
   * @returns Promise ending when the node is duplicated
   */
  public static async duplicateNode(n: Node): Promise<Node> {
    const id = n.identity.toNumber();
    const labels: string[] = n.labels;
    return this.duplicateNodeById(id, labels);
  }

  /**
   * Merge a link between two nodes
   * @param n1 Node source
   * @param n2 Node target
   * @param type Type of the relationship
   * @returns Promise ending when the relationship is created
   */
  public static async linkObjects(n1: Node, n2: Node, type: string): Promise<void> {
    try {
      const reqDuplicate = "MATCH (n) WHERE ID(i)=$idSource " +
        "WITH n AS source " +
        "MATCH (target) WHERE  ID(target)=$idTarget " +
        `MERGE (source)-[:\`${type}\`]->(target) `;

      const source = n1.identity.toNumber();
      const end = n2.identity.toNumber();

      await this.neo4jAl.execute(reqDuplicate, { idSource: source, idTarget: end });
    } catch (e) {
      this.logger.error("Failed to link the nodes", e);
      throw new Error("Failed to link the nodes");
    }
  }
}