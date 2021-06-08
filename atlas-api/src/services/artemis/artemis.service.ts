import {logger} from "@shared/logger";
import {Neo4JAccessLayer} from "@database/neo4jAccessLayer";
import * as fs from "fs";
import path from "path";

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

    /**
     * Generate an export of the Framework
     */
    public static async launch_export(): Promise<string> {
        const appDir = path.dirname(require.main.filename);
        const filePath: string = appDir + "/../temp";

        if (!fs.existsSync(filePath)) {
            fs.mkdirSync(filePath);
        }

        const sanitized_path: string = filePath.replace("\\", "\\\\");
        const req = `CALL artemis.api.export.all("${sanitized_path}")`;

        try {
            const val = await this.neo4jAl.execute(req);
            if (!val.records || val.records.length == 0) {
                logger.error(
                    "No file path was returned."
                );
                throw new Error("No file path was returned.")
            }

            // Retrieve the file created
            return String(val.records[0].get(0));
        } catch (err) {
            logger.error(
                "Failed to verify the download the export...",
                err
            );
            throw new Error("Failed to verify the download the export.");
        }
    }

    /**
     * Launch import of the frameworks
     * @param filePath
     */
    public static async launch_import(filePath: string): Promise<string> {

        const sanitized_path: string = filePath.replace(/\\/g, "\\\\");
        const req = `CALL artemis.api.import.data("${sanitized_path}")`;

        try {
            const res = await this.neo4jAl.execute(req);
            for (let i = 0; i < res.records.length; i++) {
                logger.info(`Import : ${String(res.records[i].get(0))}`);
            }

            // Retrieve the file created
            return "done";
        } catch (err) {
            logger.error(
                "Failed import the frameworks",
                err
            );
            throw new Error("Failed import the frameworks.");
        }
    }
}


export default ArtemisService;