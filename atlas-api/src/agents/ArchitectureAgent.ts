import ArchitectureService from "@services/demeter/ArchitectureService";
import {logger} from "@shared/Logger";
import config from "config";
import AAgent from "./AgentAbstract";

export default class ArchitectureAgent extends AAgent {
    private architectureService: ArchitectureService = new ArchitectureService();

    async getPrefix(): Promise<string> {
        return this.tagService.getCustomArchitectureTag();
    }

    getAgentName(): string {
        return "Level";
    }

    getDelay(): number {
        return config.get("agent.reload.architectureAgent");
    }

    async group() {
        try {
            const num: number = await this.architectureService.executeGroupingInAllApplications();

            if (num != 0) {
                logger.info(`${num} architecture were discovered and added.`);
            }
        } catch (err) {
            logger.error("The architecture agent failed to retrieve custom levels.", err);
        }
    }
}