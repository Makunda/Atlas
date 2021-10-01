import { Router } from "express";
import AgentRoute from "./AgentRoute";
import ExtensionRoute from "./ExtensionRoute";
import ReportRoute from "./ReportRoute";
import ActionsRoute from "./ActionsRoute";
import StatisticsRoute from "./StatisticsRoute";

// Init router and path
const router = Router();
const extensionRoute = new ExtensionRoute();
const agentRoute = new AgentRoute();
const reportRoute = new ReportRoute();
const actionsRoute = new ActionsRoute();
const statisticsRoute = new StatisticsRoute();

// Add sub-routes
router.use("/extensions", extensionRoute.router);
router.use("/agents", agentRoute.router);
router.use("/reports", reportRoute.router);
router.use("/actions", actionsRoute.router);
router.use("/statistics", statisticsRoute.router);

// Export the base-router
export default router;
