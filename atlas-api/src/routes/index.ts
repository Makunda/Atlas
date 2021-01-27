import { Router } from 'express';
import UserRouter from './Users';

import DemeterRouter from './demeter/demeterIndex.route'
import ArtemisRouter from "./artemis/artemisIndex.route";

// Init router and path
const router = Router();

// Add sub-routes
router.use('/users', UserRouter);

router.use('/demeter', DemeterRouter);
router.use('/artemis', ArtemisRouter);


// Export the base-router
export default router;
