import path from "path";
import fs from "fs";
import Technology from "./Technology";
import { logger } from "@shared/Logger";

/**
 * SDK for the extensions
 */
export default class SDKResources {
  // Singleton
  private static INSTANCE = new SDKResources();

  private technologiesConfigFile = "";
  private technologies: Technology[] = [];

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
    const technologyFilePath = path.join(appDir, "../config/technologies/technologies.json");
    if (fs.existsSync(technologyFilePath)) {
      const content = fs.readFileSync(technologyFilePath, "utf-8");
      this.technologies = JSON.parse(content) as Technology[];
    }
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
}
