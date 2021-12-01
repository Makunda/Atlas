import { NextFunction, Request, Response } from "express";
import UtilsService from "@services/utils/UtilsService";
import ApiResponse from "@interfaces/api/ApiResponse";
import { HttpCode } from "@utils/HttpCode";

export default class Neo4jController {
  private utilService = new UtilsService();

  /**
   * Health check of the neo4j database
   * @param req Request
   * @param res Response
   * @param _next Next Function
   */
  public healthCheckDatabase = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    try {
      res.set("Cache-Control", "no-store");
      const status = this.utilService.healthCheckDatabase();
      res.status(HttpCode.SUCCESS).json({ data: status, message: "Status Neo4j" } as ApiResponse);
    } catch (error) {
      res.status(HttpCode.INTERNAL_ERROR).json({ errors: ["Neo4j is unreachable"], message: "Status" } as ApiResponse);
    }
  };

  /**
   * Check the presence of Application
   * @param req Request
   * @param res Response
   * @param _next Next Function
   */
  public healthCheckDatabaseApplication = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      res.set("Cache-Control", "no-store");
      const status = this.utilService.healthCheckDatabaseApplication();
      res.status(HttpCode.SUCCESS).json({ data: status, message: "Status Neo4j Application" } as ApiResponse);
    } catch (error) {
      res.status(HttpCode.INTERNAL_ERROR).json({ errors: ["No application found"], message: "Status" } as ApiResponse);
    }
  };
}
