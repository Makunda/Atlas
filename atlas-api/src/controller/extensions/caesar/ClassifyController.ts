import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";
import ClassificationService from "@services/extensions/caesar/microservice/ClassificationService";
import { wrapLogger } from "@shared/Logger";
import { HttpCode } from "@utils/HttpCode";
import ApiResponse from "@interfaces/api/ApiResponse";

export default class ClassifyController {

  private static classificationService = new ClassificationService();
  private static logger = wrapLogger("Classify Controller");

  /**
   * Create and return cluster of transaction in the application
   * @param req Request
   * @param res Response
   * @param _next Next Function
   */
  public static async getTransactionsCluster(req: Request, res: Response, _next: NextFunction): Promise<void> {
    await body("application", "Must specify an application name").isString().run(req);
    await body("minSize", "Must specify a name for the save").isInt().run(req);

    // Verify body
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
      const minSize = Number(req.body.minSize);

      const tree = this.classificationService.getTransactionClustersTree(application, minSize);
      res.status(HttpCode.SUCCESS).send({
        message: "Transaction clusters",
        data: tree,
      } as ApiResponse);
      return;
    } catch (e) {
      this.logger.error("Failed to classify the transaction in clusters", e);
      res.status(HttpCode.INTERNAL_ERROR).send({
        message: "Failed to classify the transaction in clusters",
        errors: ["Internal errors"],
      } as ApiResponse);
    }
  }

}