import { Router } from "express";
import HighlightObsolescenceRoute from "./HighlightObsolescenceRoute";
import HighlightOssRoute from "./HighlightOssRoute";
import HighlightRecommendationRoute from "./HighlightRecommendationRoute";

// Init router and path
const router = Router();
const highlightRoutes = new HighlightRecommendationRoute();
const ossRoutes = new HighlightOssRoute();
const legacyOssRoutes = new HighlightObsolescenceRoute();

// Add sub-routes
router.use("/recommendations/cloud", highlightRoutes.router);
router.use("/recommendations/oss", ossRoutes.router);
router.use("/recommendations/obsolescence", legacyOssRoutes.router);

// Export the base-router
export default router;
