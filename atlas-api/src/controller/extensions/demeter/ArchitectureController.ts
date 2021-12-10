/* eslint-disable max-len */
import { NextFunction, Request, Response } from "express";
import ArchitectureService from "@services/extensions/demeter/ArchitectureService";
import { checkBody } from "@shared/FunctionGlob";
import HttpException from "@exceptions/HttpException";
import Archimodel from "@interfaces/imaging/ArchiModel";
import Subset from "@interfaces/imaging/Subset";
import { logger } from "@shared/Logger";
import { HttpCode } from "@utils/HttpCode";
import ApiResponse from "@interfaces/api/ApiResponse";
import { body, validationResult } from "express-validator";

export default class ArchitectureController {
  private architectureService = new ArchitectureService();

  /**
   * Get all architecture in one application
   * GET :application
   * @param req Request
   * @param res Response
   * @param next NextFunction
   */
  public getAllArchitectures = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const application = String(req.params.application);
      if (application === undefined) throw new HttpException(400, "Application parameter is undefined");

      const results: Archimodel[] = await this.architectureService.getAllArchitectures(application);
      res.status(HttpCode.SUCCESS).send({ data: results, message: "All Architectures" } as ApiResponse);
    } catch (error) {
      logger.error("Failed to get the list of architecture", error);
      res.status(HttpCode.INTERNAL_ERROR).send({ error: ["Internal error"], message: "Failed to get the list of architecture" } as ApiResponse);
    }
  };

  /**
   * Delete an architecture by its ID
   * POST {
   *  id: number,
   *  application: string
   * }
   * @param req Request
   * @param res Response
   * @param next NextFunction
   */
  public deleteArchitectureByID = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      checkBody(req, "id");
      checkBody(req, "application");
      const id = Number(req.body.id);
      const application = String(req.body.application);

      await this.architectureService.deleteArchitectureByID(application, id);
      res.status(HttpCode.SUCCESS).send({ data: true, message: "Deleted architecture" } as ApiResponse);
    } catch (error) {
      logger.error("Failed to delete the architecture by ID", error);
      res.status(HttpCode.INTERNAL_ERROR).send({ error: ["Internal error"], message: "Failed to delete the architecture" } as ApiResponse);
    }
  };

  /**
   * Delete an subset by its ID
   * POST {
   *  id: number,
   *  application: string
   * }
   * @param req Request
   * @param res Response
   * @param next NextFunction
   */
  public deleteSubsetByID = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      checkBody(req, "id");
      checkBody(req, "application");
      const id = Number(req.body.id);
      const application = String(req.body.application);

      await this.architectureService.deleteSubset(application, id);
      res.status(HttpCode.SUCCESS).send({ data: true, message: "Deleted subset" }  as ApiResponse);
    } catch (error) {
      logger.error("Failed to delete the subset by ID", error);
      res.status(HttpCode.INTERNAL_ERROR).send({ error: ["Internal error"], message: "Failed to delete the subset" } as ApiResponse);
    }
  };

  /**
   * Hide a subset by its ID
   * POST {
   *  id: number,
   * }
   * @param req Request
   * @param res Response
   * @param next NextFunction
   */
  public hideArchitectureById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    await body("id", "Must specify an ID").isInt().run(req);

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(HttpCode.BAD_REQUEST).send({
        errors: errors.array().map(x => x.msg),
        message: "Failed to hide the architecture by ID",
      } as ApiResponse);
      return;
    }

    try {
      const id = Number(req.body.id);

      await this.architectureService.hideArchitectureById(id);
      res.status(200).json({ data: true, message: "Hidden architecture" });
    } catch (error) {
      logger.error("Failed to hide the architecture by ID", error);
      res.status(HttpCode.INTERNAL_ERROR).send({ error: ["Internal error"], message: "Failed to hide the architecture by ID" } as ApiResponse);
    }
  };

  /**
   * Display an Architecture by its ID
   * POST {
   *  id: number
   * }
   * @param req Request
   * @param res Response
   * @param next NextFunction
   */
  public displayArchitectureById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    await body("id", "Must specify an ID").isInt().run(req);

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(HttpCode.BAD_REQUEST).send({
        errors: errors.array().map(x => x.msg),
        message: "Failed to display the architecture by ID",
      } as ApiResponse);
      return;
    }

    try {
      const id = Number(req.body.id);

      await this.architectureService.displayArchitectureById(id);
      res.status(HttpCode.SUCCESS).send({ data: true, message: "Architecture displayed" } as ApiResponse );
    } catch (error) {
      logger.error("Failed to display the architecture by ID", error);
      res.status(HttpCode.INTERNAL_ERROR).send({ error: ["Internal error"], message: "Failed to display the architecture by ID" } as ApiResponse);
    }
  };

  /**
   * Display a Architecture by its ID and all the children attached
   * POST {
   *  id: number
   * }
   * @param req Request
   * @param res Response
   * @param next NextFunction
   */
  public displayCompleteArchitectureById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    await body("id", "Must specify an ID").isInt().run(req);

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(HttpCode.BAD_REQUEST).send({
        errors: errors.array().map(x => x.msg),
        message: "Failed to display the architecture by ID",
      } as ApiResponse);
      return;
    }

    try {
      const id = Number(req.body.id);

      await this.architectureService.displayCompleteArchitectureById(id);
      res.status(HttpCode.SUCCESS).send({ data: true, message: "Display architecture" } as ApiResponse);
    } catch (error) {
      logger.error("Failed to display the architecture by ID", error);
      res.status(HttpCode.INTERNAL_ERROR).send({ error: ["Internal error"], message: "Failed to display the architecture by ID" } as ApiResponse);
    }
  };

  /**
   * Display a subset by its ID
   * POST {
   *  id: number
   * }
   * @param req Request
   * @param res Response
   * @param next NextFunction
   */
  public displaySubsetById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    await body("id", "Must specify an ID").isInt().run(req);

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(HttpCode.BAD_REQUEST).send({
        errors: errors.array().map(x => x.msg),
        message: "Failed to display the subset by ID",
      } as ApiResponse);
      return;
    }

    try {
      const id = Number(req.body.id);

      await this.architectureService.displaySubsetById(id);
      res.status(HttpCode.SUCCESS).send({ data: true, message: "Displayed subset" } as ApiResponse);
    } catch (error) {
      logger.error("Failed to display the subset by ID", error);
      res.status(HttpCode.INTERNAL_ERROR).send({ error: ["Internal error"], message: "Failed to display the subset by ID" } as ApiResponse);
    }
  };

  /**
   *  Duplicate an Architecture
   * {
   *   id: number,
   *   name: string
   * }
   * @param req Request
   * @param res Response
   * @param next NextFunction
   */
  public duplicateArchitecture = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    await body("id", "Must specify an ID").isInt().run(req);
    await body("name", "Must specify a name for the new architecture").isString().run(req);

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(HttpCode.BAD_REQUEST).send({
        errors: errors.array().map(x => x.msg),
        message: "Failed to duplicate the architecture",
      } as ApiResponse);
      return;
    }

    try {
      const id = Number(req.body.id);
      const name = String(req.body.name);

      await this.architectureService.duplicateArchitecture(id, name);
      res.status(HttpCode.SUCCESS).send({ data: true, message: "Architecture duplicated" } as ApiResponse);
    } catch (error) {
      logger.error("Failed to duplicate the architecture", error);
      res.status(HttpCode.INTERNAL_ERROR).send({ error: ["Internal error"], message: "Failed to duplicate the architecture" } as ApiResponse);
    }
  };

  /**
   *  Group all the nodes unassigned in an archimodel under a subset
   * {
   *   id: number,
   *   name: string,
   *   application: string
   * }
   * @param req Request
   * @param res Response
   * @param next NextFunction
   */
  public groupUnassigned = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    await body("id", "Must specify an ID").isInt().run(req);
    await body("application", "Must specify an application").isString().run(req);

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(HttpCode.BAD_REQUEST).send({
        errors: errors.array().map(x => x.msg),
        message: "Failed to group unassigned objects",
      } as ApiResponse);
      return;
    }

    try {

      const id = Number(req.body.id);
      const application = String(req.body.application);

      await this.architectureService.groupUnassigned(application, id);
      res.status(HttpCode.SUCCESS).send({ data: true, message: "Unassigned object grouped" } as ApiResponse);
    } catch (error) {
      logger.error("Failed to create unassigned layer", error);
      res.status(HttpCode.INTERNAL_ERROR).send({ error: ["Internal error"], message: "Failed to create unassigned layer" } as ApiResponse);

    }
  };

  /**
   *  Duplicate the Level 5 to a new architecture
   * {
   *   name: string,
   *   application: string
   * }
   * @param req Request
   * @param res Response
   * @param next NextFunction
   */
  public duplicateCastTaxonomy = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    await body("name", "Must specify a name").isString().run(req);
    await body("application", "Must specify an application").isString().run(req);

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(HttpCode.BAD_REQUEST).send({
        errors: errors.array().map(x => x.msg),
        message: "Failed to duplicate Cast Taxonomy",
      } as ApiResponse);
      return;
    }

    try {
      const name = String(req.body.name);
      const application = String(req.body.application);

      await this.architectureService.duplicateCastTaxonomy(application, name);
      res.status(HttpCode.SUCCESS).json({ data: true, message: "Architecture duplicated" });
    } catch (error) {
      logger.error("Failed to duplicate CAST Taxonomy", error);
      res.status(HttpCode.INTERNAL_ERROR).send({ error: ["Internal error"], message: "Failed to duplicate CAST Taxonomy" } as ApiResponse);

    }
  };

  /**
   * Hide a subset by its ID
   * POST {
   *  id: number,
   *  application: string
   * }
   * @param req Request
   * @param res Response
   * @param next NextFunction
   */
  public hideSubsetById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    await body("id", "Must specify an id (as an Integer)").isInt().run(req);

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(HttpCode.BAD_REQUEST).send({
        errors: errors.array().map(x => x.msg),
        message: "Failed to hide the subset",
      } as ApiResponse);
      return;
    }

    try {
      const id = Number(req.body.id);

      await this.architectureService.hideSubsetById(id);
      res.status(HttpCode.SUCCESS).send({ data: true, message: "Hidden Subset" } as ApiResponse);
    } catch (error) {
      logger.error("Failed to hide a subset by ID", error);
      res.status(HttpCode.INTERNAL_ERROR).send({ error: ["Internal error"], message: "Failed to hide a subset by ID" } as ApiResponse);
    }
  };

  /**
   * Update an Architecture by its ID
   * POST {
   *  id: number
   * }
   * @param req Request
   * @param res Response
   * @param next NextFunction
   */
  public updateArchitectureByID = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    await body("id", "Must specify an id (as an Integer)").isInt().run(req);

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(HttpCode.BAD_REQUEST).send({
        errors: errors.array().map(x => x.msg),
        message: "Failed to update the architecture",
      } as ApiResponse);
      return;
    }

    try {
      const id = Number(req.body.id);
      const data: Archimodel = req.body;

      await this.architectureService.updateArchitectureByID(id, data);
      res.status(200).json({ data: true, message: "Updated architecture" });
    } catch (error) {
      logger.error("Failed to update the architecture by ID", error);
      res.status(HttpCode.INTERNAL_ERROR).send({ error: ["Internal error"], message: "Failed to update the architecture by ID" } as ApiResponse);
    }
  };

  /**
   * Generate a module from an architecture view
   * POST {
   *  id: number
   * }
   * @param req Request
   * @param res Response
   * @param next NextFunction
   */
  public generateModuleFromArchitecture = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    await body("id", "Must specify an id (as an Integer)").isInt().run(req);
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(HttpCode.BAD_REQUEST).send({
        errors: errors.array().map(x => x.msg),
        message: "Failed to generate module definition from the architecture",
      } as ApiResponse);
      return;
    }

    try {
      const id = Number(req.body.id);
      const results: string[] = await this.architectureService.generateModules(id);

      res.status(HttpCode.SUCCESS).json({ data: results, message: "Module generation" } as ApiResponse);
    } catch (error) {
      logger.error("Failed to generate modules from the architecture", error);
      res.status(HttpCode.INTERNAL_ERROR).send({ error: ["Internal error"], message: "Failed to generate modules from the architecture" } as ApiResponse);

    }
  };

  /**
   * Update a Subset by its ID
   * POST {
   *  id: number
   * }
   * @param req Request
   * @param res Response
   * @param next NextFunction
   */
  public updateSubsetByID = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    await body("id", "Must specify an id (as an Integer)").isInt().run(req);
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(HttpCode.BAD_REQUEST).send({
        errors: errors.array().map(x => x.msg),
        message: "Failed to update subset by Id",
      } as ApiResponse);
      return;
    }

    try {
      const id = Number(req.body.id);
      const data: Subset = req.body;

      await this.architectureService.updateSubsetByID(id, data);
      res.status(HttpCode.SUCCESS).send({ data: true, message: "Updated subset" } as ApiResponse);
    } catch (error) {
      logger.error("Failed to update the subset by id", error);
      res.status(HttpCode.INTERNAL_ERROR).send({ error: ["Internal error"], message: "Failed to update the subset by id" } as ApiResponse);

    }
  };
}
