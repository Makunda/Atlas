import { NextFunction, Request, Response } from "express";
import ApplicationService from "@services/imaging/ApplicationService";
import { IApplicationInsights } from "@interfaces/imaging/ApplicationInsights.interface";
import { logger } from "@shared/Logger";

class ApplicationController {
  private applicationService = new ApplicationService();

  /**
   * Get the full list of application
   * @param req
   * @param res
   * @param next
   */
  public getApplications = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const applications: string[] = await this.applicationService.getApplications();
      res.status(200).json({ data: applications, message: "applications" });
    } catch (error) {
      logger.error(`Failed to get the list of application.`, error);
      next(error);
    }
  };

  /**
   * Return the application insights (Level4, Name, etc...) for one specific application
   * @param req
   * @param res
   * @param next
   */
  public getApplicationsInsights = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const applicationName = String(req.params.application);
    if (!applicationName || applicationName == "") {
      res.status(400).json({ err: true, message: 'Missing "application" parameter' });
      return;
    }

    try {
      const insights: IApplicationInsights = await this.applicationService.getApplicationsInsights(applicationName);
      res.status(200).json({ data: insights, message: "Insights" });
    } catch (error) {
      logger.error(`Failed to get the insights of application ${applicationName}.`, error);
      next(error);
    }
  };

  /**
   * Get the level 4 in one application
   * @param req
   * @param res
   * @param next
   */
  public getTechnologies = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const applicationName = String(req.params.application);
    if (!applicationName || applicationName == "") {
      res.status(400).json({ err: true, message: 'Missing "application" parameter' });
      return;
    }

    try {
      const insights: string[] = await this.applicationService.getTechnology(applicationName);
      res.status(200).json({ data: insights, message: "Technology" });
    } catch (error) {
      logger.error(`Failed to get Level4 in application ${applicationName}.`, error);
      next(error);
    }
  };

  /**
   * Get the Level 5 in one application
   * @param req
   * @param res
   * @param next
   */
  public getLevels = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const applicationName = String(req.params.application);
    if (!applicationName || applicationName == "") {
      res.status(400).json({ err: true, message: 'Missing "application" parameter' });
      return;
    }

    if (!req.params.numLevel) {
      res.status(400).json({ err: true, message: 'Missing "numLevel" parameter' });
      return;
    }
    const numLevel = Number(req.params.numLevel);

    try {
      const insights: string[] = await this.applicationService.getLevels(applicationName, numLevel);
      res.status(200).json({ data: insights, message: `Level${numLevel}` });
    } catch (error) {
      logger.error(`Failed to get Level5 in application ${applicationName}.`, error);
      next(error);
    }
  };
}

export default ApplicationController;
