import { Router } from "express";
import Route from "@interfaces/routes.interface";
import { LoginController } from "@controller/login/LoginController";

class LoginRoute implements Route {
  public path = "";
  public router = Router();

  private loginController = new LoginController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/license/status`, this.loginController.getLicenseStatus);
    this.router.post(`${this.path}/license`, this.loginController.applyLicenseStatus);
  }
}

export default LoginRoute;
