import { NextFunction, Request, Response } from 'express';
import { Framework } from '../interfaces/artemis/framework.interface';
import FrameworksService from '../services/artemis.service';
import {logger} from '@shared/Logger';
import { LaunchDetectionDto } from 'src/dtos/artemis/detection.dto';
import { DetectionResult, DetectionStatus } from 'src/interfaces/artemis/detectionStatus.interface';
import DetectionService from 'src/services/detection.service';

class DetectionController {
  public detectionService:DetectionService = new DetectionService();

  public getStatusDetection = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {

      const name = String(req.params.name);
      const results:DetectionResult = this.detectionService.getDetectionStatus(name);
      
      res.status(200).send({ data: results, message: results.status });
      
    } catch (error) {
      next(error);
    }
  };

  public getSuccessfullDetections = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {

      const results:DetectionResult[] = this.detectionService.getSuccesfulDetections();
      
      res.status(200).send({ data: results, message: "success" });
      
    } catch (error) {
      next(error);
    }
  };

  public getPendingDetections = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {

      const results:DetectionResult[] = this.detectionService.getPendingDetections();
      
      res.status(200).send({ data: results, message: "pending" });
      
    } catch (error) {
      next(error);
    }
  };


  public getFailedDetections = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {

      const results:DetectionResult[] = this.detectionService.getFailedDetections();
      
      res.status(200).send({ data: results, message: "failed" });
      
    } catch (error) {
      next(error);
    }
  };

  public launchDetection = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const detectionParams:LaunchDetectionDto = req.body;
      const val:boolean = this.detectionService.launchDetection(detectionParams.application, detectionParams.language);
      
      res.status(200).send({ data: val, message: "detection" });
      
    } catch (error) {
      next(error);
    }
  };

}

export default DetectionController;
