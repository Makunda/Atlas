import ObjectDocumentNode from "@entities/Imaging/Documents/ObjectDocumentNode";
import { int, QueryResult } from "neo4j-driver";
import ABinder from "./ABinder";

export default class FilepathBinder extends ABinder {
  public type: string;
  /**
   * Create a pattern based on the file path of the objects
   * @param patterns Pattern matching the full name
   * @param tag Tag to apply
   */
  public async createTag(patterns: string[], tag: string): Promise<boolean> {
    // Request to create the tag
    const request = `MATCH (o:\`${this.application}\`:Object)-[r]->(p:ObjectProperty)
    WHERE p.Description="File" AND ANY(x IN $Patterns WHERE  r.Value CONTAINS x )
    SET o.Tags = CASE WHEN o.Tags IS NULL THEN [$tag] ELSE [ x in o.Tags WHERE NOT x=$tag ] + $tag END
    return o as node;`;

    // Parameters init
    const params: any = {
      Patterns: patterns,
      tag: tag,
    };

    try {
      const results = await this.NEO4JAL.execute(request, params);
      return results.records && results.records.length > 0;
    } catch (err) {
      this.logError(`[Tag] Failed to bind the patterns [${patterns.join(", ")}].`, err);
      return false;
    }
  }

  /**
   * Create a document and bind it to the matched pattern
   * @param patterns Pattern to identify
   * @param title Title to apply
   * @param description Description
   * @returns True of the document has been created, false otherwise
   */
  public async createDocument(patterns: string[], title: string, description: string): Promise<boolean> {
    // Request to get the list of nodes to match
    const requestID = `MATCH (o:\`${this.application}\`:Object)-[r]->(p:ObjectProperty)
    WHERE p.Description="File" ANY(x IN $Patterns WHERE  r.Value CONTAINS x )
    return ID(o) as idNode;`;

    // Filter by techno
    const params: any = { Patterns: patterns };
    const res: QueryResult = await this.NEO4JAL.execute(requestID, params);

    // Get the list of node ID or return false
    if (!res || res.records.length == 0) return false;
    const idNodes = res.records.map(x => int(x.get("idNode")).toNumber());

    // Create the document
    try {
      const doc = new ObjectDocumentNode(this.application, title, description, idNodes);
      await doc.create();
      return true;
    } catch (err) {
      this.logError(`[Document] Failed to bind the pattern [${patterns.join(", ")}].`, err);
      return false;
    }
  }

  /**
   * Constructor
   * @param application Name of the application
   */
  public constructor(application: string) {
    super(application);
    this.type = "Filepath";
  }
}
