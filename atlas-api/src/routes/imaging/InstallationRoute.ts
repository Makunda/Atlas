import Route from "@interfaces/routes.interface";
import { Router } from "express";
import InstallationController from "@controller/imaging/InstallationController";

class InstallationRoute implements Route {
  public path = "";
  public router = Router();
  private installationController = new InstallationController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/imaging/path/base`, this.installationController.getImagingPath);
    this.router.get(`${this.path}/imaging/path/plugins`, this.installationController.getNeo4jPluginPath);
    this.router.get(`${this.path}/imaging/path/icons`, this.installationController.getIconFolder);

    this.router.post(`${this.path}/imaging/path/base`, this.installationController.setImagingPath);
  }
}

export default InstallationRoute;
