import { DetectionCandidate } from "@dtos/artemis/detectionCandidate.dto";
import { CandidateResults } from "@interfaces/demeter/candidateResults.interface";
import { ArtemisCandidates } from "@services/artemis/artemisCandidates.service";
import { NextFunction, Request, Response } from "express";
import { FrameworkAssistantManager } from "src/assistants/framework.assistant";

class AssistantController {
  private candidateService = new ArtemisCandidates();
  private fAssistantManager = FrameworkAssistantManager.getInstance();

  public getCandidateList = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const candidateResults: DetectionCandidate[] = await this.candidateService.getCandidateList();
      res
        .status(200)
        .json({
          data: candidateResults,
          message: "Framework detection candidate",
        });
    } catch (error) {
      next(error);
    }
  };

  public createNew = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const candidateResults: DetectionCandidate[] = await this.candidateService.getCandidateList();
      res
        .status(200)
        .json({
          data: candidateResults,
          message: "Framework detection candidate",
        });
    } catch (error) {
      next(error);
    }
  };

  public getFrameworkCategories = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const categories: string[] = await this.fAssistantManager.getCategories();
      res
        .status(200)
        .json({
          data: categories,
          message: "Categories",
        });
    } catch (error) {
      next(error);
    }
  };

  public getDemeterActions = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const categories: string[] = await this.fAssistantManager.getDemeterActions();
      res
        .status(200)
        .json({
          data: categories,
          message: "Actions",
        });
    } catch (error) {
      next(error);
    }
  };
}

export default AssistantController;
