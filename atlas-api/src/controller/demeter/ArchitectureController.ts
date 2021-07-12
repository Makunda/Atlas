/* eslint-disable max-len */
import { NextFunction, Request, Response } from "express";
import ArchitectureService from "@services/demeter/ArchitectureService";
import { checkBody, checkParams } from "@shared/FunctionGlob";
import HttpException from "@exceptions/HttpException";
import Archimodel from "@interfaces/imaging/ArchiModel";
import Subset from "@interfaces/imaging/Subset";

export default class ArchitectureController {
  private architectureService = new ArchitectureService();

  /**
   * Get all architecture in one application
   * GET :application
   * @param req Request
   * @param res Response
   * @param next NextFunction
   */
  public getAllArchitectures = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const application = String(req.params.application);
      if (application === undefined)
        throw new HttpException(400, "Application parameter is undefined");

      const results: Archimodel[] =
        await this.architectureService.getAllArchitectures(application);
      res.status(200).json({ data: results, message: "All Architectures" });
    } catch (error) {
      next(error);
    }
  };

  /**
   * Delete an architecture by its ID
   * POST {
   *  id: number,
   *  application: string
   * }
   * @param req Request
   * @param res Response
   * @param next NextFunction
   */
  public deleteArchitectureByID = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      checkBody(req, "id");
      checkBody(req, "application");
      const id = Number(req.body.id);
      const application = String(req.body.application);

      await this.architectureService.deleteArchitectureByID(application, id);
      res.status(200).json({ data: true, message: "Deleted architecture" });
    } catch (error) {
      next(error);
    }
  };

  /**
   * Delete an subset by its ID
   * POST {
   *  id: number,
   *  application: string
   * }
   * @param req Request
   * @param res Response
   * @param next NextFunction
   */
  public deleteSubsetByID = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      checkBody(req, "id");
      checkBody(req, "application");
      const id = Number(req.body.id);
      const application = String(req.body.application);

      await this.architectureService.deleteSubset(application, id);
      res.status(200).json({ data: true, message: "Deleted subset" });
    } catch (error) {
      next(error);
    }
  };

  /**
   * Hide a subset by its ID
   * POST {
   *  id: number,
   * }
   * @param req Request
   * @param res Response
   * @param next NextFunction
   */
  public hideArchitectureById = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      checkBody(req, "id");
      const id = Number(req.body.id);

      await this.architectureService.hideArchitectureById(id);
      res.status(200).json({ data: true, message: "Hidden architecture" });
    } catch (error) {
      next(error);
    }
  };

  /**
   * Display an Architecture by its ID
   * POST {
   *  id: number
   * }
   * @param req Request
   * @param res Response
   * @param next NextFunction
   */
  public displayArchitectureById = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      checkBody(req, "id");
      const id = Number(req.body.id);

      await this.architectureService.displayArchitectureById(id);
      res.status(200).json({ data: true, message: "Display architecture" });
    } catch (error) {
      next(error);
    }
  };

  /**
   * Display a Architecture by its ID and all the children attached
   * POST {
   *  id: number
   * }
   * @param req Request
   * @param res Response
   * @param next NextFunction
   */
  public displayCompleteArchitectureById = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      checkBody(req, "id");
      const id = Number(req.body.id);

      await this.architectureService.displayCompleteArchitectureById(id);
      res.status(200).json({ data: true, message: "Display architecture" });
    } catch (error) {
      next(error);
    }
  };

  /**
   * Display a subset by its ID
   * POST {
   *  id: number
   * }
   * @param req Request
   * @param res Response
   * @param next NextFunction
   */
  public displaySubsetById = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      checkBody(req, "id");
      const id = Number(req.body.id);

      await this.architectureService.displaySubsetById(id);
      res.status(200).json({ data: true, message: "Display subset" });
    } catch (error) {
      next(error);
    }
  };

  /**
   *  Duplicate an Architecture
   * {
   *   id: number,
   *   name: string
   * }
   * @param req Request
   * @param res Response
   * @param next NextFunction
   */
  public duplicateArchitecture = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      checkBody(req, "id");
      checkBody(req, "name");
      const id = Number(req.body.id);
      const name = String(req.body.name);

      await this.architectureService.duplicateArchitecture(id, name);
      res.status(200).json({ data: true, message: "Architecture duplicated" });
    } catch (error) {
      next(error);
    }
  };

  /**
   *  Group all the nodes unassigned in an archimodel under a subset
   * {
   *   id: number,
   *   name: string,
   *   application: string
   * }
   * @param req Request
   * @param res Response
   * @param next NextFunction
   */
  public groupUnassigned = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      checkBody(req, "id");
      checkBody(req, "application");
      const id = Number(req.body.id);
      const application = String(req.body.application);

      await this.architectureService.groupUnassigned(application, id);
      res.status(200).json({ data: true, message: "Architecture duplicated" });
    } catch (error) {
      next(error);
    }
  };

  /**
   *  Duplicate the Level 5 to a new architecture
   * {
   *   name: string,
   *   application: string
   * }
   * @param req Request
   * @param res Response
   * @param next NextFunction
   */
  public duplicateCastTaxonomy = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      checkBody(req, "name");
      checkBody(req, "application");
      const name = String(req.body.name);
      const application = String(req.body.application);

      await this.architectureService.duplicateCastTaxonomy(application, name);
      res.status(200).json({ data: true, message: "Architecture duplicated" });
    } catch (error) {
      next(error);
    }
  };

  /**
   * Hide a subset by its ID
   * POST {
   *  id: number,
   *  application: string
   * }
   * @param req Request
   * @param res Response
   * @param next NextFunction
   */
  public hideSubsetById = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      checkBody(req, "id");
      const id = Number(req.body.id);

      await this.architectureService.hideSubsetById(id);
      res.status(200).json({ data: true, message: "Hidden Subset" });
    } catch (error) {
      next(error);
    }
  };

  /**
   * Update an Architecture by its ID
   * POST {
   *  id: number
   * }
   * @param req Request
   * @param res Response
   * @param next NextFunction
   */
  public updateArchitectureByID = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      checkBody(req, "id");
      const id = Number(req.body.id);
      const data: Archimodel = req.body;

      await this.architectureService.updateArchitectureByID(id, data);
      res.status(200).json({ data: true, message: "Updated architecture" });
    } catch (error) {
      next(error);
    }
  };

   /**
   * Generate a module from an architecture view
   * POST {
   *  id: number
   * }
   * @param req Request
   * @param res Response
   * @param next NextFunction
   */
    public generateModuleFromArchitecture = async (
      req: Request,
      res: Response,
      next: NextFunction
    ): Promise<void> => {
      try {
        checkBody(req, "id");
        const id = Number(req.body.id);
  
        const results: string[] = await this.architectureService.generateModules(id);
        res.status(200).json({ data: results, message: "Module generation" });
      } catch (error) {
        next(error);
      }
    };

  /**
   * Update a Subset by its ID
   * POST {
   *  id: number
   * }
   * @param req Request
   * @param res Response
   * @param next NextFunction
   */
  public updateSubsetByID = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      checkBody(req, "id");
      const id = Number(req.body.id);
      const data: Subset = req.body;

      await this.architectureService.updateSubsetByID(id, data);
      res.status(200).json({ data: true, message: "Updated susbet" });
    } catch (error) {
      next(error);
    }
  };
}
