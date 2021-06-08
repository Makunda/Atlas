import {NextFunction, Request, Response} from 'express';
import TransactionService from "@services/imaging/transaction.service";
import {ITransaction} from "@interfaces/imaging/transaction.interface";


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
        try {
            const applicationName = String(req.params.application);
            const state: boolean = await this.transactionService.unmaskAllTransaction(applicationName);
            res.status(200).json({data: state, message: 'UnMasked all'});

        } catch (error) {
            next(error);
        }
    };

    public maskObjectByTerms = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const applicationName = String(req.body.application);
            const terms: string[] = req.body.terms || [];
            const state: number = await this.transactionService.maskTransactionByTerms(applicationName, terms);
            res.status(200).json({data: state, message: 'UnMasked all'});

        } catch (error) {
            next(error);
        }
    };

    public maskByObjectCount = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const applicationName = String(req.body.application);
            const limit = Number(req.body.limit) || 0;
            const count: number = await this.transactionService.maskTransactionByCount(applicationName, limit);
            res.status(200).json({data: count, message: 'Masked'});

        } catch (error) {
            next(error);
        }
    };

}

export default TransactionController;