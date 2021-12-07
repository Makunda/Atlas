/* eslint-disable max-len */
import DocumentNode, { DocumentType } from "./DocumentNode";

/**
 * Document for levels in the application
 */
export default class SubsetDocumentNode extends DocumentNode {
  private architectureName: string;

  constructor(application: string, architectureName: string, title: string, description: string, nodes: number[]) {
    super(application, title, description, nodes, DocumentType.LEVEL);
    this.architectureName = architectureName;
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
    (await this.convertIDNodeToName(this.nodes)).forEach(x => nodeAIPList.add(x));

    // Verify no document exists in the application with the same title
    const reqFind =
      `MATCH (o:\`${this.application}\`:${DocumentNode.DOCUMENT_LABEL}) ` +
      "WHERE o.Title=$title AND o.ViewType=$viewType RETURN o.Nodes as nodes LIMIT 1";

    try {
      results = await DocumentNode.NEO4J_ACCESS_LAYER.executeWithParameters(reqFind, params);

      // If results then merge the nodes
      if (results.records && results.records.length > 0) {
        for (const o of results.records[0].get("nodes")) {
          nodeAIPList.add(o as string);
        }
      }
    } catch (err) {
      throw new Error("Failed to find a similar document. The request threw an exception : " + err);
    }

    // We now have a set of unique values
    // Create the document
    const idDoc = await this.createNode(
      Array.from(nodeAIPList).filter(n => n),
      "Name",
    );

    // Link the document to all the levels in the application
    // Todo : it might introduce bugs in the application, but that's how cast is implemented
    const reqLink =
      `MATCH (o:\`${this.application}\`:${DocumentNode.DOCUMENT_LABEL}) ` +
      "WHERE ID(o)=$idNode " +
      "WITH o " +
      `MATCH (a:ArchiModel:\`${this.application}\`)-[]->(l:Subset:\`${this.application}\`) WHERE a.Name=$archiName ` +
      "MERGE (l)-[:ContainsDocument]->(o)";

    await DocumentNode.NEO4J_ACCESS_LAYER.executeWithParameters(reqLink, {
      idNode: idDoc,
      archiName: this.architectureName,
    });
  }

  /**
   * Convert Neo4j ID to Level Name
   * @param nodesId Node ID to convert to Level 5 Name
   */
  private async convertIDNodeToName(nodesId: number[]): Promise<string[]> {
    const idList = [];
    const req = `MATCH (o:\`${this.application}\`:Subset) 
      WHERE ID(o)=$idNode 
      RETURN o.Name as name`;

    let results;
    for (const id of nodesId) {
      try {
        results = await DocumentNode.NEO4J_ACCESS_LAYER.executeWithParameters(req, {
          idNode: id,
        });

        if (results && results.records.length > 0) idList.push(String(results.records[0].get("name")));
      } catch (ignored) {
        // ignored errors
      }
    }

    return idList;
  }
}
