/* eslint-disable max-len */
import { checkBody } from "@shared/FunctionGlob";
import { HttpCode } from "@utils/HttpCode";
import { NextFunction, Request, Response } from "express";
import ExtensionManager from "@extensions/ExtensionManager";

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
          fullDescription: x.getFullDescription(),
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

  /**
   * POST
   * Execute an extension based on its ID
   * @param req Request
   * @param res Response
   * @param next Next function
   */
  public executeExtension = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      checkBody(req, "id");
      checkBody(req, "application");
    } catch (error) {
      res.status(HttpCode.BAD_REQUEST).json({ error: error, message: "Bad request. Missing parameters." });
    }

    try {
      const id = String(req.body.id);
      const application = String(req.body.application);

      const manager = ExtensionManager.getInstance();
      const results = await manager.executeExtension(id, application);

      res.status(HttpCode.SUCCESS).json({ data: results, message: "Extensions executed" });
    } catch (error) {
      res
        .status(HttpCode.INTERNAL_ERROR)
        .json({ error: "Failed to retrieve the extension due to an internal issue.", message: "Extensions installed" });
    }
  };
}
