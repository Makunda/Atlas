import {Router} from 'express';
import Route from '@interfaces/routes.interface';
import TransactionController from "@controller/imaging/transaction.controller";


class TransactionRoute implements Route {
    public path = '';
    public router = Router();
    private transactionController = new TransactionController();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(`${this.path}/number/masked/:application`, this.transactionController.getNumberMaskedTransaction);
        this.router.get(`${this.path}/number/unmasked/:application`, this.transactionController.getNumberTransaction);
        this.router.get(`${this.path}/batch/masked/:application`, this.transactionController.getBatchMaskedTransaction);
        this.router.get(`${this.path}/batch/unmasked/:application`, this.transactionController.getBatchTransaction);
        this.router.get(`${this.path}/mask/:application/:transactionID`, this.transactionController.maskTransaction);
        this.router.get(`${this.path}/unmask/:application/:transactionID`, this.transactionController.unmaskTransaction);
    }
}

export default TransactionRoute;

