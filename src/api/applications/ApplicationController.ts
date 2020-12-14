import { QueryResult } from "neo4j-driver";
import { Neo4JAccessLayer } from "../Neo4jAccessLayer";

export interface ApplicationRecord {
  name: string;
  countObject: number;
}

export class ApplicationController {
  private static neo4jal: Neo4JAccessLayer = Neo4JAccessLayer.getInstance();

  public static async getListApplications(): Promise<string[]> {
    const request = "MATCH (n:Application) RETURN n.Name as name";

    const results: QueryResult = await this.neo4jal.execute(request);

    const appNames: string[] = [];
    for (let i = 0; i < results.records.length; i++) {
      const singleRecord = results.records[i];
      const name = singleRecord.get("name");
      appNames.push(name);
    }

    return appNames;
  }

  public static async getSortedApplications(): Promise<ApplicationRecord[]> {
    const request =
      "MATCH (n:Application) with n.Name as appName MATCH (o:Object) WHERE appName in LABELS(o) RETURN appName as name, COUNT(o) as numObj ORDER BY numObj DESC";

    const results: QueryResult = await this.neo4jal.execute(request);

    const appNames: ApplicationRecord[] = [];
    for (let i = 0; i < results.records.length; i++) {
      const singleRecord = results.records[i];
      const name = singleRecord.get("name");
      const num = singleRecord.get("numObj");

      appNames.push({ name: name, countObject: num });
    }

    return appNames;
  }
}
