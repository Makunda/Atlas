import {Router} from 'express';
import HighlightRecommendationRoute from './HighlightRecommendationRoute';


// Init router and path
const router = Router();
const highlightRoutes = new HighlightRecommendationRoute();

// Add sub-routes
router.use('/recommendations', highlightRoutes.router);


// Export the base-router
export default router;
