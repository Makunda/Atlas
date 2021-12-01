/* eslint-disable max-len */
import { NextFunction, Request, Response } from "express";
import ApplicationService from "@services/imaging/ApplicationService";
import { logger } from "@shared/Logger";
import { ApplicationInsights } from "@interfaces/imaging/ApplicationInsights";
import ApiResponse from "@interfaces/api/ApiResponse";
import { HttpCode } from "@utils/HttpCode";
import { check, validationResult } from "express-validator";

export default class ApplicationController {
  private applicationService = new ApplicationService();

  /**
   * Get the full list of application
   * @param req Request
   * @param res Response
   * @param next Next function
   */
  public getApplicationList = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const applications: string[] = await this.applicationService.getApplicationList();
      res.status(HttpCode.SUCCESS).json({ data: applications, message: "Applications" } as ApiResponse);
    } catch (error) {
      logger.error("Failed to get the list of application.", error);
      res.status(HttpCode.INTERNAL_ERROR).json({ errors: ["Internal error"], message: "Failed to get the list of application" } as ApiResponse);
    }
  };

  /**
   * Return the application insights (Level4, Name, etc...) for one specific application
   * @param req Request
   * @param res Response
   * @param next Next function
   */
  public getApplicationInsights = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    await check("application", "Application parameters must be define.").run(req);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(HttpCode.BAD_REQUEST).send({ errors: errors.array().map(x => x.msg), message: "Failed get application insights" } as ApiResponse);
      return;
    }

    const applicationName = String(req.params.application);

    try {
      const insights: ApplicationInsights = await this.applicationService.getApplicationInsights(applicationName);
      res.status(HttpCode.SUCCESS).json({ data: insights, message: "Application Insights" } as ApiResponse);
    } catch (error) {
      logger.error(`Failed to get the insights of application ${applicationName}.`, error);
      res.status(HttpCode.BAD_REQUEST).send({ errors: ["Internal error"], message: "Failed get application insights" } as ApiResponse);
    }
  };

  /**
   * Get te complete list of applications with insights
   * @param req Request
   * @param res Response
   * @param next Next function
   */
  public getAllApplicationsInsights = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const insights  = await this.applicationService.getAllApplicationsInsights();
      res.status(HttpCode.SUCCESS).json({ data: insights, message: "All Insights" } as ApiResponse);
    } catch (error) {
      logger.error("Failed to get the insights of applications.", error);
      res.status(HttpCode.BAD_REQUEST).send({ errors: ["Internal error"], message: "Failed get application insights" } as ApiResponse);
    }
  };

  /**
   * Get the level 4 in one application
   * @param req Request
   * @param res Reponse
   * @param next Next Function
   */
  public getTechnologies = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    await check("application", "Application parameters must be define.").run(req);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(HttpCode.BAD_REQUEST).send({ errors: errors.array().map(x => x.msg), message: "Failed get the list of technologies" } as ApiResponse);
      return;
    }

    const applicationName = String(req.params.application);

    try {
      const insights: string[] = await this.applicationService.getTechnology(applicationName);
      res.status(HttpCode.SUCCESS).json({ data: insights, message: "Technologies" } as ApiResponse);
    } catch (error) {
      logger.error(`Failed to get Level4 in application ${applicationName}.`, error);
      res.status(HttpCode.BAD_REQUEST).send({ errors: ["Internal error"], message: "Failed the list of technologies" } as ApiResponse);
    }
  };

  /**
   * Get the Level 5 in one application
   * @param req Request
   * @param res Response
   * @param next Next function
   */
  public getLevels = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    await check("application", "Application parameters must be define.").run(req);
    await check("numLevel", "Level number parameters must be define.").run(req);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(HttpCode.BAD_REQUEST).send({ errors: errors.array().map(x => x.msg), message: "Failed get the list of levels " } as ApiResponse);
      return;
    }

    const applicationName = String(req.params.application);
    const numLevel = Number(req.params.numLevel);

    try {
      const insights: string[] = await this.applicationService.getLevels(applicationName, numLevel);
      res.status(HttpCode.SUCCESS).json({ data: insights, message: `Level${numLevel}` } as ApiResponse);
    } catch (error) {
      logger.error(`Failed to get Level5 in application ${applicationName}.`, error);
      res.status(HttpCode.BAD_REQUEST).send({ errors: ["Internal error"], message: "Failed the list of levels" } as ApiResponse);
    }
  };
}