import { Router } from 'express';
import TagRoute from './tag.route';

// Init router and path
const router = Router();
const appRoutes = new TagRoute();

// Add sub-routes
router.use('/tags', appRoutes.router);


// Export the base-router
export default router;
