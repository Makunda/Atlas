/**
 * AIP Management service
 */
import { AipConfiguration } from "@modules/aip/interfaces/AipConfiguration";
import AipApplicationSchemaPersistence from "@modules/aip/persistence/AipApplicationSchemaPersistence";
import { AipSchema, SchemaType } from "@modules/aip/interfaces/AipSchema";
import AipApplicationPersistence from "@modules/aip/persistence/AipApplicationPersistence";
import AipApplication from "@modules/aip/interfaces/AipApplication";
import ConfigurationPersistence from "@modules/aip/persistence/ConfigurationPersistence";
import SchemaManager from "@modules/aip/services/SchemaManager";

export default class Aip {

  private applicationPersistence = new AipApplicationPersistence();
  private configurationPersistence = new ConfigurationPersistence();
  private schemaPersistence = new AipApplicationSchemaPersistence();
  private schemaManager = new SchemaManager();

  // Schemas
  /**
   * Find a Schema using its id
   * @param id Id of the Schema
   * @returns A promise returning a
   */
  public async findSchemaById(id: number) : Promise<AipSchema | null> {
    return this.schemaPersistence.findSchemasById(id);
  }

  /**
   * Find a Schema using its id
   * @param name Name to search
   * @returns A promise returning a list of Aip Schema that match the condition
   */
  public async findSchemasByName(name: string) : Promise<AipSchema[]> {
    return this.schemaPersistence.findSchemasByName(name);
  }

  /**
   * Find Schemas by type
   * @param type
   * @return A Promise ending returning the list of schemas
   */
  public async findSchemasByType(type: SchemaType) : Promise<AipSchema[]> {
    return this.schemaPersistence.findSchemasByType(type);
  }

  /**
   * Find All Schema registered on database
   * @return A Promise ending returning the list of schemas
   */
  public async findAllSchemas() : Promise<AipSchema[]> {
    return this.schemaPersistence.findAllSchemas();
  }

  /**
   * Find All Schema registered on database
   * @return A Promise ending returning the list of schemas
   */
  public async createSchema(applicationId: number, schema: AipSchema) : Promise<AipSchema | null> {
    return this.schemaPersistence.create(applicationId, schema);
  }

  /**
   * Find All Schema registered on database
   * @return A Promise ending returning the list of schemas
   */
  public async deleteSchemaById(id: number) : Promise<void> {
    return this.schemaPersistence.deleteSchemaById(id);
  }


  // Application
  /**
   * Find a schema by type and application id
   * @param applicationId Application ID
   * @param type Type of schema
   * @return Promise returning the schema or null if not found
   */
  public async findAttachedSchemasByType(applicationId: number, type: SchemaType) : Promise<AipSchema | null> {
    return this.applicationPersistence.findAttachedSchemasByType(applicationId, type);
  }

  /**
   * Find all the applications in the database
   * @param applicationId Id of the application
   * @param type Type of the application
   */
  public async findAllApplications(applicationId: number, type: SchemaType) : Promise<AipApplication[]>{
    return this.applicationPersistence.findApplications();
  }

  /**
   * Look for a specific string in the application
   * @param name Name of the application to search
   * @return Promise returning the list of the applications
   */
  public async findApplicationByName(name: string) : Promise<AipApplication[]>{
    return this.applicationPersistence.findApplications();
  }

  /**
   * Find an Application by id
   * @param id of the application to find
   * @returns A promise returning the AipSchema
   */
  public async findApplicationById(id: number) : Promise<AipApplication | null>{
    return this.applicationPersistence.findApplicationById(id);
  }

  /**
   * Create a new application
   * @param idConfig Id of the configuration
   * @param application Application to create
   * @returns A promise returning the newly created application
   */
  public async createApplication(idConfig: number, application: AipApplication) : Promise<AipApplication | null>{
    return this.applicationPersistence.createApplication(idConfig, application);
  }

  /**
   * Update an existing application by its id
   * @param id ID of the application
   * @param application Data of the application
   */
  public async updateApplication(id: number, application: AipApplication) {
    return this.applicationPersistence.updateApplication(id, application);
  }

  /**
   * Delete an existing application by its id
   * @param id ID of the application to delete
   */
  public async deleteById(id: number, application: AipApplication) {
    return this.applicationPersistence.updateApplication(id, application);
  }

  // Configuration

  /**
   * Get the list of application
   * @param id Id of the configuration
   * @returns the list of application detected in the configuration
   */
  public async getLinkedApplication(id: number) : Promise<AipApplication[]> {
   return this.configurationPersistence.getLinkedApplication(id);
  }

  /**
   * Delete a Configuration node by its Id
   * @param {Number} id Id of the configuration node to delete
   * @returns A Promise ending when the configuration is deleted
   */
  public async deleteConfiguration(id: number) : Promise<void> {
    return this.configurationPersistence.deleteConfigurationNode(id);
  }

  /**
   * Create a new schema node
   * @param config Configuration to create
   * @return A promise returning the newly created configuration
   */
  public async createConfiguration(config: AipConfiguration) : Promise<AipConfiguration> {
    return this.configurationPersistence.createConfiguration(config);
  }

  /**
   * Get the configuration by the attached application id
   * @param applicationID Id of the children application
   * @return Promise returning the Configuration or null
   */
  public async getConfigurationByApplication(applicationID: number) : Promise<AipConfiguration> {
    return this.configurationPersistence.getConfigurationNodeByApplication(applicationID);
  }

  /**
   * Get the list of  in the database
   * @param configuration Configuration
   * @returns Promise returning the list of schemas as strings
   */
  public async getSchemasList(configuration: AipConfiguration) {
      return this.schemaManager.getSchemasList(configuration);
  }

  /**
   * Test the connection to a configuration
   * @param configuration
   */
  public async testConnection(configuration: AipConfiguration) {
    return this.schemaManager.getSchemasList(configuration);
  }




}

export { AipConfiguration, AipApplication, AipSchema }