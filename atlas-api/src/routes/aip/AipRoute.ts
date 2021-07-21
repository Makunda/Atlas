import {Router} from 'express';
import AipConfigurationRoute from './AipConfigurationRoute';


// Init router and path
const router = Router();
const aipConfiguration = new AipConfigurationRoute();

// Add sub-routes
router.use('/parameters', aipConfiguration.router);

// Export the base-router
export default router;
