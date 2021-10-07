/* eslint-disable max-len */
import { AipSchema } from "@interfaces/aip/AipSchema";
import AipConfigurationNeo4jService from "@services/aip/AipConfigurationNeo4jService";
import AipConfigurationPgService from "@services/aip/AipConfigurationPgService";
import SchemaPgService from "@services/aip/SchemaPgService";
import { checkBody, checkParams, checkQuery } from "@shared/FunctionGlob";
import { logger } from "@shared/Logger";
import { NextFunction, Request, Response } from "express";
import { HttpCode } from "@utils/HttpCode";
import { AipConfiguration } from "@interfaces/aip/AipConfiguration";

/**
 * Controller for the AIP service
 */
export default class AipController {
  private aipConfigurationNeo4jService = AipConfigurationNeo4jService.getInstance();
  private aipConfigurationPgService = new AipConfigurationPgService();
  private schemaPgService = new SchemaPgService();

  /**
   * Get all the configuration
   * @param req Request
   * @param res Response
   * @param next Next Function
   */
  public getAllConfigurationNode = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const configNodes: AipConfiguration[] = await this.aipConfigurationNeo4jService.getAllConfigurationNode();
      res.status(200).json({ data: configNodes, message: "Configuration nodes list" });
    } catch (error) {
      next(error);
    }
  };

  /**
   * Get all the configuration
   * @param req Request
   * @param res Response
   * @param next Next Function
   */
  public getConfigurationNodeById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      checkQuery(req, "id");

      const id = Number(req.query.id);

      const configNode: AipConfiguration = await this.aipConfigurationNeo4jService.getConfigurationNodeById(id);
      res.status(200).json({ data: configNode, message: "Configuration node" });
    } catch (error) {
      next(error);
    }
  };

  /**
   * Get the attached schema
   * @param req Request
   * @param res Response
   * @param next Next Function
   */
  public getAttachedSchema = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      checkQuery(req, "id");

      const id = Number(req.query.id);

      const configNodes: AipSchema[] = await this.aipConfigurationNeo4jService.getAttachedSchemas(id);
      res.status(200).json({ data: configNodes, message: "Aip Schemas" });
    } catch (error) {
      next(error);
    }
  };

  /**
   * Create Configuration node
   * @param req Request
   * @param res Response
   * @param next Next Function
   */
  public createConfigurationNode = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      checkBody(req, "configuration");

      const configuration = req.body.configuration;
      const configNode: AipConfiguration = await this.aipConfigurationNeo4jService.createConfigurationNode(
        configuration
      );

      res.status(200).json({ data: configNode, message: "Aip Configuration" });
    } catch (error) {
      logger.error("Failed to create a new configuration node.", error);
      next(error);
    }
  };

  /**
   * Create Schema node
   *  POST Body {
   *      schema: AipSchema
   *      idConfigurationNode: number
   * }
   * @param req Request
   * @param res Response
   * @param next Next Function
   */
  public createSchemaNode = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      checkBody(req, "schema");
      checkParams(req, "id");

      const schema = req.body.schema as AipSchema;
      const idConfiguration = Number(req.params.id);

      const aipSchema: AipSchema = await this.aipConfigurationNeo4jService.createSchemaNode(schema, idConfiguration);
      res.status(200).json({ data: aipSchema, message: "Schema created" });
    } catch (error) {
      logger.error("Failed to create a schema node.", error);
      next(error);
    }
  };

  /**
   * Delete a  Schema node
   *  DELETE Params {
   *      id: number
   * }
   * @param req Request
   * @param res Response
   * @param next Next Function
   */
  public deleteSchemaNode = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      checkParams(req, "id");

      const idSchema = Number(req.params.id);

      await this.aipConfigurationNeo4jService.deleteSchemaNode(idSchema);
      res.status(200).json({ message: "Schema deleted" });
    } catch (error) {
      logger.error("Failed to delete a schema node.", error);
      next(error);
    }
  };

  /**
   * Delete a Configuration node
   *  POST Body {
   *      idConfiguration: number
   * }
   * @param req Request
   * @param res Response
   * @param next Next Function
   */
  public deleteConfigurationNode = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      checkParams(req, "id");

      const idConfiguration = Number(req.params.id);

      await this.aipConfigurationNeo4jService.deleteConfigurationNode(idConfiguration);
      res.status(200).json({ message: "Configuration deleted" });
    } catch (error) {
      next(error);
    }
  };

  /**
   * Delete a Configuration node
   *  POST Body {
   *      idConfiguration: number
   * }
   * @param req Request
   * @param res Response
   * @param next Next Function
   */
  public testConfiguration = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      checkBody(req, "configuration");

      const configuration = req.body.configuration as AipConfiguration;

      await this.aipConfigurationPgService.testConnection(configuration);

      res.status(HttpCode.SUCCESS).json({ message: "Valid configuration" });
    } catch (error) {
      res.status(HttpCode.BAD_REQUEST).json({ error: error });
    }
  };

  /**
   * Delete a Configuration node
   *  POST Body {
   *      idConfiguration: number
   * }
   * @param req Request
   * @param res Response
   * @param next Next Function
   */
  public getListSchema = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      checkParams(req, "id");

      const idConfiguration = Number(req.params.id);

      // getConfigurationNodeById
      const aipConfiguration = await this.aipConfigurationNeo4jService.getConfigurationNodeById(idConfiguration);

      const schemas = await this.schemaPgService.getSchema(aipConfiguration);

      res.status(HttpCode.SUCCESS).json({ message: "List of schema", data: schemas });
    } catch (error) {
      console.debug("Failed to retrieve the list of schema", error);
      res.status(HttpCode.BAD_REQUEST).json({ message: "Failed to get schemas", error: error });
    }
  };
}
