/* eslint-disable max-len */
import { NextFunction, Request, Response } from "express";
import { checkBody, checkParams, checkQuery } from "@shared/FunctionGlob";
import HttpException from "@exceptions/HttpException";
import { logger } from "@shared/Logger";
import * as fs from "fs";
import CloudBlocker from "@interfaces/highlight/recommendations/CloudBlocker";
import HighlightController from "./HighlightController";
import HighlightContainerService from "@services/highlight/HighlightContainerService";
import ContainerRecommendation from "@interfaces/highlight/recommendations/ContainerRecommendation";

export default class HighlightCloudBlockerController implements HighlightController {
  protected highlightService = new HighlightContainerService();

  /**
   * Process an excel file for a specific application
   * POST {
   *  application: string
   * }
   * @param req Request
   * @param res Response
   * @param next NextFunction
   */
  public processRecommendationFile = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const file = req.file;
      if (!file) {
        logger.error("No file was detected during the upload");
        throw new HttpException(400, "No file was detected during the upload");
      }

      checkParams(req, "application");
      const application = String(req.params.application);

      // Launch the import
      const recommendations: ContainerRecommendation[] = await this.highlightService.processExcel(
        application,
        file.path
      );

      // Delete the file
      try {
        fs.unlinkSync(file.path);
        logger.info(`The temporary file '${file.path}' was successfully removed`);
      } catch (err) {
        logger.error(`Failed to remove temporary file ${file.path}.`, err);
      }

      res.status(200).json({ data: recommendations, message: "Container Blockers Found" });
    } catch (error) {
      logger.error("Failed to process the Highlight Container File", error);
      next(error);
    }
  };

  /**
   * Apply recommendations on the on-boarded applications
   * @param req Request
   * @param res Response
   * @param next Next Function
   */
  public applyRecommendations = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      checkBody(req, "blockers");
      checkBody(req, "type");

      const blockers: ContainerRecommendation[] = req.body.blockers;
      const taggingType = String(req.body.type);

      // Launch the import
      const [recommendations, errors]: [ContainerRecommendation[], ContainerRecommendation[]] =
        await this.highlightService.applyRecommendations(blockers, taggingType);

      res.status(200).json({
        data: {
          applied : recommendations,
          notApplied: errors
        },
        message: "Not Applied recommendations",
      });
    } catch (error) {
      next(error);
    }
  };

  /**
   * Test a recommendation on the on-boarded applications
   * @param req Request
   * @param res Response
   * @param next Next Function
   */
  public testRecommendation = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      checkBody(req, "blocker");
      const blocker: ContainerRecommendation = req.body.blocker;

      // Launch the import
      const success: boolean = await this.highlightService.testRecommendation(blocker);

      res.status(200).json({ data: success, message: "Result of the test" });
    } catch (error) {
      next(error);
    }
  };
}
