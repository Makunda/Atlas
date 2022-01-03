/* eslint-disable @typescript-eslint/no-unsafe-call */
import { AipConfiguration } from "@modules/aip/interfaces/AipConfiguration";
import PoolManager from "@postgres/PoolManager";
import AipApplication from "@modules/aip/interfaces/AipApplication";
import { AipSchema, SchemaType } from "@modules/aip/interfaces/AipSchema";
import { wrapLogger } from "@shared/Logger";


/**
 * Class managing the relations to postgres for the Schema management
 */
export default class SchemaManager {

  private logger = wrapLogger("Schema Manager");

  /**
   * Get the list of the schema in one database
   * @param configuration Configuration of AIP to query
   * @returns Promise returning the list of queries
   */
  public async getSchemasAsString(configuration: AipConfiguration): Promise<string[]> {
    try {
      // Open pool
      const pool: string = PoolManager.openPool(configuration);
      const row = await PoolManager.queryPool(
        pool,
        "select nspname as schema_name from pg_catalog.pg_namespace WHERE NOT nspname LIKE 'pg_%';",
      );
      return row.map((x) => String(x.schema_name));
    } catch (e) {
      const message = "Failed to get the schema as a list.";
      this.logger.error(message, e);
      throw new Error(message);
    }
  }

  /**
   * Get the type of the Schema
   * @param schema Name of the schema
   * @private
   */
  private getSchemaType(schema: string) : SchemaType|null {
    if(schema.endsWith("_local")) return SchemaType.LOCAL;
    if(schema.endsWith("_central")) return SchemaType.CENTRAL;
    if(schema.endsWith("_mngt")) return SchemaType.MANAGEMENT;

    // No match
    return null;
  }

  /**
   * Get the application name from a schema
   * @param schema
   * @private
   */
  private getApplicationName(schema: string) : string|null {
    const type = this.getSchemaType(schema);
    if(type == null) return null; // No type discovered

    // Less than 4, no switch statement
    if(type == SchemaType.LOCAL) return schema.replace("_local$", "");
    if(type == SchemaType.CENTRAL) return schema.replace("_central$", "");
    if(type == SchemaType.MANAGEMENT) return schema.replace("_mngt", "");
  }

  /**
   * Apply a schema to an application
   * @param application Application
   * @param schema Name of the schema
   * @private
   */
  private applySchema(application: AipApplication, schema: string) : AipApplication {
    const type = this.getSchemaType(schema);
    if(type == null) return application; // No type discovered

    // Less than 4, no switch statement
    if(type == SchemaType.LOCAL) application.local = { name: "Local", schema: schema, type: type, } as AipSchema;
    if(type == SchemaType.CENTRAL) application.central = { name: "Central", schema: schema, type: type, } as AipSchema;
    if(type == SchemaType.MANAGEMENT) application.management = { name: "Management", schema: schema, type: type, } as AipSchema;

    return application;
  }

  /**
   * Get application list
   * @param configuration Configuration of the server to use
   * @return Promise returing the list of the Application detected
   */
  public async getApplicationsList(configuration: AipConfiguration): Promise<AipApplication[]> {
    try {
      // Open pool
      const pool: string = PoolManager.openPool(configuration);
      const row = await PoolManager.queryPool(
        pool,
        "select nspname as schema_name from pg_catalog.pg_namespace WHERE NOT nspname LIKE 'pg_%';");

      // Build application map
      const appMap = new Map<string, AipApplication>();

      // Find schemas with _central, _local, _mngt
      let schema: string;
      let application : string;
      let aipApplication: AipApplication;

      // Parse the results
      for(const record of row) {
        schema = String(record.schema_name);
        application = this.getApplicationName(schema);

        // Get and apply schema in application
        if(!appMap.has(application)) appMap.set(application, {} as AipApplication);
        aipApplication = appMap.has(application) ? appMap.get(application) : {name: application} as AipApplication;
        aipApplication = this.applySchema(aipApplication, schema);
      }

      // Return the list
      return Array.from(appMap.values());
    } catch (e) {
      const message = "Failed to get the application list.";
      this.logger.error(message, e);
      throw new Error(message);
    }
  }

  /**
   * Get the list of schemas
   * @param configuration Configuration
   * @returns Promise returning the list of schemas as strings
   */
  public async getSchemasList(configuration: AipConfiguration): Promise<string[]> {
    try {
      // Open pool
      const pool: string = PoolManager.openPool(configuration);
      const row = await PoolManager.queryPool(
        pool,
        "select nspname as schema_name from pg_catalog.pg_namespace WHERE NOT nspname LIKE 'pg_%';",
      );

      return row.map(x => String(x));
    } catch (e) {
      const message = "Failed to get the schema list.";
      this.logger.error(message, e);
      throw new Error(message);
    }
  }
}
