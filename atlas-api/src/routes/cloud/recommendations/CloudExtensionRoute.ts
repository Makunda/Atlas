import { Router } from "express";
import Route from "@interfaces/routes.interface";
import CloudExtensionController from "@controller/recommendations/CloudExtensionController";

class CloudExtensionRoute implements Route {
  public path = "";
  public router = Router();
  private recoController = new CloudExtensionController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/extension/all`, this.recoController.getCloudExtensionList);
  }
}

export default CloudExtensionRoute;
