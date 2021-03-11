import { Router } from 'express';
import UserRouter from './Users';

import DemeterRouter from './demeter/demeterIndex.route'
import ArtemisRouter from "./artemis/artemisIndex.route";
import ImagingRouter from "./imaging/imagingIndex.route";
import AtlasRouter from "./atlas/atlasIndex.route";
import ConfigurationRouter from "./configuration/configurationIndex.route";
import PythiaRouter from "./pythia/pythiaIndex.route";
import UtilsRoute from './utils/utilsIndex.route';
import AssistantsRoute from './assistants/assistants.route';
import ParisRouter from './paris/paris.route';

// Init router and path
const router = Router();

// Add sub-routes
//router.use('/users', UserRouter);

router.use('/demeter', DemeterRouter);
router.use('/artemis', ArtemisRouter);
router.use('/paris', ParisRouter);
router.use('/imaging', ImagingRouter);
router.use('/atlas', AtlasRouter);
router.use('/configuration', ConfigurationRouter);
router.use('/pythia', PythiaRouter);
router.use('/utils', UtilsRoute);
router.use('/assistants', AssistantsRoute);


// Export the base-router
export default router;
