import { logger } from "@shared/Logger";
import { int } from "neo4j-driver";
import { Neo4JAccessLayer } from "@database/Neo4JAccessLayer";
import HttpException from "@exceptions/HttpException";
import { ITransaction, transactionFromObj } from "@interfaces/imaging/Transaction";
import TransactionStatistics from "@interfaces/imaging/transaction/TransactionStatistics";

/**
 * Manage the modification done on Transaction in an application
 */
class TransactionService {
  private static MASKED_TRANSACTION_LABEL = "TransactionMasked";
  private static MASKED_TRANSACTION_NODE_LABEL = "TransactionNodeMasked";
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
   * Get the total number of transactions
   * @param application
   */
  public async getNumberTransaction(application: string): Promise<number> {
    const req = `MATCH (t:Transaction:\`${application}\`) 
        RETURN COUNT(t) as count`;

    const result = await this.neo4jAl.execute(req);

    const singleRecord = result.records[0];
    return int(singleRecord.get("count")).toNumber();
  }

  /**
   * Get the total number of masked transactions
   * @param application
   */
  public async getNumberMaskedTransaction(application: string): Promise<number> {
    const req = `MATCH (t:${TransactionService.MASKED_TRANSACTION_LABEL}:\`${application}\`) 
        RETURN COUNT(t) as count`;

    const result = await this.neo4jAl.execute(req);

    const singleRecord = result.records[0];
    return int(singleRecord.get("count")).toNumber();
  }

