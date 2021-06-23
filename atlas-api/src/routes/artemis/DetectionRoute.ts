import {Router} from 'express';
import DetectionController from '@controller/artemis/DetectionController';
import Route from '@interfaces/routes.interface';
import DetectionQueueController from '@controller/artemis/DetectionQueueController';


class DetectionRoute implements Route {
    public path = '';
    public router = Router();
    public detectionsController = new DetectionController();
    public detectionQueueController = new DetectionQueueController();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(`${this.path}/status/:application`, this.detectionsController.getStatusDetection);
        this.router.get(`${this.path}/successes`, this.detectionsController.getSuccessfulDetections);
        this.router.get(`${this.path}/pending`, this.detectionsController.getPendingDetections);
        this.router.get(`${this.path}/failed`, this.detectionsController.getFailedDetections);
        this.router.post(`${this.path}/launch`, this.detectionsController.launchDetection);
        this.router.post(`${this.path}/stop`, this.detectionsController.stopDetection);

        this.router.get(`${this.path}/results`, this.detectionsController.getResults);
        this.router.post(`${this.path}/results/flush`, this.detectionsController.flushResults);
        this.router.post(`${this.path}/results`, this.detectionsController.findResult);

        this.router.post(`${this.path}/queue/add`, this.detectionQueueController.addCandidates);
        this.router.get(`${this.path}/queue/get`, this.detectionQueueController.getQueue);
        this.router.get(`${this.path}/queue/flush`, this.detectionQueueController.flush);
        this.router.get(`${this.path}/queue/current`, this.detectionQueueController.getCurrent);
    }
}

export default DetectionRoute;

