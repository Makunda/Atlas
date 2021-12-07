import { Router } from "express";
import Route from "@interfaces/routes.interface";
import DataCallGraphController from "@controller/imaging/DataCallGraphController";

class DataCallGraphRoute implements Route {
  public path = "";
  public router = Router();
  private dataCallGraphController = new DataCallGraphController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/number/masked/:application`, this.dataCallGraphController.getNumberMaskedDataGraph);

    this.router.get(`${this.path}/number/unmasked/:application`, this.dataCallGraphController.getNumberDataGraph);

    this.router.post(`${this.path}/batch/masked/:application`, this.dataCallGraphController.getBatchMaskedDataGraph);

    this.router.post(`${this.path}/batch/unmasked/:application`, this.dataCallGraphController.getBatchDataGraph);

    this.router.post(`${this.path}/mask/filter`, this.dataCallGraphController.maskDataGraphWithFilter);

    this.router.get(
      `${this.path}/insights/unmasked/:application`,
      this.dataCallGraphController.getInsightsUnmaskedDataGraphs,
    );

    this.router.post(`${this.path}/mask/single`, this.dataCallGraphController.maskDataGraph);

    this.router.post(`${this.path}/unmask/single`, this.dataCallGraphController.unmaskDataGraph);

    this.router.post(`${this.path}/unmask/all`, this.dataCallGraphController.unmaskAllDataGraph);

    this.router.post(`${this.path}/mask/byCount`, this.dataCallGraphController.maskByObjectCount);

    this.router.post(`${this.path}/mask/byTerms`, this.dataCallGraphController.maskObjectByTerms);

    this.router.post(`${this.path}/mask/byTechnologies`, this.dataCallGraphController.maskByTechnologyCount);

    this.router.post(`${this.path}/pin/single`, this.dataCallGraphController.pinDataGraph);
    this.router.post(`${this.path}/unpin/single`, this.dataCallGraphController.unpinDataGraph);
    this.router.post(`${this.path}/rename/single`, this.dataCallGraphController.renameDataGraph);
  }
}

export default DataCallGraphRoute;
