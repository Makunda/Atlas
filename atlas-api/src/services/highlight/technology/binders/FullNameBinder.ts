import ObjectDocumentNode from "@entities/Imaging/Documents/ObjectDocumentNode";
import { int, QueryResult } from "neo4j-driver";
import ABinder from "./ABinder";

export default class FullNameBinder extends ABinder {
  public type: string;
  /**
   * Create a pattern based on the full name of the objects
   * @param patterns Pattern matching the full name
   * @param tag Tag to apply
   */
  public async createTag(patterns: string[], tag: string): Promise<boolean> {
    // Request to create the tag
    const request = `MATCH (o:\`${this.application}\`:Object)
    WHERE ANY( x IN $Patterns WHERE o.FullName CONTAINS x )
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
      this.logError(`[Tag] Failed to bind patterns  [${patterns.join(", ")}].`, err);
      return false;
    }
  }

  /**
   * Create a document based on the fullname
   * @param patterns Patterns to match
   * @param title Title of the document
   * @param description Description of the document
   * @returns
   */
  public async createDocument(patterns: string[], title: string, description: string): Promise<boolean> {
    // Request to get the list of nodes to match
    const requestID = `MATCH (o:\`${this.application}\`:Object)
    WHERE ANY( x IN $Patterns WHERE o.FullName CONTAINS x )
    return DISTINCT ID(o) as idNode;`;

    // Filter by technos
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
      this.logError(`[Document] Failed to bind patterns [${patterns.join(", ")}].`, err);
      return false;
    }
  }

  public constructor(application: string) {
    super(application);
    this.type = "FullName";
  }
}
