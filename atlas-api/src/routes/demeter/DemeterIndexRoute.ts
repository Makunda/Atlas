import {Router} from 'express';
import DemeterRoute from './DemeterRoute';
import GroupingRoute from './GroupingRoute';
import LevelRoute from './LevelRoute';

// Init router and path
const router = Router();
const groupingRoutes = new GroupingRoute();
const demeterRoutes = new DemeterRoute();
const levelRoutes = new LevelRoute();

// Add sub-routes
router.use('/grouping', groupingRoutes.router);
router.use('/levels', levelRoutes.router);
router.use('/utils', demeterRoutes.router);


// Export the base-router
export default router;
