import {Router} from 'express';

import DemeterRouter from './demeter/DemeterIndexRoute'
import ArtemisRouter from "./artemis/ArtemisRouteIndex";
import ImagingRouter from "./imaging/ImagingIndexRoute";
import AtlasRouter from "./atlas/AtlasIndexRoute";
import ConfigurationRouter from "./configuration/ConfigurationIndexRoute";
import PythiaRouter from "./pythia/PythiaIndexRoute";
import UtilsRoute from './utils/UtilsIndexRoute';
import AssistantsRoute from './assistants/AssistantsRoute';
import ParisRouter from './paris/ParisRoute';
import LoginRoute from "./login/LoginRoute";
import AipRouter from "./aip/AipRoute";
import HighlightIndexRoute from './highlight/HighlightIndexRoute';

// Init router and path
const router = Router();

const loginRoute = new LoginRoute();

// Add sub-routes
//router.use('/users', UserRouter);

router.use('/demeter', DemeterRouter);
router.use('/aip', AipRouter);
router.use('/artemis', ArtemisRouter);
router.use('/paris', ParisRouter);
router.use('/imaging', ImagingRouter);
router.use('/atlas', AtlasRouter);
router.use('/configuration', ConfigurationRouter);
router.use('/highlight', HighlightIndexRoute);
router.use('/pythia', PythiaRouter);
router.use('/utils', UtilsRoute);
router.use('/assistants', AssistantsRoute);
router.use('/login', loginRoute.router);


// Export the base-router
export default router;
