import {NextFunction, Request, Response} from 'express';
import {ILevel} from "@interfaces/imaging/level.interface";
import LevelService from '@services/imaging/level.service';
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


    public getBatchTransaction = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {

            const applicationName = String(req.params.application);
            const startIndex = Number(req.query.start);
            const endIndex = Number(req.query.end);

            const transactions: ITransaction[] = await this.transactionService.getBatchTransaction(applicationName, startIndex, endIndex);
            res.status(200).json({data: transactions, message: 'Batch'});

        } catch (error) {
            next(error);
        }
    };

    public getBatchMaskedTransaction = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            console.log("Req query", req.query)
            const applicationName = String(req.params.application);
            const startIndex = Number(req.query.start);
            const endIndex = Number(req.query.end);
            const transactions: ITransaction[] = await this.transactionService.getBatchMaskedTransaction(applicationName, startIndex, endIndex);
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

}

export default TransactionController;