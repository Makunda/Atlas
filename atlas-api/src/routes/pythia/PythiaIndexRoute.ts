import { Router } from "express";
import PythiasArtemisRoute from "./PythiaUtils";

// Init router and path
const router = Router();
const pythiaArtemis = new PythiasArtemisRoute();

// Add sub-routes
router.use("/utils", pythiaArtemis.router);

// Export the base-router
export default router;
