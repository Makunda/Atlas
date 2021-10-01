import { Router } from "express";
import ConfigurationRoute from "./ConfigurationRoute";
import TagRoute from "./TagRoute";

// Init router and path
const router = Router();
const appRoutes = new TagRoute();
const configRoute = new ConfigurationRoute();

// Add sub-routes
router.use("/tags", appRoutes.router);
router.use("/parameters", configRoute.router);

// Export the base-router
export default router;
