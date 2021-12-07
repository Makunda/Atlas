import { Router } from "express";
import Route from "@interfaces/routes.interface";
import ClassifyController from "@controller/extensions/caesar/ClassifyController";

class ClassifyRoute implements Route {
  public path = "";
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/transactions/cluster`, ClassifyController.getTransactionsCluster);
  }
}

export default ClassifyRoute;
