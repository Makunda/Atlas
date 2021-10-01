import { NextFunction, Request, Response } from "express";

import LoginService from "@services/login/LoginService";

export class LoginController {
  private loginService = LoginService.getInstance();

  public getLicenseStatus = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const license: string = await this.loginService.getActualLicense();
      res.status(200).json({ data: license, message: "license" });
    } catch (error) {
      next(error);
    }
  };

  public applyLicenseStatus = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const li = String(req.body.license);
      await this.loginService.applyLicense(li);
      res.status(200).json({ data: li, message: "license applied" });
    } catch (error) {
      next(error);
    }
  };
}
