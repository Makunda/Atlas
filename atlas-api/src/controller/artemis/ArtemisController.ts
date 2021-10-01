import {NextFunction, Request, Response} from 'express';
import ArtemisService from '@services/artemis/ArtemisService';
import path from "path";
import {logger} from "@shared/Logger";
import * as fs from "fs";
import HttpException from "@exceptions/HttpException";
import { checkBody } from "@shared/FunctionGlob";
import { HttpCode } from "@utils/HttpCode";

class ArtemisController {
  private artemisService = new ArtemisService();

  /**
   * Get the online mode of Artemis
   * @param req
   * @param res
   * @param next
   */
  public getVersion = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const version: string = await ArtemisService.getVersion();
      res.status(200).json({ data: version, message: "version" });
    } catch (error) {
      logger.warn("Failed to get the version of Artemis");
      next(error);
    }
  };

  /**
   * Set a new value for the pythia online mode
   * @param req Request
   * @param res Response
   * @param next Next function
   */
  public setOnlineMode = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      checkBody(req, "mode");
    } catch (err) {
      res.status(HttpCode.BAD_REQUEST).json({
        error: "Missing parameters in body",
        message: err,
      });
    }

    // Process the Request
    try {
      // Get mode
      const mode = String(req.body.mode);
      const val = /true/i.test(mode);

      const version: boolean = await ArtemisService.setOnlineMode(val);
      res.status(200).json({ data: version, message: "New value of online mode" });
    } catch (error) {
      logger.error("Failed to set the online mode of artemis");
      res.status(HttpCode.INTERNAL_ERROR).json({
        error: "Internal Error",
        message: "Failed to set online mode",
      });
    }
  };

  /**
   * Set a new value for the pythia repository mode
   * @param req Request
   * @param res Response
   * @param next Next Function
   */
  public setRepositoryMode = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      checkBody(req, "mode");
    } catch (err) {
      res.status(HttpCode.BAD_REQUEST).json({
        error: "Missing parameters in body",
        message: err,
      });
    }

    // Process the Request
    try {
      // Get mode
      const mode = String(req.body.mode);
      const val = /true/i.test(mode);

      const version: boolean = await ArtemisService.setRepositoryMode(val);
      res.status(200).json({ data: version, message: "New value of repository mode" });
    } catch (error) {
      logger.error("Failed to set the repository mode of artemis");
      res.status(HttpCode.INTERNAL_ERROR).json({
        error: "Internal Error",
        message: "Failed to set repository mode",
      });
    }
  };

  /**
   * Get the value of the pythia repository mode
   * @param req Request
   * @param res Response
   * @param next Next Function
   */
  public getOnlineMode = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    // Process the Request
    try {
      const version: boolean = await ArtemisService.getOnlineMode();
      res.status(200).json({ data: version, message: "Value of online mode" });
    } catch (error) {
      logger.error("Failed to get the online mode of artemis");
      res.status(HttpCode.INTERNAL_ERROR).json({
        error: "Internal Error",
        message: "Failed to get online mode",
      });
    }
  };

  /**
   * Get the value of the pythia repository mode
   * @param req Request
   * @param res Response
   * @param next Next Function
   */
  public getRepositoryMode = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    // Process the Request
    try {
      const version: boolean = await ArtemisService.getRepositoryMode();
      res.status(200).json({ data: version, message: "Value of repository mode" });
    } catch (error) {
      logger.error("Failed to get the repository mode of artemis");
      res.status(HttpCode.INTERNAL_ERROR).json({
        error: "Internal Error",
        message: "Failed to get repository mode",
      });
    }
  };

  public exportFrameworks = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const fileCreated: string = await ArtemisService.launch_export();
      res.sendFile(path.resolve(fileCreated), (err) => {
        // File was sent
        // Delete the file
        if (err) {
          logger.error("Failed to send the file : ", err);
        }

        try {
          fs.unlinkSync(fileCreated);
          logger.info(`The temporary file '${fileCreated}' was successfully removed`);
        } catch (err) {
          logger.error(err);
        }
      });
    } catch (error) {
      next(error);
    }
  };

  public importFrameworks = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const file = req.file;
      if (!file) {
        logger.error("No file was detected during the upload");
        throw new HttpException(400, "No file was detected during the upload");
      }

      // Launch the import
      const message = await ArtemisService.launch_import(file.path);

      // Delete the file
      try {
        fs.unlinkSync(file.path);
        logger.info(`The temporary file '${file.path}' was successfully removed`);
      } catch (err) {
        logger.error(`Failed to remove temporary file ${file.path}.`, err);
      }

      res.status(200).json({ data: message, message: "Import" });
    } catch (error) {
      next(error);
    }
  };
}

export default ArtemisController;