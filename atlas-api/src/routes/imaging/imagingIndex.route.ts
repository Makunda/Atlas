import {Router} from 'express';
import ApplicationRoute from './application.route';
import LevelsRoute from "./levels.route";
import TransactionRoute from "./transaction.route";

// Init router and path
const router = Router();
const appRoutes = new ApplicationRoute();
const levelRoutes = new LevelsRoute();
const transactionRoutes = new TransactionRoute();

// Add sub-routes
router.use('/applications', appRoutes.router);
router.use('/levels', levelRoutes.router);
router.use('/transactions', transactionRoutes.router);

// Export the base-router
export default router;
