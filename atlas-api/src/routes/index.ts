import { Router } from "express";

import DemeterRouter from "./extensions/demeter/DemeterIndexRoute";
import ArtemisRouter from "./extensions/artemis/ArtemisRouteIndex";
import ImagingRouter from "./imaging/ImagingIndexRoute";
import AtlasRouter from "./atlas/AtlasIndexRoute";
import ConfigurationRouter from "./configuration/ConfigurationIndexRoute";
import PythiaRouter from "./pythia/PythiaIndexRoute";
import UtilsRoute from "./utils/UtilsIndexRoute";
import AssistantsRoute from "./assistants/AssistantsRoute";
import ParisRouter from "./extensions/paris/ParisRoute";
import LicenseRoute from "./license/LicenseRoute";
import AipRouter from "./aip/AipRoute";
import HighlightIndexRoute from "./highlight/HighlightIndexRoute";
import CloudRouter from "./cloud/CloudRoute";
import CaesarRoute from "./extensions/caesar/CaesarRouteIndex";
import LoginRoute from "./login/LoginRoute";

// Init router and path
const router = Router();

const licenseRoute = new LicenseRoute();
const loginRoute = new LoginRoute();

// Add sub-routes
//router.use('/users', UserRouter);
router.use("/license", licenseRoute.router);
router.use("/login", loginRoute.router);

// Authenticated routes

router.use("/aip", AipRouter);
router.use("/assistants", AssistantsRoute);
router.use("/atlas", AtlasRouter);
router.use("/artemis", ArtemisRouter);
router.use("/caesar", CaesarRoute);
router.use("/cloud", CloudRouter);
router.use("/configuration", ConfigurationRouter);
router.use("/demeter", DemeterRouter);
router.use("/highlight", HighlightIndexRoute);
router.use("/imaging", ImagingRouter);
router.use("/paris", ParisRouter);
router.use("/pythia", PythiaRouter);
router.use("/utils", UtilsRoute);

// Export the base-router
export default router;
