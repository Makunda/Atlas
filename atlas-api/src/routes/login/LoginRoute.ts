import { Router } from "express";
import Route from "@interfaces/routes.interface";
import LoginController from "@controller/login/LoginController";

class LoginRoute implements Route {
  public path = "";
  public router = Router();

  private loginService = new LoginController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}/`, this.loginService.postLogin);
  }
}

export default LoginRoute;
