import { Neo4JAccessLayer } from "@database/Neo4jAccessLayer";
import { Logger } from "winston";

export default abstract class Extension {
  protected neo4jAccesLayer: Neo4JAccessLayer;
  private logger: Logger;

  private isRunning = false;
  private launchedAt: number;
  private application: string;

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

  abstract getCreationDate(): string;
  abstract getLastUpdate(): string;

  /**
   * Get a description associated to the Extension
   */
  abstract getDescription(): string;

  /**
   * Get a full description of what the Extension is doing
   * @todo Store this information in a JSON file, along the code
   */
  abstract getFullDescription(): string;
  /**
   * Return a list of tags describing the extension
   */
  abstract getTags(): string[];

  /**
   * Execute action before start
   */
  abstract onStart(application: string): Promise<any>;

  /**
   * Execute action
   */
  public async execute(application: string): Promise<any> {
    // If the extension is already running, produce an error.
    if (this.isRunning) {
      throw new Error("The extension is running. Please wait the end of its execution");
    }

    this.isRunning = true;
    this.launchedAt = Date.now();
    this.application = application;

    try {
      this.logger.info(`Extension: '${this.getId()}' - (${this.getName()}) launched on application '${application}'`);
      await this.executeExtension(application);
    } catch (err) {
      // eslint-disable-next-line max-len
      this.logger.error(
        `The extension with id: '${this.getId()}' - (${this.getName()}) produced an error during its execution.`,
        err
      );
      throw err;
    } finally {
      this.isRunning = false;
    }
  }
  protected abstract executeExtension(application: string): Promise<any>;
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
