import { Router } from 'express';
import ApplicationRoute from './application.route';

// Init router and path
const router = Router();
const appRoutes = new ApplicationRoute();

// Add sub-routes
router.use('/applications', appRoutes.router);


// Export the base-router
export default router;
