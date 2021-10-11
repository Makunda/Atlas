import { Router } from "express";
import Route from "@interfaces/routes.interface";
import GroupController from "@controller/extensions/paris/GroupController";

class GroupRoute implements Route {
  public path = "";
  public router = Router();
  private groupController = new GroupController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/all`, this.groupController.getAllGroup);
    this.router.post(`${this.path}/add`, this.groupController.addGroup);
    this.router.delete(`${this.path}/delete/:id(\\d+)`, this.groupController.removeGroup);
    this.router.post(`${this.path}/addWithUseCase`, this.groupController.createAndAttach);
    this.router.post(`${this.path}/changeUseCase`, this.groupController.createAndAttach);
    this.router.post(`${this.path}/execute`, this.groupController.executeListGroup);
    this.router.post(`${this.path}/forecast`, this.groupController.forecastAllGroups);
    this.router.put(`${this.path}/update`, this.groupController.editGroup);
  }
}

export default GroupRoute;
