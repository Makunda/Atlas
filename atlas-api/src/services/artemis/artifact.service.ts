import {Neo4JAccessLayer} from "@database/neo4jAccessLayer";
import HttpException from "@exceptions/HttpException";
import {IArtifact} from "@interfaces/artemis/artifact.interface";
import {logger} from "@shared/logger";
import {int, Record} from "neo4j-driver";

export default class ArtifactService {
    private neo4jAl: Neo4JAccessLayer = Neo4JAccessLayer.getInstance();

    private static recursiveInsert(root: IArtifact, listArtifact: IArtifact[]): IArtifact {
        for (const index in listArtifact) {
            if (listArtifact[index].parentId == root.id) {
                root.children.push(ArtifactService.recursiveInsert(listArtifact[index], listArtifact));
            }
        }

        root.children.sort(function(a, b) {
            return b.count - a.count;
        });

        return root;
    }

    public async getArtifactsList(
        appName: string,
        language: string,
        externality: boolean
    ): Promise<IArtifact[]> {
        const req = `CALL artemis.api.breakdown.get($appName, $language, $externality)`;
        try {
            const val = await this.neo4jAl.executeWithParameters(req, {
                appName: appName,
                language: language,
                externality: externality
            });
            if (!val.records || val.records.length == 0) return [];

            const artifacts = [];
            for (const it in val.records) {
                if (Object.prototype.hasOwnProperty.call(val.records, it)) {
                    artifacts.push(this.convertRecordToArtifact(val.records[it]));
                }
            }
            return artifacts;
        } catch (err) {
            logger.error(
                `Failed to realize the breakdown of the application ${appName}.`,
                err
            );
            throw new HttpException(500, "Internal error");
        }
    }

    // Get Artifacts as a Tree
    public async getArtifactAsTree(
        appName: string,
        language: string,
        externality: boolean
    ): Promise<IArtifact[]> {

        const allArtifacts: IArtifact[] = await this.getArtifactsList(appName, language, externality);
        const tree: IArtifact[] = [];

        for (const key in allArtifacts) {
            const elem = allArtifacts[key];
            if (elem.parentId < 0) {
                tree.push(ArtifactService.recursiveInsert(elem, allArtifacts))
            }
        }

        return tree;
    }

    private convertRecordToArtifact(res: Record): IArtifact {
        const artifact: IArtifact = {
            id: int(res.get("id")).toNumber(),
            name: res.get("name"),
            parentId: int(res.get("parentId")).toNumber(),
            delimiter: res.get("delimiter"),
            count: int(res.get("count")).toNumber(),
            children: []
        };

        return artifact;
    }
}
