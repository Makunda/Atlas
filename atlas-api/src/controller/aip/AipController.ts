/* eslint-disable max-len */
import { AipConfiguration } from "@interfaces/aip/Aipconfiguration";
import { AipSchema } from "@interfaces/aip/AipSchema";
import AipConfigurationService from "@services/aip/AipConfigurationService";
import { checkBody, checkParams, checkQuery } from "@shared/FunctionGlob";
import { logger } from "@shared/Logger";
import {NextFunction, Request, Response} from "express";

/**
 * Controller for the AIP service
 */
export default class AipController {
    private aipConfigurationService = AipConfigurationService.getInstance();

    /**
     * Get all the configuration 
     * @param req Request
     * @param res Response
     * @param next Next Function
     */
    public getAllConfigurationNode = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> => {
        try {
            const configNodes: AipConfiguration[] = await this.aipConfigurationService.getAllConfigurationNode();
            res.status(200).json({data: configNodes, message: "Configuration nodes"});
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
    public getAttachedSchema = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> => {
        try {
            checkQuery(req, "id");

            const id = Number(req.query.id);

            const configNodes: AipSchema[] = await this.aipConfigurationService.getAttachedSchemas(id);
            res.status(200).json({data: configNodes, message: "Aip Schemas"});
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
     public createConfigurationNode = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> => {
        try {
            checkBody(req, "configuration");

            const configuration = req.body.configuration;
            const configNode: AipConfiguration = await this.aipConfigurationService.createConfigurationNode(configuration);
            res.status(200).json({data: configNode, message: "Aip Configuration"});
        } catch (error) {
            logger.error("Failed to create a new configuration node.", error)
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
     public createSchemaNode = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> => {
        try {
            checkBody(req, "schema");
            checkParams(req, "id")

            const schema = req.body.schema;
            const idConfiguration = Number(req.params.id);

            const aipSchema: AipSchema = await this.aipConfigurationService.createSchemaNode(schema, idConfiguration);
            res.status(200).json({data: aipSchema, message: "Schema created"});
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
     public deleteSchemaNode = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> => {
        try {
            checkParams(req, "id")

            const idSchema = Number(req.params.id);

            await this.aipConfigurationService.deleteSchemaNode(idSchema);
            res.status(200).json({ message: "Schema deleted"});
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
     public deleteConfigurationNode = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> => {
        try {
            checkParams(req, "id")

            const idConfiguration = Number(req.params.id);

            await this.aipConfigurationService.deleteConfigurationNode(idConfiguration);
            res.status(200).json({ message: "Configuration deleted"});
        } catch (error) {
            next(error);
        }
    };
}