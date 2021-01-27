import { Router } from 'express';
import ArtemisRoute from './artemis.route';
import DetectionRoute from './detection.route';
import FrameworksRoute from './frameworks.route';
import LanguageRoute from './language.route';

// Init router and path
const router = Router();
const detectionRoute = new DetectionRoute();
const frameworkRoute = new FrameworksRoute();
const languageRoute = new LanguageRoute();
const artemisRoute = new ArtemisRoute();

// Add sub-routes
router.use('/frameworks', frameworkRoute.router);
router.use('/detection', detectionRoute.router);
router.use('/languages', languageRoute.router);
router.use('/utils', artemisRoute.router);

// Export the base-router
export default router;
