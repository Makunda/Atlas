import Route from "@interfaces/routes.interface";
import {Router} from "express";
import ActionController from "@controller/atlas/ActionController";

class ActionsRoute implements Route {
    public path = '';
    public router = Router();
    private actionController = new ActionController();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(`${this.path}/find/all`, this.actionController.getActions);
        this.router.get(`${this.path}/find/byId/:id`, this.actionController.getActionById);
        this.router.get(`${this.path}/categories`, this.actionController.getCategories);
        this.router.post(`${this.path}/execute`, this.actionController.executeAction);
    }
}

export default ActionsRoute;

