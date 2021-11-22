import { NextFunction, Request, Response } from "express";
import { CandidateResults } from "@interfaces/demeter/candidateResults.interface";
import LevelService from "@services/extensions/demeter/LevelService";
import { Level5Group } from "@interfaces/demeter/level.interface";
import { body, param, validationResult } from "express-validator";
import { HttpCode } from "@utils/HttpCode";
import ApiResponse from "@interfaces/api/ApiResponse";
import { wrapLogger } from "@shared/Logger";

export default class LevelController {
  private levelService = new LevelService();
  private logger = wrapLogger("Level Controller");

  /*
   * Level Section
   */

  /**
   * Get the list of level that can be grouped in one application
   * @param req Request
   * @param res Reponse
   * @param _next Next function
   * @returns
   */
  public getCandidateLevelsApplication = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    await param("name", "Must specify an application name").isString().run(req);

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res
        .status(HttpCode.BAD_REQUEST)
        .send({ errors: errors.array().map(x => x.msg), message: "Failed to get list of candidate levels." } as ApiResponse);
      return;
    }

    try {
      const application = String(req.params.name);
      const results: CandidateResults[] = await this.levelService.getCandidatesLevel(application);
      res.status(HttpCode.SUCCESS).json({ data: results, message: "Candidate Levels" } as ApiResponse);
    } catch (error) {
      this.logger.error("Failed to get the list of levels in the application.", error);
      res
        .status(HttpCode.INTERNAL_ERROR)
        .send({ errors: ["Internal error"], message: "Failed to get the list of levels in the application." } as ApiResponse);
    }
  };

  /**
   * Get the list of levels created by demeter
   * @param req Request
   * @param res Response
   * @param _next Next Function
   * @returns
   */
  public getDemeterLevelsApplication = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    await param("name", "Must specify an application name").isString().run(req);

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res
        .status(HttpCode.BAD_REQUEST)
        .send({ errors: errors.array().map(x => x.msg), message: "Failed to get grouped levels in the application" } as ApiResponse);
      return;
    }

    try {
      const application = String(req.params.name);
      const results: Level5Group[] = await this.levelService.getGroupedDemeterLevel(application);
      res.status(HttpCode.SUCCESS).json({ data: results, message: "Grouped Levels" });
    } catch (error) {
      this.logger.error("Failed to get the list of grouped levels in the application.", error);
      res
        .status(HttpCode.INTERNAL_ERROR)
        .send({ errors: ["Internal error"], message: "Failed to get the list of grouped levels in the application." } as ApiResponse);
    }
  };

  /**
   * Execute the level grouping in one specific application
   * @param req Request
   * @param res Response
   * @param _next Next Function
   * @returns
   */
  public executeLevelGrouping = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    await param("name", "Must specify an application name").isString().run(req);

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res
        .status(HttpCode.BAD_REQUEST)
        .send({ errors: errors.array().map(x => x.msg), message: "Failed to execute grouping in the application." } as ApiResponse);
      return;
    }

    try {
      const application = String(req.params.name);
      const numGrouped: number = await this.levelService.executeGrouping(application);
      res.status(HttpCode.SUCCESS).json({ data: numGrouped, message: "Grouped" });
    } catch (error) {
      this.logger.error("Failed to execute grouping in the application.", error);
      res
        .status(HttpCode.INTERNAL_ERROR)
        .send({ errors: ["Internal error"], message: "Failed to execute grouping in the application." } as ApiResponse);
    }
  };

  /**
   * Retrieve the list of all Levels 5 in one specific application
   * @param req Request
   * @param res Response
   * @param _next Next Function
   * @returns
   */
  public getAllLevels5 = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    await param("name", "Must specify an application name").isString().run(req);

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res
        .status(HttpCode.BAD_REQUEST)
        .send({ errors: errors.array().map(x => x.msg), message: "Failed to get the list of level 5 in the application." } as ApiResponse);
      return;
    }

    try {
      const application = String(req.params.name);
      const level5Groups: Level5Group[] = await this.levelService.getAllLevels(application);
      res.status(HttpCode.SUCCESS).json({ data: level5Groups, message: "All Level 5" } as ApiResponse);
    } catch (error) {
      const message = "Failed to get the list of level 5 in the application.";
      this.logger.error(message, error);
      res.status(HttpCode.INTERNAL_ERROR).send({ errors: ["Internal error"], message: message } as ApiResponse);
    }
  };

  /**
   * Undo a demeter level
   * @param req Request
   * @param res Response
   * @param _next Next Function
   */
  public undoOneLevel = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    await param("name", "Must specify an application name").isString().run(req);
    await body("level", "Must specify a level to undo").isString().run(req);

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res
        .status(HttpCode.BAD_REQUEST)
        .send({ errors: errors.array().map(x => x.msg), message: "Failed to undo one level in the application." } as ApiResponse);
      return;
    }

    try {
      const application = String(req.params.name);
      const levelName = String(req.body.level);

      const result: boolean = await this.levelService.undoGroupedLevel5(application, levelName);
      res.status(HttpCode.SUCCESS).json({ data: result, message: "Undo level" } as ApiResponse);
    } catch (error) {
      const message = "Failed to undo one specific level in the application.";
      this.logger.error(message, error);
      res.status(HttpCode.INTERNAL_ERROR).send({ errors: ["Internal error"], message: message } as ApiResponse);
    }
  };

  /**
   * Undo all the Level 5 Created by Demeter in a specific application
   * @param req Request
   * @param res Response
   * @param _next Next fuction
   */
  public undoAllLevel = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    await param("name", "Must specify an application name").isString().run(req);

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res
        .status(HttpCode.BAD_REQUEST)
        .send({ errors: errors.array().map(x => x.msg), message: "Failed to undo all the level in the application." } as ApiResponse);
      return;
    }

    try {
      const application = String(req.params.name);
      const result: boolean = await this.levelService.undoAllLevels(application);
      res.status(200).json({ data: result, message: "Undo level" } as ApiResponse);
    } catch (error) {
      const message = "Failed to undo all the levels in the application.";
      this.logger.error(message, error);
      res.status(HttpCode.INTERNAL_ERROR).send({ errors: ["Internal error"], message: message } as ApiResponse);
    }
  };

  /**
   * Rename a level in the application
   * @param req Request
   * @param res Response
   * @param _next Next Function
   * @todo Jesus Christ, Refactor this function to take the id of the level
   */
  public renameLevel = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    await param("name", "Must specify an application name").isString().run(req);
    await body("level", "Must specify a level to rename").isString().run(req);
    await body("newName", "Must specify a new name for this level").isString().run(req);

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res
        .status(HttpCode.BAD_REQUEST)
        .send({ errors: errors.array().map(x => x.msg), message: "Failed to rename a level in the application." } as ApiResponse);
      return;
    }

    try {
      const application = String(req.params.name);
      const levelName = String(req.body.level);
      const newName = String(req.body.newLevel);

      const result: boolean = await this.levelService.renameLevel(application, levelName, newName);
      res.status(200).json({ data: result, message: "Undo level" });
    } catch (error) {
      const message = "Failed to rename a level in the application.";
      this.logger.error(message, error);
      res.status(HttpCode.INTERNAL_ERROR).send({ errors: ["Internal error"], message: message } as ApiResponse);
    }
  };
}
