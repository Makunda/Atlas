/* eslint-disable max-len */
import { Neo4JAccessLayer } from "@database/Neo4JAccessLayer";
import { int } from "neo4j-driver";
import { uuidv4 } from "@utils/utils";

/**
 * Type of document
 */
export enum DocumentType {
  OBJECT = "Object",
  LEVEL = "Level",
}

/**
 * Create a document
 *
 * Structure in Neo4j
 *

 }
 */
export default abstract class DocumentNode {
  protected static NEO4J_ACCESS_LAYER = Neo4JAccessLayer.getInstance();
  protected static DOCUMENT_LABEL = "Document";

  protected application: string;
  protected description: string;
  protected viewID = "";
  protected theme: number;
  protected title: string;
  protected id: string;
  protected viewType = "";
  protected nodes: number[];
  protected tags: string[];
  protected viewName = "";

  /**
   *
   * @param application Application of the document
   * @param title Title of the document
   * @param description Description of the document
   * @param nodes List of node ID (Node ID) linked to the document
   * @param type Type of document you want to create.
   */
  constructor(application: string, title: string, description: string, nodes: number[], type: DocumentType) {
    this.application = application;
    this.title = title;
    this.description = description.replace("\n", "");
    this.nodes = nodes;
    this.viewType = type.toString();
    this.id = uuidv4();
  }

  public abstract create(): Promise<void>;

  /**
   * Create a new document
   * @param nodeList List of nodes to attach to the document
   * @param property The property used to identify the type of nodes you need to merge ( for objects you need to provide "AipId" and for the levels "Name" )
   * @throws An exception if no nodes were specified
   */
  protected async createNode(nodeList: any[], property: string): Promise<number> {
    // Do not create empty documents
    if (nodeList.length == 0) throw Error("Cannot  create a document without linked nodes.");

    // Define the parameters for the rest of the function
    const params: any = Object.assign({}, this);

    // Create document
    const req = `MERGE (o:\`${this.application}\`:${DocumentNode.DOCUMENT_LABEL} {
      Title: $title,
      ViewType: $viewType
    })
    SET o.Description=$description
    SET o.Id=$id
    SET o.ViewID=$viewID
    SET o.ViewName=$viewName
    SET o.Nodes=$nodeList
    SET o.Tags=[]
    SET o.Theme=12
    return ID(o) as idNode;`;

    // Convert set to Neo4j valid type ( array )
    params.nodeList = Array.from(nodeList);

    // Merge a new document on the title and the type to avoid conflict
    let results;

    try {
      results = await DocumentNode.NEO4J_ACCESS_LAYER.executeWithParameters(req, params);
    } catch (err) {
      throw new Error("Failed to create a document. The request threw an exception : " + err);
    }

    if (results && results.records.length > 0) {
      // Attach objects to the created document
      const idDoc = int(results.records[0].get("idNode")).toNumber();
      const reqNodes = `MATCH (o:Object:\`${this.application}\`) 
      WHERE o.${property}=$idNode
      WITH o as nodeToLink
      MATCH (d:\`${this.application}\`:${DocumentNode.DOCUMENT_LABEL})
      WHERE ID(d)=$idDoc
      MERGE (nodeToLink)-[:ContainsDocument]->(d)
      `;

      // Node ID
      for (const nodeId of nodeList) {
        try {
          await DocumentNode.NEO4J_ACCESS_LAYER.executeWithParameters(reqNodes, {
            idNode: nodeId,
            idDoc: idDoc,
          });
        } catch (err) {
          // ignored
        }
      }

      return idDoc;
    } else {
      throw new Error("Failed to create a document. The request returned no results.");
    }
  }
}
