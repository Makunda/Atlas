import { Router } from "express";
import ClassifyRoute from "./ClassifyRoute";

// Init router and path
const router = Router();
const classifyRoute = new ClassifyRoute();

// Add sub-routes
router.use("/classify", classifyRoute.router);

// Export the base-router
export default router;
