/* eslint-disable max-len */
import { logger } from "@shared/Logger";
import { int } from "neo4j-driver";
import { Neo4JAccessLayer } from "@database/Neo4JAccessLayer";
import HttpException from "@exceptions/HttpException";
import { DataCallGraph, dataCallGraphFromObj } from "@interfaces/imaging/DataCallGraph";

/**
 * Manage the modification done on DataGraph in an application
 */
class DataCallGraphService {
  private static MASKED_DATACALLGRAPH_LABEL = "DataGraphMasked";
  private static MASKED_DATACALLGRAPH_NODE_LABEL = "DataGraphNodeMasked";
  private neo4jAl: Neo4JAccessLayer = Neo4JAccessLayer.getInstance();

  // sort option
  private static getSortParameter(obj: string, sort: string): string {
    switch (sort) {
      case "name":
        return obj + ".Name";
      case "fullName":
        return obj + ".FullName";
      case "technologie":
        return "SIZE(technologies)";
      case "count":
        return "count";
      default:
        return obj + ".Name";
    }
  }

  private static getSortDesc(sortDesc: boolean): string {
    if (sortDesc) {
      return "DESC";
    } else {
      return "ASC";
    }
  }

  /**
   * Get the total number of DataGraph
   * @param application
   */
  public async getNumberDataGraph(application: string): Promise<number> {
    const req = `MATCH (t:DataGraph:\`${application}\`) 
        RETURN COUNT(t) as count`;

    const result = await this.neo4jAl.execute(req);

    const singleRecord = result.records[0];
    return int(singleRecord.get("count")).toNumber();
  }

  /**
   * Get the total number of masked DataGraph
   * @param application
   */
  public async getNumberMaskedDataGraph(application: string): Promise<number> {
    const req = `MATCH (t:${DataCallGraphService.MASKED_DATACALLGRAPH_LABEL}:\`${application}\`) 
        RETURN COUNT(t) as count`;

    const result = await this.neo4jAl.execute(req);

    const singleRecord = result.records[0];
    return int(singleRecord.get("count")).toNumber();
  }

  /**
   * Get the total number of masked DataGraph
   * @param application
   */
  public async getInsightsUnmaskedDataGraph(application: string): Promise<Record<string, number>> {
    try {
      const reqMin = `MATCH (t:DataGraph:\`${application}\`)-[:Contains]->(n) 
            WHERE n:Object OR n:SubObject
            WITH t, COUNT(n) as countO, COUNT(DISTINCT n.Level) as technologiesCount 
            RETURN min(countO) as minCountO,
            min(technologiesCount) as minTechCount`;

      const reqMax = `MATCH (t:DataGraph:\`${application}\`)-[:Contains]->(n) 
            WHERE n:Object OR n:SubObject
            WITH t, COUNT(n) as countO, COUNT(DISTINCT n.Level) as technologiesCount 
            RETURN max(countO) as maxCountO, 
            max(technologiesCount) as maxTechCount`;

      const resultMin = await this.neo4jAl.execute(reqMin);
      const resultMax = await this.neo4jAl.execute(reqMax);

      const singleMinRecord = resultMin.records[0];
      const singleMaxRecord = resultMax.records[0];

      return {
        minObject: int(singleMinRecord.get("minCountO")).toNumber(),
        maxObject: int(singleMaxRecord.get("maxCountO")).toNumber(),
        minTechnology: int(singleMinRecord.get("minTechCount")).toNumber(),
        maxTechnology: int(singleMaxRecord.get("maxTechCount")).toNumber(),
      };
    } catch (err) {
      throw new Error(`Failed to retrieve insights ${err}`);
    }
  }

