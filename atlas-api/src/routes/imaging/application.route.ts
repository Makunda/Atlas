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
        this.router.get(`${this.path}/all`, this.applicationController.getApplications);
        this.router.get(`${this.path}/insights/:application`, this.applicationController.getApplicationsInsights);
    }
}

export default ApplicationRoute;

