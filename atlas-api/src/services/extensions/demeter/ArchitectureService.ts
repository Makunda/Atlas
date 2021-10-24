/* eslint-disable max-len */
import { Neo4JAccessLayer } from "@database/Neo4JAccessLayer";
import ArchitectureNode from "@entities/Imaging/ArchitectureNode";
import Archimodel from "@interfaces/imaging/ArchiModel";
import Subset from "@interfaces/imaging/Subset";
import TagService from "@services/configuration/TagService";
import { logger } from "@shared/Logger";
import { QueryResult, Node, int } from "neo4j-driver";

export default class ArchitectureService {
  private static NEO4JAL: Neo4JAccessLayer = Neo4JAccessLayer.getInstance();
  private static ARCHITECTURE_LABEL = "ArchiModel";
  private static SUBSET_LABEL = "Subset";

  /**
   * Get the Hidden label of the architecture nodes
   * @return {Promise<string>} A promise returning the label
   */
  public static async getHiddenArchitectureLabel(): Promise<string> {
    try {
      const req = "CALL demeter.get.architecture.hidden.label()";
      const res: QueryResult = await ArchitectureService.NEO4JAL.execute(req);
      if (!res || res.records.length == 0) throw new Error("Failed to retrieve the hidden Architecture label");
      return String(res.records[0].get(0));
    } catch (err) {
      logger.error("Failed to get hidden architecture label.", err);
      throw err;
    }
  }

  /**
   * Get the Hidden label of the subset nodes
   * @return {Promise<string>} A promise returning the label
   */
  public static async getHiddenSubsetLabel(): Promise<string> {
    try {
      const req = "CALL demeter.get.subset.hidden.label()";
      const res: QueryResult = await ArchitectureService.NEO4JAL.execute(req);
      if (!res || res.records.length == 0) throw new Error("Failed to retrieve the hidden Subset label");
      return String(res.records[0].get(0));
    } catch (err) {
      logger.error("Failed to get hidden subset label.", err);
      throw err;
    }
  }

  /**
   * Update an architecture view using its id
   * @param {number} architectureId Id of the architecture view
   * @param {Archimodel} data new data for the architecture model
   */
  public async updateArchitectureByID(architectureId: number, data: Archimodel) {
    try {
      const label = await ArchitectureService.getHiddenArchitectureLabel();
      const params: any = data;
      params.idArchiModel = architectureId;

      const req = `MATCH (a) WHERE (a:ArchiModel OR a:${label}) AND ID(a)=$idArchiModel
      SET a.Name=$name
      SET a.Color=$color
      return a as node;
      `;
      const res: QueryResult = await ArchitectureService.NEO4JAL.executeWithParameters(req, params);
      if (!res || res.records.length == 0) throw new Error(`Failed to update the architecture with id ${architectureId}.`);
    } catch (err) {
      logger.error(`Failed to update the architecture with id ${architectureId}.`, err);
      throw err;
    }
  }

  /**
   * Update a subset using its id
   * @param {number} subsetID Id of the architecture view
   * @param {Subset} data new data for the architecture model
   */
  public async updateSubsetByID(subsetID: number, data: Subset) {
    try {
      const label = await ArchitectureService.getHiddenSubsetLabel();
      const params: any = data;
      params.subsetID = subsetID;

      const req = `MATCH (a) WHERE (a:Subset OR a:${label}) AND ID(a)=$subsetID
      WITH a, a.Name as OldName
      SET a.Name=$name
      SET a.Color=$color
      WITH a, OldName
      MATCH (a)-[:Contains]->(o:Object)
      SET o.Subset = [ x in o.Subset WHERE NOT x=a.Name ] + OldName
      return a as node
      `;
      const res: QueryResult = await ArchitectureService.NEO4JAL.executeWithParameters(req, params);
      if (!res || res.records.length == 0) throw new Error(`Failed to update the subsetID with id ${subsetID}.`);
    } catch (err) {
      logger.error(`Failed to update the architecture with id ${subsetID}.`, err);
      throw err;
    }
  }