  /**
   * Get the total number of masked transactions
   * @param application
   */
  public async getInsightsUnmaskedTransaction(application: string): Promise<Record<string, number>> {
    try {
      const reqMin = `MATCH (t:Transaction:\`${application}\`)-[:Contains]->(n) 
            WHERE n:Object OR n:SubObject
            WITH t, COUNT(n) as countO, COUNT(DISTINCT n.Level) as technologiesCount 
            RETURN min(countO) as minCountO,
            min(technologiesCount) as minTechCount`;

      const reqMax = `MATCH (t:Transaction:\`${application}\`)-[:Contains]->(n) 
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
   * Get a batch of transactions
   * @param application Application
   * @param start Start index
   * @param end End index
   * @param filter
   * @param sort Property to sort on
   * @param sortDesc Direction of the sort
   */
  public async getBatchTransaction(
    application: string,
    start: number,
    end: number,
    filter?: Record<string, unknown>,
    sort?: string,
    sortDesc?: boolean,
  ): Promise<ITransaction[]> {
    try {
      const filterArray = this.buildFilter(filter);
      const req = `MATCH (t:Transaction:\`${application}\`)
            OPTIONAL MATCH (t)-[:Contains]->(n:\`${application}\`) 
            WHERE n:Object OR n:SubObject
            WITH t as tran, COUNT(n) as count, COLLECT(DISTINCT n.Level) as technologies, 
            COUNT(DISTINCT n.Level) as countTechnology 
            ${filterArray[0]} 
            RETURN tran, count, technologies, countTechnology
            ORDER BY ${TransactionService.getSortParameter("tran", sort)} ${TransactionService.getSortDesc(sortDesc)} 
            SKIP $toSkip LIMIT $toGet;`;

      const params: any = filterArray[1];
      params.toSkip = int(start);
      params.toGet = int(end - start);
      const result = await this.neo4jAl.executeWithParameters(req, params);

      const listTransaction: ITransaction[] = [];
      for (let i = 0; i < result.records.length; i++) {
        const tr = transactionFromObj(result.records[i].get("tran"));
        tr.count = int(result.records[i].get("count")).toNumber();
        tr.technologies = result.records[i].get("technologies");
        tr.numTechnologies = int(result.records[i].get("countTechnology")).toNumber();
        listTransaction.push(tr);
      }

      return listTransaction;
    } catch (err) {
      logger.error(`Failed to get batch of transaction for application ${application}.`, err);
      throw new HttpException(500, "Internal error");
    }
  }

  /**
   * Get the statistics on the components of the application
   * @param transactionId Id of the transaction
   */
  public async getTransactionStatistics(transactionId : number) : Promise<TransactionStatistics> {
    // Statistic request
    const reqObjectRatio = "MATCH (t:Transaction)-[:Contains]->(o:Object) WHERE ID(t)=$idTrans  " +
      "WITH t, COUNT(DISTINCT o) as totObj " +
      "MATCH (t)-[:Contains]->(o:Object) WHERE o.Type IS NOT NULL " +
      "RETURN  ID(t), o.Type as objectType, COUNT(DISTINCT o) as objectCount, 100 *(COUNT(DISTINCT o) / toFloat(totObj)) as objectRatio";

    const reqSubObjectRatio = "MATCH (t:Transaction)-[:Contains]->(o:Object) WHERE ID(t)=$idTrans  " +
      "WITH t, COUNT(DISTINCT o) as totObj " +
      "MATCH (t)-[:Contains]->(o:SubObject) WHERE o.Type IS NOT NULL " +
      "RETURN  ID(t), o.Type as objectType, COUNT(DISTINCT o) as objectCount, 100 *(COUNT(DISTINCT o) / toFloat(totObj)) as objectRatio";

    const reqSize = "MATCH (t:Transaction)-[:Contains]->(o:Object) WHERE ID(t)=$idTrans " +
      "RETURN COUNT(DISTINCT o) as totObj";

    const reqStart = "MATCH (t:Transaction)-[:StartsWith]->(n:TransactionNode)-[:IN]->(o) WHERE ID(t)=$idTrans " +
     "RETURN o.Type as objectType LIMIT 1";

    const reqEnd = "MATCH (t:Transaction)-[:EndsWith]->(n:TransactionNode)-[:OUT]->(o) WHERE ID(t)=$idTrans " +
      "RETURN o.Type as objectType LIMIT 1";


    try {
      const stat: TransactionStatistics = {} as TransactionStatistics;

      // Get Size
      let result = await this.neo4jAl.executeWithParameters(reqSize, {
        idTran: transactionId
      });

      if(!result || result.records.length == 0 ) {
        stat.information = "Empty transaction";
        stat.size = 0;
        return stat;
      }

      // Get Start
      result = await this.neo4jAl.executeWithParameters(reqStart, {
        idTran: transactionId
      });

      if(result && result.records.length > 0) {
        stat.startTechnology = result.records[0].get("objectType") as string;
      }


      // Get end
      result = await this.neo4jAl.executeWithParameters(reqEnd, {
        idTran: transactionId
      });

      if(result && result.records.length > 0) {
        stat.endTechnology = result.records[0].get("objectType") as string;
      }

      // Get Object ratio
      result = await this.neo4jAl.executeWithParameters(reqObjectRatio, {
        idTran: transactionId
      });

      stat.objects = [];
      for(const i of result.records) {
        stat.objects.push({
          type: i.get("objectType") as string,
          percentage: i.get("objectRatio") as number
        });
      }


      // Get SubObject ratio
      result = await this.neo4jAl.executeWithParameters(reqSubObjectRatio, {
        idTran: transactionId
      });

      stat.subObjects = [];
      for(const i of result.records) {
        stat.objects.push({
          type: i.get("objectType") as string,
          percentage: i.get("objectRatio") as number
        });
      }

      return stat;

    } catch (e) {
      const message = `Failed to get statistics of the transaction with Id [${transactionId}].`;
      logger.error(message, e);
      throw new Error(message);
    }
  }

  /**
   * Pin an Transaction with a Prefix
   * @param application Name of the application
   * @param idTransaction Id of the tran
   * @param pinPrefix Prefix to be put in front of a transaction
   */
  public async pinTransaction(application: string, idTransaction: number, pinPrefix: string): Promise<ITransaction> {
    try {
      const req = `MATCH (t:Transaction:\`${application}\`) WHERE ID(t)=$idTran 
            SET t.Name= CASE WHEN t.Name STARTS WITH $pinPrefix THEN t.Name ELSE 
            ($pinPrefix + t.Name) END 
            RETURN t as node;`;

      const result = await this.neo4jAl.executeWithParameters(req, {
        idTran: int(idTransaction),
        pinPrefix: pinPrefix,
      });
      if (!result || result.records.length == 0) return null;

      return transactionFromObj(result.records[0].get("node"));
    } catch (err) {
      logger.error(`Failed to pin a transaction for application ${application}.`, err);
      throw new HttpException(500, "Internal error");
    }
  }

  /**
   * Unpin an Transaction with a Prefix
   * @param application Name of the application
   * @param idTransaction Id of the tran
   * @param pinPrefix Prefix to be put in front of a transaction
   */
  public async unpinTransaction(application: string, idTransaction: number, pinPrefix: string): Promise<ITransaction> {
    try {
      const req = `MATCH (t:Transaction:\`${application}\`) WHERE ID(t)=$idTran 
            SET t.Name= CASE WHEN t.Name STARTS WITH $pinPrefix THEN 
            substring(t.Name, SIZE($pinPrefix)) ELSE 
            t.Name END 
            RETURN t as node;`;

      const result = await this.neo4jAl.executeWithParameters(req, {
        idTran: int(idTransaction),
        pinPrefix: pinPrefix,
      });
      if (!result || result.records.length == 0) return null;

      return transactionFromObj(result.records[0].get("node"));
    } catch (err) {
      logger.error(`Failed to pin a transaction for application ${application}.`, err);
      throw new HttpException(500, "Internal error");
    }
  }

  /**
   * Rename a transaction using its ID in an application
   * @param application Name of the application
   * @param idTransaction Id of the Transaction Node
   * @param newName New name of the transaction
   */
  public async renameTransaction(application: string, idTransaction: number, newName: string): Promise<ITransaction> {
    try {
      const req = `MATCH (t:Transaction:\`${application}\`) WHERE ID(t)=$idTran 
            SET t.Name= $newName 
            RETURN t as node`;

      const result = await this.neo4jAl.executeWithParameters(req, { idTran: int(idTransaction), newName: newName });
      if (!result || result.records.length == 0) return null;

      return transactionFromObj(result.records[0].get("node"));
    } catch (err) {
      logger.error(`Failed to pin a transaction for application ${application}.`, err);
      throw new HttpException(500, "Internal error");
    }
  }

  /**
   * Get a batch of masked transactions
   * @param application Application
   * @param start Start index
   * @param end End index
   * @param sort Property to sort on
   * @param sortDesc Direction of the sort
   */
  public async getBatchMaskedTransaction(
    application: string,
    start: number,
    end: number,
    sort?: string,
    sortDesc?: boolean,
  ): Promise<ITransaction[]> {
    try {
      const req = `MATCH (t:${TransactionService.MASKED_TRANSACTION_LABEL}:\`${application}\`)
            OPTIONAL MATCH (t)-[:Contains]->(n:\`${application}\`)
            WHERE n:Object OR n:SubObject 
            RETURN t as tran, COUNT(n) as count , COLLECT(DISTINCT n.Level) as technologies, 
            COUNT(DISTINCT n.Level) as numTechnologies 
            ORDER BY ${TransactionService.getSortParameter("t", sort)} ${TransactionService.getSortDesc(sortDesc)} 
            SKIP $toSkip LIMIT $toGet `;

      const result = await this.neo4jAl.executeWithParameters(req, {
        toSkip: int(start),
        toGet: int(end - start),
      });

      const listTransaction: ITransaction[] = [];
      for (let i = 0; i < result.records.length; i++) {
        const tr = transactionFromObj(result.records[i].get("tran"));
        tr.count = int(result.records[i].get("count")).toNumber();
        tr.technologies = result.records[i].get("technologies");
        tr.numTechnologies = int(result.records[i].get("numTechnologies")).toNumber();
        listTransaction.push(tr);
      }

      return listTransaction;
    } catch (err) {
      logger.error(`Failed to get the list of transactions for application ${application}.`, err);
      throw new HttpException(500, "Internal error");
    }
  }

  /**
   * Mask all the transaction not compliant with filter
   * @param application Name of the application
   * @param filter
   */
  public async maskTransactionWithFilter(application: string, filter: Record<string, unknown>): Promise<number> {
    try {
      const filterArray = this.buildFilter(filter, true);
      const req = `MATCH (t:Transaction:\`${application}\`)-[:Contains]->(n) 
            OPTIONAL MATCH (t)-[]->(n:TransactionNode) 
            WHERE n:Object OR n:SubObject
            WITH t as tran, COUNT(n) as count, COLLECT(DISTINCT n.Level) as technologies 
            ${filterArray[0]}  
            REMOVE t:Transaction SET t:${TransactionService.MASKED_TRANSACTION_LABEL} 
            REMOVE n:TransactionNode SET n:${TransactionService.MASKED_TRANSACTION_NODE_LABEL} 
            RETURN COUNT(t) as node;
            `;

      const params: any = filterArray[1];
      const result = await this.neo4jAl.executeWithParameters(req, params);
      if (!result || result.records.length == 0) return null;

      return int(result.records[0].get("node")).toNumber();
    } catch (err) {
      logger.error(`Failed to mask a transaction for application ${application}.`, err);
      throw new HttpException(500, "Internal error");
    }
  }

  /**
   * Mask a transaction
   * @param application Name of the application
   * @param idTransaction ID of the transaction
   */
  public async maskTransaction(application: string, idTransaction: number): Promise<ITransaction> {
    try {
      const req = `MATCH (t:Transaction:\`${application}\`) WHERE ID(t)=$idTran 
        OPTIONAL MATCH (t)-[]->(n:TransactionNode) 
        REMOVE t:Transaction SET t:${TransactionService.MASKED_TRANSACTION_LABEL} 
        REMOVE n:TransactionNode SET n:${TransactionService.MASKED_TRANSACTION_NODE_LABEL} 
        RETURN t as node;`;

      const result = await this.neo4jAl.executeWithParameters(req, { idTran: int(idTransaction) });
      if (!result || result.records.length == 0) return null;

      return transactionFromObj(result.records[0].get("node"));
    } catch (err) {
      logger.error(`Failed to mask a transaction for application ${application}.`, err);
      throw new HttpException(500, "Internal error");
    }
  }

  /**
   * UnMask a transaction using its id
   * @param application Name of the application
   * @param idTransaction Id of the transaction
   */
  public async unmaskTransaction(application: string, idTransaction: number): Promise<ITransaction> {
    try {
      const req = `MATCH (t:${TransactionService.MASKED_TRANSACTION_LABEL}:\`${application}\`) WHERE ID(t)=$idTran 
        OPTIONAL MATCH (t)-[]->(n:${TransactionService.MASKED_TRANSACTION_NODE_LABEL})
        REMOVE t:${TransactionService.MASKED_TRANSACTION_LABEL} SET t:Transaction  
        REMOVE n:${TransactionService.MASKED_TRANSACTION_NODE_LABEL} SET n:TransactionNode  
        RETURN t as node;`;

      const result = await this.neo4jAl.executeWithParameters(req, { idTran: int(idTransaction) });
      if (!result || result.records.length == 0) return null;

      return transactionFromObj(result.records[0].get("node"));
    } catch (err) {
      logger.error(`Failed to un-mask a transaction for application ${application}.`, err);
      throw new HttpException(500, "Internal error");
    }
  }

  /**
   * Un mask all the transaction in an application
   * @param application
   */
  public async unmaskAllTransaction(application: string): Promise<boolean> {
    try {
      const req = `MATCH (t:${TransactionService.MASKED_TRANSACTION_LABEL}:\`${application}\`) 
        OPTIONAL MATCH (t)-[]->(n:${TransactionService.MASKED_TRANSACTION_NODE_LABEL})
        REMOVE t:${TransactionService.MASKED_TRANSACTION_LABEL} SET t:Transaction  
        REMOVE n:${TransactionService.MASKED_TRANSACTION_NODE_LABEL} SET n:TransactionNode  
        RETURN t as node;`;

      const result = await this.neo4jAl.execute(req);
      return !(result.records.length === 0);
    } catch (err) {
      logger.error(`Failed to un-mask all transactions in application ${application}.`, err);
      throw new HttpException(500, "Internal error");
    }
  }

  /**
   * Mask a batch of transactions containing a list of certain terms
   * @param application Name of the application
   * @param terms
   */
  public async maskTransactionByTerms(application: string, terms: string[]): Promise<number> {
    try {
      // Ignore if the list of term is empty
      if (terms.length == 0) return 0;

      const req = `
            MATCH (t:Transaction:\`${application}\`) WHERE any(x in $termList WHERE t.Name contains x)
            WITH t as tran ,COUNT(n) as couOn
            OPTIONAL MATCH (t)-[]->(tn:TransactionNode:\`${application}\`)
            REMOVE tran:Transaction SET tran:${TransactionService.MASKED_TRANSACTION_LABEL} 
            REMOVE tranNode:TransactionNode SET tranNode:${TransactionService.MASKED_TRANSACTION_NODE_LABEL} 
            RETURN COUNT(tran) as masked`;

      const result = await this.neo4jAl.executeWithParameters(req, {
        termList: terms,
      });

      if (!result || result.records.length == 0) return 0;
      return int(result.records[0].get("masked")).toNumber();
    } catch (err) {
      logger.error(`Failed to get catch of transaction for application ${application}.`, err);
      throw new HttpException(500, "Internal error");
    }
  }

  /**
   * Mask all the transactions under a certain limit
   * @param application Name of the application
   * @param limit Limit of object in a transaction under which the transation will be masked
   */
  public async maskTransactionByCount(application: string, limit: number): Promise<number> {
    try {
      const req = `
            MATCH (t:Transaction:\`${application}\`)
            OPTIONAL MATCH (t)-[:Contains]->(n:\`${application}\`) WHERE n:Object or n:SubObject 
            WITH t as tran ,COUNT(n) as couOn
            WHERE couOn <= $limitCount
            OPTIONAL MATCH (tran)-[]->(tranNode:TransactionNode:\`${application}\`)
            REMOVE tran:Transaction SET tran:${TransactionService.MASKED_TRANSACTION_LABEL} 
            REMOVE tranNode:TransactionNode SET tranNode:${TransactionService.MASKED_TRANSACTION_NODE_LABEL} 
            RETURN COUNT(tran) as masked`;

      const result = await this.neo4jAl.executeWithParameters(req, {
        limitCount: limit,
      });

      if (!result || result.records.length == 0) return 0;
      return int(result.records[0].get("masked")).toNumber();
    } catch (err) {
      logger.error(`Failed to get catch of transaction for application ${application}.`, err);
      throw new HttpException(500, "Internal error");
    }
  }

  /**
   * Filter application by Technology Count
   * @param application Name of the application
   * @param limit Limit of the application
   */
  public async maskTransactionByTechnologyCount(application: string, limit: number): Promise<number> {
    try {
      const req = `
            MATCH (t:Transaction:\`${application}\`)
            OPTIONAL MATCH (t)-[:Contains]->(n:\`${application}\`) WHERE n:Object or n:SubObject 
            WITH t as tran ,COUNT(DISTINCT n.Level) as couOn
            WHERE couOn <= $techCount
            OPTIONAL MATCH (tran)-[]->(tranNode:TransactionNode:\`${application}\`)
            REMOVE tran:Transaction SET tran:${TransactionService.MASKED_TRANSACTION_LABEL} 
            REMOVE tranNode:TransactionNode SET tranNode:${TransactionService.MASKED_TRANSACTION_NODE_LABEL} 
            RETURN COUNT(tran) as masked`;

      const result = await this.neo4jAl.executeWithParameters(req, {
        techCount: limit,
      });

      if (!result || result.records.length == 0) return 0;
      return int(result.records[0].get("masked")).toNumber();
    } catch (err) {
      logger.error(`Failed to get catch of transaction for application ${application}.`, err);
      throw new HttpException(500, "Internal error");
    }
  }

  /**
   * Build filter. Used in {{getBatchTransaction}}
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

export default TransactionService;
