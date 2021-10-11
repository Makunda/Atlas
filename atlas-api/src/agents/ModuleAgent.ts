import ModuleService from "@services/extensions/demeter/ModuleService";
import { logger } from "@shared/Logger";
import config from "config";
import AAgent from "./AgentAbstract";

export default class ModuleAgent extends AAgent {
  private moduleService: ModuleService = new ModuleService();

  async getPrefix(): Promise<string> {
    return this.tagService.getCustomModuleTag();
  }

  getAgentName(): string {
    return "Module";
  }

  getDelay(): number {
    return config.get("agent.reload.moduleAgent");
  }

  async group() {
    try {
      const num: number = await this.moduleService.executeGroupingInAllApplications();

      if (num != 0) {
        logger.info(`${num} modules were discovered and added.`);
      }
    } catch (err) {
      logger.error("The module agent failed to retrieve custom modules.", err);
    }
  }
}
