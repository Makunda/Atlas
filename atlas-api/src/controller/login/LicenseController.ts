/* eslint-disable max-len */
import { NextFunction, Request, Response } from "express";

import LicenseService from "@services/security/LicenseService";
import { HttpCode } from "@utils/HttpCode";
import ApiResponse from "@interfaces/api/ApiResponse";
import { logger } from "@shared/Logger";

export class LicenseController {
  private licenseService = LicenseService.getInstance();

  /**
   * Get the license of the product
   */
  public getLicenseStatus = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const license: string = await this.licenseService.getActualLicense();
      res.status(200).json({ data: license, message: "license" });
    } catch (error) {
      logger.error("Failed to get the license status.", error);
      res.status(HttpCode.ACCESS_REFUSED).send({
        errors: ["Invalid license key"],
        message: "Access Refused",
      } as ApiResponse);
    }
  };

  /**
   * Apply a new license
   */
  public applyLicenseStatus = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const li = String(req.body.license);
      await this.licenseService.applyLicense(li);
      res.status(200).json({ data: li, message: "license applied" });
    } catch (error) {
      logger.error("Failed to apply the license.", error);
      res.status(HttpCode.ACCESS_REFUSED).send({
        errors: ["Invalid license key"],
        message: "Failed to apply the license key",
      } as ApiResponse);
    }
  };
}
