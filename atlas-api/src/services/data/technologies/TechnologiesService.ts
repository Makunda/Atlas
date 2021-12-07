import path from "path";
import fs from "fs";
import Technology from "@extensions/Technology";
import { wrapLogger } from "@shared/Logger";

export default class TechnologiesService {
  private static INSTANCE: TechnologiesService;
  private logger = wrapLogger("Technologies Service");
  private technologies: Technology[];

  /**
   * Singleton constructor, reading the data file
   * @private
   */
  private constructor() {
    // Get actual application path
    const appDir = path.dirname(require.main.filename);

    // Read Technology file
    const technologyFilePath = path.join(appDir, "../config/technologies/technologies.json");
    if (fs.existsSync(technologyFilePath)) {
      const content = fs.readFileSync(technologyFilePath, "utf-8");
      this.technologies = JSON.parse(content) as Technology[];
    } else {
      this.logger.warn(`Technologies file not found at path '${technologyFilePath}'.`);
      throw new Error("Failed to read the technologies.json file");
    }
  }

  /**
   * Get the instance of the Technology service
   */
  public static getInstance(): TechnologiesService {
    if (!this.INSTANCE) {
      this.INSTANCE = new TechnologiesService();
    }

    return this.INSTANCE;
  }

  /**
   * Get the list of technologies
   * @param objectType List of object type
   */
  public getTechnologiesFromType(objectType: string[]) {
    const matchedTechnologies: string[] = [];
    for (const tech of this.technologies) {
      if (!tech.imaging) continue;
      if (tech.imaging.type.some(r => objectType.includes(r))) matchedTechnologies.push(tech.name);
    }

    return matchedTechnologies;
  }
}