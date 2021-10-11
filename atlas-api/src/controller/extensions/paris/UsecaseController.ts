import { IGroup } from "@interfaces/paris/group.interface";
import { IUseCase } from "@interfaces/paris/useCase.interface";
import UseCaseService from "@services/extensions/paris/UseCaseService";
import { NextFunction, Request, Response } from "express";

export default class UseCaseController {
  public useCaseService = new UseCaseService();

  public getAllUseCases = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const results: IUseCase[] = await this.useCaseService.getAllUseCases();
      res.status(200).json({ data: results, message: "Use cases" });
    } catch (error) {
      next(error);
    }
  };

  public getRootUseCases = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const results: IUseCase[] = await this.useCaseService.getRootUseCases();
      res.status(200).json({ data: results, message: "Root use cases" });
    } catch (error) {
      next(error);
    }
  };

  public getAttachedUseCases = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const id = String(req.params.idNode);
      const results: IUseCase[] = await this.useCaseService.getAttachedUseCases(parseInt(id));
      res.status(200).json({ data: results, message: "Attached use cases" });
    } catch (error) {
      next(error);
    }
  };

  public getAttachedGroups = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const id = String(req.params.idNode);
      const results: IGroup[] = await this.useCaseService.getAttachedGroups(parseInt(id));
      res.status(200).json({ data: results, message: "Attached use cases" });
    } catch (error) {
      next(error);
    }
  };

  public addUseCase = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const body: IUseCase = req.body;
      const results: IUseCase = await this.useCaseService.addUseCase(body);
      res.status(200).json({ data: results, message: "Created" });
    } catch (error) {
      next(error);
    }
  };

  public checkValidity = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const request = String(req.body.request);
      const awaitedResult = String(req.body.awaitedResult);

      const result: boolean = await this.useCaseService.checkValidity(request, awaitedResult);
      res.status(200).json({ data: result, message: "Validity" });
    } catch (error) {
      next(error);
    }
  };

  public editUseCase = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const parentId: number = Number(req.body.parentId) || -1;
      const body: IUseCase = req.body;

      const results: IUseCase = await this.useCaseService.updateUseCase(body, parentId);
      res.status(200).json({ data: results, message: "Updated" });
    } catch (error) {
      next(error);
    }
  };

  public createAndAttach = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const body: IUseCase = req.body;
      const id = Number(req.body.idParent);
      const results: IUseCase = await this.useCaseService.createAndAttach(body, id);
      res.status(200).json({ data: results, message: "Updated" });
    } catch (error) {
      next(error);
    }
  };

  public removeUseCase = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const id = Number(req.params.id);
      const result: boolean = await this.useCaseService.removeUseCase(id);
      res.status(200).json({ data: result, message: "Deleted" });
    } catch (error) {
      next(error);
    }
  };
}
