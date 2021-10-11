import { IGroup } from "@interfaces/paris/group.interface";
import GroupService from "@services/extensions/paris/GroupService";
import { NextFunction, Request, Response } from "express";
import { IGroupResult } from "@interfaces/paris/groupResult.interface";

export default class GroupController {
  public groupService = new GroupService();

  public getAllGroup = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const results: IGroup[] = await this.groupService.getAllGroups();
      res.status(200).json({ data: results, message: "Groups" });
    } catch (error) {
      next(error);
    }
  };

  public addGroup = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const body: IGroup = req.body;
      console.log("To ADD", body);
      const results: IGroup = await this.groupService.addGroup(body);
      res.status(200).json({ data: results, message: "Created" });
    } catch (error) {
      next(error);
    }
  };

  public editGroup = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const body: IGroup = req.body;
      const results: IGroup = await this.groupService.updateGroup(body);
      res.status(200).json({ data: results, message: "Updated" });
    } catch (error) {
      next(error);
    }
  };

  public createAndAttach = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const body: IGroup = req.body;
      const id = Number(req.body.idUseCase);
      const results: IGroup = await this.groupService.createAndAttach(body, id);
      res.status(200).json({ data: results, message: "Created and attached" });
    } catch (error) {
      next(error);
    }
  };

  public changeParent = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const id = Number(req.body.idGroup);
      const idParent = Number(req.body.idParent);
      const idNewParent = Number(req.body.idUseCase);
      await this.groupService.changeParent(id, idParent, idNewParent);
      res.status(200).json({ data: "ok", message: "Changed" });
    } catch (error) {
      next(error);
    }
  };

  public removeGroup = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const id = Number(req.params.id);
      const result: boolean = await this.groupService.delete(id);
      res.status(200).json({ data: result, message: "Deleted" });
    } catch (error) {
      next(error);
    }
  };

  /**
   * Launch the execution of the groups present in a list
   * {
   *  application: String,
   *  idList: number[],
   *  executionType : String
   * }
   */
  public executeListGroup = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const application = String(req.body.application);
      const idList = req.body.idList;
      const executionType = String(req.body.executionType);

      const result: number = await this.groupService.executeListGroup(application, idList, executionType);
      res.status(200).json({ data: result, message: "Grouped" });
    } catch (error) {
      next(error);
    }
  };

  public forecastAllGroups = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const application = String(req.body.application);

      const result: IGroupResult[] = await this.groupService.forecastAll(application);
      res.status(200).json({ data: result, message: "Forecast" });
    } catch (error) {
      next(error);
    }
  };
}
