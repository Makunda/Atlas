import { Router } from 'express';
import ExtensionRoute from './extension.route';

// Init router and path
const router = Router();
const extensionRoute = new ExtensionRoute();

// Add sub-routes
router.use('/extensions', extensionRoute.router);


// Export the base-router
export default router;
