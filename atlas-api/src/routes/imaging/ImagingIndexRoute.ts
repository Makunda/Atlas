import {Router} from 'express';
import ApplicationRoute from './ApplicationRoute';
import LevelsRoute from "./LevelsRoute";
import TransactionRoute from "./TransactionRoute";
import InstallationRoute from "./InstallationRoute";
import ModuleRoute from "./ModuleRoute";
import ArchitectureRoute from './ArchitectureRoute';
import DataCallGraphRoute from './DataCallGraphRoute';

// Init router and path
const router = Router();
const appRoutes = new ApplicationRoute();
const levelRoutes = new LevelsRoute();
const moduleRoutes = new ModuleRoute();
const transactionRoutes = new TransactionRoute();
const dataCallGraphRoute = new DataCallGraphRoute();
const architectureRoute = new ArchitectureRoute();
const installationRoute = new InstallationRoute();

// Add sub-routes
router.use('/applications', appRoutes.router);
router.use('/levels', levelRoutes.router);
router.use('/modules', moduleRoutes.router);
router.use('/architectures', architectureRoute.router);
router.use('/transactions', transactionRoutes.router);
router.use('/dataCallGraph', dataCallGraphRoute.router);
router.use('/installation', installationRoute.router);

// Export the base-router
export default router;
