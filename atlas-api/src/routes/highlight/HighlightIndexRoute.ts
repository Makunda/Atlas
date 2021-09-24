import {Router} from 'express';
import HighlightOssRoute from "./HighlightOssRoute";
import HighlightRecommendationRoute from "./HighlightRecommendationRoute";

// Init router and path
const router = Router();
const highlightRoutes = new HighlightRecommendationRoute();
const ossRoutes = new HighlightOssRoute();

// Add sub-routes
router.use("/recommendations/cloud", highlightRoutes.router);
router.use("/recommendations/oss", ossRoutes.router);



// Export the base-router
export default router;
