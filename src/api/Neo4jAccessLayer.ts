// import { Configuration } from "../Configuration";
import neo4j, { Driver, QueryResult, Result, ServerInfo, session, Session } from "neo4j-driver";

export class Neo4JAccessLayer {
  private uri: string;
  private user: string;
  private password: string;
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
   * Check the Avaibility of the neo4j server
   */
  public async testConnection():Promise<ServerInfo> {
    return this.driver.verifyConnectivity()
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

  private constructor() {
    this.uri = "neo4j://localhost:7687"; // Configuration.getProperty("neo4j.connection.bolt_url");
    this.user = "neo4j"; // Configuration.getProperty("neo4j.connection.user");
    this.password = "imaging"; // Configuration.getProperty("neo4j.connection.password");
    try {
      this.driver = neo4j.driver(
        this.uri,
        neo4j.auth.basic(this.user, this.password)
      );
    } catch (error) {
      throw new Error(
        `Cannot connect to the remote Neo4j database o ${this.uri}`
      );
    }
  }
}
