/* eslint-disable max-len */
import { NextFunction, Request, Response } from "express";
import TransactionService from "@services/imaging/TransactionService";
import { ITransaction } from "@interfaces/imaging/Transaction";
import { logger } from "@shared/Logger";
import { body, validationResult } from "express-validator";
import { HttpCode } from "@utils/HttpCode";
import ApiResponse from "@interfaces/api/ApiResponse";
import TransactionStatistics from "@interfaces/imaging/transaction/TransactionStatistics";

class TransactionController {
  private transactionService: TransactionService;

  public constructor() {
    try {
      this.transactionService = new TransactionService();
    } catch (error) {
      logger.error("Failed to initialize the Transaction Controller.", error);
    }
  }

  public getNumberTransaction = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const applicationName = String(req.params.application);

    try {
      const transactions: number = await this.transactionService.getNumberTransaction(applicationName);
      res.status(200).json({ data: transactions, message: "Number transactions" });
    } catch (error) {
      logger.error(`Failed to retrieve the number of Transaction in application ${applicationName}.`, error);
      next(error);
    }
  };

  public getNumberMaskedTransaction = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const applicationName = String(req.params.application);

    try {
      const transactions: number = await this.transactionService.getNumberMaskedTransaction(applicationName);
      res.status(200).json({ data: transactions, message: "Number masked transactions" });
    } catch (error) {
      logger.error(`Failed to retrieve the number of Transaction in application ${applicationName}.`, error);
      next(error);
    }
  };

  public getInsightsUnmaskedTransactions = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const applicationName = String(req.params.application);
      const insights: Record<string, unknown> = await this.transactionService.getInsightsUnmaskedTransaction(
        applicationName,
      );
      res.status(200).json({ data: insights, message: "Insights" });
    } catch (error) {
      next(error);
    }
  };

  public getBatchTransaction = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const applicationName = String(req.params.application);
    const startIndex = Number(req.body.start);
    const endIndex = Number(req.body.end);

    const sort = String(req.body.sort) || "name";
    const sortDesc = Boolean(req.body.sortDesc) || false;

    const filter: Record<string, unknown> = req.body.filter || {};

    try {
      const transactions: ITransaction[] = await this.transactionService.getBatchTransaction(
        applicationName,
        startIndex,
        endIndex,
        filter,
        sort,
        sortDesc,
      );
      res.status(200).json({ data: transactions, message: "Batch" });
    } catch (error) {
      logger.error(`Failed to retrieve transactions with filter in application ${applicationName}.`, error);
      next(error);
    }
  };

  public getBatchMaskedTransaction = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const applicationName = String(req.params.application);
      const startIndex = Number(req.body.start);
      const endIndex = Number(req.body.end);

      const sort = String(req.body.sort) || "name";
      const sortDesc = Boolean(req.body.sortDesc) || false;

      const transactions: ITransaction[] = await this.transactionService.getBatchMaskedTransaction(
        applicationName,
        startIndex,
        endIndex,
        sort,
        sortDesc,
      );
      res.status(200).json({ data: transactions, message: "Batch" });
    } catch (error) {
      next(error);
    }
  };

  /**
   * Pin with a prefix a specific Transaction in the application
   * POST Body: {
   *     application: string,
   *     transactionID: number,
   *     prefix: string
   * }
   * @param req
   * @param res
   * @param next
   */
  public pinTransaction = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    if (req.body == null) {
      res.status(400).json({ error: true, message: "Missing 'body' in request." });
      return;
    }

    if (!req.body.application) {
      res.status(400).json({
        error: true,
        message: "Missing 'application' parameter in body (String).",
      });
      return;
    }

    if (!req.body.transactionID) {
      res.status(400).json({
        error: true,
        message: "Missing 'transactionID' parameter in body (Number).",
      });
      return;
    }

    if (!req.body.prefix) {
      res.status(400).json({
        error: true,
        message: "Missing 'prefix' parameter in body (String).",
      });
      return;
    }

    const applicationName = String(req.body.application);
    const transactionID = Number(req.body.transactionID);
    const prefix = String(req.body.prefix);

    try {
      const transaction: ITransaction = await this.transactionService.pinTransaction(
        applicationName,
        transactionID,
        prefix,
      );
      res.status(200).json({ data: transaction, message: "Renamed Transaction" });
    } catch (error) {
      logger.error(`Failed to pin transaction with id ${transactionID} with prefix ${prefix}`);
      next(error);
    }
  };

  /**
   * Unpin with a prefix a specific Transaction in the application
   * POST Body: {
   *     application: string,
   *     transactionID: number,
   *     prefix: string
   * }
   * @param req
   * @param res
   * @param next
   */
  public unpinTransaction = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    if (!req.body) {
      res.status(400).json({ error: true, message: "Missing 'body' in request." });
      return;
    }

    if (!req.body.application) {
      res.status(400).json({
        error: true,
        message: "Missing 'application' parameter in body (String).",
      });
      return;
    }

    if (!req.body.transactionID) {
      res.status(400).json({
        error: true,
        message: "Missing 'transactionID' parameter in body (Number).",
      });
      return;
    }

    if (!req.body.prefix) {
      res.status(400).json({
        error: true,
        message: "Missing 'prefix' parameter in body (String).",
      });
      return;
    }

    const applicationName = String(req.body.application);
    const transactionID = Number(req.body.transactionID);
    const prefix = String(req.body.prefix);

    try {
      const transaction: ITransaction = await this.transactionService.unpinTransaction(
        applicationName,
        transactionID,
        prefix,
      );
      res.status(200).json({ data: transaction, message: "Renamed Transaction" });
    } catch (error) {
      logger.error(`Failed to unpin transaction with id ${transactionID} with prefix ${prefix}`);
      next(error);
    }
  };

  /**
   * Rename a transaction in the application
   * POST Body: {
   *     application: string,
   *     transactionID: number,
   *     transactionName: string
   * }
   * @param req
   * @param res
   * @param next
   */
  public renameTransaction = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    if (!req.body) {
      res.status(400).json({ error: true, message: "Missing 'body' in request." });
      return;
    }

    if (!req.body.application) {
      res.status(400).json({
        error: true,
        message: "Missing 'application' parameter in body (String).",
      });
      return;
    }
    if (!req.body.transactionID) {
      res.status(400).json({
        error: true,
        message: "Missing 'transactionID' parameter in body (Number).",
      });
      return;
    }

    if (!req.body.transactionName) {
      res.status(400).json({
        error: true,
        message: "Missing 'transactionName' parameter in body (String).",
      });
      return;
    }

    const applicationName = String(req.body.application);
    const transactionID = Number(req.body.transactionID);
    const transactionName = String(req.body.transactionName);

    try {
      const transaction: ITransaction = await this.transactionService.renameTransaction(
        applicationName,
        transactionID,
        transactionName,
      );
      res.status(200).json({ data: transaction, message: "Renamed Transaction" });
    } catch (error) {
      logger.error(
        `Failed to rename a transaction with name ${transactionName} in application ${applicationName}.`,
        error,
      );
      next(error);
    }
  };

  /**
   * Mask a transaction in an application
   * POST Body {
   *     application: String,
   *     transactionID: Number
   * }
   * @param req
   * @param res
   * @param next
   */
  public maskTransaction = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    if (!req.body) {
      res.status(400).json({ error: true, message: "Missing 'body' in request." });
      return;
    }

    if (!req.body.application) {
      res.status(400).json({
        error: true,
        message: "Missing 'application' parameter in body (String).",
      });
      return;
    }
    if (!req.body.transactionID) {
      res.status(400).json({
        error: true,
        message: "Missing 'transactionID' parameter in body (Number).",
      });
      return;
    }

    const applicationName = String(req.body.application);
    const transactionID = Number(req.body.transactionID);

    try {
      const transaction: ITransaction = await this.transactionService.maskTransaction(applicationName, transactionID);
      res.status(200).json({ data: transaction, message: "Transaction" });
    } catch (error) {
      logger.error(`Failed to mask the transaction with Id:'${transactionID}' in application '${applicationName}'`);
      next(error);
    }
  };

  /**
   * Get the statistics of a transaction using its ID
   * @param req Request
   * @param res Response
   * @param next Next function
   */
  public async getTransactionStatistics(req: Request, res: Response, next: NextFunction): Promise<void>  {
  await body("id", "Must specify a transaction id").isInt().run(req);

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(HttpCode.BAD_REQUEST).send({
                errors: errors.array().map(x => x.msg),
          message: "Failed to get transaction statistics.",
        } as ApiResponse);
        return;
        }

    try {
      const id = Number(req.body.id);

      const transactionService = new TransactionService();
      const statistics: TransactionStatistics = await transactionService.getTransactionStatistics(id);
      res.status(HttpCode.SUCCESS).send({ data: statistics, message: "Transaction Statistics" } as ApiResponse);
    } catch (error) {
      const message = "Failed to get the statistics of the transaction.";
      logger.error(message, error);
      res.status(HttpCode.INTERNAL_ERROR).send({ errors: ["Internal error"], message: message } as ApiResponse);
    }
  };

  /**
   * Get the statistics of a transaction using its ID
   * @param req Request
   * @param res Response
   * @param next Next function
   */
  public async hideTransactionTechnology(req: Request, res: Response, next: NextFunction): Promise<void>  {
    await body("id", "Must specify a transaction id").isInt().run(req);
    await body("objectType", "Must specify an object type").isString().run(req);
    await body("technology", "Must specify a technology").isString().run(req);

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(HttpCode.BAD_REQUEST).send({
        errors: errors.array().map(x => x.msg),
        message: "Failed to get transaction statistics.",
      } as ApiResponse);
      return;
    }

    try {
      const id = Number(req.body.id);
      const objectType = String(req.body.objectType);
      const technology = String(req.body.technology);

      const transactionService = new TransactionService();
      await transactionService.hideTechnology(id, objectType, technology);
      res.status(HttpCode.SUCCESS).send({ data: true, message: "Technology was hide" } as ApiResponse);
    } catch (error) {
      const message = "Failed to hide the technology of the transaction.";
      logger.error(message, error);
      res.status(HttpCode.INTERNAL_ERROR).send({ errors: ["Internal error"], message: message } as ApiResponse);
    }
  };

  /**
   * Get the statistics of a transaction using its ID
   * @param req Request
   * @param res Response
   * @param next Next function
   */
  public async showTransactionTechnology(req: Request, res: Response, next: NextFunction): Promise<void>  {
    await body("id", "Must specify a transaction id").isInt().run(req);
    await body("objectType", "Must specify an object type").isString().run(req);
    await body("technology", "Must specify a technology").isString().run(req);

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(HttpCode.BAD_REQUEST).send({
        errors: errors.array().map(x => x.msg),
        message: "Failed to get transaction statistics.",
      } as ApiResponse);
      return;
    }

    try {
      const id = Number(req.body.id);
      const objectType = String(req.body.objectType);
      const technology = String(req.body.technology);

      const transactionService = new TransactionService();
      await transactionService.displayTechnology(id, objectType, technology);
      res.status(HttpCode.SUCCESS).send({ data: true, message: "Technology was displayed" } as ApiResponse);
    } catch (error) {
      const message = "Failed to display the technology of the transaction.";
      logger.error(message, error);
      res.status(HttpCode.INTERNAL_ERROR).send({ errors: ["Internal error"], message: message } as ApiResponse);
    }
  };



  /**
   * Mask all teh transaction not compliant with the filter
   * POST Body {
   *     application: string,
   *     filter: object
   * }
   * @param req
   * @param res
   * @param next
   */
  public maskTransactionWithFilter = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    if (!req.body) {
      res.status(400).json({ error: true, message: "Missing 'body' in request." });
      return;
    }

    if (!req.body.application) {
      res.status(400).json({
        error: true,
        message: "Missing 'application' parameter in body (String).",
      });
      return;
    }
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
      const transactionMasked: number = await this.transactionService.maskTransactionWithFilter(
        applicationName,
        filter,
      );
      res.status(200).json({ data: transactionMasked, message: "Transaction Masked" });
    } catch (error) {
      logger.error(`Failed to mask transaction with filter in application ${applicationName}.`, error);
      next(error);
    }
  };

  /**
   * Unmask alla transaction
   * POST Body {
   *     application: String,
   *     transactionID: Number
   * }
   * @param req
   * @param res
   * @param next
   */
  public unmaskTransaction = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    if (!req.body) {
      res.status(400).json({ error: true, message: "Missing 'body' in request." });
      return;
    }

    if (!req.body.application) {
      res.status(400).json({
        error: true,
        message: "Missing 'application' parameter in body (String).",
      });
      return;
    }
    if (!req.body.transactionID) {
      res.status(400).json({
        error: true,
        message: "Missing 'transactionID' parameter in body (Number).",
      });
      return;
    }

    const applicationName = String(req.body.application);
    const transactionID = Number(req.body.transactionID);

    try {
      const transaction: ITransaction = await this.transactionService.unmaskTransaction(applicationName, transactionID);
      res.status(200).json({ data: transaction, message: "Transaction" });
    } catch (error) {
      logger.error(
        `Failed to unmask transaction with id:'${transactionID}' in application with name '${applicationName}.`,
        error,
      );
      next(error);
    }
  };

  /**
   * Unmask ALL the transaction in an application
   * POST Body {
   *     application: String
   * }
   * @param req
   * @param res
   * @param next
   */
  public unmaskAllTransaction = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    if (!req.body) {
      res.status(400).json({ error: true, message: "Missing 'body' in request." });
      return;
    }

    if (!req.body.application) {
      res.status(400).json({
        error: true,
        message: "Missing 'application' parameter in body (String).",
      });
      return;
    }

    const applicationName = String(req.body.application);

    try {
      const state: boolean = await this.transactionService.unmaskAllTransaction(applicationName);
      res.status(200).json({ data: state, message: "UnMasked all" });
    } catch (error) {
      logger.error(`Failed to unmask All the transactions in application ${applicationName}.`, error);
      next(error);
    }
  };

  /**
   * Mask Transaction by Terms in their name
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

    if (!req.body.application) {
      res.status(400).json({
        error: true,
        message: "Missing 'application' parameter in body (String).",
      });
      return;
    }

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
      const state: number = await this.transactionService.maskTransactionByTerms(applicationName, terms);
      res.status(200).json({ data: state, message: "UnMasked all" });
    } catch (error) {
      logger.error(
        `Failed to mask Transaction with certain terms inside it in application with name ${applicationName}.`,
        error,
      );
      next(error);
    }
  };

  /**
   * Mask the transaction by their number of Object
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

    if (!req.body.application) {
      res.status(400).json({
        error: true,
        message: "Missing 'application' parameter in body (String).",
      });
      return;
    }

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
      const count: number = await this.transactionService.maskTransactionByCount(applicationName, limit);
      res.status(200).json({ data: count, message: "Masked" });
    } catch (error) {
      logger.error(`Failed to mask Transaction by object count in application ${applicationName}.`, error);
      next(error);
    }
  };

  /**
   * Mask the transaction by their number of technology
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

    if (!req.body.application) {
      res.status(400).json({
        error: true,
        message: "Missing 'application' parameter in body (String).",
      });
      return;
    }

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
      const count: number = await this.transactionService.maskTransactionByTechnologyCount(applicationName, limit);
      res.status(200).json({ data: count, message: "Masked" });
    } catch (error) {
      logger.error(`Failed to mask Transaction by technology count in application ${applicationName}.`);
      next(error);
    }
  };
}

export default TransactionController;
