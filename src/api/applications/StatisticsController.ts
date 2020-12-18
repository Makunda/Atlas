import { QueryResult } from "neo4j-driver";
import { Neo4JAccessLayer } from "../Neo4jAccessLayer";

export interface StatisticResult {
  title: string;
  description: string;
  result: string;
}

export class StatisticsController {
  private static neo4jal: Neo4JAccessLayer = Neo4JAccessLayer.getInstance();

  /**
   * Get results of the statistics
   * @param configuration Name of the configuration to use
   * @param applicationName Name of the application
   */
  public static async getStatisticResults(
    configuration: string,
    applicationName: string
  ): Promise<StatisticResult[]> {
    const request = `CALL demeter.statistics.getAsList('${configuration}', '${applicationName}')`;
    console.log("Request statstics : " + request);
    const results: QueryResult = await this.neo4jal.execute(request);

    const appNames: StatisticResult[] = [];
    for (let i = 0; i < results.records.length; i++) {
      const singleRecord = results.records[i];

      const title = singleRecord.get("title");
      const description = singleRecord.get("description");

      let result = singleRecord.get("result");
      result = result.replace(" - ", "").replaceAll(" - ", "<br \\><br \\>");

      appNames.push({ title, description, result });
    }

    return appNames;
  }
}
