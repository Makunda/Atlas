import { Router } from 'express';
import Route from '@interfaces/routes.interface';
import authMiddleware from '@middlewares/auth.middleware';
import FrameworksRoute from './artemis/frameworks.route';
import SynchronizerRoute from './synchronizer.route';

class IndexAPIRoute implements Route {
  // Init router and path
  public router = Router();
  public path = '/api';
  private syncController = new SynchronizerRoute();
  private frameworkController = new FrameworksRoute();

  constructor() {
    // Add sub-routes
    this.router.use(`${this.path}/repo`, authMiddleware, this.syncController.router);
    this.router.use(`${this.path}/artemis`, authMiddleware, this.frameworkController.router);
  }
}

// Export the base-router
export default IndexAPIRoute;
