import LevelService from "@services/demeter/LevelService";
import {logger} from "@shared/Logger";
import config from "config";
import AAgent from "./AgentAbstract";

export default class LevelAgent extends AAgent {
    private levelService: LevelService = new LevelService();

    async getPrefix(): Promise<string> {
        return this.tagService.getCustomLevelTag();
    }

    getAgentName(): string {
        return "Level";
    }

    getDelay(): number {
        return config.get("agent.reload.levelAgent");
    }

    async group() {
        try {
            const num: number = await this.levelService.executeGroupingInAllApplications();
            if (num != 0) {
                logger.info(`${num} levels were discovered and added.`);
            }
        } catch (err) {
            logger.error("The level agent failed to retrieve custom levels.", err);
        }
    }
}
