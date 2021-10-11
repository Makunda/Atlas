import { Neo4JAccessLayer } from "@database/Neo4JAccessLayer";
import LevelService from "@services/imaging/LevelService";
import { logger } from "@shared/Logger";
import { int } from "neo4j-driver";

/**
 * Handle the manipulation of custom aggregations in the application
 */
export default class AggregationService {
  private static NEO4JAL: Neo4JAccessLayer = Neo4JAccessLayer.getInstance();
  private static AGGREGATION_LABEL = "CustomView";
  private static CUSTOM_LABEL = "Custom";

  /**
   * Get the label of the aggregation node
   * @returns Label of the node
   */
  public static getAggregationLabel(): string {
    return this.AGGREGATION_LABEL;
  }

  /**
   * Get the label of the aggregation node
   * @returns Label of the node
   */
  public static getCustomLabel(): string {
    return this.CUSTOM_LABEL;
  }

  /**
   * Create Level Taxonomy aggregation
   * @param {string} application Name of the application
   * @param {string} name Name of the new Architecture
   * @returns
   */
  public async duplicateCastTaxonomy(application: string, aggregationName: string): Promise<void> {
    try {
      let aggregationId;

      try {
        // Create the aggregation view
        const req = "CALL demeter.api.create.aggregation($application, $aggregationName)";
        const results = await AggregationService.NEO4JAL.executeWithParameters(req, {
          application: application,
          aggregationName: aggregationName,
        });

        if (!results || results.records.length == 0) {
          throw new Error("The request returned no results.");
        }

        const node = results.records[0].get(0);
        aggregationId = int(node.identity).toNumber();
      } catch (err) {
        // Exit if the discovery fails
        logger.error(`Failed to create the aggregation node in application '${application}'.`, err);
        throw new Error("Failed to create the aggregation node in application '${application}'.");
      }

      // Find the levels in the application
      const reqLevels = `MATCH (o:Level5:\`${application}\`) RETURN ID(o) as idNode, o.Name as name;`;
      const res = await AggregationService.NEO4JAL.execute(reqLevels);

      // Create all the custom nodes
      const reqCustom = "CALL demeter.api.create.customNode($application, $aggregationId, $customName, $nodesId)"; // Request to create the nodes
      let toLinks: number[] = [];

      for (const rec of res.records) {
        try {
          const id = int(rec.get("idNode")).toNumber();
          const name = String(rec.get("name"));

          // Get objects
          const request = `MATCH (l:Level5:\`${application}\`)-[]->(o:Object) WHERE ID(l)=$id 
                    RETURN ID(o) as idNode;`;

          const resNodes = await AggregationService.NEO4JAL.executeWithParameters(request, {
            id: id,
          });

          // Get list of the IDs
          toLinks = resNodes.records.map(x => int(x.get("idNode")).toNumber());

          // Create a custom node per levels and add the objects
          const resAgg = await AggregationService.NEO4JAL.executeWithParameters(reqCustom, {
            application: application,
            aggregationId: aggregationId,
            customName: name,
            nodesId: toLinks,
          });

          // If no results, skip it
          if (!resAgg || resAgg.records.length == 0) {
            throw new Error(`Request returned no results for level with id '${id}' and name '${name}'`);
          }
        } catch (error) {
          logger.error("Failed to create a custom association node.", error);
        }
      }

      // Refresh the aggregation
      const refreshReq = "CALL demeter.api.refresh.aggregation($application, $idAggregation);";
      await AggregationService.NEO4JAL.executeWithParameters(refreshReq, { application: application, idAggregation: aggregationId });
    } catch (err) {
      logger.error("Failed to duplicate Cast Taxonomy to an aggregation.", err);
      throw err;
    }
  }
}
