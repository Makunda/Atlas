import { Router } from "express";
import Route from "@interfaces/routes.interface";
import ExportController from "@controller/extensions/paris/ExportController";

class ExportRoute implements Route {
  public path = "";
  public router = Router();
  private exportController = new ExportController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/all`, this.exportController.getExportFile);
  }
}

export default ExportRoute;
