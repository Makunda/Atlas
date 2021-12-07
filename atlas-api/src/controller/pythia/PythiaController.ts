import ApiResponse from "@interfaces/api/ApiResponse";
import Pythia from "@modules/pythia/Pythia";
import { logger } from "@shared/Logger";
import { HttpCode } from "@utils/HttpCode";
import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";

/**
 * Manage the login of the user and the creation of token
 * @todo Should handle multiple type of authentication
 */
export default class PythiaController {
  private pythia: Pythia;

  public constructor() {
    this.pythia = new Pythia();
  }

  /**
   * Create a new Token for Pythia
   */
  public postToken = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      await body("token", "You need to provide a token.").isString().run(req);

      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        res.status(HttpCode.BAD_REQUEST).send({
          errors: errors.array().map(x => x.msg),
          message: "Failed to apply new Token.",
        } as ApiResponse);
        return;
      }

      // If no error check if the user exists
      const token = String(req.body.token);
      await this.pythia.createPythiaToken(token);

      res.status(HttpCode.SUCCESS).send({ message: "New Token applied" } as ApiResponse);
    } catch (error) {
      logger.error("Failed to apply a new Pythia token.", error);
      res.status(HttpCode.INTERNAL_ERROR).send({ error: ["Internal error"], message: "Failed to apply token." });
    }
  };

  /**
   * Get the URL of Pythia
   */
  public getUrl = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const url = this.pythia.getUrl();
      res.status(HttpCode.SUCCESS).send({ data: url, message: "Pythia URL" });
    } catch (error) {
      logger.error("Failed to get Pythia URL.", error);
      res.status(HttpCode.INTERNAL_ERROR).send({
        error: ["Internal error"],
        message: "Failed to retrieve Pythia URL.",
      } as ApiResponse);
    }
  };

  /**
   * Check if the Pythia token is set
   */
  public getToken = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const tokenSet = await this.pythia.isTokenSet();
      res.status(HttpCode.SUCCESS).send({ data: tokenSet, message: "Pythia Token Status" });
    } catch (error) {
      logger.error("Failed to get Pythia Token Status.", error);
      res.status(HttpCode.INTERNAL_ERROR).send({
        error: ["Internal error"],
        message: "Failed to retrieve Pythia Token Status.",
      } as ApiResponse);
    }
  };

  /**
   * Check Pythia Status
   */
  public getStatus = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const status = await this.pythia.getStatus();
      res.status(HttpCode.SUCCESS).send({ data: status.toString(), message: "Pythia Status" });
    } catch (error) {
      logger.error("Failed to get Pythia Status.", error);
      res.status(HttpCode.INTERNAL_ERROR).send({
        error: ["Internal error"],
        message: "Failed to retrieve Pythia Status.",
      } as ApiResponse);
    }
  };

  /**
   * Check Pythia Authentication Status
   */
  public getAuthenticationStatus = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const status = await this.pythia.getAuthenticationStatus();
      res.status(HttpCode.SUCCESS).send({ data: status.toString(), message: "Pythia Authentication Status" });
    } catch (error) {
      logger.error("Failed to get Pythia Authentication Status.", error);
      res
        .status(HttpCode.INTERNAL_ERROR)
        .send({
          error: ["Internal error"],
          message: "Failed to retrieve Pythia Authentication Status.",
        } as ApiResponse);
    }
  };
}
