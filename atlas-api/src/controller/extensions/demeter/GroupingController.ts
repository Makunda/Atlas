import { NextFunction, Request, Response } from "express";
import { CandidateResults } from "@interfaces/demeter/candidateResults.interface";
import { DemeterGroup } from "@interfaces/demeter/demeterGroup.interface";
import GroupingService from "@services/extensions/demeter/GroupingService";
import { check, param, validationResult } from "express-validator";
import { HttpCode } from "@utils/HttpCode";
import ApiResponse from "@interfaces/api/ApiResponse";
import { logger, wrapLogger } from "@shared/Logger";

class GroupingController {
  private groupingService = new GroupingService();
  private logger = wrapLogger("Grouping Controller");

  /*
   * Module Section
   */

  // Get Module candidates
  public getCandidateModulesApplication = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    await param("name", "Must specify an application name").isString().run(req);

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(HttpCode.BAD_REQUEST).send({ errors: errors.array().map(x => x.msg), message: "Failed to get candidate modules" } as ApiResponse);
      return;
    }

    try {
      const application = String(req.params.name);
      const results: CandidateResults[] = await this.groupingService.getCandidatesModules(application);
      res.status(HttpCode.SUCCESS).json({ data: results, message: "candidates" });
    } catch (error) {
      logger.error("Failed to get the list of candidate modules.", error);
      res.status(HttpCode.INTERNAL_ERROR).send({ errors: ["Internal Error"], message: "Failed to get candidate modules" } as ApiResponse);
    }
  };

  // Get Demeter Modules
  public getDemeterModulesApplication = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    await param("name", "Must specify an application name").isString().run(req);

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(HttpCode.BAD_REQUEST).send({ errors: errors.array().map(x => x.msg), message: "Failed to get demeter modules" } as ApiResponse);
      return;
    }

    try {
      const application = String(req.params.name);
      const results: DemeterGroup[] = await this.groupingService.getGroupedDemeterModule(application);
      res.status(HttpCode.SUCCESS).json({ data: results, message: "Demeter groups" });
    } catch (error) {
      logger.error("Failed to get the list of demeter modules.", error);
      res.status(HttpCode.INTERNAL_ERROR).send({ errors: ["Internal Error"], message: "Failed to get the list of demeter modules." } as ApiResponse);
    }
  };
}

export default GroupingController;
