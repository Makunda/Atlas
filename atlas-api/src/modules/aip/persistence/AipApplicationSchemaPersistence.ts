import Persistence from "@modules/aip/persistence/Persistence";
import AipApplication from "@modules/aip/interfaces/AipApplication";
import { Node } from "neo4j-driver";
import { AipSchema, SchemaType, schemaTypeFromString } from "@modules/aip/interfaces/AipSchema";
import { wrapLogger } from "@shared/Logger";
/**
 * Persistence of application schema
 */
export default class AipApplicationSchemaPersistence extends Persistence{

  private logger = wrapLogger("Aip Application Schema Persistence");

  /**
   * AipSchema from a Node
   * @param {Node} n Node to transform in object
   * @returns {AipSchema} The AipSchema Object
   * @throws {Exception} When the node is not formatted correctly
   */
   public aipSchemaFromNode(n: Node): AipSchema {
    const properties: any = n.properties;

    const type = schemaTypeFromString(properties["Type"]);

    return {
      id: n.identity.toNumber(),
      schema: String(properties["Schema"]),
      type: type,
    } as AipSchema;
  }


  /**
   * Find a schema by ID
   * @param id Id of the schema to find
   * @return Promise returning the schema or null if not found
   */
  public async findSchemasById(id: number) : Promise<AipSchema|null> {
    const req = `MATCH (o:${this.APP_SCHEMA_NODE_LABEL}) WHERE ID(o)=$id 
    RETURN DISTINCT o as schema;`;

    try {
      const results = await  this.neo4jAl.execute(req, { id : id});
      if(!results.records || results.records.length) return null;
      return results.records[0].get("schema");
    } catch (e) {
      const message = "Failed to find the schemas by id.";
      this.logger.error(message, e);
      throw new Error(message);
    }
  }

  /**
   * Find schema by names
   * @param name Name to search
   * @returns The list of schema that matched the condition
   */
  public async findSchemasByName(name: string) : Promise<AipSchema[]> {
    const req = `MATCH (o:${this.APP_SCHEMA_NODE_LABEL}) WHERE o.Name CONTAINS $name 
    RETURN DISTINCT o as schema;`;

    try {
      const results = await  this.neo4jAl.execute(req, { name : name});
      if(!results.records) return [];
      return results.records.map(
        x => this.aipSchemaFromNode(x.get("schema"))
      );
    } catch (e) {
      const message = "Failed to find the schemas by name.";
      this.logger.error(message, e);
      throw new Error(message);
    }
  }

  /**
   * Find schema by type
   * @param type Type of schema to search
   * @returns The list of schema that matched the condition
   */
  public async findSchemasByType(type: SchemaType) : Promise<AipSchema[]> {
    const req = `MATCH (o:${this.APP_SCHEMA_NODE_LABEL}) WHERE o.Type=$type
    RETURN DISTINCT o as schema;`;

    try {
      const results = await  this.neo4jAl.execute(req, { type : type.toString() });
      if(!results.records) return [];
      return results.records.map(
        x => this.aipSchemaFromNode(x.get("schema"))
      );
    } catch (e) {
      const message = "Failed to find the schemas by name.";
      this.logger.error(message, e);
      throw new Error(message);
    }
  }

  /**
   * Find all Schema
   * @returns A promise returning the AipSchema
   */
  public async findAllSchemas() : Promise<AipSchema[]> {
    const req = `MATCH (o:${this.APP_SCHEMA_NODE_LABEL}) 
    RETURN DISTINCT o as schema;`;

    try {
      const results = await  this.neo4jAl.execute(req);
      if(!results.records) return [];
      return results.records.map(
        x => this.aipSchemaFromNode(x.get("schema"))
      );
    } catch (e) {
      const message = "Failed to find the schemas by name.";
      this.logger.error(message, e);
      throw new Error(message);
    }
  }

  // Create
  /**
   * Create a new Schema
   * @param applicationId Id of the application
   * @param schema Schema to create
   */
  public async create(applicationId: number, schema: AipSchema) : Promise<AipSchema|null> {
    const req = `MATCH (o:${this.APP_NODE_LABEL}) WHERE ID(o)=$appId 
    WITH o 
    MERGE (o)-[:\`${this.APP_TO_SCHEMA_REL}\`]->(s:${this.APP_SCHEMA_NODE_LABEL} { name: $name, type: $type })
    RETURN DISTINCT s as schema;`;

    try {
      const results = await  this.neo4jAl.execute(req,
        { appId: applicationId, name: schema.schema, type: schema.type.toString()});
      if(!results.records) return null;
      const node: Node = results.records[0].get("schema");
      return this.aipSchemaFromNode(node);
    } catch (e) {
      const message = "Failed to crete the schemas.";
      this.logger.error(message, e);
      throw new Error(message);
    }
  }

  /**
   * Delete a schema by ID
   * @param id Id of the schema to delete
   * @return Promise ending when the schema is deleted
   */
  public async deleteSchemaById(id: number) : Promise<void> {
    const req = `MATCH (o:${this.APP_SCHEMA_NODE_LABEL}) WHERE ID(o)=$id 
    DETACH DELETE o 
    RETURN DISTINCT o as schema;`;

    try {
      await this.neo4jAl.execute(req, { id : id});
    } catch (e) {
      const message = "Failed to delete the schemas by id.";
      this.logger.error(message, e);
      throw new Error(message);
    }
  }
}