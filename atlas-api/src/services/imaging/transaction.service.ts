import {logger} from "@shared/logger";
import {int} from "neo4j-driver";
import {Neo4JAccessLayer} from "@database/neo4jAccessLayer";
import HttpException from "@exceptions/HttpException";
import {ITransaction, transactionFromObj} from "@interfaces/imaging/transaction.interface";

/**
 * Manage the modification done on Transaction in an application
 */
class TransactionService {
    private static MASKED_TRANSACTION_LABEL = "TransactionMasked";
    private static MASKED_TRANSACTION_NODE_LABEL = "TransactionNodeMasked";
    private neo4jAl: Neo4JAccessLayer = Neo4JAccessLayer.getInstance();

    /**
     * Get the total number of transactions
     * @param application
     */
    public async getNumberTransaction(application: string): Promise<number> {
        const req = `MATCH (t:Transaction:\`${application}\`) 
        RETURN COUNT(t) as count`;

        const result = await this.neo4jAl.execute(req);

        const singleRecord = result.records[0]
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

        const singleRecord = result.records[0]
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
                minObject : int(singleMinRecord.get("minCountO")).toNumber(),
                maxObject : int(singleMaxRecord.get("maxCountO")).toNumber(),
                minTechnology : int(singleMinRecord.get("minTechCount")).toNumber(),
                maxTechnology : int(singleMaxRecord.get("maxTechCount")).toNumber()
            }
        } catch (err) {
            throw new Error(`Failed to retrieve insights ${err}`)
        }
    }

    /**
     * Build filter
     * @param filter
     * @param reverse Reverse the filter with NOT clause
     * @private
     */
    private buildFilter(filter : Record<string, unknown>, reverse?: boolean) {
        let filterReq = "";
        const conditions = [];
        if(filter) {
            for(const [variable, value] of Object.entries(filter)) {

                switch (variable) {
                    case "minTechnologies":
                        conditions.push("SIZE(technologies) >= " + Number(value));
                        break;
                    case "maxTechnologies":
                        conditions.push("SIZE(technologies) <= " + Number(value));
                        break;
                    case "minObject":
                        conditions.push("count >= " + Number(value));
                        break;
                    case "maxObject":
                        conditions.push("count <= " + Number(value));
                        break;
                    case "techContained":
                        conditions.push(`any(x IN technologies WHERE x CONTAINS '${String(value)}') `);
                        break;
                    default:
                        break;
                }
            }

            if(conditions.length > 0) {
                if(!reverse) {
                    filterReq = ` WHERE ${conditions.join(" AND ")} `;
                } else {
                    filterReq = ` WHERE NOT ${conditions.join(" AND NOT ")} `;
                }
            }
        }

        return filterReq;
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
    public async getBatchTransaction(application: string, start: number, end: number,
                                     filter? : Record<string, unknown>,
                                     sort?: string,
                                     sortDesc?: boolean): Promise<ITransaction[]> {

        try {
            const req = `MATCH (t:Transaction:\`${application}\`)-[:Contains]->(n) 
            WHERE n:Object OR n:SubObject
            WITH t as tran, COUNT(n) as count, COLLECT(DISTINCT n.Level) as technologies 
            ${this.buildFilter(filter)}  
            RETURN tran, count, technologies
            ORDER BY ${TransactionService.getSortParameter("tran", sort)} ${TransactionService.getSortDesc(sortDesc)} 
            SKIP $toSkip LIMIT $toGet `;

            console.log("Req ", req)

            const result = await this.neo4jAl.executeWithParameters(req, {
                "toSkip": int(start),
                "toGet": int(end - start)
            });

            const listTransaction: ITransaction[] = [];
            for (let i = 0; i < result.records.length; i++) {
                const tr = transactionFromObj(result.records[i].get("tran"));
                tr.count = int(result.records[i].get("count")).toNumber();
                tr.technologies = result.records[i].get("technologies");
                listTransaction.push(tr);
            }

            return listTransaction;
        } catch (err) {
            logger.error(
                `Failed to get catch of transaction for application ${application}.`,
                err
            );
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
    public async getBatchMaskedTransaction(application: string, start: number,
                                           end: number, sort?: string,
                                           sortDesc?: boolean): Promise<ITransaction[]> {

        try {
            const req = `MATCH (t:${TransactionService.MASKED_TRANSACTION_LABEL}:\`${application}\`)-[:Contains]->(n)
            WHERE n:Object OR n:SubObject 
            RETURN t as tran, COUNT(n) as count , COLLECT(DISTINCT n.Level) as technologies, 
            COUNT(DISTINCT n.Level) as numTechnologies 
            ORDER BY ${TransactionService.getSortParameter("t", sort)} ${TransactionService.getSortDesc(sortDesc)} 
            SKIP $toSkip LIMIT $toGet `;

            const result = await this.neo4jAl.executeWithParameters(req, {
                "toSkip": int(start),
                "toGet": int(end - start)
            });

            const listTransaction: ITransaction[] = [];
            for (let i = 0; i < result.records.length; i++) {
                const tr = transactionFromObj(result.records[i].get("tran"));
                tr.count = int(result.records[i].get("count")).toNumber();
                tr.technologies = result.records[i].get("technologies");
                tr.numTechnologies = result.records[i].get("numTechnologies");
                listTransaction.push(tr);
            }

            return listTransaction;
        } catch (err) {
            logger.error(
                `Failed to get catch of transaction for application ${application}.`,
                err
            );
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

            const req = `MATCH (t:Transaction:\`${application}\`)-[:Contains]->(n) 
            OPTIONAL MATCH (t)-[]->(n:TransactionNode) 
            WHERE n:Object OR n:SubObject
            WITH t as tran, COUNT(n) as count, COLLECT(DISTINCT n.Level) as technologies 
            ${this.buildFilter(filter, true)}  
            REMOVE t:Transaction SET t:${TransactionService.MASKED_TRANSACTION_LABEL} 
            REMOVE n:TransactionNode SET n:${TransactionService.MASKED_TRANSACTION_NODE_LABEL} 
            RETURN COUNT(t) as node;
            `;

            const result = await this.neo4jAl.execute(req);
            if (!result || result.records.length == 0) return null;

            return int(result.records[0].get("node")).toNumber();
        } catch (err) {
            logger.error(
                `Failed to mask a transaction for application ${application}.`,
                err
            );
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

            const result = await this.neo4jAl.executeWithParameters(req, {"idTran": int(idTransaction)});
            if (!result || result.records.length == 0) return null;

            return transactionFromObj(result.records[0].get("node"));
        } catch (err) {
            logger.error(
                `Failed to mask a transaction for application ${application}.`,
                err
            );
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

            const result = await this.neo4jAl.executeWithParameters(req, {"idTran": int(idTransaction)});
            if (!result || result.records.length == 0) return null;

            return transactionFromObj(result.records[0].get("node"));
        } catch (err) {
            logger.error(
                `Failed to un-mask a transaction for application ${application}.`,
                err
            );
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
            logger.error(
                `Failed to un-mask all transactions in application ${application}.`,
                err
            );
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
            const req = `MATCH (t:Transaction:\`${application}\`)-[:Contains]->(n:Object) 
            OPTIONAL MATCH (t)-[]->(tn:TransactionNode) 
            WITH t as tran, COUNT(n) as count, tn as tranNode 
            WHERE count < $limitCount 
            REMOVE tran:Transaction SET tran:${TransactionService.MASKED_TRANSACTION_LABEL} 
            REMOVE tranNode:TransactionNode SET tranNode:${TransactionService.MASKED_TRANSACTION_NODE_LABEL}
            RETURN COUNT(tran) as masked`;

            console.log("Debug :", req)
            const result = await this.neo4jAl.executeWithParameters(req, {
                "limitCount": limit
            });

            if (!result || result.records.length == 0) return 0;
            return int(result.records[0].get("masked")).toNumber();

        } catch (err) {
            logger.error(
                `Failed to get catch of transaction for application ${application}.`,
                err
            );
            throw new HttpException(500, "Internal error");
        }
    }


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
            return "DESC"
        } else {
            return "ASC";
        }
    }
}

export default TransactionService;