/* eslint-disable max-len */
import {Router} from 'express';
import Route from '@interfaces/routes.interface';
import ArchitectureController from '@controller/demeter/ArchitectureController';

/**
 * Class handling the routes related to the modules
 */
export default class ArchitectureRoute implements Route {
    public path = '';
    public router = Router();
    private architectureController = new ArchitectureController();

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
        this.router.get(`${this.path}/all/:application`, this.architectureController.getAllArchitectures);
    }


}