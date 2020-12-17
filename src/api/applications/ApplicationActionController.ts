import { int, QueryResult } from "neo4j-driver";
import { Neo4JAccessLayer } from "../Neo4jAccessLayer";
import { GroupingController } from "./GroupingController";

export class ApplicationController {
  private static neo4jal: Neo4JAccessLayer = Neo4JAccessLayer.getInstance();

  /**
   * Split application, and merge external nodes aside it
   */
  public static async extractExternalObjects(
    applicationName: string
  ): Promise<string> {
    const request =
      `MATCH (l:Level5:${applicationName})-[:Aggregates]->(obj:Object:HBB) WHERE obj.External=true ` +
      `SET obj.Tags = CASE WHEN obj.Tags IS NULL THEN ['Dm_gl_External '+l.Name] ELSE obj.Tags + 'Dm_gl_External '+l.Name END RETURN COUNT (obj) as numTags`;

    const results: QueryResult = await this.neo4jal.execute(request);
    const numTag = int(results.records[0].get("numTags"));

    console.log(
      `${numTag} tags were applied on application ${applicationName}. Will now merge.`
    );

    await GroupingController.executeGrouping(applicationName);

    return "ok";
  }
}
