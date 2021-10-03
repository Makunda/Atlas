/* eslint-disable max-len */
import { Neo4jError } from "neo4j-driver";
import DocumentNode, { DocumentType } from "./DocumentNode";

/**
 * Document for objects in the application
 */
export default class ObjectDocumentNode extends DocumentNode {
  /**
   * Convert Neo4j ID to AIP Id
   * @param nodesId Node ID to convert to AIPid
   */
  private async convertIDNodeToAIP(nodesId: number[]): Promise<string[]> {
    const idList = [];
    const req = `MATCH (o:\`${this.application}\`:Object) 
      WHERE ID(o)=$idNode 
      RETURN o.AipId as AipId`;

    let results;
    for (const id of nodesId) {
      try {
        results = await DocumentNode.NEO4J_ACCESS_LAYER.executeWithParameters(req, {
          idNode: id,
        });

        if (results && results.records.length > 0) idList.push(String(results.records[0].get("AipId")));
      } catch (ignored) {
        // ignored
      }
    }

    return idList;
  }

  /**
   * Create a document and attach it to the object in the application
   */
  public async create() {
    let results;
    // Define the parameters for the rest of the function
    const params: any = Object.assign({}, this);

    // Create a set to make sure there is no duplicate in the node list
    const nodeAIPList = new Set<string>();
    (await this.convertIDNodeToAIP(this.nodes)).forEach((x) => nodeAIPList.add(x));

    // Verify no document exists in the application with the same title
    const reqFind =
      `MATCH (o:\`${this.application}\`:${DocumentNode.DOCUMENT_LABEL}) ` +
      "WHERE o.Title=$title AND o.ViewType=$ViewType RETURN o.Nodes as nodes LIMIT 1";

    try {
      results = await DocumentNode.NEO4J_ACCESS_LAYER.executeWithParameters(reqFind, params);

      // If results then merge the nodes
      if (results.records && results.records.length > 0) {
        for (const o of results.records[0].get("nodes")) {
          nodeAIPList.add(o as string);
        }
      }
    } catch (err) {
      throw new Neo4jError("Failed to find a similar document. The request threw an exception : " + err);
    }

    // We now have a set of unique values
    // Create the document
    await this.createNode(
      Array.from(nodeAIPList).filter((n) => n),
      "AipId"
    );
  }

  constructor(application: string, title: string, description: string, nodes: number[]) {
    super(application, title, description, nodes, DocumentType.OBJECT);
  }
}
