import {Neo4JAccessLayer} from "@database/Neo4jAccessLayer";
import TagService from "@services/configuration/TagService";
import {sleep} from "@shared/FunctionGlob";
import {logger} from "@shared/Logger";

export default abstract class AAgent {
    protected neo4jAl: Neo4JAccessLayer = Neo4JAccessLayer.getInstance();
    protected tagService = new TagService();
    private isRunning = false;
    private stopFlag = false;
    private numRetry = 0;

    public abstract group(): Promise<void> ;

    abstract getAgentName(): string ;

    abstract getPrefix(): Promise<string> ;

    abstract getDelay(): number;

    public launch() {
        if (!this.isRunning) this.run();
        this.stopFlag = false;
    }

    public getStatus(): boolean {
        return this.isRunning;
    }

    public stop(): boolean {
        this.stopFlag = true;
        return this.stopFlag;
    }

    private async run() {
        this.isRunning = true;

        if (!this.stopFlag) {
            try {
                await this.group();
                this.numRetry = 0;
                await sleep(this.getDelay())
            } catch (err) {
                this.numRetry++;

                if (this.numRetry == 1) {
                    logger.error(
                        `The ${this.getAgentName()} agent failed to query the database on the presence of tags`,
                        err
                    );
                } else {
                    logger.error(`The ${this.getAgentName()} agent failed to query the database on the presence of tags. Retrying in ${this.numRetry * 5} seconds`)
                }

                // Max value for retry
                this.numRetry = this.numRetry > 10 ? 10 : this.numRetry;

                await sleep(this.getDelay() + this.numRetry * 5000)
            }
        }

        const that = this;
        setTimeout(function () {
            that.run()
        }, this.getDelay());
    }
}