import { Router } from 'express';
import UserRouter from './Users';
import FrameworksRoute from "./artemis/frameworks.route"
import DetectionRoute from './artemis/detection.route';

// Init router and path
const router = Router();
const frameworkRoute = new FrameworksRoute();
const detectionRoute = new DetectionRoute();

// Add sub-routes
router.use('/users', UserRouter);
router.use('/artemis', frameworkRoute.router);
router.use('/detection', detectionRoute.router);


// Export the base-router
export default router;
