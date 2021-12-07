import { NextFunction, Request, Response } from "express";
import ExportService from "@services/extensions/paris/ExportService";
import * as fs from "fs";
import { logger } from "@shared/Logger";

export default class ExportController {
  public exportService = new ExportService();

  public getExportFile = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const filePath = await this.exportService.exportParisData();

      res.sendFile(filePath, function(err) {
        if (err) {
          next(err);
        } else {
          logger.info(`Sent file :${filePath}. Will now proceed to its deletion.`);

          try {
            fs.unlinkSync(filePath);
            logger.info("File was successfully removed.");
          } catch (err) {
            logger.error("Failed to delete.");
          }
        }
      });
    } catch (error) {
      next(error);
    }
  };
}
