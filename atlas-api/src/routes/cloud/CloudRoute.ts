import { Router } from "express";
import CloudExtensionRoute from "./recommendations/CloudExtensionRoute";

// Init router and path
const router = Router();
const extensionRoute = new CloudExtensionRoute();

// Add sub-routes
router.use("/recommendations", extensionRoute.router);

// Export the base-router
export default router;