  /**
   * Get a batch of DataGraph
   * @param application Application
   * @param start Start index
   * @param end End index
   * @param filter
   * @param sort Property to sort on
   * @param sortDesc Direction of the sort
   */
  public async getBatchDataGraph(
    application: string,
    start: number,
    end: number,
    filter?: Record<string, unknown>,
    sort?: string,
    sortDesc?: boolean,
  ): Promise<DataCallGraph[]> {
    try {
      const filterArray = this.buildFilter(filter);
      const req = `MATCH (t:DataGraph:\`${application}\`)
            OPTIONAL MATCH (t)-[:Contains]->(n:\`${application}\`) 
            WHERE n:Object OR n:SubObject
            WITH t as tran, COUNT(n) as count, COLLECT(DISTINCT n.Level) as technologies, 
            COUNT(DISTINCT n.Level) as countTechnology 
            ${filterArray[0]} 
            RETURN tran, count, technologies, countTechnology
            ORDER BY ${DataCallGraphService.getSortParameter("tran", sort)} ${DataCallGraphService.getSortDesc(
        sortDesc,
      )} 
            SKIP $toSkip LIMIT $toGet;`;

      const params: any = filterArray[1];
      params.toSkip = int(start);
      params.toGet = int(end - start);
      const result = await this.neo4jAl.executeWithParameters(req, params);

      const listDataGraph: DataCallGraph[] = [];
      for (let i = 0; i < result.records.length; i++) {
        const tr = dataCallGraphFromObj(result.records[i].get("tran"));
        tr.count = int(result.records[i].get("count")).toNumber();
        tr.technologies = result.records[i].get("technologies");
        tr.numTechnologies = int(result.records[i].get("countTechnology")).toNumber();
        listDataGraph.push(tr);
      }

      return listDataGraph;
    } catch (err) {
      logger.error(`Failed to get catch of DataGraph for application ${application}.`, err);
      throw new HttpException(500, "Internal error");
    }
  }

  /**
   * Pin an DataGraph with a Prefix
   * @param application Name of the application
   * @param idDataGraph Id of the tran
   * @param pinPrefix Prefix to be put in front of a DataGraph
   */
  public async pinDataGraph(application: string, idDataGraph: number, pinPrefix: string): Promise<DataCallGraph> {
    try {
      const req = `MATCH (t:DataGraph:\`${application}\`) WHERE ID(t)=$idTran 
            SET t.Name= CASE WHEN t.Name STARTS WITH $pinPrefix THEN t.Name ELSE 
            ($pinPrefix + t.Name) END 
            RETURN t as node;`;

      const result = await this.neo4jAl.executeWithParameters(req, { idTran: int(idDataGraph), pinPrefix: pinPrefix });
      if (!result || result.records.length == 0) return null;

      return dataCallGraphFromObj(result.records[0].get("node"));
    } catch (err) {
      logger.error(`Failed to pin a DataGraph for application ${application}.`, err);
      throw new HttpException(500, "Internal error");
    }
  }

  /**
   * Unpin an DataGraph with a Prefix
   * @param application Name of the application
   * @param idDataGraph Id of the tran
   * @param pinPrefix Prefix to be put in front of a DataGraph
   */
  public async unpinDataGraph(application: string, idDataGraph: number, pinPrefix: string): Promise<DataCallGraph> {
    try {
      const req = `MATCH (t:DataGraph:\`${application}\`) WHERE ID(t)=$idTran 
            SET t.Name= CASE WHEN t.Name STARTS WITH $pinPrefix THEN 
            substring(t.Name, SIZE($pinPrefix)) ELSE 
            t.Name END 
            RETURN t as node;`;

      const result = await this.neo4jAl.executeWithParameters(req, { idTran: int(idDataGraph), pinPrefix: pinPrefix });
      if (!result || result.records.length == 0) return null;

      return dataCallGraphFromObj(result.records[0].get("node"));
    } catch (err) {
      logger.error(`Failed to pin a DataGraph for application ${application}.`, err);
      throw new HttpException(500, "Internal error");
    }
  }

  /**
   * Rename a DataGraph using its ID in an application
   * @param application Name of the application
   * @param idDataGraph Id of the DataGraph Node
   * @param newName New name of the DataGraph
   */
  public async renameDataGraph(application: string, idDataGraph: number, newName: string): Promise<DataCallGraph> {
    try {
      const req = `MATCH (t:DataGraph:\`${application}\`) WHERE ID(t)=$idTran 
            SET t.Name=$newName 
            RETURN t as node`;

      const result = await this.neo4jAl.executeWithParameters(req, { idTran: int(idDataGraph), newName: newName });
      if (!result || result.records.length == 0) return null;

      return dataCallGraphFromObj(result.records[0].get("node"));
    } catch (err) {
      logger.error(`Failed to pin a DataGraph for application ${application}.`, err);
      throw new HttpException(500, "Internal error");
    }
  }

