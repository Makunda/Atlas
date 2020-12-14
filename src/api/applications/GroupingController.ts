import { QueryResult } from "neo4j-driver";
import { Neo4JAccessLayer } from "../Neo4jAccessLayer";

export interface GroupRecord {
  application: string;
  tags: string[];
  countTag: number;
}

export class GroupingController {
  private static neo4jal: Neo4JAccessLayer = Neo4JAccessLayer.getInstance();
  private static tagPrefix = "Dm_gl_";

  public static async getGroups(): Promise<GroupRecord[]> {
    const request =
      "MATCH (app:Application) " +
      "WITH [app.Name] as appName " +
      "MATCH (o:Object) WHERE EXISTS(o.Tags) AND any( x IN o.Tags WHERE x CONTAINS '" +
      GroupingController.tagPrefix +
      "' ) AND any( x IN LABELS(o) WHERE x IN appName) " +
      "RETURN DISTINCT [ x IN LABELS(o) WHERE x IN appName][0] as application , [x IN o.Tags WHERE x CONTAINS '" +
      GroupingController.tagPrefix +
      "'] as tags,  COUNT(o) as numTags";

    const results: QueryResult = await this.neo4jal.execute(request);

    const appNames: GroupRecord[] = [];
    for (let i = 0; i < results.records.length; i++) {
      const singleRecord = results.records[i];
      const appName = singleRecord.get("application");
      const tags = singleRecord.get("tags");
      const countTag = singleRecord.get("numTags");

      appNames.push({ application: appName, tags: tags, countTag: countTag });
    }

    return appNames;
  }
}
