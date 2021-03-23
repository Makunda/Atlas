import {Router} from 'express';
import ApplicationController from '@controller/imaging/application.controller';
import Route from '@interfaces/routes.interface';


class ApplicationRoute implements Route {
    public path = '';
    public router = Router();
    private applicationController = new ApplicationController();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(`${this.path}/`, this.applicationController.getApplications);
    }
}

export default ApplicationRoute;

