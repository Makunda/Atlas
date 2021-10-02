import { Neo4JAccessLayer } from "@database/Neo4jAccessLayer";
import { logger } from "@shared/Logger";
import { fixedLengthString } from "@utils/utils";
import glob from "glob";
import Extension from "./Extension";

/**
 * Manage all the extensions installed
 */
export default class ExtensionManager {
  // Singleton
  private static INSTANCE = new ExtensionManager();

  // Path to the extension folder
  public static EXTENSION_FOLDER = __dirname + "\\root";
  public plugins: Extension[] = [];

  /**
   * Register all the module in the ext
   */
  public async register() {
    // Get the file extension to treat based on the mode of production
    const fileExtension = process.env.NODE_ENV == "development" ? ".ts" : ".js";
    // eslint-disable-next-line max-len
    logger.info(
      `Extension Manager: Launched in ${process.env.NODE_ENV} mode. Files with extension ${fileExtension} will be treat.`
    );

    // Get the path of the folder containing all the plugins
    const path = ExtensionManager.EXTENSION_FOLDER;
    logger.info(`Extension Manager: Registering extensions in ${path}.`);

    const resFiles = glob.sync(path + "/**/*" + fileExtension);
    logger.info(`Extension Manager: Found ${resFiles.length} extensions to be imported.`);

    let pTemp;
    let filePath;
    let tempClass;
    for (const file of resFiles) {
      try {
        // Replace file extension in the path and import it
        filePath = file.replace(".ts", "");
        pTemp = await import(filePath);

        // Verify that the module is well formatted with a default export
        // A module without a proper definition will be ignored
        if (pTemp.default && new pTemp.default() instanceof Extension) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-call
          tempClass = new pTemp.default(Neo4JAccessLayer.getInstance(), logger);
          this.plugins.push(tempClass as Extension);
        }
      } catch (error) {
        logger.error(`Extension Manager: failed to load module found at '${file}'.`, error);
      }
    }

    logger.info(`Extension Manager: ${this.plugins.length} modules were registered.`);

    let toDisplay = "";
    this.plugins.forEach((x: Extension) => {
      try {
        toDisplay += `Id: ${fixedLengthString(x.getId(), 30)} Name: ${fixedLengthString(x.getName(), 30)}.\n`;
      } catch (error) {
        logger.error("Failed to get", error);
      }
    });

    logger.info(`Extension Manager:\n${toDisplay}`);
  }

  /**
   * Get and return the plugin list discovered
   */
  public getPluginList(): Extension[] {
    return this.plugins;
  }

  /**
   * Get the instance of the class
   */
  public static getInstance(): ExtensionManager {
    return this.INSTANCE;
  }

  private constructor() {
    // Empty constructor
  }
}
