import { QueryResult } from "neo4j-driver";
import { Neo4JAccessLayer } from "@database/Neo4JAccessLayer";

class UtilsService {
  private neo4jAl: Neo4JAccessLayer = Neo4JAccessLayer.getInstance();

  /**
   * Launch request again database
   */
  public async healthCheckDatabase(): Promise<boolean> {
    try {
      const request = "Match () Return 1 Limit 1";

      const results: QueryResult = await this.neo4jAl.execute(request);
      if (!results.records[0]) return false;
      return true;
    } catch (err) {
      return false;
    }
  }

  /**
   * Launch request again database
   */
  public async healthCheckDatabaseApplication(): Promise<boolean> {
    try {
      const request = "MATCH (a:Application) RETURN DISTINCT a";

      const results: QueryResult = await this.neo4jAl.execute(request);
      if (!results.records[0]) return false;
      return true;
    } catch (err) {
      return false;
    }
  }
}

export default UtilsService;
