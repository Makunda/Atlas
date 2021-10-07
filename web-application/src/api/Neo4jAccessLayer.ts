import { Configuration, Credentials, Properties } from "../Configuration";

import neo4j, { Driver, QueryResult, ServerInfo, Session } from "neo4j-driver";

export class Neo4JAccessLayer {
  private uri: string;
  private driver: Driver;

  private static INSTANCE: Neo4JAccessLayer;

  /**
   * Execute an async query
   * @param request The request you wan to execute
   */
  public async execute(request: string): Promise<QueryResult> {
    const session: Session = this.driver.session();
    try {
      const results: QueryResult = await session.run(request);
      return results;
    } finally {
      session.close();
    }
  }

  /**
   * Execute an async query
   * @param request The request you wan to execute
   * @param params The parameters of the query, as an object
   * @param callback Callback function
   */
  public async executeWithParameters(
    request: string,
    params: Record<string, any>
  ): Promise<QueryResult> {
    const session: Session = this.driver.session();
    try {
      const results: QueryResult = await session.run(request, params);
      return results;
    } finally {
      session.close();
    }
  }

  /**
   * Check the Availability of the neo4j server
   */
  public async testConnection(): Promise<ServerInfo> {
    return this.driver.verifyConnectivity();
  }

  /**
   * Get the actual instance of the Neo4J connection
   */
  public static getInstance() {
    if (Neo4JAccessLayer.INSTANCE == null) {
      Neo4JAccessLayer.INSTANCE = new Neo4JAccessLayer();
    }
    return Neo4JAccessLayer.INSTANCE;
  }

  /**
   * Connect to the Neo4j instance
   */
  public static connect(): boolean {
    try {
      const properties: Properties = Configuration.getProperties();

      if (properties.token == undefined) {
        console.log("You must log with credentials");
        throw new Error(
          "No credentials were provided for the connection. Aborting..."
        );
      }

      Neo4JAccessLayer.INSTANCE = new Neo4JAccessLayer();
      return true;
    } catch (error) {
      return false;
    }
  }

  /**
   * Connect to Neo4j instance using specific credentials
   * @param credentials Neo4j credentials
   */
  public static connectWithCredentials(credentials: Credentials): boolean {
    try {
      const properties: Properties = Configuration.getProperties();
      const token = neo4j.auth.basic(credentials.user, credentials.password);

      properties.token = token;

      Configuration.saveProperties(properties);

      // Save token for future usage
      Neo4JAccessLayer.INSTANCE = new Neo4JAccessLayer();
      return true;
    } catch (error) {
      return false;
    }
  }

  /**
   * Test a request returning 1, to check the real connectivity
   */
  private async healthCheck(): Promise<boolean> {
    try {
      await this.execute("MATCH () RETURN 1 LIMIT 1");
      return true;
    } catch (ignored) {
      return false;
    }
  }

  private constructor() {
    const properties: Properties = Configuration.getProperties();
    this.uri = properties.neo4jUri;
    const token = properties.token;

    try {
      this.driver = neo4j.driver(this.uri, token);
    } catch (error) {
      throw new Error(
        `Cannot connect to the remote Neo4j database  ${this.uri}`
      );
    }
  }
}
