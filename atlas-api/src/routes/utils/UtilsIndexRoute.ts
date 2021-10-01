import { Router } from "express";
import UtilsRoute from "./UtilsRoute";

// Init router and path
const router = Router();
const utilsRoute = new UtilsRoute();

// Add sub-routes
router.use("/healthCheck", utilsRoute.router);

// Export the base-router
export default router;
