import { Router } from "express";
import Route from "@interfaces/routes.interface";
import ExtensionController from "@controller/atlas/ExtensionController";
import ArtemisController from "@controller/extensions/artemis/ArtemisController";
import DemeterController from "@controller/extensions/demeter/DemeterController";

class ExtensionRoute implements Route {
  public path = "";
  public router = Router();
  public artemisController = new ArtemisController();
  public demeterController = new DemeterController();
  private extensionController = new ExtensionController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/demeter/version`, this.demeterController.getVersion);
    this.router.get(`${this.path}/demeter/validity`, this.extensionController.getValidityDemeter);
    this.router.get(`${this.path}/artemis/version`, this.artemisController.getVersion);
    this.router.get(`${this.path}/artemis/validity`, this.extensionController.getValidityArtemis);
  }
}

export default ExtensionRoute;