  /**
   * Get a batch of masked DataGraph
   * @param application Name of the application
   * @param start Start index
   * @param end End index
   * @param sort Property to sort on
   * @param sortDesc Direction of the sort
   */
  public async getBatchMaskedDataGraph(
    application: string,
    start: number,
    end: number,
    sort?: string,
    sortDesc?: boolean,
  ): Promise<DataCallGraph[]> {
    try {
      const req = `MATCH (t:${DataCallGraphService.MASKED_DATACALLGRAPH_LABEL}:\`${application}\`)
            OPTIONAL MATCH (t)-[:Contains]->(n:\`${application}\`)
            WHERE n:Object OR n:SubObject 
            RETURN t as tran, COUNT(n) as count , COLLECT(DISTINCT n.Level) as technologies, 
            COUNT(DISTINCT n.Level) as numTechnologies 
            ORDER BY ${DataCallGraphService.getSortParameter("t", sort)} ${DataCallGraphService.getSortDesc(sortDesc)} 
            SKIP $toSkip LIMIT $toGet `;

      const result = await this.neo4jAl.executeWithParameters(req, {
        toSkip: int(start),
        toGet: int(end - start),
      });

      const listDataCallGraph: DataCallGraph[] = [];
      for (let i = 0; i < result.records.length; i++) {
        const tr = dataCallGraphFromObj(result.records[i].get("tran"));
        tr.count = int(result.records[i].get("count")).toNumber();
        tr.technologies = result.records[i].get("technologies");
        tr.numTechnologies = int(result.records[i].get("numTechnologies")).toNumber();
        listDataCallGraph.push(tr);
      }

      return listDataCallGraph;
    } catch (err) {
      logger.error(`Failed to get the list of DataGraph for application ${application}.`, err);
      throw new Error("Failed to get the list of DataGraph");
    }
  }

  /**
   * Mask all the DataGraph not compliant with filter
   * @param application Name of the application
   * @param filter
   */
  public async maskDataGraphWithFilter(application: string, filter: Record<string, unknown>): Promise<number> {
    try {
      const filterArray = this.buildFilter(filter, true);
      const req = `MATCH (t:DataGraph:\`${application}\`)-[:Contains]->(n) 
            OPTIONAL MATCH (t)-[]->(n:DataGraphNode) 
            WHERE n:Object OR n:SubObject
            WITH t as tran, COUNT(n) as count, COLLECT(DISTINCT n.Level) as technologies 
            ${filterArray[0]}  
            REMOVE t:DataGraph SET t:${DataCallGraphService.MASKED_DATACALLGRAPH_LABEL} 
            REMOVE n:DataGraphNode SET n:${DataCallGraphService.MASKED_DATACALLGRAPH_NODE_LABEL} 
            RETURN COUNT(t) as node;
            `;

      const params: any = filterArray[1];
      const result = await this.neo4jAl.executeWithParameters(req, params);
      if (!result || result.records.length == 0) return null;

      return int(result.records[0].get("node")).toNumber();
    } catch (err) {
      logger.error(`Failed to mask a DataGraph for application ${application}.`, err);
      throw new HttpException(500, "Internal error");
    }
  }

  /**
   * Mask a DataGraph
   * @param application Name of the application
   * @param idDataGraph ID of the DataGraph
   */
  public async maskDataGraph(application: string, idDataGraph: number): Promise<DataCallGraph> {
    try {
      const req = `MATCH (t:DataGraph:\`${application}\`) WHERE ID(t)=$idTran 
        OPTIONAL MATCH (t)-[]->(n:DataGraphNode) 
        REMOVE t:DataGraph SET t:${DataCallGraphService.MASKED_DATACALLGRAPH_LABEL} 
        REMOVE n:DataGraphNode SET n:${DataCallGraphService.MASKED_DATACALLGRAPH_NODE_LABEL} 
        RETURN t as node;`;

      const result = await this.neo4jAl.executeWithParameters(req, { idTran: int(idDataGraph) });
      if (!result || result.records.length == 0) return null;

      return dataCallGraphFromObj(result.records[0].get("node"));
    } catch (err) {
      logger.error(`Failed to mask a DataGraph for application ${application}.`, err);
      throw new HttpException(500, "Internal error");
    }
  }

