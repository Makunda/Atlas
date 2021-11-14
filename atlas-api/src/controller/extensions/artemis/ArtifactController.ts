import { LaunchDetectionDto } from "@dtos/artemis/detection.dto";
import ApiResponse from "@interfaces/api/ApiResponse";
import { IArtifact } from "@interfaces/artemis/Artifact";
import ArtifactService from "@services/extensions/artemis/ArtifactService";
import { HttpCode } from "@utils/HttpCode";
import { NextFunction, Request, Response } from "express";
import { check, validationResult } from "express-validator";

class ArtifactController {
  private artifactService = new ArtifactService();

  public getListArtifact = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const detectionParams: LaunchDetectionDto = req.body;

      // TODO : Investigate on the Query's parameters
      const external = /true/i.test(String(req.query.external));

      const listArtifact: IArtifact[] = await this.artifactService.getArtifactsList(detectionParams.application, detectionParams.language, external);
      res.status(200).json({ data: listArtifact, message: "Artifact" });
    } catch (error) {
      next(error);
    }
  };

  public getArtifactsAsTree = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const detectionParams: LaunchDetectionDto = req.body;

      const external = /true/i.test(String(req.query.external));

      const listArtifact: IArtifact[] = await this.artifactService.getArtifactAsTree(detectionParams.application, detectionParams.language, external);
      res.status(200).json({ data: listArtifact, message: "Artifact Tree" });
    } catch (error) {
      next(error);
    }
  };

  /**
   * Extract the list of artifact provided in a specific application
   * @param req Request
   * @param res Response
   * @param next Next Function
   * @returns
   */
  public extractArtifacts = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      await check("artifactList", "Must specify the list of artifacts to extract").isArray().run(req);
      await check("extractionType", "Must specify the type of extraction").isString().run(req);
      await check("application", "Must specify the application's name").isString().run(req);
      await check("groupType", "Must specify the type of grouping").isString().run(req);
      await check("externality", "Must specify the externality").isBoolean().run(req);

      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        res.status(HttpCode.BAD_REQUEST).send({ errors: errors.array().map(x => x.msg), message: "Failed to get frameworks" } as ApiResponse);
        return;
      }

      const artifactList: IArtifact[] = req.body.artifactList;
      const extractionType = String(req.body.extractionType);
      const groupType = String(req.body.groupType);
      const application = String(req.body.application);
      const externality = Boolean(req.body.externality);

      const primaryGroupName = String(req.body.primaryGroupName) || "";
      const secondaryGroupName = String(req.body.secondaryGroupName) || "";

      console.log("Received: ", req.body);

      await this.artifactService.extractArtifacts(
        application,
        artifactList,
        extractionType,
        groupType,
        externality,
        primaryGroupName,
        secondaryGroupName,
      );
      res.status(200).json({ data: "OK", message: "Artifact extraction" });
    } catch (error) {
      next(error);
    }
  };
}

export default ArtifactController;