  /**
   * Delete an Architecture using its Id
   * @param {string} application Name of the application
   * @param {number} architectureId Id of the architecture
   * @returns
   */
  public async deleteArchitectureByID(application: string, architectureId: number): Promise<void> {
    try {
      const req = "CALL demeter.delete.architecture.view($application, $id)";
      await ArchitectureService.NEO4JAL.executeWithParameters(req, {
        application: application,
        id: architectureId,
      });
    } catch (err) {
      logger.error(`Failed to delete architecture with id: '${architectureId}'.`, err);
      throw err;
    }
  }

  /**
   * Delete an Architecture using its Id
   * @param {string} application Name of the application
   * @param {number} subsetId Id of the subset
   * @returns
   */
  public async deleteSubset(application: string, subsetId: number): Promise<void> {
    try {
      const req = "CALL demeter.delete.architecture.subset($application, $id)";
      await ArchitectureService.NEO4JAL.executeWithParameters(req, {
        application: application,
        id: subsetId,
      });
    } catch (err) {
      logger.error(`Failed to get delete subset with id: '${subsetId}'.`, err);
      throw err;
    }
  }

  /**
   * Hide an Architecture using its Id
   * @param {number} architectureId Id of the architecture
   * @return {Promise<void>} Promise ending when
   */
  public async hideArchitectureById(architectureId: number): Promise<void> {
    try {
      const req = "CALL demeter.architecture.hide.byId($id)";
      await ArchitectureService.NEO4JAL.executeWithParameters(req, {
        id: architectureId,
      });
    } catch (err) {
      logger.error(`Failed to get delete architecture with id: '${architectureId}'.`, err);
      throw err;
    }
  }

  /**
   * Display an Architecture using its Id
   * @param {number} architectureId Id of the architecture
   * @returns
   */
  public async displayArchitectureById(architectureId: number): Promise<void> {
    try {
      const req = "CALL demeter.architecture.display.byId($id)";
      await ArchitectureService.NEO4JAL.executeWithParameters(req, {
        id: architectureId,
      });
    } catch (err) {
      logger.error(`Failed to display architecture with id: '${architectureId}'.`, err);
      throw err;
    }
  }

  /**
   * Display an Architecture and its children using its Id
   * @param {number} architectureId Id of the architecture
   * @returns
   */
  public async displayCompleteArchitectureById(architectureId: number): Promise<void> {
    try {
      const req = "CALL demeter.architecture.display.children.byId($id)";
      await ArchitectureService.NEO4JAL.executeWithParameters(req, {
        id: architectureId,
      });
    } catch (err) {
      logger.error(`Failed to display complete architecture with id: '${architectureId}'.`, err);
      throw err;
    }
  }

  /**
   * Hide a Subset using its Id
   * @param {number} subsetId Id of the subset
   * @returns
   */
  public async hideSubsetById(subsetId: number): Promise<void> {
    try {
      const req = "CALL demeter.subset.hide.byId($id)";
      await ArchitectureService.NEO4JAL.executeWithParameters(req, {
        id: subsetId,
      });
    } catch (err) {
      logger.error(`Failed to hide subset with id: '${subsetId}'.`, err);
      throw err;
    }
  }

  /**
   * Duplicate an architecture and give it a new name
   * @param {number} architectureId Id of the architecture
   * @param {string} name Name of the new Architecture
   * @returns
   */
  public async duplicateArchitecture(architectureId: number, name: string): Promise<void> {
    try {
      const tag = await new TagService().getCustomArchitectureTag();
      const req = `MATCH (a:ArchiModel)-[]->(s:Subset)-[]->(o:Object) WHERE ID(a)=$architectureId 
      SET o.Tags = CASE WHEN o.Tags IS NULL THEN [($tag+$name+"$"+s.Name)] ELSE o.Tags + ($tag+$name+"$"+s.Name) END`;
      await ArchitectureService.NEO4JAL.executeWithParameters(req, {
        architectureId: architectureId,
        name: name,
        tag: tag,
      });
    } catch (err) {
      logger.error(`Failed to duplicate architecture with id: '${architectureId}'.`, err);
      throw err;
    }
  }

