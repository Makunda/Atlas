import {NextFunction, Request, Response} from 'express';
import {LaunchDetectionDto} from '@dtos/artemis/detection.dto';
import {
    CancellableDetectionPromise,
    Detection
} from '@interfaces/artemis/detectionStatus.interface';
import DetectionService from '@services/artemis/detection.service';

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
            console.error("Failed to retrieve the status of the application", error)
            next(error);
        }
    };

    public getSuccessfullDetections = (req: Request, res: Response, next: NextFunction): void => {
        try {

            const results: Detection[] = this.detectionService.getSuccessfulDetections();

            res.status(200).send({data: results, message: "success"});

        } catch (error) {
            next(error);
        }
    };

    public getPendingDetections = (req: Request, res: Response, next: NextFunction): void => {
        try {

            const results: Detection[] = this.detectionService.getPendingDetections();

            res.status(200).send({data: results, message: "pending"});

        } catch (error) {
            next(error);
        }
    };


    public getFailedDetections = (req: Request, res: Response, next: NextFunction): void => {
        try {

            const results: Detection[] = this.detectionService.getFailedDetections();

            res.status(200).send({data: results, message: "failed"});

        } catch (error) {
            next(error);
        }
    };

    public launchDetection = (req: Request, res: Response, next: NextFunction): void => {
        try {
            const detectionParams: LaunchDetectionDto = req.body;
            const val: CancellableDetectionPromise = this.detectionService.launchDetection(detectionParams.application, detectionParams.language);
            const b: boolean = (val != null);
            res.status(200).send({data: b, message: "Detection launched"});
        } catch (error) {
            console.log(`Detection failed to launch`, error)

            next(error);
        }
    };

    public stopDetection = (req: Request, res: Response, next: NextFunction): void => {
        try {
            const detectionParams: LaunchDetectionDto = req.body;
            this.detectionService.cancelDetection(detectionParams.application, detectionParams.language);

            res.status(200).send({data: true, message: "cancelled"});
        } catch (error) {
            next(error);
        }
    };

}

export default DetectionController;
