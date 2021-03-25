import {logger} from "@shared/logger";
import {Neo4JAccessLayer} from "@database/neo4jAccessLayer";
import HttpException from "@exceptions/HttpException";

class ArtemisService {
    private static neo4jAl: Neo4JAccessLayer = Neo4JAccessLayer.getInstance();

    /**
     * Get the version of Artemis
     */
    public static async getVersion(): Promise<string> {
        const req = `CALL artemis.version()`;

        try {
            const val = await this.neo4jAl.execute(req);
            if (!val.records || val.records.length == 0) {
                logger.error(
                    "No version of Artemis was sent"
                );
                throw new Error("Failed to get the version.")
            }

            return String(val.records[0].get(0));
        } catch (err) {
            logger.error(
                "Failed to verify the installation of artemis...",
                err
            );
            throw new Error("Artemis is not installed.");
        }
    }
}


export default ArtemisService;