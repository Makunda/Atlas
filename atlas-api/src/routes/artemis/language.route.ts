import { Router } from 'express';
import LanguageController from '@controller/artemis/language.controller';
import Route from '@interfaces/routes.interface';


class LanguageRoute implements Route {
  public path = '';
  public router = Router();
  public languageController = new LanguageController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.languageController.getLanguages);
  }
}

export default LanguageRoute;

