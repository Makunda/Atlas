import { Neo4JAccessLayer } from "@database/Neo4JAccessLayer";
import { logger } from "@shared/Logger";

/**
 * Abstract class defining the interface for binders
 */
export default abstract class ABinder {
  protected NEO4JAL: Neo4JAccessLayer = Neo4JAccessLayer.getInstance();
  protected application: string;

  protected abstract type: string;

  /**
   * Log info message
   * @param message Message to log
   */
  protected logInfo(message: string, ...meta: any[]): void {
    logger.info(`Highlight Tech Binder ( Type : ${this.getType()}) :: ${message}`, meta);
  }

  /**
   * Log error message
   * @param message Message to log
   * @param meta Meta data
   */
  protected logError(message: string, ...meta: any[]): void {
    logger.error(`Highlight Tech Binder ( Type : ${this.getType()}) :: ${message}`, meta);
  }

  /**
   * Get the technology
   * @returns The technology of the binder
   */
  public getType(): string {
    return this.type;
  }

  /**
   * Create a tag for a specific technology
   * @param pattern Pattern to identify
   * @param tag Tag to create
   */
  public abstract createTag(patterns: string[], tag: string): Promise<boolean>;

  /**
   * Create a document for a specific technology
   * @param pattern Pattern to identify
   * @param title Title of the document
   * @param description Description of the document
   */
  public abstract createDocument(patterns: string[], title: string, description: string): Promise<boolean>;

  /**
   * Super constructor to force the application declaration
   * @param application Name of the application
   */
  public constructor(application: string) {
    this.application = application;
  }
}
