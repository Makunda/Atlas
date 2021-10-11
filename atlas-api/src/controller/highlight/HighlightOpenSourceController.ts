/* eslint-disable max-len */
import { NextFunction, Request, Response } from "express";
import { checkBody, checkParams } from "@shared/FunctionGlob";
import HttpException from "@exceptions/HttpException";
import HighlightOssService from "@services/highlight/file/HighlightOssService";
import { logger } from "@shared/Logger";
import * as fs from "fs";
import OssRecommendation from "@interfaces/highlight/recommendations/OssRecommendation";
import HighlightController from "./HighlightController";

export default class HighlightOpenSourceController implements HighlightController {
  protected highlightService = new HighlightOssService();

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
      let recommendations: OssRecommendation[];

      try {
        // Try to parse the file
        recommendations = await this.highlightService.processExcel(application, file.path);
      } catch (err) {
        logger.warn("Failed to process the file");
        throw err;
      } finally {
        // Delete the file
        try {
          fs.unlinkSync(file.path);
          logger.info(`The temporary file '${file.path}' was successfully removed`);
        } catch (err) {
          logger.error(`Failed to remove temporary file ${file.path}.`, err);
        }
      }

      res.status(200).json({ data: recommendations, message: "OSS Recommendation Found" });
    } catch (error) {
      logger.error("Failed to process the Highlight File", error);
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
      const blockers: OssRecommendation[] = req.body.blockers;
      const taggingType: string = req.body.taggingType ? String(req.body.taggingType) : "tag";

      // Launch the import
      const [recommendations, errors]: [OssRecommendation[], OssRecommendation[]] =
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
      const blocker: OssRecommendation = req.body.blocker;

      // Launch the import
      const success: boolean = await this.highlightService.testRecommendation(blocker);

      res.status(200).json({ data: success, message: "Result of the test" });
    } catch (error) {
      next(error);
    }
  };
}
