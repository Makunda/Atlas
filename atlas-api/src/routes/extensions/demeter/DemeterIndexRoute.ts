import { Router } from "express";
import DemeterRoute from "./DemeterRoute";
import GroupingRoute from "./GroupingRoute";
import LevelRoute from "./LevelRoute";
import BackupRoute from "./BackupRoute";

// Init router and path
const router = Router();
const groupingRoutes = new GroupingRoute();
const demeterRoutes = new DemeterRoute();
const levelRoutes = new LevelRoute();
const backupRoute = new BackupRoute();

// Add sub-routes
router.use("/grouping", groupingRoutes.router);
router.use("/levels", levelRoutes.router);
router.use("/utils", demeterRoutes.router);
router.use("/backup", backupRoute.router);

// Export the base-router
export default router;
