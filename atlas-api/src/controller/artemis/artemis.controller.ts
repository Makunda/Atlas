import {NextFunction, Request, Response} from 'express';
import ArtemisService from '@services/artemis/artemis.service';
import path from "path";
import {logger} from "@shared/logger";
import * as fs from "fs";
import HttpException from "@exceptions/HttpException";


class ArtemisController {
    private artemisService = new ArtemisService();

    public getVersion = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {

            const version: string = await ArtemisService.getVersion();
            res.status(200).json({data: version, message: 'version'});

        } catch (error) {
            next(error);
        }
    };

    public exportFrameworks = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {

            const fileCreated: string = await ArtemisService.launch_export();
            res.sendFile(path.resolve(fileCreated), (err) => {
                // File was sent
                // Delete the file
                if(err) {
                    logger.error("Failed to send the file : ", err)
                }

                try {
                    fs.unlinkSync(fileCreated)
                    logger.info(`The temporary file '${fileCreated}' was successfully removed`);
                } catch(err) {
                    logger.error(err)
                }
            });

        } catch (error) {
            next(error);
        }
    };

    public importFrameworks = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const file = req.file
            if (!file) {
                logger.error("No file was detected during the upload");
                throw new HttpException(400, "No file was detected during the upload");
            }

            // Launch the import
            const message = await ArtemisService.launch_import(file.path);

            // Delete the file
            try {
                fs.unlinkSync(file.path)
                logger.info(`The temporary file '${file.path}' was successfully removed`);
            } catch(err) {
                logger.error(`Failed to remove temporary file ${file.path}.`, err)
            }

            res.status(200).json({data: message, message: 'Import'});

        } catch (error) {
            next(error);
        }
    };
}

export default ArtemisController;