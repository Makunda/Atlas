import {NextFunction, Request, Response} from 'express';
import ModuleService from '@services/demeter/ModuleService';
import IModule from '@interfaces/imaging/modules.interface';

export default class ModuleController {
    public moduleService = new ModuleService();

    /**
     * Get all modules
     * @param req Request
     * @param res Response
     * @param next NextFunction
     */
    public getAllModules = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const application = String(req.params.name);
            const results: IModule[] = await this.moduleService.getAllModule(application);
            res.status(200).json({data: results, message: 'All Modules'});
        } catch (error) {
            next(error);
        }
    }

    /**
     * Get all hidden modules
     * @param req Request
     * @param res Response
     * @param next NextFunction
     */
     public getAllHiddenModules = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const application = String(req.params.name);
            const results: IModule[] = await this.moduleService.getHiddenModule(application);
            res.status(200).json({data: results, message: 'All Hidden Modules'});
        } catch (error) {
            next(error);
        }
    }

    /**
     * Get all hidden module by ID
     * @param req Request
     * @param res Response
     * @param next NextFunction
     */
     public getHiddenById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const id = Number(req.body.id);
            await this.moduleService.hideById(id);
            res.status(200).json({data: true, message: 'Module was hidden'});
        } catch (error) {
            next(error);
        }
    }

}