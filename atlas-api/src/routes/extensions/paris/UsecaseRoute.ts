import { Router } from "express";
import Route from "@interfaces/routes.interface";
import UseCaseController from "@controller/extensions/paris/UsecaseController";

class UseCaseRoute implements Route {
  public path = "";
  public router = Router();
  private useCaseController = new UseCaseController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/all`, this.useCaseController.getAllUseCases);
    this.router.get(`${this.path}/roots`, this.useCaseController.getRootUseCases);
    this.router.get(`${this.path}/attached/:idNode(\\d+)/useCases`, this.useCaseController.getAttachedUseCases);
    this.router.get(`${this.path}/attached/:idNode(\\d+)/groups`, this.useCaseController.getAttachedGroups);
    this.router.post(`${this.path}/add`, this.useCaseController.addUseCase);
    this.router.post(`${this.path}/check/validity`, this.useCaseController.checkValidity);
    this.router.delete(`${this.path}/delete/:id`, this.useCaseController.removeUseCase);
    this.router.post(`${this.path}/addWithParent`, this.useCaseController.createAndAttach);
    this.router.put(`${this.path}/update`, this.useCaseController.editUseCase);
  }
}

export default UseCaseRoute;
