/* eslint-disable max-len */
import {Router} from 'express';
import Route from '@interfaces/routes.interface';
import AipController from '@controller/aip/AipController';


export default class AipConfigurationRoute implements Route {
    public path = '';
    public router = Router();
    private aipController = new AipController();

    /**
     * Default constructor
     */
    constructor() {
        this.initializeRoutes();
    }

    /**
     * Initialize the rout of the AIP Configuration
     */
    private initializeRoutes() {
        // Configuration 
        this.router.get(`${this.path}/configuration`, this.aipController.getAllConfigurationNode);
        this.router.post(`${this.path}/configuration`, this.aipController.createConfigurationNode);
        this.router.delete(`${this.path}/configuration/:id`, this.aipController.deleteConfigurationNode);
        
        // Schemas Routes
        this.router.get(`${this.path}/configuration/:id/schemas`, this.aipController.getAttachedSchema);
        this.router.post(`${this.path}/configuration/:id/schemas`, this.aipController.createSchemaNode);
        this.router.delete(`${this.path}/schemas/:id`, this.aipController.deleteSchemaNode)
    }
}

