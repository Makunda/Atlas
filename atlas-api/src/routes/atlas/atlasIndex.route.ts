import {Router} from 'express';
import AgentRoute from './agent.route';
import ExtensionRoute from './extension.route';
import ReportRoute from "./report.route";
import ActionsRoute from "./actions.routes";
import StatisticsRoute from "./statistics.route";

// Init router and path
const router = Router();
const extensionRoute = new ExtensionRoute();
const agentRoute = new AgentRoute();
const reportRoute = new ReportRoute();
const actionsRoute = new ActionsRoute();
const statisticsRoute = new StatisticsRoute();

// Add sub-routes
router.use('/extensions', extensionRoute.router);
router.use('/agents', agentRoute.router);
router.use('/reports', reportRoute.router);
router.use('/actions', actionsRoute.router);
router.use('/statistics', statisticsRoute.router);

// Export the base-router
export default router;
