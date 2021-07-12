/* eslint-disable @typescript-eslint/no-misused-promises */
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
        /** Get Architecture */
        this.router.get(`${this.path}/all/:application`, this.architectureController.getAllArchitectures);

        /** Delete the architecture */
        this.router.post(`${this.path}/archimodel/delete`, this.architectureController.deleteArchitectureByID);
        this.router.post(`${this.path}/subset/delete`, this.architectureController.deleteSubsetByID);

        /** Hide the architecture */
        this.router.post(`${this.path}/archimodel/hide`, this.architectureController.hideArchitectureById);
        this.router.post(`${this.path}/subset/hide`, this.architectureController.hideSubsetById);
        
        /** Update the architecture */
        this.router.post(`${this.path}/archimodel/update`, this.architectureController.updateArchitectureByID);
        this.router.post(`${this.path}/archimodel/generate/modules`, this.architectureController.generateModuleFromArchitecture);
        this.router.post(`${this.path}/subset/update`, this.architectureController.updateSubsetByID);

        /** Display the architecture */
        this.router.post(`${this.path}/archimodel/display`, this.architectureController.displayArchitectureById);
        this.router.post(`${this.path}/archimodel/display/complete`, this.architectureController.displayCompleteArchitectureById);
        this.router.post(`${this.path}/subset/display`, this.architectureController.displaySubsetById);

        this.router.post(`${this.path}/archimodel/duplicate/byId`, this.architectureController.duplicateArchitecture);
        this.router.post(`${this.path}/archimodel/group/unassigned`, this.architectureController.groupUnassigned);
        this.router.post(`${this.path}/archimodel/duplicate/taxonomy`, this.architectureController.duplicateCastTaxonomy);
    }
}