/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable max-len */
import { Router } from "express";
import Route from "@interfaces/routes.interface";
import AipController from "@controller/aip/AipController";

export default class AipConfigurationRoute implements Route {
  public path = "";
  public router = Router();
  private aipController = new AipController();

  /**
   * Default constructor
   */
  constructor() {
    this.initializeRoutes();
  }

  /**
   * Initialize the rout of the AIP Configuration
   */
  private initializeRoutes() {
    // Configuration
    this.router.get(`${this.path}/configuration/all`, this.aipController.getAllConfigurationNode);

    // List all schemas attached to the db
    this.router.get(`${this.path}/configuration/byId/:id/overview`, this.aipController.getConfigurationNodeById);

    this.router.get(`${this.path}/configuration/byId/:id/all/schemas`, this.aipController.getListSchema);

    this.router.post(`${this.path}/configuration`, this.aipController.createConfigurationNode);
    this.router.delete(`${this.path}/configuration/delete/byId/:id`, this.aipController.deleteConfigurationNode);

    // Test the schema
    this.router.post(`${this.path}/test/configuration`, this.aipController.testConfiguration);

    // Schemas Routes
    this.router.get(`${this.path}/configuration/:id/schemas`, this.aipController.getAttachedSchema);
    this.router.post(`${this.path}/configuration/:id/add/schemas`, this.aipController.createSchemaNode);
    this.router.delete(`${this.path}/schemas/:id`, this.aipController.deleteSchemaNode);
  }
}