  /**
   * Group all the nodes in the application not in one of the subset of the architecture
   * @param {string} application Name of the application
   * @param {number} architectureId Id of the architecture
   * @returns
   */
  public async groupUnassigned(application: string, architectureId: number): Promise<void> {
    try {
      const tag = await new TagService().getCustomArchitectureTag();
      const req = `
      MATCH (a:ArchiModel:\`${application}\`) WHERE ID(a)=$architectureId 
      WITH a 
      MATCH (o:Object:\`${application}\`) WHERE NOT (o)-[]->(:Subset)<-[]-(a)
      SET o.Tags = CASE WHEN o.Tags IS NULL THEN [($tag+a.Name+"$Unassigned")] ELSE o.Tags + ($tag+a.Name+"$Unassigned") END`;
      await ArchitectureService.NEO4JAL.executeWithParameters(req, {
        architectureId: architectureId,
        tag: tag,
      });
    } catch (err) {
      logger.error(`Failed to create Unassigned subset for architecture with id: '${architectureId}'.`, err);
      throw err;
    }
  }

  /**
   * Create Level Taxonomy architecture
   * @param {string} application Name of the application
   * @param {string} name Name of the new Architecture
   * @returns
   */
  public async duplicateCastTaxonomy(application: string, name: string): Promise<void> {
    try {
      // Get the list of the Type in the CAST TAXONOMY
      const req = `
      MATCH (o:Object:\`${application}\`) 
      RETURN DISTINCT o.Type as type, ID(o) as nodeID`;
      const res = await ArchitectureService.NEO4JAL.execute(req);

      // If empty results, Stop
      if (!res || res.records.length == 0) return;

      // Aggregates results
      let type: string;
      let id: number;

      // Categorize the objects to create
      const levelMap = new Map<string, number[]>();
      for (const record of res.records) {
        type = String(record.get("type"));
        id = int(record.get("nodeID")).toNumber();

        if (levelMap.has(type)) levelMap.get(type).push(id);
        // append to the list
        else levelMap.set(type, [id]); // Create a list
      }

      logger.info(`Identified ${levelMap.size} groups to recreate as an architecture.`);

      // Create architecture with the identified subset
      const request = "CALL demeter.create.architecture($app, $archiName, $idList);";
      for (const [key, value] of levelMap) {
        try {
          await ArchitectureService.NEO4JAL.executeWithParameters(request, {
            app: application,
            archiName: name + "$" + key,
            idList: value,
          });
        } catch (err) {
          logger.error(`Failed to create subset '${key} in architecture '${name}' for application '${application}'.`, err);
        }
      }

      logger.info(`A new Architecture named ${name} has been successfully created in application ${application}. Refreshing it.`);

      // Refresh the Architecture
      try {
        const requestRefresh = "demeter.api.refresh.architecture($app, $archiName)";
        await ArchitectureService.NEO4JAL.executeWithParameters(requestRefresh, {
          app: application,
          archiName: name,
        });
        logger.info(`Refreshing the ${name} architecture in application ${application}.`);
      } catch (err) {
        logger.error(`Failed to refresh architecture ${name} in application ${application}.`, err);
        throw new Error("Failed to refresh the architecture.");
      }

      logger.info(`Duplication of the CAST Taxonomy is a success in application ${application}.`);
    } catch (err) {
      logger.error("Failed to recreate Cast Taxonomy.", err);
      throw err;
    }
  }

