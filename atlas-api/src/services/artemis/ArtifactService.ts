import { Neo4JAccessLayer } from "@database/Neo4jAccessLayer";
import HttpException from "@exceptions/HttpException";
import { IArtifact } from "@interfaces/artemis/Artifact.interface";
import { logger } from "@shared/Logger";
import { int, Record, Transaction } from "neo4j-driver";
import TagService from "@services/configuration/TagService";

export default class ArtifactService {
  private neo4jAl: Neo4JAccessLayer = Neo4JAccessLayer.getInstance();

  private static recursiveInsert(root: IArtifact, listArtifact: IArtifact[]): IArtifact {
    for (const index in listArtifact) {
      if (listArtifact[index].parentId == root.id) {
        root.children.push(ArtifactService.recursiveInsert(listArtifact[index], listArtifact));
      }
    }

    root.children.sort(function (a, b) {
      return b.count - a.count;
    });

    return root;
  }

  /**
   * Get the prefix to perform the extraction
   * @param type Type of extraction as a string
   * @private
   */
  private static async getExtractionPrefix(type: string): Promise<string> {
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
      children: [],
    };
  }

  /**
   * Generate the tag base on the type of the extraction
   * @param extractionType
   * @param primaryGroupName
   * @param secondaryGroupName
   * @private
   */
  private static async generateTag(extractionType: string, primaryGroupName: string, secondaryGroupName: string) {
    const prefix = await ArtifactService.getExtractionPrefix(extractionType);

    switch (extractionType) {
      case "level":
        return prefix + primaryGroupName;
      case "module":
        return prefix + primaryGroupName;
      case "architecture":
        return prefix + primaryGroupName + "$" + secondaryGroupName;
      default:
        throw new Error(`No prefix existing for extraction ${extractionType}.`);
    }
  }

  public async getArtifactsList(appName: string, language: string, externality: boolean): Promise<IArtifact[]> {
    const req = `CALL artemis.api.breakdown.get($appName, $language, $externality)`;
    try {
      const val = await this.neo4jAl.executeWithParameters(req, {
        appName: appName,
        language: language,
        externality: externality,
      });
      if (!val.records || val.records.length == 0) return [];

      const artifacts = [];
      for (const it in val.records) {
        if (Object.prototype.hasOwnProperty.call(val.records, it)) {
          artifacts.push(ArtifactService.convertRecordToArtifact(val.records[it]));
        }
      }
      return artifacts;
    } catch (err) {
      logger.error(`Failed to realize the breakdown of the application ${appName}.`, err);
      throw new HttpException(500, "Internal error");
    }
  }

  // Get Artifacts as a Tree
  public async getArtifactAsTree(appName: string, language: string, externality: boolean): Promise<IArtifact[]> {
    const allArtifacts: IArtifact[] = await this.getArtifactsList(appName, language, externality);
    const tree: IArtifact[] = [];

    for (const key in allArtifacts) {
      const elem = allArtifacts[key];
      if (elem.parentId < 0) {
        tree.push(ArtifactService.recursiveInsert(elem, allArtifacts));
      }
    }

    return tree;
  }

  /**
   * Extract a list of artifact to the selected location
   * @param application Name of the application
   * @param artifactList List of the artifact to extract
   * @param extractionType Type of the extraction
   * @param groupType Type of recoupment (Together split)
   * @param primaryGroupName
   * @param secondaryGroupName
   */
  public async extractArtifacts(
    application: string,
    artifactList: IArtifact[],
    extractionType: string,
    groupType: string,
    primaryGroupName: string,
    secondaryGroupName: string
  ): Promise<void> {
    try {
      const prefix: string = await ArtifactService.getExtractionPrefix(groupType);

      const reqMap: [string, unknown][] = [];

      let params = {};

      // eslint-disable-next-line no-console
      console.log("Extraction type: ", groupType);

      // split them
      for (const a of artifactList) {
        try {
          let tagName: string;

          if (extractionType === "together") {
            if (groupType === "architecture") {
              tagName = prefix + primaryGroupName + "$" + secondaryGroupName;
            } else {
              tagName = prefix + primaryGroupName;
            }
          } else {
            if (groupType === "architecture") {
              tagName = prefix + primaryGroupName + "$" + (a.customName || a.name);
            } else {
              tagName = prefix + (a.customName || a.name);
            }
          }

          // eslint-disable-next-line max-len
          const req = `MATCH (o:Object:\`${application}\`) WHERE o.InternalType IN $listInternalType 
                    AND o.FullName STARTS WITH $fullName 
                    SET o.Tags = CASE WHEN o.Tags IS NULL THEN [$tagName] 
                    ELSE o.Tags + $tagName END`;

          params = {
            listInternalType: a.objectTypes,
            fullName: a.fullName,
            tagName: tagName,
          };

          reqMap.push([req, params]);
        } catch (err) {
          logger.error(`Failed to extract the artifact : ${String(a)}`, err);
        }
      }

      console.log("To execute :", reqMap);

      const session = this.neo4jAl.getSession();
      let tx: Transaction = null;
      try {
        tx = session.beginTransaction();

        reqMap.forEach((x) => {
          const req = x[0];
          const params = x[1];
          tx.run(req, params);
        });

        await tx.commit();
      } catch (err) {
        if (tx != null) {
          await tx.rollback();
        }
        logger.error("Failed to group nodes.", err);
        throw err;
      }
    } catch (err) {
      logger.error(`Failed to realize the extraction of artifacts of the application ${application}.`, err);
      throw new HttpException(500, "Internal error");
    }
  }
}
