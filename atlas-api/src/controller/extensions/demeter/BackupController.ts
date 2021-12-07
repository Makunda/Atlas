import ApiResponse from "@interfaces/api/ApiResponse";
import BackupService from "@services/extensions/demeter/BackupService";
import { wrapLogger } from "@shared/Logger";
import { HttpCode } from "@utils/HttpCode";
import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";

/**
 * Handle all the actions related to the Backup of the application
 */
export default class BackupController {
  private static logger = wrapLogger("Backup Controller");
  private static backupService = new BackupService();

  /**
   * POST : Create a backup in an application
   * @param req Request
   * @param res Response
   * @param _next Next function
   * @returns
   */
  public static async createBackup(req: Request, res: Response, _next: NextFunction): Promise<void> {
    await body("application", "Must specify an application name").isString().run(req);
    await body("name", "Must specify a name for the backup").isString().run(req);
    await body("description", "Must specify a description for the backup").isString().run(req);
    await body("timestamp", "Must specify a timestamp for the backup").isString().run(req);
    await body("picture", "Must specify a picture for the backup").isString().run(req);

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(HttpCode.BAD_REQUEST).send({
        errors: errors.array().map(x => x.msg),
        message: "Failed to backup the application",
      } as ApiResponse);
      return;
    }

    try {
      const application = String(req.body.application);
      const name = String(req.body.name);
      const description = String(req.body.description);
      const timestamp = Number(req.body.timestamp);
      const picture = String(req.body.picture);

      await this.backupService.backupApplication(application, name, description, timestamp, picture);

      res.status(HttpCode.SUCCESS).json({ message: "Application backup" } as ApiResponse);
    } catch (err) {
      const message = "Failed to create a backup in the application.";
      this.logger.error(message, err);
      res.status(HttpCode.INTERNAL_ERROR).send({ errors: ["Internal error"], message: message } as ApiResponse);
    }
  }

  /**
   * POST : Rollback an application to the previous point in the time
   * @param req Request
   * @param res Response
   * @param  _next Next Function
   * @returns
   */
  public static async rollback(req: Request, res: Response, _next: NextFunction): Promise<void> {
    await body("application", "Must specify an application name").isString().run(req);
    await body("id", "Must specify an id for the save").isInt().run(req);

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(HttpCode.BAD_REQUEST).send({
        errors: errors.array().map(x => x.msg),
        message: "Failed to rollback the application",
      } as ApiResponse);
      return;
    }

    try {
      const application = String(req.body.application);
      const save = String(req.body.save);

      await this.backupService.rollbackApplication(application, save);

      res.status(HttpCode.SUCCESS).json({ message: "Application backup" } as ApiResponse);
    } catch (err) {
      const message = "Failed to rollback the application.";
      this.logger.error(message, err);
      res.status(HttpCode.INTERNAL_ERROR).send({ errors: ["Internal error"], message: message } as ApiResponse);
    }
  }

  /**
   * POST : Delete a save
   * @param req Request
   * @param res Response
   * @param _next Next function
   * @returns
   */
  public static async deleteSave(req: Request, res: Response, _next: NextFunction): Promise<void> {
    await body("application", "Must specify an application name").isString().run(req);
    await body("id", "Must specify an id for the save").isInt().run(req);

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(HttpCode.BAD_REQUEST).send({
        errors: errors.array().map(x => x.msg),
        message: "Failed to delete a save",
      } as ApiResponse);
      return;
    }

    try {
      const application = String(req.body.application);
      const id = Number(req.body.id);

      await this.backupService.deleteBackup(application, id);

      res.status(HttpCode.SUCCESS).json({ message: "Save deleted" } as ApiResponse);
    } catch (err) {
      const message = "Failed to delete a save.";
      this.logger.error(message, err);
      res.status(HttpCode.INTERNAL_ERROR).send({ errors: ["Internal error"], message: message } as ApiResponse);
    }
  }

  /**
   * POST : Rollback an application to the previous point in the time
   * @param req Request
   * @param res Response
   * @param _next Next function
   * @returns The list of save node in the application
   */
  public static async getSaveList(req: Request, res: Response, _next: NextFunction): Promise<void> {
    await body("application", "Must specify an application name").isString().run(req);

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(HttpCode.BAD_REQUEST).send({
        errors: errors.array().map(x => x.msg),
        message: "Failed to get the list of save",
      } as ApiResponse);
      return;
    }

    try {
      const application = String(req.body.application);

      const saves = await this.backupService.getSaveList(application);

      res.status(HttpCode.SUCCESS).json({ message: "List of saves", data: saves } as ApiResponse);
    } catch (err) {
      const message = "Failed to get the list of saves.";
      this.logger.error(message, err);
      res.status(HttpCode.INTERNAL_ERROR).send({ errors: ["Internal error"], message: message } as ApiResponse);
    }
  }
}