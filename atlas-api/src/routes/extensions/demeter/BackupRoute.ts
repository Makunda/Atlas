import Route from "@interfaces/routes.interface";
import { Router } from "express";
import BackupController from "@controller/extensions/demeter/BackupController";

class BackupRoute implements Route {
  public path = "";
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}/create`, BackupController.createBackup);
    this.router.post(`${this.path}/rollback`, BackupController.rollback);
    this.router.post(`${this.path}/delete`, BackupController.deleteSave);
    this.router.post(`${this.path}/list`, BackupController.getSaveList);
  }
}

export default BackupRoute;
