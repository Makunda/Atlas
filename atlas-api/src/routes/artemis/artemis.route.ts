import { Router } from 'express';
import ArtemisController from '@controller/artemis/artemis.controller';
import Route from '@interfaces/routes.interface';


class ArtemisRoute implements Route {
  public path = '';
  public router = Router();
  public artemisController = new ArtemisController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {    
    this.router.get(`${this.path}/version`, this.artemisController.getVersion);
  }
}

export default ArtemisRoute;

