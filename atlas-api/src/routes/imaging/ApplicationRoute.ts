import { Router } from "express";
import ApplicationController from "@controller/imaging/ApplicationController";
import Route from "@interfaces/routes.interface";

class ApplicationRoute implements Route {
  public path = "";
  public router = Router();
  private applicationController = new ApplicationController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/all`, this.applicationController.getApplicationList);
    this.router.get(`${this.path}/insights/all`, this.applicationController.getAllApplicationsInsights);
    this.router.get(`${this.path}/insights/single/:application`, this.applicationController.getApplicationInsights);
    this.router.get(`${this.path}/technologies/:application`, this.applicationController.getTechnologies);
    this.router.get(`${this.path}/levels/:application/:numLevel/name`, this.applicationController.getLevels);
  }
}

export default ApplicationRoute;
