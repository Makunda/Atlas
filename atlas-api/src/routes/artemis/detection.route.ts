import { Router } from 'express';
import DetectionController from 'src/controller/artemis/detection.controller';
import Route from '../../interfaces/routes.interface';


class DetectionRoute implements Route {
  public path = '';
  public router = Router();
  public detectionsController = new DetectionController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {    
    this.router.get(`${this.path}/status/:name(\\w+)`, this.detectionsController.getStatusDetection);
    this.router.get(`${this.path}/successes`, this.detectionsController.getSuccessfullDetections);
    this.router.get(`${this.path}/pending`, this.detectionsController.getPendingDetections);
    this.router.get(`${this.path}/failed`, this.detectionsController.getFailedDetections);
    this.router.post(`${this.path}/launch`, this.detectionsController.launchDetection);
  }
}

export default DetectionRoute;

