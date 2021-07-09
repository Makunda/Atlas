/* eslint-disable max-len */
import { Neo4JAccessLayer } from "@database/Neo4jAccessLayer";
import Neo4jNoResults from "@exceptions/Neo4jNoResults";
import { AipConfiguration, aipConfigurationFromNode } from "@interfaces/aip/Aipconfiguration";
import { AipSchema, aipSchemaFromNode } from "@interfaces/aip/AipSchema";
import { logger } from "@shared/Logger";
import {int, Neo4jError, Node} from "neo4j-driver";

/**
 *  Class in charge of the management of the AIP configuration nodes
 */
export default class AipConfigurationService {

    private static INSTANCE: AipConfigurationService = null;
    private static neo4jAl: Neo4JAccessLayer = Neo4JAccessLayer.getInstance();

    private static CONFIGURATION_NODE_LABEL = "AipConfiguration";
    private static APP_SCHEMA_NODE_LABEL = "ApplicationSchema";

    private static CONFIGURATION_TO_SCHEMA_REL = "BELONGSTO";

    /**
     * Configuration Node
     * {
     *  Name: string,
     *  Url: string,
     *  Port: string, 
     *  UserName: string,
     *  Password: string, 
     * } 
     */
    private node: Node = null; 

    /**
     * Get the instance of the Singleton
     * @return {AipConfigurationService} The instance of the Class
     */
    public static getInstance() : AipConfigurationService {
        if (this.INSTANCE == null) {
            this.INSTANCE = new AipConfigurationService();
        }
        return this.INSTANCE;
    }

    /**
     * Delete a Configuration node by its Id
     * @param {Number} id 
     */
    public async deleteConfigurationNode(id: number) : Promise<void> {
        const req = `
        MATCH (c:${AipConfigurationService.CONFIGURATION_NODE_LABEL}) WHERE ID(c)=$id 
        OPTIONAL MATCH (c)-[:${AipConfigurationService.CONFIGURATION_TO_SCHEMA_REL}]->(a:${AipConfigurationService.APP_SCHEMA_NODE_LABEL})
        DETACH DELETE c
        DETACH DELETE a
        ;`
        const params = { id: int(id)};
        await AipConfigurationService.neo4jAl.executeWithParameters(req, params);
    }

    /**
     * Delete a Schema node by its Id
     * @param {Number} id 
     */
     public async deleteSchemaNode(id: number) : Promise<void> {
        const req = `
        MATCH (c:${AipConfigurationService.APP_SCHEMA_NODE_LABEL}) WHERE ID(c)=$id 
        DETACH DELETE a
        ;`
        const params = { id: int(id)};
        await AipConfigurationService.neo4jAl.executeWithParameters(req, params);
    }

    /**
     * Get attached Schemas
     * @param {AipConfiguration} config Configuration node 
     * @returns {Promise<AipSchema[]} Promise return the AipSchema list 
     */
     public async getAttachedSchemas(config: AipConfiguration) : Promise<AipSchema[]> {
        try {
            const req = `
            MATCH (c:${AipConfigurationService.CONFIGURATION_NODE_LABEL})-[:${AipConfigurationService.CONFIGURATION_TO_SCHEMA_REL}]->(a:${AipConfigurationService.APP_SCHEMA_NODE_LABEL}) WHERE ID(c)=$id 
            RETURN DISTINCT a as node;`
            const params = { id: int(config.id)};
            const results = await AipConfigurationService.neo4jAl.executeWithParameters(req, params);

            const schemaReturnList = [];

            for (let index = 0; index < results.records.length; index++) {
                const schemaNode: Node = results.records[index].get("node");
                try {
                    const schema = aipSchemaFromNode(schemaNode);
                    schemaReturnList.push(schema);
                } catch(err) {
                    const schemaId = int(schemaNode.identity).toNumber();
                    this.deleteSchemaNode(schemaId);
                    logger.warn(`Schema node with ID ${config.id} was badly formatted and removed.`)
                }
            }
            
            return schemaReturnList;
        } catch (err) {
            logger.error(`Failed to get the Attached schemas of node with ID : ${config.id}.`);
            throw err;
        }
    }

    /**
     * Create the configuration node
     * @return {Promise<AipConfigurationService>} Promise returning the AipConfiguration created;
    */
    public async createConfigurationNode(parameters: any) : Promise<AipConfiguration> {
            const req = `
                MERGE (c:${AipConfigurationService.CONFIGURATION_NODE_LABEL} {
                    Name : $name, 
                    Url: $url,
                    Port: $port,
                    UserName: $username,
                    Password: $password
                }) RETURN c as node;
            `
            const results = await AipConfigurationService.neo4jAl.executeWithParameters(req, parameters);
            if(!results || results.records.length === 0) {
                throw new Neo4jNoResults("Failed to create the configuration node", req);
            }
            
            const node: Node = results.records[0].get("node") as Node;
            return aipConfigurationFromNode(node);
    }


    /**
     * Get All configuration node
     * @return {Promise<AipConfiguration[]>} Promise returning the complete list of the AipConfiguration Node
     */
     public async getAllConfigurationNode(parameters: any) : Promise<AipConfiguration[]> {
        const req = `
            MATCH (c:${AipConfigurationService.CONFIGURATION_NODE_LABEL}) RETURN DISTINCT c as node;
        `
        const results = await AipConfigurationService.neo4jAl.executeWithParameters(req, parameters);
        if(!results || results.records.length === 0) {
            throw new Neo4jNoResults("Failed to create the configuration node", req);
        }
        const returnList = [] as AipConfiguration[];

        for (let index = 0; index < results.records.length; index++) {
            const element: Node = results.records[index].get("node");
            let aipConfigNode;
            try {
                aipConfigNode = aipConfigurationFromNode(element);
                
            } catch(err) {
                const toDeleteId = int(element.identity).toInt();
                this.deleteConfigurationNode(toDeleteId);
            }

            // if not null search attached 
            if(aipConfigNode != null) {
                aipConfigNode.schemas = await this.getAttachedSchemas(aipConfigNode);
                returnList.push(aipConfigNode);
            }
        }

        return returnList;
}
    
}