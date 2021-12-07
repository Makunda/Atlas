/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Request, Router } from "express";
import Route from "@interfaces/routes.interface";

import path from "path";
import multer, { Multer } from "multer";
import fs from "fs";
import HighlightController from "@controller/highlight/HighlightController";

abstract class AbstractRecommendationRoute implements Route {
  public path = "";
  public router = Router();
  private multerUpload: Multer;

  constructor() {
    // Multer
    type CallbackFunction = (...args: any) => void;
    const appDir = path.dirname(require.main.filename);
    const tempDirectory: string = appDir + "/../temp/";

    if (!fs.existsSync(tempDirectory)) {
      fs.mkdirSync(tempDirectory);
    }

    const storage = multer.diskStorage({
      destination: function(req: Request, file: any, cb: CallbackFunction) {
        cb(null, tempDirectory);
      },

      filename: function(req: Request, file: any, cb: CallbackFunction) {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
      },
    });
    this.multerUpload = multer({ storage: storage });

    this.initializeRoutes();
  }

  protected abstract getController(): HighlightController;

  /**
   * Initialize the Routes
   */
  private initializeRoutes() {
    const controller = this.getController();

    this.router.post(`${this.path}/file/upload/:application`, this.multerUpload.single("file"), controller.processRecommendationFile);
    this.router.post(`${this.path}/apply`, controller.applyRecommendations);
    this.router.post(`${this.path}/test`, controller.testRecommendation);
  }
}

export default AbstractRecommendationRoute;
