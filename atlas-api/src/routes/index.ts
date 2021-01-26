import { Router } from 'express';
import UserRouter from './Users';
import FrameworksRoute from "./artemis/frameworks.route"
import DetectionRoute from './artemis/detection.route';
import DemeterRouter from './demeter/demeterIndex.route'

// Init router and path
const router = Router();
const frameworkRoute = new FrameworksRoute();
const detectionRoute = new DetectionRoute();

// Add sub-routes
router.use('/users', UserRouter);

router.use('/demeter', DemeterRouter);


// Export the base-router
export default router;
