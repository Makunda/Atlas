/* eslint-disable max-len */
import { Neo4JAccessLayer } from "@database/Neo4JAccessLayer";
import Neo4jNoResults from "@exceptions/Neo4jNoResults";
import { AipConfiguration } from "@modules/aip/interfaces/AipConfiguration";
import { int, Node } from "neo4j-driver";
import Persistence from "@modules/aip/persistence/Persistence";
import AipApplication from "@modules/aip/interfaces/AipApplication";
import { logger, wrapLogger} from "@shared/Logger";
import AipApplicationPersistence from "@modules/aip/persistence/AipApplicationPersistence";

/**
 *  Class in charge of the management of the AIP configuration nodes
 */
export default class ConfigurationPersistence extends Persistence {

  private logger = wrapLogger("AIP Configuration Persistence");
  private applicationMan = new AipApplicationPersistence();

  /**
   * AipConfiguration from a Node
   * @param {Node} n Node to transform in object
   * @returns {AipConfiguration} The AipConfiguration object
   * @throws {Exception} If the conversion fails
   */
  public async aipConfigurationFromNode(n: Node): Promise<AipConfiguration> {
    const properties: any = n.properties;

    const configuration =  {
      id: int(n.identity).toNumber(),
      name: String(properties["Name"]),

      url: String(properties["Url"]),
      port: int(properties["Port"]).toNumber(),
      database: String(properties["Database"]),

      user: String(properties["User"]),
      password: String(properties["Password"]),

    } as AipConfiguration;

    // Get applications linked
    configuration.applications = await this.getLinkedApplication(configuration.id);

    return configuration;
  }

  /**
   * Get the list of application
   * @param id Id of the configuration
   */
  public async getLinkedApplication(id: number) : Promise<AipApplication[]> {
    try {
      const req = `
    MATCH (c:${this.CONFIGURATION_NODE_LABEL}) WHERE ID(c)=$id 
    OPTIONAL MATCH (c)-[:${this.CONFIGURATION_TO_APP_REL}]->(a:${this.APP_NODE_LABEL})
    RETURN DISTINCT a as application;
    `;
      const results =  await this.neo4jAl.executeWithParameters(req, { id: id });

      const applications = [];
      for(const rec of results.records) {
        applications.push(await this.applicationMan.aipApplicationFromNode(rec.get("application")));
      }

      return applications;
    } catch (e) {
      const message = "Failed to get linked application.";
      this.logger.error(message, e);
      throw new Error(message);
    }
  }

  /**
   * Delete a Configuration node by its Id
   * @param {Number} id Id of the configuration node to delete
   * @returns A Promise ending when the configuration is deleted
   */
  public async deleteConfigurationNode(id: number): Promise<void> {
    try {
      // Delete applications
      const applications = await this.getLinkedApplication(id);
      applications.map(async x => await this.applicationMan.deleteById(x.id));

      // Delete configuration
      const req = `
        MATCH (c:${this.CONFIGURATION_NODE_LABEL}) WHERE ID(c)=$id 
        DETACH DELETE c
        ;`;
      const params = { id: int(id) };
      await this.neo4jAl.executeWithParameters(req, params);
    } catch (e) {
      const message = "Failed to delete the configuration.";
      this.logger.error(message, e);
      throw new Error(message);
    }
  }

  /**
   * Create and attach a configuration node
   * @param config Configuration to create
   * @returns Promise returning the newly created Schema
   */
  public async createConfiguration(config: AipConfiguration): Promise<AipConfiguration> {
    // Verify the name of the configuration
    try {
      const list = await this.getConfigurationByName(config.name);
      if(list.length > 0) throw new Error("Cannot have name duplicate.");
    } catch (e) {
      const message = "Failed to create the configuration. A Configuration with the same name already exists.";
      this.logger.error(message, e);
      throw new Error(message);
    }

    // Create the configuration
    try {
      const req = `
        CREATE (n:${this.CONFIGURATION_NODE_LABEL}) 
        SET n.Name=$name
        SET n.Url=$url
        SET n.Port=$port
        SET n.User=$user
        SET n.Password=$password
        SET n.Database=$database
        RETURN n as configuration
        ;`;

      const results = await this.neo4jAl.executeWithParameters(req, config);
      if (!results || results.records.length == 0) {
        throw new Neo4jNoResults("Failed to create the configuration node.", req);
      }

      const node: Node = results.records[0].get("configuration");
      return await this.aipConfigurationFromNode(node);
    } catch (e) {
      const message = "Failed to create the configuration.";
      this.logger.error(message, e);
      throw new Error(message);
    }
  }

  /**
   * Get All configuration node
   * @return {Promise<AipConfiguration[]>} Promise returning the complete list of the AipConfiguration Node
   */
  public async getConfigurationByName(name: string): Promise<AipConfiguration[]> {

    try {
      const req = `MATCH (c:${this.CONFIGURATION_NODE_LABEL}) 
    WHERE c.Name=$name
    RETURN DISTINCT c as node;`;
      const results = await this.neo4jAl.execute(req, {name : name});

      if (!results || results.records.length === 0) {
        return [];
      }
      const returnList = [] as AipConfiguration[];
      for(const rec of results.records) {
        returnList.push(await this.aipConfigurationFromNode(rec.get("node")));
      }

      return returnList;
    } catch (e) {
      const message = "Failed to get the configuration by name.";
      this.logger.error(message, e);
      throw new Error(message);
    }
  }


  /**
   * Get All configuration node
   * @return {Promise<AipConfiguration[]>} Promise returning the complete list of the AipConfiguration Node
   */
  public async getAllConfigurationNode(): Promise<AipConfiguration[]> {
    try {
      const req = `MATCH (c:${this.CONFIGURATION_NODE_LABEL}) RETURN DISTINCT c as node;`;
      const results = await this.neo4jAl.execute(req);

      if (!results || results.records.length === 0) {
        return [];
      }
      const returnList = [] as AipConfiguration[];
      for(const rec of results.records) {
        returnList.push(await this.aipConfigurationFromNode(rec.get("node")));
      }

      return returnList;
    }  catch (e) {
      const message = "Failed to get the list of configuration.";
      this.logger.error(message, e);
      throw new Error(message);
    }
  }

  /**
   * Get the configuration node by the attached application id
   * @param applicationID Id of the children application
   * @return Promise returning the Configuration or null
   */
  public async getConfigurationNodeByApplication(applicationID: number): Promise<AipConfiguration|null> {
    try {
      const req = `MATCH (a:${this.APP_NODE_LABEL})<-[:${this.CONFIGURATION_TO_APP_REL}]-(c:${this.CONFIGURATION_NODE_LABEL}) 
    WHERE ID(a)=$applicationID
    RETURN DISTINCT c as configuration LIMIT 1;`;

      const results = await this.neo4jAl.execute(req, { applicationID: applicationID });
      if (!results || results.records.length === 0) {
        return null;
      }

      const node: Node = results.records[0].get("configuration");
      return this.aipConfigurationFromNode(node);
    }  catch (e) {
      const message = "Failed to create the configuration.";
      this.logger.error(message, e);
      throw new Error(message);
    }
  }

}
