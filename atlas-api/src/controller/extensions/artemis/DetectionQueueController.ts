import { NextFunction, Request, Response } from "express";
import { DetectionQueueAssistant } from "@assistants/DetectionQueueAssistant";
import { DetectionCandidate } from "@dtos/artemis/detectionCandidate.dto";
import { HttpCode } from "@utils/HttpCode";
import ApiResponse from "@interfaces/api/ApiResponse";
import { logger } from "@shared/Logger";
import { body, validationResult } from "express-validator";

class DetectionQueueController {
  public detectionQueueAssistant: DetectionQueueAssistant = DetectionQueueAssistant.getInstance();

  /**
   * Add a list of candidates to the queue
   * @param req Request
   * @param res Response
   * @param next Next function
   */
  public addCandidates = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      await body("candidates", "You need to send a list of candidates.").run(req);
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        res
          .status(HttpCode.BAD_REQUEST)
          .send({
            errors: errors.array().map(x => x.msg),
            message: "Failed to add candidates to the detection queue",
          } as ApiResponse);
        return;
      }

      let toAdd: DetectionCandidate[];
      if (Array.isArray(req.body.candidates)) {
        toAdd = req.body.candidates;
      }

      // Add the candidates
      for (const can in toAdd) {
        this.detectionQueueAssistant.addCandidate(toAdd[can]);
      }

      res.status(HttpCode.SUCCESS).send({ data: toAdd.length, message: "Number in Queue" } as ApiResponse);
    } catch (error) {
      logger.error("DetectionQueueController : Failed to add candidates to the detection queue.", error);
      res.status(HttpCode.INTERNAL_ERROR).send({
        errors: ["Internal Error"],
        message: "Failed to add the candidates.",
      } as ApiResponse);
    }
  };

  /**
   * Flus the entire queue
   * @param req Request
   * @param res Response
   * @param next Next function
   */
  public flush = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      this.detectionQueueAssistant.flushCandidates();
      res.status(HttpCode.SUCCESS).send({ data: true, message: "Queue Flushed" } as ApiResponse);
    } catch (error) {
      logger.error("DetectionQueueController : Failed to flush the detection queue.", error);
      res.status(HttpCode.INTERNAL_ERROR).send({
        errors: ["Internal Error"],
        message: "Failed to flush the Queue.",
      } as ApiResponse);
    }
  };

  /**
   * Get current element being processed
   * @param req Request
   * @param res Response
   * @param next Next function
   */
  public getCurrent = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const current = this.detectionQueueAssistant.getCurrent();
      res.status(HttpCode.SUCCESS).send({ data: current, message: "Current candidate" } as ApiResponse);
    } catch (error) {
      logger.error("DetectionQueueController : Failed to get candidate being processed.", error);
      res.status(HttpCode.INTERNAL_ERROR).send({
        errors: ["Internal Error"],
        message: "Failed to get candidate being processed.",
      } as ApiResponse);
    }
  };

  /**
   * Get the state of the queue
   * @param req Request
   * @param res Response
   * @param next Next function
   */
  public getQueue = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const results: DetectionCandidate[] = this.detectionQueueAssistant.getQueue();

      res.status(200).send({ data: results, message: "Candidate queue" } as ApiResponse);
    } catch (error) {
      logger.error("DetectionQueueController : Failed to get the candidate queue.", error);
      res.status(HttpCode.INTERNAL_ERROR).send({
        errors: ["Internal Error"],
        message: " Failed to get the candidate queue.",
      } as ApiResponse);
    }
  };
}

export default DetectionQueueController;
