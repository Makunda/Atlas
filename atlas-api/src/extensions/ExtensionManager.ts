import { logger } from "@shared/Logger";
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
    let typeTemp;
    let tempClass;
    const plugins: Extension[] = [];
    for (const file of resFiles) {
      try {
        filePath = file.replace(".ts", "");
        pTemp = await import(filePath);

        if (pTemp.default) {
          typeTemp = Object.getPrototypeOf(pTemp.default);
          tempClass = new pTemp.default();
          plugins.push(tempClass as Extension);
        }
      } catch (error) {
        logger.error(`Extension Manager: failed to load module found at '${file}'.`, error);
      }
    }

    logger.info(`Extension Manager: ${plugins.length} modules were registered.`);
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
