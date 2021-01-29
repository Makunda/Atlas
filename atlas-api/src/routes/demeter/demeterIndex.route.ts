import { Router } from 'express';
import DemeterRoute from './demeter.route';
import GroupingRoute from './grouping.route';

// Init router and path
const router = Router();
const groupingRoutes = new GroupingRoute();
const demetergRoutes = new DemeterRoute();

// Add sub-routes
router.use('/grouping', groupingRoutes.router);
router.use('/utils', groupingRoutes.router);


// Export the base-router
export default router;
