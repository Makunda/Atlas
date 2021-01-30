import IAgent from "@agents/agent.interface";
import { Neo4JAccessLayer } from "@database/neo4jAccessLayer";
import { logger } from "@shared/logger";
import config from "config";
import { QueryResult } from "neo4j-driver";

/**
 * Agent in charge of the autoatic adding of user's frameworks
 */
export default class FrameworkAgent implements IAgent {
  private isRunning = false;
  private stopFlag = false;
  private delay: number = config.get("agent.reload.frameworkAgent");
  private neo4jAl: Neo4JAccessLayer = Neo4JAccessLayer.getInstance();

  private async group() {
    try {
      const req = "CALL artemis.launch.custom.framework.discovery()";
      const res: QueryResult = await this.neo4jAl.execute(req);

      logger.info(
        `${res.records.length} frameworks were discovered and added.`
      );
    } catch (err) {
      logger.error(
        "The framework agent failed to compute custom frameworks.",
        err
      );
    }
  }

  private async run() {
    this.isRunning = true;

    if (!this.stopFlag) {
      try {
        const req = "CALL artemis.get.framework.tags.presence()";
        const res: QueryResult = await this.neo4jAl.execute(req);

        const isPresent = Boolean(res.records[0].get(0));

        if (isPresent) this.group();
      } catch (err) {
        logger.error(
          "The framework agent failed to query the database on the presence of tags.",
          err
        );
      }
    }

    setTimeout(this.run, this.delay);
  }

  public launch() {
    if (!this.isRunning) this.run();
    this.stopFlag = false;
  }

  public getStatus(): boolean {
    return this.stopFlag;
  }

  public stop(): boolean {
    this.stopFlag = true;
    return this.stopFlag;
  }
}
