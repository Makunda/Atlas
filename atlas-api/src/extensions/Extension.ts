import { Neo4JAccessLayer } from "@database/Neo4jAccessLayer";
import { Logger } from "winston";

export default abstract class Extension {
  protected neo4jAccesLayer: Neo4JAccessLayer;
  private logger: Logger;

  /**
   * Log info message from the extension
   * @param text Text to log
   */
  protected logInfo(text: string) {
    this.logger.info(`Extension - ${this.getName()} :: ${text}.`);
  }

  protected logError(text: string, error: any) {
    this.logger.error(`Extension - ${this.getName()} :: ${text}.`, error);
  }

  /**
   * Get the ID of the extension as a String
   * @returns {String} Id of the extension
   */
  abstract getId(): string;

  /**
   * Get the Name of the extension
   * @returns {String} Id of the extension
   */
  abstract getName(): string;

  /**
   * Get a description associated to the Extension
   */
  abstract getDescription(): string;

  /**
   * Execute action before start
   */
  abstract onStart(application: string): Promise<any>;

  /**
   * Execute action
   */
  abstract execute(application: string): Promise<any>;

  /**
   * Execute action after the execution
   */
  abstract afterExecution(): Promise<any>;

  /**
   * Constructor of the extension
   * @param neo4jAccessLayer Neo4j Access Layer to query the Neo4j database
   * @param logger Logger
   * @todo Add the postgres connection layer
   */
  constructor(neo4jAccessLayer: Neo4JAccessLayer, logger: Logger) {
    this.neo4jAccesLayer = neo4jAccessLayer;
    this.logger = logger;
  }
}