  /**
   * UnMask a DataGraph using its id
   * @param application Name of the application
   * @param idDataGraph Id of the DataGraph
   */
  public async unmaskDataGraph(application: string, idDataGraph: number): Promise<DataCallGraph> {
    try {
      const req = `MATCH (t:${DataCallGraphService.MASKED_DATACALLGRAPH_LABEL}:\`${application}\`) WHERE ID(t)=$idDataGraph 
        OPTIONAL MATCH (t)-[]->(n:${DataCallGraphService.MASKED_DATACALLGRAPH_NODE_LABEL})
        REMOVE t:${DataCallGraphService.MASKED_DATACALLGRAPH_LABEL} SET t:DataGraph  
        REMOVE n:${DataCallGraphService.MASKED_DATACALLGRAPH_NODE_LABEL} SET n:DataGraphNode  
        RETURN t as node;`;

      const result = await this.neo4jAl.executeWithParameters(req, { idDataGraph: int(idDataGraph) });
      if (!result || result.records.length == 0) return null;

      return dataCallGraphFromObj(result.records[0].get("node"));
    } catch (err) {
      logger.error(`Failed to un-mask a DataGraph for application ${application}.`, err);
      throw new HttpException(500, "Internal error");
    }
  }

  /**
   * Un mask all the DataGraph in an application
   * @param application
   */
  public async unmaskAllDataGraph(application: string): Promise<boolean> {
    try {
      const req = `MATCH (t:${DataCallGraphService.MASKED_DATACALLGRAPH_LABEL}:\`${application}\`) 
        OPTIONAL MATCH (t)-[]->(n:${DataCallGraphService.MASKED_DATACALLGRAPH_NODE_LABEL})
        REMOVE t:${DataCallGraphService.MASKED_DATACALLGRAPH_LABEL} SET t:DataGraph  
        REMOVE n:${DataCallGraphService.MASKED_DATACALLGRAPH_NODE_LABEL} SET n:DataGraphNode  
        RETURN t as node;`;

      const result = await this.neo4jAl.execute(req);
      return !(result.records.length === 0);
    } catch (err) {
      logger.error(`Failed to un-mask all DataGraph in application ${application}.`, err);
      throw new HttpException(500, "Internal error");
    }
  }

  /**
   * Mask a batch of DataGraph containing a list of certain terms
   * @param application Name of the application
   * @param terms
   */
  public async maskDataGraphByTerms(application: string, terms: string[]): Promise<number> {
    try {
      // Ignore if the list of term is empty
      if (terms.length == 0) return 0;

      const req = `
            MATCH (t:DataGraph:\`${application}\`) WHERE any(x in $termList WHERE t.Name contains x)
            WITH t as tran ,COUNT(n) as couOn
            OPTIONAL MATCH (t)-[]->(tn:DataGraphNode:\`${application}\`)
            REMOVE tran:DataGraph SET tran:${DataCallGraphService.MASKED_DATACALLGRAPH_LABEL} 
            REMOVE tranNode:DataGraphNode SET tranNode:${DataCallGraphService.MASKED_DATACALLGRAPH_NODE_LABEL} 
            RETURN COUNT(tran) as masked`;

      const result = await this.neo4jAl.executeWithParameters(req, {
        termList: terms,
      });

      if (!result || result.records.length == 0) return 0;
      return int(result.records[0].get("masked")).toNumber();
    } catch (err) {
      logger.error(`Failed to get catch of DataGraph for application ${application}.`, err);
      throw new HttpException(500, "Internal error");
    }
  }

