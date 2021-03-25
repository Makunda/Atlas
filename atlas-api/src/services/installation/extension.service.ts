import DemeterService from "@services/demeter/demeter.service";
import config from "config";
import {logger} from '@shared/logger';
import ArtemisService from "@services/artemis/artemis.service";

class ExtensionService {
    public async verifyDemeterVersion(): Promise<boolean> {

        const version: string = await DemeterService.getVersion();

        const numVersion = Number(version.replace(".", ""));

        const minVersionString: string = String(config.get("extensions.demeter")).replace(".", "");
        const minVersionNum = Number(minVersionString);

        if (numVersion < minVersionNum) {
            logger.warn(`The detected version of Demeter is ${version}. The minimal version required to work properly is ${minVersionString}`);
            return false;
        } else {
            return true;
        }
    }

    public async verifyArtemisVersion(): Promise<boolean> {
        const version: string = await ArtemisService.getVersion();

        const numVersion = Number(version.replace(".", ""));

        const minVersionString: string = String(config.get("extensions.artemis")).replace(".", "");
        const minVersionNum = Number(minVersionString);

        if (numVersion < minVersionNum) {
            logger.warn(`The detected version of Artemis is ${version}. The minimal version required to work properly is ${minVersionString}`);
            return false;
        } else {
            return true;
        }
    }
}

export default ExtensionService;