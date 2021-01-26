import { Router } from 'express';
import GroupingRoute from './grouping.route';

// Init router and path
const router = Router();
const groupingRoutes = new GroupingRoute();

// Add sub-routes
router.use('/grouping', groupingRoutes.router);


// Export the base-router
export default router;
