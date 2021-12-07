import path from "path";
import config from "config";
import { logger } from "@shared/Logger";
import * as fs from "fs";

export default class InstallationService {
  private static INSTANCE: InstallationService = null;

  private static ATLAS_CONFIG_FOLDER = "config/";
  private static HDD_PATH = ["C:\\", "D:/", "E:/", "F:/", "G:/"];
  private static TO_FIND_FOLDER: string[] = ["neo4j", "nginx", "imagingservice"];
  private static TO_AVOID_FOLDER = ["\\System32", "\\Windows"];
  private static MAX_DEPTH_SEARCH = 4;

  private static RELATIVE_NEO4J_PLUGINS = "\\neo4j\\plugin";
  private static RELATIVE_NGINX_ICONS = "\\nginx\\html\\img";

  /** Runtime variables **/
  private imagingBaseFolder: string;
  private imagingPluginFolder: string;
  private imagingTechIconFolder: string;

  private constructor() {
    let instantiationStatus = false;

    try {
      this.imagingBaseFolder = String(config.get("imaging.installation"));
      this.imagingPluginFolder = path.resolve(this.imagingBaseFolder, String(config.get("imaging.folders.plugins")));
      this.imagingTechIconFolder = path.resolve(
        this.imagingBaseFolder,
        String(config.get("imaging.folders.tech_icon")),
      );

      if (!fs.existsSync(this.imagingBaseFolder))
        throw new Error(`The path ${this.imagingBaseFolder} does not exist. Please specify a valid path.`);
      if (!fs.existsSync(this.imagingPluginFolder))
        throw new Error(`The path ${this.imagingPluginFolder} does not exist. Please specify a valid path.`);
      if (!fs.existsSync(this.imagingTechIconFolder))
        throw new Error(`The path ${this.imagingTechIconFolder} does not exist. Please specify a valid path.`);

      instantiationStatus = true;
    } catch (err) {
      logger.error("Invalid configuration file. Was not able to instantiate installation service.", err);
    }

    // If configuration file failed try to get automatically the path of imaging
    if (!instantiationStatus) {
      // Do not wait for the promise return, let the detection run in background
      this.autoImagingDiscovery();
    }
  }

  /**
   * Get the actual instance of InstallationService or create a new one
   */
  public static getInstance(): InstallationService {
    if (InstallationService.INSTANCE == null) {
      this.INSTANCE = new InstallationService();
    }
    return this.INSTANCE;
  }

  /**
   * Get the list of the directory with a depth assigned
   * @param path
   * @param depth
   * @private
   */
  private static getDirectory(path: string, depth: number): [string, number, string][] {
    return fs
      .readdirSync(path, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .map((dirent) => [dirent.name, depth, path]);
  }

  /**
   * Recursively look for the imaging file on a specified path
   * @param dirPath
   * @param currentLevel Current depth of the investigation.
   * the search stops when the InstallationService.MAX_DEPTH_SEARCH
   * is reached.
   * @private The instance of the service
   */
  private static getFiles(dirPath: string, currentLevel: number): string {
    // Create a promise to avoid blocking the execution of the service on instantiation
    try {
      // Init stack
      const directoryStack = this.getDirectory(dirPath, 0);

      while (directoryStack.length != 0) {
        try {
          const curDir = directoryStack.shift();

          if (curDir[1] > this.MAX_DEPTH_SEARCH) continue;
          const filepath = path.join(curDir[2], String(curDir[0]));

          // Skip folder to avoid
          let toSkip = false;
          for (const avoid of this.TO_AVOID_FOLDER)
            if (filepath.includes(avoid)) {
              toSkip = true;
            }
          if (toSkip) continue;

          const subDirs = this.getDirectory(filepath, curDir[1] + 1);

          // Check if it's contains imaging data files
          // If all the sub-directory are matching, return the filepath
          // eslint-disable-next-line max-len
          if (this.TO_FIND_FOLDER.every((toFind) => subDirs.map((x) => x[0]).indexOf(toFind) != -1)) {
            return filepath;
          } else {
            // push all the subdirectories
            directoryStack.push(...subDirs);
          }
        } catch (ignored) {
          // pass
        }
      }

      return "";
    } catch (err) {
      logger.error("Recursive search of Imaging folder failed with an error.", err);
      return null;
    }
  }

  /**
   * Return the Path of the configuration folder.
   */
  public getConfigurationFolder(): string {
    // eslint-disable-next-line max-len
    return path.resolve(path.dirname(require.main.filename), InstallationService.ATLAS_CONFIG_FOLDER);
  }

  /**
   * Return the imaging path in the configuration
   */
  public getImagingFolder(): string {
    return this.imagingBaseFolder;
  }

  /**
   * Set a new value of the imaging path
   * @param newPath New value
   */
  public setImagingFolder(newPath: string): void {
    if (!fs.existsSync(newPath)) throw new Error(`The path ${newPath} does not exist. Please specify a valid path.`);
    if (!fs.existsSync(newPath + InstallationService.RELATIVE_NEO4J_PLUGINS))
      throw new Error(
        `The path ${newPath + InstallationService.RELATIVE_NEO4J_PLUGINS} does not exist. Please specify a valid path.`,
      );
    if (!fs.existsSync(newPath + InstallationService.RELATIVE_NGINX_ICONS))
      throw new Error(
        `The path ${newPath + InstallationService.RELATIVE_NGINX_ICONS} does not exist. Please specify a valid path.`,
      );

    this.imagingBaseFolder = newPath;
    this.imagingPluginFolder = newPath + InstallationService.RELATIVE_NEO4J_PLUGINS;
    this.imagingTechIconFolder = newPath + InstallationService.RELATIVE_NGINX_ICONS;
  }

  public getPluginFolder(): string {
    return this.imagingPluginFolder;
  }

  public getIconFolder(): string {
    return this.imagingPluginFolder;
  }

  /*  EXTENSIONS PANEL */

  /**
   * Discover automatically the path of Imaging on the machine
   * @private
   */
  private autoImagingDiscovery() {
    try {
      let imagingPath = null;
      // eslint-disable-next-line @typescript-eslint/no-for-in-array
      for (const hd in InstallationService.HDD_PATH) {
        const path = InstallationService.HDD_PATH[hd];
        const res = InstallationService.getFiles(path, 0);
        if (res != null) {
          imagingPath = res;
          break;
        }
      }

      if (imagingPath != null) {
        this.imagingBaseFolder = imagingPath;
        this.imagingPluginFolder = imagingPath + InstallationService.RELATIVE_NEO4J_PLUGINS;
        this.imagingTechIconFolder = imagingPath + InstallationService.RELATIVE_NGINX_ICONS;
        // eslint-disable-next-line no-console
        console.log(`Found an imaging folder at ${imagingPath}`);
      } else {
        // eslint-disable-next-line no-console
        console.warn("Failed to automatically retrieve imaging path");
      }
    } catch (err) {
      // eslint-disable-next-line max-len
      logger.warn("Failed to automatically retrieve the path of the Imaging installation folder");
    }
  }
}
