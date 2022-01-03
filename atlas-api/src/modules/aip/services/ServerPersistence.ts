import { AipConfiguration } from "@modules/aip/interfaces/AipConfiguration";
import SchemaManager from "@modules/aip/services/SchemaManager";
import AipApplication from "@modules/aip/interfaces/AipApplication";
import ConfigurationPersistence from "@modules/aip/persistence/ConfigurationPersistence";
import CommunicationUtil from "@modules/aip/services/CommunicationUtil";
import { wrapLogger } from "@shared/Logger";
import { AipSchema } from "@modules/aip/interfaces/AipSchema";
import AipApplicationPersistence from "@modules/aip/persistence/AipApplicationPersistence";
import AipApplicationSchemaPersistence from "@modules/aip/persistence/AipApplicationSchemaPersistence";

export default class ServerPersistence {

  private logger = wrapLogger("Schema Manager");
  private schemaMan: SchemaManager = new SchemaManager();

  /**
   * Persist applications
   * @param configId Id of the configuration
   * @param applications List of application to persists
   * @private
   */
  private async persistApplications(configId:number, applications: AipApplication[]) : Promise<AipApplication[]>{
    const returnList: AipApplication[] = [];
    let appTemp: AipApplication;
    for(const app of applications) {
      appTemp = await AipApplicationPersistence.createApplication(configId, app);
      if(appTemp.central) appTemp.central = await AipApplicationSchemaPersistence.create(appTemp.id, appTemp.central);
      if(appTemp.local) appTemp.local = await AipApplicationSchemaPersistence.create(appTemp.id, appTemp.local);
      if(appTemp.management) appTemp.management = await AipApplicationSchemaPersistence.create(appTemp.id, appTemp.management);
      returnList.push(appTemp);
    }
    return returnList;
  }

  public async persistServer(configuration: AipConfiguration) {
    // Test Connection
    await CommunicationUtil.testConnection(configuration);

    // Discover

    const applications = await this.schemaMan.getApplicationsList(configuration);

    let confNode: AipConfiguration;
    let applicationsNode: AipApplication[];

    try {
      // Persist Configuration
      confNode = await ConfigurationPersistence.createConfiguration(configuration);
      applicationsNode = await this.persistApplications(configuration.id, applications);
      return applicationsNode;
    } catch (e) {
      this.logger.error("Failed to persist the server configuration.", e);
      if(confNode) ConfigurationPersistence.deleteConfigurationNode(confNode.id);
      if(applicationsNode) ConfigurationPersistence.deleteConfigurationNode(confNode.id);
      throw new Error("Failed to persist the server configuration.");
    }

  }

}