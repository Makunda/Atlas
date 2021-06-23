import {Router} from 'express';
import ApplicationRoute from './ApplicationRoute';
import LevelsRoute from "./LevelsRoute";
import TransactionRoute from "./TransactionRoute";
import InstallationRoute from "./InstallationRoute";

// Init router and path
const router = Router();
const appRoutes = new ApplicationRoute();
const levelRoutes = new LevelsRoute();
const transactionRoutes = new TransactionRoute();
const installationRoute = new InstallationRoute();

// Add sub-routes
router.use('/applications', appRoutes.router);
router.use('/levels', levelRoutes.router);
router.use('/transactions', transactionRoutes.router);
router.use('/installation', installationRoute.router);

// Export the base-router
export default router;