  /**
   * Mask all the DataGraph under a certain limit
   * @param application Name of the application
   * @param limit Limit of object in a DataGraph under which the DataGraph will be masked
   */
  public async maskDataGraphByCount(application: string, limit: number): Promise<number> {
    try {
      const req = `
            MATCH (t:DataGraph:\`${application}\`)
            OPTIONAL MATCH (t)-[:Contains]->(n:\`${application}\`) WHERE n:Object or n:SubObject 
            WITH t as tran ,COUNT(n) as couOn
            WHERE couOn <= $limitCount
            OPTIONAL MATCH (tran)-[]->(tranNode:DataGraphNode:\`${application}\`)
            REMOVE tran:DataGraph SET tran:${DataCallGraphService.MASKED_DATACALLGRAPH_LABEL} 
            REMOVE tranNode:DataGraphNode SET tranNode:${DataCallGraphService.MASKED_DATACALLGRAPH_NODE_LABEL} 
            RETURN COUNT(tran) as masked`;

      const result = await this.neo4jAl.executeWithParameters(req, {
        limitCount: limit,
      });

      if (!result || result.records.length == 0) return 0;
      return int(result.records[0].get("masked")).toNumber();
    } catch (err) {
      logger.error(`Failed to get catch of DataGraph for application ${application}.`, err);
      throw new HttpException(500, "Internal error");
    }
  }

  /**
   * Filter DataGraph in application by Technology Count
   * @param application Name of the application
   * @param limit Limit of the application
   */
  public async maskDataGraphByTechnologyCount(application: string, limit: number): Promise<number> {
    try {
      const req = `
            MATCH (t:DataGraph:\`${application}\`)
            OPTIONAL MATCH (t)-[:Contains]->(n:\`${application}\`) WHERE n:Object or n:SubObject 
            WITH t as tran ,COUNT(DISTINCT n.Level) as couOn
            WHERE couOn <= $techCount
            OPTIONAL MATCH (tran)-[]->(tranNode:DataGraphNode:\`${application}\`)
            REMOVE tran:DataGraph SET tran:${DataCallGraphService.MASKED_DATACALLGRAPH_LABEL} 
            REMOVE tranNode:DataGraphNode SET tranNode:${DataCallGraphService.MASKED_DATACALLGRAPH_NODE_LABEL} 
            RETURN COUNT(tran) as masked`;

      const result = await this.neo4jAl.executeWithParameters(req, {
        techCount: limit,
      });

      if (!result || result.records.length == 0) return 0;
      return int(result.records[0].get("masked")).toNumber();
    } catch (err) {
      logger.error(`Failed to get catch of DataGraph for application ${application}.`, err);
      throw new HttpException(500, "Internal error");
    }
  }

  /**
   * Build filter. Used in {{getBatchDataGraph}}
   * @param filter
   * @param reverse Reverse the filter with NOT clause
   * @return [Filter, Params]
   * @private
   */
  private buildFilter(filter: Record<string, unknown>, reverse?: boolean): [string, any] {
    let filterReq = "";
    const conditions = [];

    const params: any = {};
    if (filter) {
      for (const [variable, value] of Object.entries(filter)) {
        switch (variable) {
          case "name":
            conditions.push("toLower(tran.Name) CONTAINS toLower($name) ");
            params.name = String(value);
            break;
          case "minTechnologies":
            conditions.push("SIZE(technologies) >= $minTechnologies ");
            params.minTechnologies = Number(value);
            break;
          case "maxTechnologies":
            conditions.push("SIZE(technologies) <= $maxTechnologies ");
            params.maxTechnologies = Number(value);
            break;
          case "minObject":
            conditions.push("count >= $minObject ");
            params.minObject = Number(value);
            break;
          case "maxObject":
            conditions.push("count <= $maxObject ");
            params.maxObject = Number(value);
            break;
          case "techContained":
            if (Array.isArray(value) && value.length > 0) {
              conditions.push(`all(x IN $techContained WHERE  x IN technologies ) `);
              params.techContained = value as string[];
            }
            break;
          default:
            break;
        }
      }

      if (conditions.length > 0) {
        if (!reverse) {
          filterReq = ` WHERE ${conditions.join(" AND ")} `;
        } else {
          filterReq = ` WHERE NOT ${conditions.join(" AND NOT ")} `;
        }
      }
    }

    return [filterReq, params];
  }
}

export default DataCallGraphService;
