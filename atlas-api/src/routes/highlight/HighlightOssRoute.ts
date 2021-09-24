/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Request, Router } from "express";
import Route from "@interfaces/routes.interface";

import path from "path";
import multer, { Multer } from "multer";
import fs from "fs";
import HighlightOpenSourceController from "@controller/highlight/HighlightOpenSourceController";

class HighlightOssRoute implements Route {
  public path = "";
  public router = Router();
  private multerUpload: Multer;

  private highlightController = new HighlightOpenSourceController();

  constructor() {
    // Multer
    type CallbackFunction = (...args: any) => void;
    const appDir = path.dirname(require.main.filename);
    const tempDirectory: string = appDir + "/../temp/";

    if (!fs.existsSync(tempDirectory)) {
      fs.mkdirSync(tempDirectory);
    }

    const storage = multer.diskStorage({
      destination: function (req: Request, file: any, cb: CallbackFunction) {
        cb(null, tempDirectory);
      },

      filename: function (req: Request, file: any, cb: CallbackFunction) {
        cb(
          null,
          file.fieldname + "-" + Date.now() + path.extname(file.originalname),
        );
      },
    });
    this.multerUpload = multer({ storage: storage });

    this.initializeRoutes();

    this.initializeRoutes();
  }

  /**
   * Initialize the Routes
   */
  private initializeRoutes() {
    this.router.post(
      `${this.path}/file/upload/blockers/:application`,
      this.multerUpload.single("file"),
      this.highlightController.processRecommendationFile,
    );
    this.router.post(
      `${this.path}/apply/blockers`,
      this.highlightController.applyRecommendations,
    );
    this.router.post(
      `${this.path}/test/blockers`,
      this.highlightController.testRecommendation,
    );
  }
}

export default HighlightOssRoute;
