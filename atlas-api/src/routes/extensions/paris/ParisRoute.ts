import { Router } from "express";
import GroupRoute from "./GroupRoute";
import UseCaseRoute from "./UsecaseRoute";
import ExportRoute from "./ExportRoute";

// Init router and path
const router = Router();
const useCase = new UseCaseRoute();
const group = new GroupRoute();
const exportRoute = new ExportRoute();

// Add sub-routes
router.use("/useCases", useCase.router);
router.use("/groups", group.router);
router.use("/export", exportRoute.router);

// Export the base-router
export default router;
