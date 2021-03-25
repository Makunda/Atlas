import path from "path";
import config from "config";
import {logger} from "@shared/logger";
import DemeterService from "@services/demeter/demeter.service";
import ArtemisService from "@services/artemis/artemis.service";


export default class InstallationService {

    private static ATLAS_CONFIG_FOLDER = "config/";

    /** Runtime variables **/
    private imagingBaseFolder: string;
    private imagingPluginFolder: string;
    private imagingTechIconFolder: string;


    /**
     * Return the Path of the configuration folder.
     */
    public getConfigurationFolder() : string {
        // eslint-disable-next-line max-len
        return path.resolve(path.dirname(require.main.filename), InstallationService.ATLAS_CONFIG_FOLDER);
    }

    /**
     * Return the imaging path in the configuration
     */
    public getImagingFolder() : string {
        return this.imagingBaseFolder;
    }

    public getPluginFolder() : string {
        return this.imagingPluginFolder
    }

    public getIconFolder() : string {
        return this.imagingPluginFolder
    }

    /*  EXTENSIONS PANEL */


    constructor() {
        try {
            this.imagingBaseFolder = String(config.get("imaging.installation"));
            this.imagingPluginFolder = path.resolve(this.imagingBaseFolder, String(config.get("imaging.folders.plugins")));
            this.imagingTechIconFolder = path.resolve(this.imagingBaseFolder, String(config.get("imaging.folders.tech_icon")));
        } catch (err) {
            logger.error("Invalid configuration file. Was not able to instantiate installation service.", err);
        }
    }

}