import {NextFunction, Request, Response} from 'express';
import TransactionService from "@services/imaging/transaction.service";
import {ITransaction} from "@interfaces/imaging/transaction.interface";
import {logger} from "@shared/logger";


class TransactionController {
    private transactionService = new TransactionService();

    public getNumberTransaction = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const applicationName = String(req.params.application);
            const transactions: number = await this.transactionService.getNumberTransaction(applicationName);
            res.status(200).json({data: transactions, message: 'Number transactions'});

        } catch (error) {
            next(error);
        }
    };

    public getNumberMaskedTransaction = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const applicationName = String(req.params.application);
            const transactions: number = await this.transactionService.getNumberMaskedTransaction(applicationName);
            res.status(200).json({data: transactions, message: 'Number masked transactions'});

        } catch (error) {
            next(error);
        }
    };

    public getInsightsUnmaskedTransactions = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const applicationName = String(req.params.application);
            const insights: Record<string, unknown> = await this.transactionService.getInsightsUnmaskedTransaction(applicationName);
            res.status(200).json({data: insights, message: 'Insights'});

        } catch (error) {
            next(error);
        }
    };

    public getBatchTransaction = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {

            const applicationName = String(req.params.application);
            const startIndex = Number(req.body.start);
            const endIndex = Number(req.body.end);

            const sort = String(req.body.sort) || "name";
            const sortDesc = Boolean(req.body.sortDesc) || false;

            const filter: Record<string, unknown> = req.body.filter || {};

            const transactions: ITransaction[] = await this.transactionService.getBatchTransaction(
                applicationName, startIndex, endIndex, filter, sort, sortDesc);
            res.status(200).json({data: transactions, message: 'Batch'});

        } catch (error) {
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

            const transactions: ITransaction[] = await this.transactionService.getBatchMaskedTransaction(applicationName, startIndex, endIndex, sort, sortDesc);
            res.status(200).json({data: transactions, message: 'Batch'});

        } catch (error) {
            next(error);
        }
    };



    /**
     * Pin with a prefix a specific Transaction in the application
     * POST Body: {
     *     application: string,
     *     application: number,
     *     prefix: string
     * }
     * @param req
     * @param res
     * @param next
     */
    public pinTransaction = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        const applicationName = String(req.params.application);
        const transactionID = Number(req.params.transactionID);

        if(!req.body.prefix) {
            res.status(403).json({err: true, message: 'Missing body parameter "prefix".'});
            return;
        }
        const prefix = String(req.body.prefix);

        try {

            const transaction: ITransaction = await this.transactionService
                .pinTransaction(applicationName, transactionID, prefix);
            res.status(200).json({data: transaction, message: 'Renamed Transaction'});

        } catch (error) {
            logger.error(`Failed to pin transaction with id ${transactionID} with prefix ${prefix}`);
            next(error);
        }
    };

    /**
     * Unpin with a prefix a specific Transaction in the application
     * POST Body: {
     *     application: string,
     *     application: number,
     *     prefix: string
     * }
     * @param req
     * @param res
     * @param next
     */
    public unpinTransaction = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        const applicationName = String(req.params.application);
        const transactionID = Number(req.params.transactionID);

        if(!req.body.prefix) {
            res.status(403).json({err: true, message: 'Missing body parameter "prefix".'});
            return;
        }
        const prefix = String(req.body.prefix);

        try {
            const transaction: ITransaction = await this.transactionService
                .unpinTransaction(applicationName, transactionID, prefix);
            res.status(200).json({data: transaction, message: 'Renamed Transaction'});

        } catch (error) {
            logger.error(`Failed to unpin transaction with id ${transactionID} with prefix ${prefix}`)
            next(error);
        }
    };

    /**
     * Rename a transaction in the application
     * POST Body: {
     *     application: string,
     *     application: number,
     *     name: string
     * }
     * @param req
     * @param res
     * @param next
     */
    public renameTransaction = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        const applicationName = String(req.params.application);
        const transactionID = Number(req.params.application);

        const transactionName = String(req.body.name);

        if(!transactionName || transactionName == "") {
            res.status(403)
                .json({err: true, message: 'Missing body parameter "name". This parameters cannot be empty.'});
            return;
        }

        try {
            const transaction: ITransaction = await this.transactionService.renameTransaction(applicationName, transactionID, transactionName);
            res.status(200).json({data: transaction, message: 'Renamed Transaction'});

        } catch (error) {
            logger.error(`Failed to rename a transaction with name ${transactionName} in application ${applicationName}.`, error);
            next(error);
        }
    };


    public maskTransaction = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const applicationName = String(req.params.application);
            const transactionID = Number(req.params.transactionID);
            const transaction: ITransaction = await this.transactionService.maskTransaction(applicationName, transactionID);
            res.status(200).json({data: transaction, message: 'Transaction'});

        } catch (error) {
            next(error);
        }
    };

    public maskTransactionWithFilter = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const applicationName = String(req.params.application);
            const filter: Record<string, unknown> = req.body.filter || {};

            const transactionMasked: number = await this.transactionService.maskTransactionWithFilter(applicationName, filter);
            res.status(200).json({data: transactionMasked, message: 'Transaction Masked'});

        } catch (error) {
            next(error);
        }
    };

    public unmaskTransaction = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const applicationName = String(req.params.application);
            const transactionID = Number(req.params.transactionID);
            const transaction: ITransaction = await this.transactionService.unmaskTransaction(applicationName, transactionID);
            res.status(200).json({data: transaction, message: 'Transaction'});

        } catch (error) {
            next(error);
        }
    };

    public unmaskAllTransaction = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        const applicationName = String(req.params.application);
        try {
            const state: boolean = await this.transactionService.unmaskAllTransaction(applicationName);
            res.status(200).json({data: state, message: 'UnMasked all'});

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
        const applicationName = String(req.body.application);
        const terms: string[] = req.body.terms || [];

        try {
            const state: number = await this.transactionService.maskTransactionByTerms(applicationName, terms);
            res.status(200).json({data: state, message: 'UnMasked all'});
        } catch (error) {
            logger.error(`Failed to mask Transaction with certain terms inside it in application with name ${applicationName}.`, error);
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
        const applicationName = String(req.body.application);
        const limit = Number(req.body.limit) || 0;

        try {
            const count: number = await this.transactionService.maskTransactionByCount(applicationName, limit);
            res.status(200).json({data: count, message: 'Masked'});
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
        const applicationName = String(req.body.application);
        const limit = Number(req.body.limit) || 0;

        try {
            const count: number = await this.transactionService.maskTransactionByTechnologyCount(applicationName, limit);
            res.status(200).json({data: count, message: 'Masked'});

        } catch (error) {
            logger.error(`Failed to mask Transaction by technology count in application ${applicationName}.`)
            next(error);
        }
    };

}

export default TransactionController;