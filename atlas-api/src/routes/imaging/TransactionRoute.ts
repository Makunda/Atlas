import { Router } from "express";
import Route from "@interfaces/routes.interface";
import TransactionController from "@controller/imaging/TransactionController";

class TransactionRoute implements Route {
  public path = "";
  public router = Router();
  private transactionController = new TransactionController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {

    // Numbers & volume
    this.router.get(`${this.path}/number/masked/:application`, this.transactionController.getNumberMaskedTransaction);
    this.router.get(`${this.path}/number/unmasked/:application`, this.transactionController.getNumberTransaction);
    this.router.post(`${this.path}/batch/masked/:application`, this.transactionController.getBatchMaskedTransaction);
    this.router.post(`${this.path}/batch/unmasked/:application`, this.transactionController.getBatchTransaction);
    this.router.post(`${this.path}/mask/filter`, this.transactionController.maskTransactionWithFilter);


    this.router.get(
      `${this.path}/insights/unmasked/:application`,
      this.transactionController.getInsightsUnmaskedTransactions,
    );

    // Mask & unmask
    this.router.post(`${this.path}/mask/single`, this.transactionController.maskTransaction);
    this.router.post(`${this.path}/unmask/single`, this.transactionController.unmaskTransaction);
    this.router.post(`${this.path}/unmask/all`, this.transactionController.unmaskAllTransaction);
    this.router.post(`${this.path}/mask/byCount`, this.transactionController.maskByObjectCount);
    this.router.post(`${this.path}/mask/byTerms`, this.transactionController.maskObjectByTerms);
    this.router.post(`${this.path}/mask/byTechnologies`, this.transactionController.maskByTechnologyCount);

    // Bumping
    this.router.post(`${this.path}/pin/single`, this.transactionController.pinTransaction);
    this.router.post(`${this.path}/unpin/single`, this.transactionController.unpinTransaction);

    // Misc
    this.router.post(`${this.path}/rename/single`, this.transactionController.renameTransaction);


    // Statistics
    this.router.post(`${this.path}/statistics/single`, this.transactionController.getTransactionStatistics);
  }
}

export default TransactionRoute;
