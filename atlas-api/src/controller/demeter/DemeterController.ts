import { NextFunction, Request, Response } from "express";
import DemeterService from "@services/demeter/DemeterService";

class DemeterController {
  public getVersion = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const version: string = await DemeterService.getVersion();
      res.status(200).json({ data: version, message: "version" });
    } catch (error) {
      next(error);
    }
  };
}

export default DemeterController;
