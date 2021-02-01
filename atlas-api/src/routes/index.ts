import { Router } from 'express';
import UserRouter from './Users';

import DemeterRouter from './demeter/demeterIndex.route'
import ArtemisRouter from "./artemis/artemisIndex.route";
import ImagingRouter from "./imaging/imagingIndex.route";
import AtlasRouter from "./atlas/atlasIndex.route";
import ConfigurationRouter from "./configuration/configurationIndex.route";

// Init router and path
const router = Router();

// Add sub-routes
router.use('/users', UserRouter);

router.use('/demeter', DemeterRouter);
router.use('/artemis', ArtemisRouter);
router.use('/imaging', ImagingRouter);
router.use('/atlas', AtlasRouter);
router.use('/configuration', ConfigurationRouter);


// Export the base-router
export default router;
