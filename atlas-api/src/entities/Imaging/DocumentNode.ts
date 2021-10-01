import { Neo4JAccessLayer } from "@database/Neo4jAccessLayer";
import { int, Neo4jError } from "neo4j-driver";
import { uuidv4 } from "@utils/utils";

/**
 * Create a document 
 * 
 * Structure in Neo4j
 *   

  }
 */
export default class DocumentNode {
  private static NEO4J_ACCESS_LAYER = Neo4JAccessLayer.getInstance();
  private static DOCUMENT_LABEL = "Document";

  application: string;
  description: string;
  viewID: string;
  theme: number;
  title: string;
  id: string;
  viewType: string;
  nodes: number[];
  tags: string[];
  viewName: string;

  /**
   *
   * @param application Application of the document
   * @param title Title of the document
   * @param description Description of the document
   * @param nodes List of node ID (AIP ID) linked to the document
   */
  constructor(application: string, title: string, description: string, nodes: number[]) {
    this.application = application;
    this.title = title;
    this.description = description.replace("\n", "");
    this.nodes = nodes;

    this.id = uuidv4();
  }

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
   * Create a new document
   * @throws An exception if no nodes were specified
   */
  public async create() {
    if (this.nodes.length == 0) throw Error("Cannot  create a document without linked nodes.");

    const nodeAIPList = await this.convertIDNodeToAIP(this.nodes);

    // Verify no document exists in the application with the same title

    // Create document
    const req = `MERGE (o:\`${this.application}\`:${DocumentNode.DOCUMENT_LABEL} {
      Title: $title
    })
    SET o.Description=$description
    SET o.Id=$id
    SET o.ViewType='Object'
    SET o.ViewID=''
    SET o.ViewName=''
    SET o.Nodes=$nodeAIPList
    SET o.Tags=[]
    SET o.Theme=12
    return ID(o) as idNode;`;

    let results;
    const params: any = Object.assign({}, this);
    params.nodeAIPList = nodeAIPList;
    try {
      results = await DocumentNode.NEO4J_ACCESS_LAYER.executeWithParameters(req, params);
    } catch (err) {
      throw new Neo4jError("Failed to create a document. The request threw an exception : " + err);
    }

    if (results && results.records.length > 0) {
      // Attach objects
      const idDoc = int(results.records[0].get("idNode")).toNumber();
      const reqNodes = `MATCH (o:Object:\`${this.application}\`) 
      WHERE o.AipId=$idNode
      WITH o as nodeToLink
      MATCH (d:\`${this.application}\`:${DocumentNode.DOCUMENT_LABEL})
      WHERE ID(d)=$idDoc
      MERGE (nodeToLink)-[:ContainsDocument]->(d)
      `;

      // Node ID
      for (const nodeId of nodeAIPList) {
        try {
          await DocumentNode.NEO4J_ACCESS_LAYER.executeWithParameters(reqNodes, {
            idNode: nodeId,
            idDoc: idDoc,
          });
        } catch (err) {
          // ignored
        }
      }
    } else {
      throw new Neo4jError("Failed to create a document. The request returned no results.");
    }
  }
}
