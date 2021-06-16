import {NextFunction, Request, Response} from 'express';
import {LaunchDetectionDto} from '@dtos/artemis/detection.dto';
import {
    CancellableDetectionPromise,
    Detection
} from '@interfaces/artemis/detectionStatus.interface';
import DetectionService from '@services/artemis/detection.service';
import {logger} from "@shared/logger";

class DetectionController {
    public detectionService: DetectionService = DetectionService.getInstance();

    public getStatusDetection = (req: Request, res: Response, next: NextFunction): void => {
        try {

            const application = String(req.params.application);
            const language = String(req.query.language);

            if (!application || !language) {
                res.status(400).send({data: "Missing parameters", message: "Bad request"});
            } else {
                const results: Detection | null = this.detectionService.getDetectionStatus(application, language);
                res.status(200).send({data: results, message: "status"});

            }


        } catch (error) {
            logger.error("(DetectionController) Failed to retrieve the status of the application", error)
            next(error);
        }
    };

    /**
     * Get the results of the ended detection
     * @param req
     * @param res
     * @param next
     */
    public getResults = (req: Request, res: Response, next: NextFunction): void => {
        try {
            const results: Detection[] = this.detectionService.getResults();
            res.status(200).send({data: results, message: "Results"});
        } catch (error) {
            logger.error("(DetectionController) Failed to serve results.", error)
            next(error);
        }
    };

    /**
     * POST : Find results for a specific ID.
     * Return null if nothing was found
     * @param req
     * @param res
     * @param next
     */
    public findResult = (req: Request, res: Response, next: NextFunction): void => {
        try {
            const idDetection = String(req.body.id);
            const results: Detection|null = this.detectionService.findResult(idDetection);
            res.status(200).send({data: results, message: `Result for detection with id ${idDetection}.`});
        } catch (error) {
            logger.error("(DetectionController) Failed to serve results.", error)
            next(error);
        }
    };

    /**
     * Flush all previous results
     * @param req
     * @param res
     * @param next
     */
    public flushResults = (req: Request, res: Response, next: NextFunction): void => {
        try {
            this.detectionService.flushResults();
            res.status(200).send({data: true, message: "Results Flushed"});
        } catch (error) {
            logger.error("(DetectionController) Failed to flush results.", error)
            next(error);
        }
    };

    /**
     * Get successful detection in Queue
     * @param req
     * @param res
     * @param next
     */
    public getSuccessfulDetections = (req: Request, res: Response, next: NextFunction): void => {
        try {

            const results: Detection[] = this.detectionService.getSuccessfulDetections();

            res.status(200).send({data: results, message: "success"});

        } catch (error) {
            logger.error("(DetectionController) Failed to retrieve successful detections")
            next(error);
        }
    };

    /**
     * Get pending detection in Queue
     * @param req
     * @param res
     * @param next
     */
    public getPendingDetections = (req: Request, res: Response, next: NextFunction): void => {
        try {
            const results: Detection[] = this.detectionService.getPendingDetections();
            res.status(200).send({data: results, message: "pending"});
        } catch (error) {
            logger.error("(DetectionController) Failed to retrieve pending detections")
            next(error);
        }
    };

    /**
     * Get the list of all the detection in a failure State
     * @param req
     * @param res
     * @param next
     */
    public getFailedDetections = (req: Request, res: Response, next: NextFunction): void => {
        try {
            const results: Detection[] = this.detectionService.getFailedDetections();
            res.status(200).send({data: results, message: "failed"});
        } catch (error) {
            logger.error("(DetectionController) Failed to retrieve failed detections")
            next(error);
        }
    };

    /**
     * POST Launch a detection on an application with a specific language
     * @param req
     * @param res
     * @param next
     */
    public launchDetection = (req: Request, res: Response, next: NextFunction): void => {
        try {
            const detectionParams: LaunchDetectionDto = req.body;
            const val: CancellableDetectionPromise = this.detectionService.launchDetection(detectionParams.application, detectionParams.language);
            const b: boolean = (val != null);
            res.status(200).send({data: b, message: "Detection launched"});
        } catch (error) {
            logger.error("(DetectionController) Failed to launch a detection.", error);
            next(error);
        }
    };

    /**
     * POST Stop a specific on-going detection
     * @param req
     * @param res
     * @param next
     */
    public stopDetection = (req: Request, res: Response, next: NextFunction): void => {
        try {
            const detectionParams: LaunchDetectionDto = req.body;
            this.detectionService.cancelDetection(detectionParams.application, detectionParams.language);

            res.status(200).send({data: true, message: "cancelled"});
        } catch (error) {
            logger.error("(DetectionController) Failed to stop a detection.", error);
            next(error);
        }
    };

}

export default DetectionController;
