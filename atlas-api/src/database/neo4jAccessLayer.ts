import { wrapLogger } from "@shared/Logger";
import config from "config";

import neo4j, { AuthToken, Driver, QueryResult, ServerInfo, Session } from "neo4j-driver";

export class Neo4JAccessLayer {
  private static INSTANCE: Neo4JAccessLayer;
  private uri: string;
  private driver: Driver;
  private token: AuthToken;
  private connected: boolean;

  private logger = wrapLogger("Neo4j Access Layer");

  private constructor() {
    this.uri = config.get("neo4j.uri");
    this.token = neo4j.auth.basic(config.get("neo4j.user"), config.get("neo4j.password"));
  }

  /**
   * Launch a request to test the connectivity
   */
  private async launchDummyRequest(): Promise<boolean> {
    const req = "Match () Return 1 Limit 1";
    const start = Date.now();

    try {
      const res = await this.execute(req);
      const end = Date.now();
      this.logger.info(`Connection test successful. Rows returned in ${end - start} ms.`);
      return res.records && res.records.length > 0;
    } catch (err) {
      this.logger.error("The test failed trying to query the Neo4j database.");
      return false;
    }
  }

  /**
   * Find the correct encryption mode of neo4j
   * @param token Token containing the credentials
   */
  private async findEncryptionMode(): Promise<void> {
    // Verify the connection
    const test = await this.launchDummyRequest();
    if (test) {
      this.connected = true;
      return;
    }

    // Try with encryption
    try {
      this.driver = neo4j.driver(this.uri, this.token, {
        encrypted: "ENCRYPTION_ON",
      });

      // Test
      await this.testConnection();
      this.logger.info("Connection to Neo4j with encryption: Successful");
      this.connected = true;
      return;
    } catch (error) {
      this.logger.error(`Cannot connect to the remote Neo4j database using encryption ${this.uri}`);
    }

    // Try without encryption
    try {
      this.driver = neo4j.driver(this.uri, this.token);

      // Test
      await this.testConnection();
      this.logger.info("Connection to Neo4j without encryption: Successful");
      this.connected = true;
      return;
    } catch (error) {
      throw new Error(`Cannot connect to the remote Neo4j database without using encryption ${this.uri}`);
    }
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
  public static async connect(): Promise<boolean> {
    try {
      Neo4JAccessLayer.INSTANCE = new Neo4JAccessLayer();
      await Neo4JAccessLayer.INSTANCE.findEncryptionMode();
      return true;
    } catch (error) {
      return false;
    }
  }

  public getUri(): string {
    return this.uri;
  }

  /**
   * Execute an async query
   * @param request The request you wan to execute
   */
  public async execute(request: string, parameters?: any): Promise<QueryResult> {
    const session: Session = this.driver.session();
    try {
      const results: QueryResult = await session.run(request, parameters);
      return results;
    } catch (err) {
      const sanitized = request.replace("\\n", " ");
      const wParams = parameters ? `With parameters ${String(parameters)}.` : "";
      this.logger.error(`Failed to execute query [${sanitized}]. ${wParams}`, err);
    } finally {
      session.close();
    }
  }

  /**
   * Get a new session
   */
  public getSession() {
    return this.driver.session();
  }

  /**
   * Execute an async query
   * @param request The request you wan to execute
   * @param params The parameters of the query, as an object
   * @param callback Callback function
   */
  public async executeWithParameters(request: string, params: any): Promise<QueryResult> {
    const session: Session = this.driver.session();
    try {
      const results: QueryResult = await session.run(request, params);
      return results;
    } finally {
      session.close();
    }
  }

  /**
   * Check the availability of the neo4j server
   */
  public async testConnection(): Promise<ServerInfo> {
    return this.driver.verifyConnectivity();
  }
}
