import axios from "axios";
import { ApiComUtils } from "../ApiComUtils";
import { ApiResponse } from "../interface/ApiResponse.interface";
import { Neo4JAccessLayer } from "../Neo4jAccessLayer";
import { AipConfiguration } from "../interface/aip/Aipconfiguration";
import { AipSchema } from "../interface/aip/AipSchema";

export interface ApplicationRecord {
  name: string;
}

export class AipConfigurationController {
  private static API_BASE_URL = ApiComUtils.getUrl();
  private static neo4jal: Neo4JAccessLayer = Neo4JAccessLayer.getInstance();

  /**
   * Get the complete list of configuration
   * @returns A promise returning the list of AIP configuration found in the database
   */
  public static async getConfigurationList(): Promise<AipConfiguration[]> {
    const url =
    AipConfigurationController.API_BASE_URL + "/api/aip/parameters/configuration";

    try {
      const res = await axios.get(url);
      let configurations: AipConfiguration[] = [];

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;

        if (Array.isArray(apiResponse.data)) {
            configurations = apiResponse.data;
        }
      } else {
        console.warn(
          `Failed to retrieve Aip Configuration list. Status (${res.status})`
        );
      }

      return configurations;
    } catch (error) {
      console.error(
        `Failed to reach the API : ${url}. Failed to retrieve Aip Configuration list.`,
        error
      );
    }
  }

  /**
   * Create a new Configuration
   * @param {AipConfiguration} configuration Configuration to create 
   * @returns A promise ending when the configuration is created
   */
  public static async createConfigurationNode(configuration: AipConfiguration): Promise<void> {
    const url =
    AipConfigurationController.API_BASE_URL + "/api/aip/parameters/configuration";

    try {
      const body = { configuration: configuration };
      const res = await axios.post(url, body);

      if (res.status !== 200) {
        throw new Error(`Failed to create the AIP configuration node. Status : ${res.status}.`)
      }

      return;
    } catch (error) {
      console.error(
        `Failed to reach the API : ${url}. Failed to retrieve Aip Configuration list.`,
        error
      );
    }
  }

  /**
   * Create a new Configuration
   * @param {AipConfiguration} configuration Configuration to create 
   * @returns A promise ending when the configuration is created
   */
   public static async createSchemaNode(id: AipConfiguration, schema: AipSchema): Promise<void> {
    const url =
    AipConfigurationController.API_BASE_URL + "/api/aip/parameters/configuration";

    try {
      const body = { configuration: configuration };
      const res = await axios.post(url, body);

      if (res.status !== 200) {
        throw new Error(`Failed to create the AIP configuration node. Status : ${res.status}.`)
      }

      return;
    } catch (error) {
      console.error(
        `Failed to reach the API : ${url}. Failed to retrieve Aip Configuration list.`,
        error
      );
    }
  }

  

}
