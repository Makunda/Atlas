/* eslint-disable max-len */
import { HttpCode } from "@utils/HttpCode";
import { NextFunction, Request, Response } from "express";
import ExtensionManager from "src/extensions/ExtensionManager";

/**
 * Controller managing the different extension declared and functional in the application
 */
export default class CloudExtensionController {
  /**
   * Get the list of installed extensions
   * @param req Request
   * @param res Response
   * @param next Next function
   */
  public getCloudExtensionList = (req: Request, res: Response, next: NextFunction): void => {
    try {
      const manager = ExtensionManager.getInstance();
      const extensionList = manager.getPluginList();

      // Convert the plugin to JSON
      const jsonExtension = extensionList.map((x) => {
        return {
          id: x.getId(),
          name: x.getName(),
          description: x.getDescription(),
          tags: x.getTags(),
          creation: x.getCreationDate(),
          lastUpdate: x.getLastUpdate(),
        };
      });

      res.status(HttpCode.SUCCESS).json({ data: jsonExtension, message: "Extensions installed" });
    } catch (error) {
      res
        .status(HttpCode.INTERNAL_ERROR)
        .json({ error: "Failed to retrieve the extension due to an internal issue.", message: "Extensions installed" });
    }
  };
}
