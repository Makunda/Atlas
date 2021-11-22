import { NextFunction, Request, Response } from "express";
import DemeterService from "@services/extensions/demeter/DemeterService";
import { wrapLogger } from "@shared/Logger";
import { HttpCode } from "@utils/HttpCode";
import ApiResponse from "@interfaces/api/ApiResponse";

class DemeterController {
  private logger = wrapLogger("Demeter Controller");

  /**
   * Get the version of the demeter extension, if installed
   * @param req Request
   * @param res Response
   * @param next Next Function
   */
  public getVersion = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const version: string = await DemeterService.getVersion();
      res.status(200).json({ data: version, message: "version" });
    } catch (error) {
      this.logger.error("Failed to get the version of demeter.", error);
      res.status(HttpCode.INTERNAL_ERROR).send({ errors: ["Internal error"], message: "Failed to get the version of demeter." } as ApiResponse);
    }
  };
}

export default DemeterController;
