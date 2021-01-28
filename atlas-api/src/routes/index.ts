import { Router } from 'express';
import UserRouter from './Users';

import DemeterRouter from './demeter/demeterIndex.route'
import ArtemisRouter from "./artemis/artemisIndex.route";
import ImagingRouter from "./imaging/imagingIndex.route";

// Init router and path
const router = Router();

// Add sub-routes
router.use('/users', UserRouter);

router.use('/demeter', DemeterRouter);
router.use('/artemis', ArtemisRouter);
router.use('/imaging', ImagingRouter);


// Export the base-router
export default router;
