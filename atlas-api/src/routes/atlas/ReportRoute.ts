import Route from "@interfaces/routes.interface";
import { Router } from "express";
import { ReportController } from "@controller/atlas/ReportController";

class ReportRoute implements Route {
  public path = "";
  public router = Router();
  private reportController = new ReportController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/find/all`, this.reportController.getReports);
    this.router.get(`${this.path}/find/byId/:id`, this.reportController.getReportById);
    this.router.get(`${this.path}/categories`, this.reportController.getCategories);
    this.router.post(`${this.path}/generate`, this.reportController.generateReport);
  }
}

export default ReportRoute;
