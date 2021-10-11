import { Router } from "express";
import Route from "@interfaces/routes.interface";
import LevelController from "@controller/extensions/demeter/LevelController";

class LevelRoute implements Route {
  public path = "";
  public router = Router();
  private levelController = new LevelController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    // GET
    this.router.get(`${this.path}/:name/candidates`, this.levelController.getCandidateLevelsApplication);
    this.router.get(`${this.path}/:name/grouped`, this.levelController.getDemeterLevelsApplication);
    this.router.get(`${this.path}/:name/all`, this.levelController.getAllLevels5);

    // POST
    this.router.post(`${this.path}/:name/group`, this.levelController.executeLevelGrouping);
    this.router.post(`${this.path}/:name/undo`, this.levelController.undoOneLevel);
    this.router.post(`${this.path}/:name/undo/all`, this.levelController.undoAllLevel);
    this.router.post(`${this.path}/:name/rename`, this.levelController.renameLevel);
  }
}

export default LevelRoute;
