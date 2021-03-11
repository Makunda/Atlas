import { Router } from 'express';
import UseCaseRoute from './useCases.route';

// Init router and path
const router = Router();
const useCase = new UseCaseRoute();

// Add sub-routes
router.use('/useCases', useCase.router);


// Export the base-router
export default router;
