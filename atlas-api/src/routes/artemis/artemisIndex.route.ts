import { Router } from 'express';
import DetectionRoute from './detection.route';
import FrameworksRoute from './frameworks.route';

// Init router and path
const router = Router();
const detectionRoute = new DetectionRoute();
const frameworkRoute = new FrameworksRoute();

// Add sub-routes
router.use('/frameworks', frameworkRoute.router);
router.use('/detection', detectionRoute.router);

// Export the base-router
export default router;