  /**
   * Generate the explicit filter modules from the Architecture ID
   * @param {number} architectureId Id of the architecture
   */
  public async generateModules(architectureId: number): Promise<string[]> {
    const req = `MATCH (a:\`${ArchitectureService.ARCHITECTURE_LABEL}\`)-[]->(s:\`${ArchitectureService.SUBSET_LABEL}\`)
    WHERE ID(a)=$id
    RETURN DISTINCT ID(s) as subsetId, s.Name as subsetName;
    `;
    const result: QueryResult = await ArchitectureService.NEO4JAL.executeWithParameters(req, {
      id: int(architectureId),
    });
    // Get subsets and store query results
    const queries = [] as string[];
    for (let index = 0; index < result.records.length; index++) {
      const subset = int(result.records[index].get("subsetId"));
      const subsetName = String(result.records[index].get("subsetName"));

      // Get Objects' ID
      const reqObject = `MATCH (s:\`${ArchitectureService.SUBSET_LABEL}\`)-[]->(o:Object)
        WHERE ID(s)=$id
        RETURN DISTINCT o.AipId as objectId;
      `;
      const objectResults: QueryResult = await ArchitectureService.NEO4JAL.executeWithParameters(reqObject, {
        id: subset,
      });

      // Iterate and store Object's ID
      const objectList = [] as number[];
      for (let index2 = 0; index2 < objectResults.records.length; index2++) {
        const objectId = int(objectResults.records[index2].get("objectId")).toNumber();
        objectList.push(objectId);
      }

      // Generate and store query
      const query = `
// Define the module: '${subsetName}'
delete from §CI_OBJECTS_SET where set_name = '$(ModuleName)';
  
insert into §CI_OBJECTS_SET(set_name, object_id, error_id)
select '$(ModuleName)', o.object_id, 0
from §CDT_OBJECTS o
where object_id IN (${objectList.join(", ")});

`;
      queries.push(query);
    }

    return queries;
  }

  /**
   * Display a Subset using its Id
   * @param {number} subsetId Id of the subset
   * @returns
   */
  public async displaySubsetById(subsetId: number): Promise<void> {
    try {
      const req = "CALL demeter.subset.display.byId($id)";
      await ArchitectureService.NEO4JAL.executeWithParameters(req, {
        id: subsetId,
      });
    } catch (err) {
      logger.error(`Failed to display subset with id: '${subsetId}'.`, err);
      throw err;
    }
  }

  /**
   * Group object in a all application
   */
  public async executeGroupingInAllApplications(): Promise<number> {
    try {
      const request = "CALL demeter.api.group.architectures.views.all()";

      const results: QueryResult = await ArchitectureService.NEO4JAL.execute(request);
      return results.records.length || 0;
    } catch (err) {
      logger.error("Failed to group the architecture views.", err);
      throw err;
    }
  }

  /**
   * Group object in a specific application
   */
  public async executeGroupingInApplication(application: string): Promise<number> {
    try {
      const request = `CALL demeter.group.architectures(\"${application}\")`;

      const results: QueryResult = await ArchitectureService.NEO4JAL.execute(request);
      return results.records.length || 0;
    } catch (err) {
      logger.error("Failed to group the architecture views.", err);
      throw err;
    }
  }

  /**
   * Get all the architecture in the application
   * @param {string} application Name of the application
   * @return {Promise<Archimodel[]>} Promise returning a list of ArchiModel in the application
   */
  public async getAllArchitectures(application: string): Promise<Archimodel[]> {
    try {
      const hiddenLabel = await ArchitectureService.getHiddenArchitectureLabel();
      const req = `MATCH (a:\`${application}\`) WHERE a:ArchiModel or a:\`${hiddenLabel}\` RETURN a as node`;

      const archimodel: Archimodel[] = [];
      const res = await ArchitectureService.NEO4JAL.execute(req);

      if (res && res.records.length > 0) {
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
      logger.error(`Failed to retrieve the list of architecture in application : '${application}'.`, err);
      throw new Error("Failed to retrieve the list of Architectures");
    }
  }
}
