import { NextFunction, Request, Response } from "express";
import { LaunchDetectionDto } from "@dtos/artemis/detection.dto";
import { CancellableDetectionPromise, Detection } from "@interfaces/artemis/DetectionStatus";
import DetectionService from "@services/extensions/artemis/DetectionService";
import { logger } from "@shared/Logger";
import ArtemisParameters from "@entities/extensions/artemis/ArtemisParameters";
import ApiResponse from "@interfaces/api/ApiResponse";
import { HttpCode } from "@utils/HttpCode";
import { body, check, validationResult } from "express-validator";
import Pythia from "@modules/pythia/Pythia";

export default class DetectionController {
  public detectionService: DetectionService = DetectionService.getInstance();

  /**
   * Return the Status of the detection for a language on one application
   * @param req Request
   * @param res Response
   * @param next Next function
   * @returns
   */
  public getStatusDetection = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      await check("application", "You must provide an application name.").run(req);
      await check("language", "You must provide a language of detection.").run(req);
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        res
          .status(HttpCode.BAD_REQUEST)
          .send({ errors: errors.array().map(x => x.msg), message: "Failed to get the Detection status" } as ApiResponse);
        return;
      }

      const application = String(req.params.application);
      const language = String(req.query.language);

      const results: Detection | null = this.detectionService.getDetectionStatus(application, language);
      res.status(HttpCode.SUCCESS).send({ data: results, message: "Application status" } as ApiResponse);
    } catch (error) {
      logger.error("DetectionController :  Failed to retrieve the status of the application.", error);
      res
        .status(HttpCode.INTERNAL_ERROR)
        .send({ errors: ["Internal Error"], message: " Failed to retrieve the status of the application." } as ApiResponse);
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
      res.status(HttpCode.INTERNAL_ERROR).send({ data: results, message: "Results" });
    } catch (error) {
      logger.error("DetectionController :  Failed to retrieve the results of the detection.", error);
      res
        .status(HttpCode.INTERNAL_ERROR)
        .send({ errors: ["Internal Error"], message: "Failed to retrieve the results of the detection" } as ApiResponse);
    }
  };

  /**
   * POST : Find results for a specific ID.
   * Return null if nothing was found
   * @param req
   * @param res
   * @param next
   */
  public findResult = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      await body("id", "You must provide an id of detection.").run(req);
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        res
          .status(HttpCode.BAD_REQUEST)
          .send({ errors: errors.array().map(x => x.msg), message: "Failed to find the results of the detection" } as ApiResponse);
        return;
      }

      const idDetection = String(req.body.id);
      const results: Detection | null = this.detectionService.findResult(idDetection);
      res.status(HttpCode.SUCCESS).send({ data: results, message: `Result for detection with id ${idDetection}.` });
    } catch (error) {
      logger.error("DetectionController :  Failed to find the results of the detection.", error);
      res.status(HttpCode.INTERNAL_ERROR).send({ errors: ["Internal Error"], message: "Failed to find the results of the detection" } as ApiResponse);
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
      res.status(HttpCode.SUCCESS).send({ data: true, message: "Results Flushed" } as ApiResponse);
    } catch (error) {
      logger.error("DetectionController : Failed to flush the results.", error);
      res.status(HttpCode.INTERNAL_ERROR).send({ errors: ["Internal Error"], message: "Failed to flush the results." } as ApiResponse);
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

      res.status(HttpCode.SUCCESS).send({ data: results, message: "Successful Detections" } as ApiResponse);
    } catch (error) {
      logger.error("DetectionController : Failed to retrieve successful detections.", error);
      res.status(HttpCode.INTERNAL_ERROR).send({ errors: ["Internal Error"], message: "Failed to retrieve successful detections." } as ApiResponse);
      next(error);
    }
  };

  /**
   * Get pending detection in Queue
   * @param req Request
   * @param res Response
   * @param next Next function
   */
  public getPendingDetections = (req: Request, res: Response, next: NextFunction): void => {
    try {
      const results: Detection[] = this.detectionService.getPendingDetections();
      res.status(HttpCode.SUCCESS).send({ data: results, message: "Pending Detections" });
    } catch (error) {
      logger.error("DetectionController : Failed to retrieve pending detections.", error);
      res.status(HttpCode.INTERNAL_ERROR).send({ errors: ["Internal Error"], message: "Failed to retrieve pending detections." } as ApiResponse);
    }
  };

  /**
   * Get the list of all the detection in a failure State
   * @param req Request
   * @param res Reponse
   * @param next Next function
   */
  public getFailedDetections = (req: Request, res: Response, next: NextFunction): void => {
    try {
      const results: Detection[] = this.detectionService.getFailedDetections();
      res.status(HttpCode.SUCCESS).send({ data: results, message: "Failed Detections" });
    } catch (error) {
      logger.error("DetectionController : Failed to retrieve failed detections.", error);
      res.status(HttpCode.INTERNAL_ERROR).send({ errors: ["Internal Error"], message: "Failed to retrieve failed detections." } as ApiResponse);
    }
  };

  /**
   * POST Launch a detection on an application with a specific language
   * @param req Request
   * @param res Response
   * @param next Next function
   */
  public launchDetection = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const detectionParams: LaunchDetectionDto = req.body;
      let pythiaUrl = "",
        pythiaToken = "";

      if (detectionParams.pythiaMode) {
        const pythia = new Pythia();
        try {
          pythiaUrl = pythia.getUrl();
          pythiaToken = await pythia.getToken();
        } catch (error) {
          logger.error("Failed to activate Pythia for the detection.", error);
        }
      }

      const parameters = new ArtemisParameters()
        .setOnlineMode(detectionParams.onlineMode)
        .setRepositoryMode(detectionParams.repositoryMode)
        .setPythiaParameters(pythiaUrl, pythiaToken);

      const val: CancellableDetectionPromise = this.detectionService.launchDetection(
        detectionParams.application,
        detectionParams.language,
        parameters,
      );

      const b: boolean = val != null;
      res.status(HttpCode.SUCCESS).send({ data: b, message: "Detection launched" } as ApiResponse);
    } catch (error) {
      logger.error("DetectionController : Failed to launch a detection.", error);
      res.status(HttpCode.INTERNAL_ERROR).send({ errors: ["Internal Error"], message: "Failed to launch detection." } as ApiResponse);
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

      res.status(HttpCode.SUCCESS).send({ data: true, message: "Detection Cancelled" } as ApiResponse);
    } catch (error) {
      logger.error("DetectionController : Failed to launch a detection.", error);
      res.status(HttpCode.INTERNAL_ERROR).send({ errors: ["Internal Error"], message: "Failed to launch detection." } as ApiResponse);
    }
  };
}
