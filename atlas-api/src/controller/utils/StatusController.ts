import { NextFunction, Request, Response } from "express";
import UtilsService from "@services/utils/UtilsService";
import ApiResponse from "@interfaces/api/ApiResponse";
import { HttpCode } from "@utils/HttpCode";

export default class StatusController {
  /**
   * Health check of the neo4j database
   * @param req Request
   * @param res Response
   * @param _next Next Function
   */
  public healthCheck = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    res.set("Cache-Control", "no-store");
    res.status(HttpCode.SUCCESS).json({ data: true, message: "Status Atlas" } as ApiResponse);
  };
}
