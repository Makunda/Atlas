import {Router} from 'express';
import GroupRoute from './group.route';
import UseCaseRoute from './useCases.route';

// Init router and path
const router = Router();
const useCase = new UseCaseRoute();
const group = new GroupRoute();

// Add sub-routes
router.use('/useCases', useCase.router);
router.use('/groups', group.router);


// Export the base-router
export default router;
