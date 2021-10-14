import { Neo4JAccessLayer } from "@database/Neo4JAccessLayer";
import { logger } from "@shared/Logger";

/**
 * Singleton class handling the creation / retrieval of Pythia token
 */
export default class PythiaTokenManager {
  private static PYTHIA_LOGIN_LABEL = "PythiaAPIToken";
  private static NEO4JAL: Neo4JAccessLayer = Neo4JAccessLayer.getInstance();

  // Singleton
  private static INSTANCE = new PythiaTokenManager();

  // Private
  private token: string = null;

  /**
   * Get the instance of the singleton
   */
  public static getInstance(): PythiaTokenManager {
    return PythiaTokenManager.INSTANCE;
  }

  /**
   * Get the token stored in database
   */
  private async getTokenFromDatabase(): Promise<string | null> {
    const req = `MATCH (o:${PythiaTokenManager.PYTHIA_LOGIN_LABEL}) 
        RETURN o.Token as token`;

    try {
      const res = await PythiaTokenManager.NEO4JAL.execute(req);
      if (!res || res.records.length == 0) {
        return null; // No token in the database
      }

      return String(res.records[0].get("token"));
    } catch (err) {
      logger.error("Failed to retrieve the token from pythia", err);
      throw new Error("Failed to retrieve the pythia token in the database.");
    }
  }

  /**
   * Get the pythia token
   * @returns the pythia token or null if nothing has been found
   */
  public async getToken(): Promise<string | null> {
    if (!this.token) {
      this.token = await this.getTokenFromDatabase();
    }

    return this.token;
  }

  /**
   * Check if the token exists
   * @returns True if the token is present, false otherwise
   */
  public async existsToken(): Promise<boolean> {
    if (this.token) return true; /// If already declared
    const result = await this.getToken(); // Check in database
    return result != null;
  }

  /**
   * Create a new token
   * @param token Token to insert
   */
  public async createToken(token: string): Promise<void> {
    const req = `MERGE (o:${PythiaTokenManager.PYTHIA_LOGIN_LABEL}) 
        SET o.Token=$token`;
    try {
      await PythiaTokenManager.NEO4JAL.executeWithParameters(req, { token: token });
      this.token = token;
    } catch (err) {
      logger.error("Failed to create the token from pythia", err);
      throw new Error("Failed to retrieve the pythia token in the database.");
    }
  }

  /**
   * Singleton constructor
   */
  private constructor() {
    // Singleton
  }
}
