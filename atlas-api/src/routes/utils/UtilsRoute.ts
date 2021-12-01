import { Router } from "express";
import Route from "@interfaces/routes.interface";
import Neo4jController from "@controller/utils/Neo4jController";
import StatusController from "@controller/utils/StatusController";

class UtilsRoute implements Route {
  public path = "";
  public router = Router();
  public neo4jController = new Neo4jController();
  public statusController = new StatusController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/atlas`, this.statusController.healthCheck);
    this.router.get(`${this.path}/neo4j/status`, this.neo4jController.healthCheckDatabase);
    this.router.get(`${this.path}/neo4j/application/status`, this.neo4jController.healthCheckDatabase);
  }
}

export default UtilsRoute;
