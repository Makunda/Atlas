import {Neo4JAccessLayer} from "@database/neo4jAccessLayer";
import HttpException from "@exceptions/HttpException";
import {IArtifact} from "@interfaces/artemis/artifact.interface";
import {logger} from "@shared/logger";
import {int, Record} from "neo4j-driver";
import TagService from "@services/configuration/tag.services";

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
            console.log(`Request : CALL artemis.api.breakdown.get('${appName}', '${language}', ${String(externality)}`)
            console.log("Records length", val.records.length)
            for (const it in val.records) {
                if (Object.prototype.hasOwnProperty.call(val.records, it)) {
                    artifacts.push(ArtifactService.convertRecordToArtifact(val.records[it]));
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

    /**
     * Get the prefix to perform the extraction
     * @param type Type of extraction as a string
     * @private
     */
    private static async getExtractionPrefix(type: string) : Promise<string> {
        const tagService = new TagService();

        switch (type) {
            case "level":
                return await tagService.getCustomLevelTag();
            case "module":
                return await tagService.getCustomModuleTag();
            case "architecture":
                return await tagService.getCustomArchitectureTag();
            default:
                throw new Error(`No prefix existing for extraction ${type}.`);
        }
    }

    /**
     * Extract a list of artifact to the selected location
     * @param application Name of the application
     * @param artifactList List of the artifact to extract
     * @param extractionType Type of the extraction
     * @param groupType Type of recoupment (Together split)
     */
    public async extractArtifacts(
        application: string,
        artifactList: IArtifact[],
        extractionType: string,
        groupType: string
    ): Promise<void> {
    try {
        const prefix: string = await ArtifactService.getExtractionPrefix(groupType);

        let req : string;
        let params = {};

        // MATCH (o:Object:app) WHERE
        if(groupType == "together"){
            // eslint-disable-next-line max-len
            // const fullNameList: string[] = artifactList.map(x => x.name);

            req = `MATCH (o:Object:\`${application}\`) WHERE o.InternalType IN $listInternalType AND 
            any( x IN $listFullName WHERE o.FullName CONTAINS x) 
            SET o.Tags = CASE WHEN o.Tags IS NULL THEN [$tagPrefix] 
            ELSE o.Tags + ('$a_Audit Service$'+controllers.Level) END `
        } else {
            // split them
            for(const a of artifactList) {
                try {
                    const tagName = prefix+(a.customName || a.name);
                    // eslint-disable-next-line max-len
                    req = `MATCH (o:Object:\`${application}\`) WHERE o.InternalType IN $listInternalType 
                AND o.FullName CONTAINS $fullName 
                SET o.Tags = CASE WHEN o.Tags IS NULL THEN [$tagName] 
                ELSE o.Tags + $tagName END`;


                    params = {
                        listInternalType : a.objectTypes,
                        fullName : a.fullName,
                        tagName: tagName
                    }

                    await this.neo4jAl.executeWithParameters(req, params);
                } catch (err) {
                    logger.error(`Failed to extract the artifact : ${String(a)}`, err);
                }
            }
        }

    } catch (err) {
        logger.error(
            `Failed to realize the extraction of artifacts of the application ${application}.`,
            err
        );
        throw new HttpException(500, "Internal error");
    }

    }

    /**
     * Convert a record from Neo4j to the Artifact
     * @param res Record to convert
     * @private
     */
    private static convertRecordToArtifact(res: Record): IArtifact {
        return {
            id: int(res.get("id")).toNumber(),
            name: res.get("name"),
            fullName: res.get("fullName"),
            parentId: int(res.get("parentId")).toNumber(),
            delimiter: res.get("delimiter"),
            count: int(res.get("count")).toNumber(),
            objectTypes: res.get("objectTypes"),
            levels: res.get("levels"),
            modules: res.get("modules"),
            subsets: res.get("subsets"),
            children: []
        };
    }
}
