import AipApplication from "@modules/aip/interfaces/AipApplication";
import Persistence from "@modules/aip/persistence/Persistence";
import { wrapLogger } from "@shared/Logger";
import { Node } from "neo4j-driver";
import { AipSchema, SchemaType } from "@modules/aip/interfaces/AipSchema";
import AipApplicationSchemaPersistence from "@modules/aip/persistence/AipApplicationSchemaPersistence";
import app from "@server";

export default class AipApplicationPersistence extends Persistence{

  private logger = wrapLogger("Aip Application Schema Persistence");
  private applicationPersistenceMan = new AipApplicationSchemaPersistence();
  /**
   * AipSchema from a Node
   * @param {Node} n Node to transform in object
   * @returns {Promise<AipApplication>} The AipSchema Object
   * @throws {Exception} When the node is not formatted correctly
   */
  public async aipApplicationFromNode(n: Node): Promise<AipApplication> {
    const properties: any = n.properties;

    // Get the application
    const application = {
      id: n.identity.toNumber(),
      name: String(properties["Name"]) || "",
      aipName: String(properties["AipName"]) || "",
      linkedImagingApp: String(properties["AipName"]) || "",

      local: {} as AipSchema,
      management: {} as AipSchema,
      central: {} as AipSchema,
    } as AipApplication;

    // Get the schemas
    application.local = await this.findAttachedSchemasByType(application.id, SchemaType.LOCAL);
    application.management = await this.findAttachedSchemasByType(application.id, SchemaType.MANAGEMENT);
    application.central = await this.findAttachedSchemasByType(application.id,  SchemaType.CENTRAL);

    return application;
  }


  /**
   * Find a schema by type and application id
   * @param applicationId Application ID
   * @param type Type of schema
   * @return Promise returning the schema or null if not found
   */
  public async findAttachedSchemasByType(applicationId: number, type: SchemaType) : Promise<AipSchema|null> {
    const req = `MATCH (a:${this.APP_NODE_LABEL})-[:${this.APP_TO_SCHEMA_REL}]->(s:${this.APP_SCHEMA_NODE_LABEL}) 
    WHERE ID(o)=$applicationId AND s.Type=$type
    RETURN  s as schema LIMIT 1;`;

    try {
      const results = await  this.neo4jAl.execute(req, { applicationId : applicationId, type: type});
      if(!results.records || results.records.length) return null;
      const node: Node = results.records[0].get("schema") as Node;
      return this.applicationPersistenceMan.aipSchemaFromNode(node);
    } catch (e) {
      const message = "Failed to find the attached schemas by type.";
      this.logger.error(message, e);
      throw new Error(message);
    }
  }

  /**
   * Find a schema by ID
   * @return Promise returning the schema or null if not found
   */
  public async findApplications() : Promise<AipApplication[]> {
    const req = `MATCH (o:${this.APP_NODE_LABEL}) 
    RETURN DISTINCT o as application;`;

    try {
      const results = await this.neo4jAl.execute(req);
      if(!results.records || results.records.length) return [];

      const applications: AipApplication[] = [];
      let node;
      for(const rec of results.records) {
        node = rec.get("application");
        applications.push(await this.aipApplicationFromNode(node)); // Retrieve the app
      }

      return applications;
    } catch (e) {
      const message = "Failed to get the list of application.";
      this.logger.error(message, e);
      throw new Error(message);
    }
  }


  /**
   * Find schema by name
   * @param name Name to search
   * @returns The list of schema that matched the condition
   */
  public async findApplicationsByName(name: string) : Promise<AipApplication[]> {
    const req = `MATCH (o:${this.APP_NODE_LABEL}) WHERE o.Name CONTAINS $name 
    RETURN DISTINCT o as application;`;

    try {
      const results = await  this.neo4jAl.execute(req, { name : name});
      if(!results.records) return [];

      const applications = [];
      for(const rec of results.records) {
        applications.push(await this.aipApplicationFromNode(rec.get("application")));
      }

      return applications;
    } catch (e) {
      const message = "Failed to find the list of application by name.";
      this.logger.error(message, e);
      throw new Error(message);
    }
  }

  /**
   * Find an Application by id
   * @param id of the application to find
   * @returns A promise returning the AipSchema
   */
  public async findApplicationById(id: number) : Promise<AipApplication|null> {
    const req = `MATCH (o:${this.APP_NODE_LABEL}) WHERE ID(o)=$id 
    RETURN DISTINCT o as application;`;

    try {
      const results = await  this.neo4jAl.execute(req, { id: id });
      if(!results.records || results.records.length) return null;
      const node: Node = results.records[0].get("application");

      return this.aipApplicationFromNode(node);
    } catch (e) {
      const message = "Failed to find the application by id.";
      this.logger.error(message, e);
      throw new Error(message);
    }
  }

  // Create
  /**
   * Create a new Application
   * @param idConfig Id of the application
   * @param application Application to create
   * @returns Promise ending with the
   */
  public async createApplication(idConfig: number, application: AipApplication) : Promise<AipApplication|null> {
    const req = `MATCH (o:${this.CONFIGURATION_NODE_LABEL}) WHERE ID(o)=$idConfig
    WITH o 
    MERGE (o)-[:\`${this.CONFIGURATION_TO_APP_REL}\`]->(a:${this.APP_SCHEMA_NODE_LABEL} { Name: $name, AipName: $aipName, LinkedImagingApp: $linkedImagingApp })
    RETURN DISTINCT a as application;`;

    try {
      const results = await  this.neo4jAl.execute(req,
        { idConfig: idConfig, name: application.name, linkedImagingApp: application.linkedImagingApp, aipName: application.aipName });

      if(!results.records || results.records.length == 0) return null;
      const node: Node = results.records[0].get("application");

      return await this.aipApplicationFromNode(node);
    } catch (e) {
      const message = "Failed to create the application.";
      this.logger.error(message, e);
      throw new Error(message);
    }
  }

  /**
   * Update an applications
   * @param id Id of the application
   * @param application Updated data
   */
  public async updateApplication(id: number, application: AipApplication) : Promise<AipApplication|null> {
    const req = `MATCH (o:${this.CONFIGURATION_NODE_LABEL}) WHERE ID(o)=$id
    SET o.Name=$name
    SET o.AipName=$aipName
    SET o.LinkedImagingApp=$linkedImagingApp
    RETURN DISTINCT a as application;`;

    try {
      const results = await  this.neo4jAl.execute(req,
        { id: id,
          name: application.name,
          aipName: application.aipName,
          linkedImagingApp: application.linkedImagingApp
        }
      );

      if(!results.records || results.records.length == 0) return null;
      const node: Node = results.records[0].get("application");
      return await this.aipApplicationFromNode(node);
    } catch (e) {
      const message = "Failed to create the application.";
      this.logger.error(message, e);
      throw new Error(message);
    }
  }

  /**
   * Delete an application by ID
   * @param id Id of the schema to delete
   * @return Promise ending when the schema is deleted
   */
  public async deleteById(id: number) : Promise<void> {
    const req = `MATCH (o:${this.APP_NODE_LABEL}) WHERE ID(o)=$id 
    DETACH DELETE o 
    RETURN o as schema;`;

    try {
      await this.neo4jAl.execute(req, { id : id});
    } catch (e) {
      const message = "Failed to delete the application by id.";
      this.logger.error(message, e);
      throw new Error(message);
    }
  }
}