import { Router } from 'express';
import FrameworksController from '@controller/artemis/frameworks.controller';
import Route from '@interfaces/routes.interface';


class FrameworksRoute implements Route {
  public path = '';
  public router = Router();
  public frameworksController = new FrameworksController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/find/:name(\\w+)`, this.frameworksController.getFrameworkByName);
    this.router.get(`${this.path}/total`, this.frameworksController.getNumberFrameworks);
    this.router.get(`${this.path}/batch`, this.frameworksController.getFrameworksBatch);
  }
}

export default FrameworksRoute;

