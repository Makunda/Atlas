/* eslint-disable max-len */
import {Neo4JAccessLayer} from "@database/Neo4jAccessLayer";
import ArchitectureNode from "@entities/Imaging/ArchitectureNode";
import Archimodel from "@interfaces/imaging/ArchiModel";
import { logger } from "@shared/Logger";
import {QueryResult, Node} from "neo4j-driver";

export default class ArchitectureService {
    private static NEO4JAL: Neo4JAccessLayer = Neo4JAccessLayer.getInstance();

    /**
     * Group object in a specific application
     * @param application
     */
    public async executeGroupingInAllApplications(): Promise<number> {
        const request = `CALL demeter.api.group.architectures.views.all()`;

        const results: QueryResult = await ArchitectureService.NEO4JAL.execute(request);
        return results.records.length || 0;
    }

    /**
     * Get all the architecture in the application
     * @param {string} application Name of the application
     * @return {Promise<Archimodel[]>} Promise returning a list of ArchiModel in the application
     */
    public async getAllArchitectures(application: string) : Promise<Archimodel[]> {
        try {
            const req = `MATCH (a:ArchiModel:\`${application}\`) RETURN a as node`

            const archimodel: Archimodel[] = [];
            const res = await ArchitectureService.NEO4JAL.execute(req);

            if(res && res.records.length > 0) {
                for (let index = 0; index < res.records.length; index++) {
                    const node: Node = res.records[index].get("node");
                    try {
                        archimodel.push(await ArchitectureNode.fromObj(node));
                    } catch (err) {
                        logger.error(`Architecture node with id ${node.identity.toNumber()} is not in a correct format.`, err);
                    }
                }
            }

            return archimodel;
        } catch (err) {
            logger.error(
                `Failed to retrieve the list of architecture in application : '${application}'.`,
                err
            );
            throw new Error("Failed to retrieve the list of Architectures");
        }
    }


}
