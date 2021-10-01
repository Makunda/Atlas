/* eslint-disable max-len */
import { NextFunction, Request, Response } from "express";
import { logger } from "@shared/Logger";
import DataCallGraphService from "@services/imaging/DatacallGraphServices";
import { checkBody } from "@shared/FunctionGlob";
import { DataCallGraph } from "@interfaces/imaging/DataCallGraph";

class DataCallGraphController {
  private dataCallGraphService: DataCallGraphService;

  public constructor() {
    try {
      this.dataCallGraphService = new DataCallGraphService();
    } catch (error) {
      logger.error("Failed to initialize the DataGraph Controller.", error);
    }
  }

  public getNumberDataGraph = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const applicationName = String(req.params.application);

    try {
      const dataGraphs: number = await this.dataCallGraphService.getNumberDataGraph(applicationName);
      res.status(200).json({ data: dataGraphs, message: "Number DataGraphs" });
    } catch (error) {
      logger.error(`Failed to retrieve the number of DataGraph in application ${applicationName}.`, error);
      next(error);
    }
  };

  public getNumberMaskedDataGraph = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const applicationName = String(req.params.application);

    try {
      const dataGraphs: number = await this.dataCallGraphService.getNumberMaskedDataGraph(applicationName);
      res.status(200).json({ data: dataGraphs, message: "Number masked dataGraphs" });
    } catch (error) {
      logger.error(`Failed to retrieve the number of DataGraph in application ${applicationName}.`, error);
      next(error);
    }
  };

  public getInsightsUnmaskedDataGraphs = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const applicationName = String(req.params.application);
      const insights: Record<string, unknown> = await this.dataCallGraphService.getInsightsUnmaskedDataGraph(
        applicationName
      );
      res.status(200).json({ data: insights, message: "Insights" });
    } catch (error) {
      next(error);
    }
  };

  public getBatchDataGraph = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const applicationName = String(req.params.application);
    const startIndex = Number(req.body.start);
    const endIndex = Number(req.body.end);

    const sort = String(req.body.sort) || "name";
    const sortDesc = Boolean(req.body.sortDesc) || false;

    const filter: Record<string, unknown> = req.body.filter || {};

    try {
      const dataGraphs: DataCallGraph[] = await this.dataCallGraphService.getBatchDataGraph(
        applicationName,
        startIndex,
        endIndex,
        filter,
        sort,
        sortDesc
      );
      res.status(200).json({ data: dataGraphs, message: "Batch" });
    } catch (error) {
      logger.error(`Failed to retrieve dataGraphs with filter in application ${applicationName}.`, error);
      next(error);
    }
  };

  public getBatchMaskedDataGraph = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const applicationName = String(req.params.application);
      const startIndex = Number(req.body.start);
      const endIndex = Number(req.body.end);

      const sort = String(req.body.sort) || "name";
      const sortDesc = Boolean(req.body.sortDesc) || false;

      const dataGraphs: DataCallGraph[] = await this.dataCallGraphService.getBatchMaskedDataGraph(
        applicationName,
        startIndex,
        endIndex,
        sort,
        sortDesc
      );
      res.status(200).json({ data: dataGraphs, message: "Batch" });
    } catch (error) {
      next(error);
    }
  };

  /**
   * Pin with a prefix a specific DataGraph in the application
   * POST Body: {
   *     application: string,
   *     dataCallGraphID: number,
   *     prefix: string
   * }
   * @param req
   * @param res
   * @param next
   */
  public pinDataGraph = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    checkBody(req, "application");
    checkBody(req, "dataCallGraphID");
    checkBody(req, "prefix");

    const applicationName = String(req.body.application);
    const dataCallGraphID = Number(req.body.dataCallGraphID);
    const prefix = String(req.body.prefix);

    try {
      const datagraph: DataCallGraph = await this.dataCallGraphService.pinDataGraph(
        applicationName,
        dataCallGraphID,
        prefix
      );
      res.status(200).json({ data: datagraph, message: "Renamed DataGraph" });
    } catch (error) {
      logger.error(`Failed to pin DataGraph with id ${dataCallGraphID} with prefix ${prefix}`);
      next(error);
    }
  };

  /**
   * Unpin with a prefix a specific DataGraph in the application
   * POST Body: {
   *     application: string,
   *     dataCallGraphID: number,
   *     prefix: string
   * }
   * @param req
   * @param res
   * @param next
   */
  public unpinDataGraph = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    if (!req.body) {
      res.status(400).json({ error: true, message: "Missing 'body' in request." });
      return;
    }

    checkBody(req, "application");

    checkBody(req, "dataCallGraphID");

    checkBody(req, "prefix");

    const applicationName = String(req.body.application);
    const dataCallGraphID = Number(req.body.dataCallGraphID);
    const prefix = String(req.body.prefix);

    try {
      const datagraph: DataCallGraph = await this.dataCallGraphService.unpinDataGraph(
        applicationName,
        dataCallGraphID,
        prefix
      );
      res.status(200).json({ data: datagraph, message: "Renamed DataGraph" });
    } catch (error) {
      logger.error(`Failed to unpin datagraph with id ${dataCallGraphID} with prefix ${prefix}`);
      next(error);
    }
  };

  /**
   * Rename a datagraph in the application
   * POST Body: {
   *     application: string,
   *     dataCallGraphID: number,
   *     datagraphName: string
   * }
   * @param req
   * @param res
   * @param next
   */
  public renameDataGraph = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    checkBody(req, "application");
    checkBody(req, "dataCallGraphID");
    checkBody(req, "dataCallGraphName");

    const applicationName = String(req.body.application);
    const dataCallGraphID = Number(req.body.dataCallGraphID);
    const datagraphName = String(req.body.dataCallGraphName);

    try {
      const datagraph: DataCallGraph = await this.dataCallGraphService.renameDataGraph(
        applicationName,
        dataCallGraphID,
        datagraphName
      );
      res.status(200).json({ data: datagraph, message: "Renamed DataGraph" });
    } catch (error) {
      logger.error(`Failed to rename a datagraph with name ${datagraphName} in application ${applicationName}.`, error);
      next(error);
    }
  };

  /**
   * Mask a datagraph in an application
   * POST Body {
   *     application: String,
   *     dataCallGraphID: Number
   * }
   * @param req
   * @param res
   * @param next
   */
  public maskDataGraph = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    checkBody(req, "application");
    checkBody(req, "dataCallGraphID");

    const applicationName = String(req.body.application);
    const dataCallGraphID = Number(req.body.dataCallGraphID);

    try {
      const datagraph: DataCallGraph = await this.dataCallGraphService.maskDataGraph(applicationName, dataCallGraphID);
      res.status(200).json({ data: datagraph, message: "DataGraph" });
    } catch (error) {
      logger.error(`Failed to mask the datagraph with Id:'${dataCallGraphID}' in application '${applicationName}'`);
      next(error);
    }
  };

  /**
   * Mask all teh datagraph not compliant with the filter
   * POST Body {
   *     application: string,
   *     filter: object
   * }
   * @param req
   * @param res
   * @param next
   */
  public maskDataGraphWithFilter = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    if (!req.body) {
      res.status(400).json({ error: true, message: "Missing 'body' in request." });
      return;
    }

    checkBody(req, "application");
    if (!req.body.filter) {
      res.status(400).json({
        error: true,
        message: "Missing 'filter' parameter in body (Object).",
      });
      return;
    }

    const applicationName = String(req.body.application);
    const filter: Record<string, unknown> = req.body.filter || {};

    try {
      const datagraphMasked: number = await this.dataCallGraphService.maskDataGraphWithFilter(applicationName, filter);
      res.status(200).json({ data: datagraphMasked, message: "DataGraph Masked" });
    } catch (error) {
      logger.error(`Failed to mask datagraph with filter in application ${applicationName}.`, error);
      next(error);
    }
  };

  /**
   * Unmask all datagraph
   * POST Body {
   *     application: String,
   *     dataCallGraphID: Number
   * }
   * @param req
   * @param res
   * @param next
   */
  public unmaskDataGraph = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    if (!req.body) {
      res.status(400).json({ error: true, message: "Missing 'body' in request." });
      return;
    }

    checkBody(req, "application");
    checkBody(req, "dataCallGraphID");

    const applicationName = String(req.body.application);
    const dataCallGraphID = Number(req.body.dataCallGraphID);

    try {
      const datagraph: DataCallGraph = await this.dataCallGraphService.unmaskDataGraph(
        applicationName,
        dataCallGraphID
      );
      res.status(200).json({ data: datagraph, message: "DataGraph" });
    } catch (error) {
      logger.error(
        `Failed to unmask datagraph with id:'${dataCallGraphID}' in application with name '${applicationName}.`,
        error
      );
      next(error);
    }
  };

  /**
   * Unmask ALL the datagraph in an application
   * POST Body {
   *     application: String
   * }
   * @param req
   * @param res
   * @param next
   */
  public unmaskAllDataGraph = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    if (!req.body) {
      res.status(400).json({ error: true, message: "Missing 'body' in request." });
      return;
    }

    checkBody(req, "application");

    const applicationName = String(req.body.application);

    try {
      const state: boolean = await this.dataCallGraphService.unmaskAllDataGraph(applicationName);
      res.status(200).json({ data: state, message: "UnMasked all" });
    } catch (error) {
      logger.error(`Failed to unmask All the dataGraphs in application ${applicationName}.`, error);
      next(error);
    }
  };

  /**
   * Mask DataGraph by Terms in their name
   * POST Body {
   *     application: string
   *     terms : string[]
   * }
   * @param req
   * @param res
   * @param next
   */
  public maskObjectByTerms = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    if (!req.body) {
      res.status(400).json({ error: true, message: "Missing 'body' in request." });
      return;
    }

    checkBody(req, "application");

    if (!req.body.terms) {
      res.status(400).json({
        error: true,
        message: "Missing 'terms' parameter in body (String[]).",
      });
      return;
    }

    const applicationName = String(req.body.application);
    const terms: string[] = req.body.terms || [];

    try {
      const state: number = await this.dataCallGraphService.maskDataGraphByTerms(applicationName, terms);
      res.status(200).json({ data: state, message: "UnMasked all" });
    } catch (error) {
      logger.error(
        `Failed to mask DataGraph with certain terms inside it in application with name ${applicationName}.`,
        error
      );
      next(error);
    }
  };

  /**
   * Mask the datagraph by their number of Object
   * POST Body {
   *     application: string,
   *     limit: number
   * }
   * @param req
   * @param res
   * @param next
   */
  public maskByObjectCount = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    if (!req.body) {
      res.status(400).json({ error: true, message: "Missing 'body' in request." });
      return;
    }

    checkBody(req, "application");

    if (!req.body.limit) {
      res.status(400).json({
        error: true,
        message: "Missing 'limit' parameter in body (Number).",
      });
      return;
    }

    const applicationName = String(req.body.application);
    const limit = Number(req.body.limit) || 0;

    try {
      const count: number = await this.dataCallGraphService.maskDataGraphByCount(applicationName, limit);
      res.status(200).json({ data: count, message: "Masked" });
    } catch (error) {
      logger.error(`Failed to mask DataGraph by object count in application ${applicationName}.`, error);
      next(error);
    }
  };

  /**
   * Mask the datagraph by their number of technology
   * POST Body {
   *     application: string,
   *     limit: number
   * }
   * @param req
   * @param res
   * @param next
   */
  public maskByTechnologyCount = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    if (!req.body) {
      res.status(400).json({ error: true, message: "Missing 'body' in request." });
      return;
    }

    checkBody(req, "application");

    if (!req.body.limit) {
      res.status(400).json({
        error: true,
        message: "Missing 'limit' parameter in body (Number).",
      });
      return;
    }

    const applicationName = String(req.body.application);
    const limit = Number(req.body.limit) || 0;

    try {
      const count: number = await this.dataCallGraphService.maskDataGraphByTechnologyCount(applicationName, limit);
      res.status(200).json({ data: count, message: "Masked" });
    } catch (error) {
      logger.error(`Failed to mask DataGraph by technology count in application ${applicationName}.`);
      next(error);
    }
  };
}

export default DataCallGraphController;
