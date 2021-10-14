import { Router } from "express";
import Route from "@interfaces/routes.interface";
import PythiaController from "@controller/pythia/PythiaController";

class PythiasArtemisRoute implements Route {
  public path = "";
  public router = Router();
  public pythiaController = new PythiaController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/token`, this.pythiaController.getToken);
    this.router.post(`${this.path}/token`, this.pythiaController.postToken);
    this.router.get(`${this.path}/url`, this.pythiaController.getUrl);
    this.router.get(`${this.path}/status`, this.pythiaController.getStatus);
    this.router.get(`${this.path}/authentication/status`, this.pythiaController.getAuthenticationStatus);
  }
}

export default PythiasArtemisRoute;
