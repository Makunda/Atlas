import { Router } from "express";
import Route from "@interfaces/routes.interface";
import { LicenseController } from "@controller/login/LicenseController";

class LicenseRoute implements Route {
  public path = "";
  public router = Router();

  private licenseController = new LicenseController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.licenseController.getLicenseStatus);
    this.router.post(`${this.path}`, this.licenseController.applyLicenseStatus);
  }
}

export default LicenseRoute;
