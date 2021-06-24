
/* eslint-disable max-len */
import {NextFunction, Request, Response} from 'express';
import ArchitectureService from '@services/demeter/ArchitectureService';
import { checkBody, checkParams } from '@shared/FunctionGlob';
import HttpException from '@exceptions/HttpException';
import Archimodel from '@interfaces/imaging/ArchiModel';

export default class ArchitectureController {

    private architectureService = new ArchitectureService();

   /**
     * Get all architecture in one application
     * GET :application
     * @param req Request
     * @param res Response
     * @param next NextFunction
     */
    public getAllArchitectures = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const application = String(req.params.application);
            if(application === undefined) 
            throw new HttpException(400, "Application parameter is undefined");

            const results: Archimodel[] = await this.architectureService.getAllArchitectures(application);
            res.status(200).json({data: results, message: 'All Architectures'});
        } catch (error) {
            next(error);
        }
    }

}