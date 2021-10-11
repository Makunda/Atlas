/* eslint-disable max-len */
import { NextFunction, Request, Response } from "express";
import { logger } from "@shared/Logger";
import * as fs from "fs";
import HighlightController from "./HighlightController";
import HighlightServiceRecommendationService from "@services/highlight/file/HighlightServiceRecommendationService";
import CloudServiceRecommendation from "@interfaces/highlight/recommendations/CloudServiceRecommendation";
import ApiResponse from "@interfaces/api/ApiResponse";
import { HttpCode } from "@utils/HttpCode";
import { body, validationResult } from "express-validator";

export default class HighlightServiceRecommendationController implements HighlightController {
  protected highlightService = new HighlightServiceRecommendationService();

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
        res
          .status(HttpCode.BAD_REQUEST)
          .json({ errors: ["No file was detected during the upload"], message: "Recommendations Found" } as ApiResponse);
        return;
      }

      await body("application", "You need to provide a application name.").isString().run(req);
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        res
          .status(HttpCode.BAD_REQUEST)
          .send({ errors: errors.array().map(x => x.msg), message: "Failed to login. Incorrect parameters" } as ApiResponse);
        return;
      }

      const application = String(req.params.application);

      // Launch the import
      let recommendations: CloudServiceRecommendation[];

      try {
        // Try to parse the file
        recommendations = await this.highlightService.processExcel(application, file.path);
      } catch (err) {
        logger.error("Failed to process the file", err);
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

      res.status(200).json({ data: recommendations, message: "Service Recommendation Found" } as ApiResponse);
    } catch (error) {
      logger.error("Failed to process the Highlight File", error);
      res.status(HttpCode.INTERNAL_ERROR).json({ errors: ["Failed to process the file"], message: "Recommendations Found" } as ApiResponse);
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
      await body("blockers", "You need to send a blocker.").run(req);
      await body("type", "You need to specify a type of tag.").isString().run(req);
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        logger.error("Failed to apply recommendations", errors);
        res.status(HttpCode.BAD_REQUEST).send({ errors: errors.array().map(x => x.msg), message: "Failed to apply recommendations" } as ApiResponse);
        return;
      }

      const blockers: CloudServiceRecommendation[] = req.body.blockers;
      const taggingType: string = String(req.body.type);

      logger.info(`Service Recommendations received. Applying ${blockers.length}.`);

      // Launch the import
      const [recommendations, failures] = await this.highlightService.applyRecommendations(blockers, taggingType);
      logger.info(`Service Recommendations applied. Applied ${recommendations.length}.`);

      res.status(200).json({
        data: {
          applied: recommendations,
          notApplied: failures,
        },
        message: "Recommendations",
      } as ApiResponse);
    } catch (error) {
      logger.error("Failed to apply recommendations.", error);
      res.status(HttpCode.INTERNAL_ERROR).json({ errors: ["Failed to process the file"], message: "Recommendations Found" } as ApiResponse);
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
      res.status(HttpCode.NOT_IMPLEMENTED).json({ message: "Not implemented" });
    } catch (error) {
      next(error);
    }
  };
}
