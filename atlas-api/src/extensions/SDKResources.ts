import path from "path";
import fs from "fs";
import Technology from "./Technology";
import { logger } from "@shared/Logger";
import Framework from "./Framework";

/**
 * SDK for the extensions
 */
export default class SDKResources {
  // Singleton
  private static INSTANCE = new SDKResources();

  private technologiesConfigFile = "";
  private technologies: Technology[] = [];
  private frameworks: Framework[] = [];

  /**
   *
   */
  public static getInstance() {
    return this.INSTANCE;
  }

  /**
   * Constructor
   */
  private constructor() {
    // Get actual application path
    const appDir = path.dirname(require.main.filename);

    // Read Conf file
    // TODO: remove the Hardcoded URL
    const technologyFilePath = path.join(appDir, "../config/technologies/technologies.json");
    if (fs.existsSync(technologyFilePath)) {
      const content = fs.readFileSync(technologyFilePath, "utf-8");
      this.technologies = JSON.parse(content) as Technology[];
    } else {
      logger.warn(`SDK Resources : Technologies file not found.`);
    }

    logger.info(`SDK Resources : ${this.technologies.length} Technologies have been loaded.`);

    // Read Conf file
    // TODO: remove the Hardcoded URL
    const frameworksPath = path.join(appDir, "../config/technologies/frameworks.json");
    if (fs.existsSync(frameworksPath)) {
      const content = fs.readFileSync(frameworksPath, "utf-8");
      this.frameworks = JSON.parse(content) as Framework[];
    } else {
      logger.warn(`SDK Resources : Frameworks file not found.`);
    }

    logger.info(`SDK Resources : ${this.frameworks.length} Frameworks have been loaded.`);
  }

  /**
   * Get the configuration associated to the technologies
   * @returns The list of technologies
   */
  public getTechnologyConfiguration(): Technology[] {
    return this.technologies;
  }

  /**
   * Get all the technologies matching a certain category
   */
  public getTechnologiesByCategories(tag: string): Technology[] {
    return this.technologies.filter((x) => x.categories.includes(tag));
  }

  /**
   * Get the configuration associated to the frameworks
   * @returns The list of frameworks
   */
  public getFrameworkConfiguration(): Technology[] {
    return this.frameworks;
  }

  /**
   * Get all the frameworks matching a certain category
   * @param Tag Tag to find in the framework
   */
  public getFrameworksByCategories(tag: string): Technology[] {
    return this.frameworks.filter((x) => x.categories.includes(tag));
  }
}
