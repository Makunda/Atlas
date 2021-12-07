/* eslint-disable max-len */
import { NextFunction, Request, Response } from "express";
import ModuleService from "@services/extensions/demeter/ModuleService";
import IModule from "@interfaces/imaging/Module";
import { checkBody } from "@shared/FunctionGlob";
import HttpException from "@exceptions/HttpException";

export default class ModuleController {
  public moduleService = new ModuleService();

  /**
   * Get all modules
   * GET :application
   * @param req Request
   * @param res Response
   * @param next NextFunction
   */
  public getAllModules = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const application = String(req.params.application);
      if (application === undefined) throw new HttpException(400, "Application parameter is undefined");
      const results: IModule[] = await this.moduleService.getAllModule(application);
      res.status(200).json({ data: results, message: "All Modules" });
    } catch (error) {
      next(error);
    }
  };

  /**
   * Get all hidden modules
   * GET :application
   * @param req Request
   * @param res Response
   * @param next NextFunction
   */
  public getAllHiddenModules = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const application = String(req.params.application);
      const results: IModule[] = await this.moduleService.getHiddenModule(application);
      res.status(200).json({ data: results, message: "All Hidden Modules" });
    } catch (error) {
      next(error);
    }
  };

  /**
   * Hide a module by ID
   * POST {
   *  id: number
   * }
   * @param req Request
   * @param res Response
   * @param next NextFunction
   */
  public hideById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      checkBody(req, "id");

      const id = Number(req.body.id);
      await this.moduleService.hideById(id);
      res.status(200).json({ data: true, message: "Module was hidden" });
    } catch (error) {
      next(error);
    }
  };

  /**
   * Unhide by Id
   * POST {
   *  id: number
   * }
   * @param req Request
   * @param res Response
   * @param next NextFunction
   */
  public unhideById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      checkBody(req, "id");

      const id = Number(req.body.id);
      await this.moduleService.unhideById(id);
      res.status(200).json({ data: true, message: "Module was unhidden" });
    } catch (error) {
      next(error);
    }
  };

  /**
   * Merge two modules using their id
   * POST {
   *  application: string,
   *  idSource: number,
   *  idDest: number
   * }
   * @param req Request
   * @param res Response
   * @param next NextFunction
   */
  public mergeModules = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      checkBody(req, "application");
      checkBody(req, "idSource");
      checkBody(req, "idDest");

      const application = String(req.body.application);
      const idSource = Number(req.body.idSource);
      const idDest = Number(req.body.idDest);

      const num = await this.moduleService.mergeModule(application, idSource, idDest);
      res.status(200).json({ data: num, message: "Modules merged" });
    } catch (error) {
      next(error);
    }
  };

  /**
   * Delete by Id
   * DELETE {
   *  id: number
   * }
   * @param req Request
   * @param res Response
   * @param next NextFunction
   */
  public deleteById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      checkBody(req, "id");

      const id = Number(req.body.id);
      await this.moduleService.deleteById(id);
      res.status(200).json({ data: true, message: "Module was deleted" });
    } catch (error) {
      next(error);
    }
  };

  /**
   * Update by Id
   * PUT {
   *  id: number
   *
   * }
   * @param req Request
   * @param res Response
   * @param next NextFunction
   */
  public updateById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      checkBody(req, "id");

      const id = Number(req.body.id);
      const update = req.body;
      const module = await this.moduleService.updateModule(id, update);

      if (module != null) res.status(200).json({ data: module, message: "Module was updated" });
      else res.status(200).json({ data: null, message: `No module with id: ${id} was found` });
    } catch (error) {
      next(error);
    }
  };
}
