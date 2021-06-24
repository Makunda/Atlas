import {Router} from 'express';
import Route from '@interfaces/routes.interface';
import ModuleController from '@controller/demeter/ModuleController';

/**
 * Class handling the routes related to the modules
 */
export default class ModuleRoute implements Route {
    public path = '';
    public router = Router();
    private moduleController = new ModuleController();

    /**
     * Constructor
     */
    constructor() {
        this.initializeRoutes();
    }

    /**
     * Initialize the Routes below
     */
    private initializeRoutes() {
        this.router.get(`${this.path}/all/:application`, this.moduleController.getAllModules);
        this.router.get(`${this.path}/all/:application/hidden`, this.moduleController.getAllHiddenModules);
        this.router.post(`${this.path}/hide`, this.moduleController.hideById);
        this.router.post(`${this.path}/unhide`, this.moduleController.unhideById);
        this.router.post(`${this.path}/delete`, this.moduleController.deleteById);
        this.router.put(`${this.path}/update`, this.moduleController.updateById);
        this.router.post(`${this.path}/merge`, this.moduleController.mergeModules);
    }


}