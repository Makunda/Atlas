import { Neo4JAccessLayer } from "@database/Neo4JAccessLayer";
import { logger } from "@shared/Logger";
import { fixedLengthString } from "@utils/utils";
import glob from "glob";
import Extension from "@extensions/Extension";

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
    logger.info(`Extension Manager: Launched in ${process.env.NODE_ENV} mode. Files with extension ${fileExtension} will be treat.`);

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
        filePath = file.replace(".js", "");

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
   * Find extensions by ID
   * @param id The Id of the extension
   * @returns The extension or null
   */
  public findExtensionById(id: string): Extension | null {
    for (const ext of this.plugins) {
      if (ext.getId() == id) return ext;
    }
    return null;
  }

  /**
   * Execute a specific extension
   * @param id If of the extension to execute
   * @todo Refactor this code to return an operation ID and consume the results later
   */
  public async executeExtension(id: string, application: string): Promise<any> {
    const extension = this.findExtensionById(id);
    if (extension == null) throw new Error(`Failed to find an extension with id : '${id}'.`);

    // The extension exist execute and add to the extension list
    return await extension.execute(application);
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
