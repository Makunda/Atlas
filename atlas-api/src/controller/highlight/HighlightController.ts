/* eslint-disable max-len */
import {NextFunction, Request, Response} from 'express';
import ModuleService from '@services/demeter/ModuleService';
import { checkBody, checkParams, checkQuery } from '@shared/FunctionGlob';
import HttpException from '@exceptions/HttpException';
import HighlightService from '@services/highlight/HighlightService';
import { logger } from '@shared/Logger';
import * as fs from "fs";
import CloudBlocker from '@services/highlight/CloudBlocker';


export default class HighlightController {
    private highlightService = new HighlightService();

    /**
     * Process an excel file for a specific application
     * POST {
     *  application: string
     * }
     * @param req Request
     * @param res Response
     * @param next NextFunction
     */
     public processRecommendationFile= async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const file = req.file
            if (!file) {
                logger.error("No file was detected during the upload");
                throw new HttpException(400, "No file was detected during the upload");
            }

            checkParams(req, "application");
            const application = String(req.params.application);

            // Launch the import
            const recommendations: CloudBlocker[] = await this.highlightService.processExcel(application, file.path);

            // Delete the file
            try {
                fs.unlinkSync(file.path)
                logger.info(`The temporary file '${file.path}' was successfully removed`);
            } catch (err) {
                logger.error(`Failed to remove temporary file ${file.path}.`, err)
            }

            res.status(200).json({data: recommendations, message: 'Blockers Found'});

        } catch (error) {

            logger.error("Failed to process the Highlight File", error);
            next(error);
        }
    }

    /**
     * Apply recommendations on the on-boarded applications
     * @param req Request
     * @param res Response
     * @param next Next Function
     */
    public applyRecommendations= async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            checkBody(req, "blockers");
            const blockers: CloudBlocker[] = req.body.blockers;
            
            // Launch the import
            const recommendations:  CloudBlocker[] = await this.highlightService.applyRecommendations(blockers);

            res.status(200).json({data: recommendations, message: 'Not Applied recommendations'});

        } catch (error) {
            next(error);
        }
    }


}