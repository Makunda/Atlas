import {logger} from "@shared/logger";
import {int, QueryResult} from "neo4j-driver";
import {Neo4JAccessLayer} from "@database/neo4jAccessLayer";
import HttpException from "@exceptions/HttpException";
import {ILevel, LevelNode} from "@interfaces/imaging/level.interface";
import {ITransaction, transactionFromObj} from "@interfaces/imaging/transaction.interface";

/**
 * Manage the modification done on Transaction in an application
 */
class TransactionService {
    private neo4jAl: Neo4JAccessLayer = Neo4JAccessLayer.getInstance();

    private static MASKED_TRANSACTION_LABEL = "TransactionMasked";
    private static MASKED_TRANSACTION_NODE_LABEL = "TransactionNodeMasked";

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
     * Get a batch of transactions
     * @param application Application
     * @param start Start index
     * @param end End index
     */
    public async getBatchTransaction(application: string, start: number, end: number): Promise<ITransaction[]> {
        try {
            const req = `MATCH (t:Transaction:\`${application}\`)-[:Contains]->(n:Object)  
            RETURN t as tran, COUNT(n) as count , COLLECT(DISTINCT n.Level) as technologies 
            ORDER BY t.Name SKIP $toSkip LIMIT $toGet `;

            const result = await this.neo4jAl.executeWithParameters(req, { "toSkip" : int(start), "toGet": int(end - start) });

            const listTransaction : ITransaction[] = [];
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
     */
    public async getBatchMaskedTransaction(application: string, start: number, end: number): Promise<ITransaction[]> {
        try {
            const req = `MATCH (t:Transaction:\`${application}\`)-[:Contains]->(n:Object)  
            RETURN t as tran, COUNT(n) as count , COLLECT(DISTINCT n.Level) as technologies  
            ORDER BY t.Name SKIP $toSkip LIMIT $toGet `;

            const result = await this.neo4jAl.executeWithParameters(req, { "toSkip" : start, "toGet": end - start });

            const listTransaction : ITransaction[] = [];
            for (let i = 0; i < result.records.length; i++) {
                const tr = transactionFromObj(result.records[i].get("tran"));
                tr.count = result.records[i].get("count");
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
     * Mask a transaction
     * @param application Name of the application
     * @param idTransaction ID of the transaction
     */
    public async maskTransaction(application: string, idTransaction:number): Promise<ITransaction> {
        const req = `MATCH (t:${TransactionService.MASKED_TRANSACTION_LABEL}:\`${application}\`) WHERE ID(t)=$idTran 
        REMOVE t:Transaction SET t:${TransactionService.MASKED_TRANSACTION_LABEL} 
        RETURN t as node;`;

        const result = await this.neo4jAl.executeWithParameters(req, { "idTran" : idTransaction });
        if(!result || result.records.length == 0) return null;

        return transactionFromObj(result.records[0].get("tran"));
    }

    /**
     * UnMask a transaction using its id
     * @param application Name of the application
     * @param idTransaction Id of the transaction
     */
    public async unmaskTransaction(application: string, idTransaction:number): Promise<ITransaction> {
        const req = `MATCH (t:${TransactionService.MASKED_TRANSACTION_LABEL}:\`${application}\`) WHERE ID(t)=$idTran 
        REMOVE t:${TransactionService.MASKED_TRANSACTION_LABEL} SET t:Transaction  
        RETURN t as node;`;

        const result = await this.neo4jAl.executeWithParameters(req, { "idTran" : idTransaction });
        if(!result || result.records.length == 0) return null;

        return transactionFromObj(result.records[0].get("tran"));
    }
}

export default TransactionService;