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
      AipConfigurationController.API_BASE_URL +
      "/api/aip/parameters/configuration/all";

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
  public static async createConfigurationNode(
    configuration: AipConfiguration
  ): Promise<void> {
    const url =
      AipConfigurationController.API_BASE_URL +
      "/api/aip/parameters/configuration";

    try {
      const body = { configuration: configuration };
      const res = await axios.post(url, body);

      if (res.status !== 200) {
        throw new Error(
          `Failed to create the AIP configuration node. Status : ${res.status}.`
        );
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
   * Delete a Configuration
   * @param {number} configurationId Configuration to create
   * @returns A promise ending when the configuration is created
   */
  public static async deleteConfigurationNode(
    configurationId: number
  ): Promise<void> {
    const url =
      AipConfigurationController.API_BASE_URL +
      "/api/aip/parameters/configuration/" +
      configurationId;

    try {
      const res = await axios.delete(url);

      if (res.status !== 200) {
        throw new Error(
          `Failed to delete the AIP configuration. Status : ${res.status}.`
        );
      }

      return;
    } catch (error) {
      console.error(
        `Failed to reach the API : ${url}. Failed to configurationId Aip Configuration.`,
        error
      );
    }
  }

  

  /**
   * Test a configuration of AIP
   * @param configuration Configuration to test
   * @returns
   */
  public static async testConnection(
    configuration: AipConfiguration
  ): Promise<boolean> {
    const url =
      AipConfigurationController.API_BASE_URL +
      "/api/aip/parameters/test/configuration";

    try {
      const body = { configuration: configuration };
      const res = await axios.post(url, body);

      if (res.status !== 200) {
        return false;
      }

      return true;
    } catch (error) {
      return false;
    }
  }

  /**
   * Test a configuration of AIP
   * @param configuration Configuration to test
   * @returns
   */
  public static async getAllSchemaList(
    idConfiguration: number
  ): Promise<string[]> {
    const url =
      AipConfigurationController.API_BASE_URL +
      `/api/aip/parameters/configuration/byId/${idConfiguration}/all/schemas`;

    try {
      const res = await axios.get(url);

      if (res.status !== 200) {
        throw new Error(
          `Failed to retrieve the schemas list. Status : ${res.status}.`
        );
      }

      const apiResponse: ApiResponse = res.data;
      console.log("Data received ", apiResponse.data);

      return apiResponse.data as string[];
    } catch (error) {
      console.error(
        `Failed to reach the API : ${url}. Failed to retrieve the schemas list.`,
        error
      );
    }
  }

  /**
   * Delete a configuration using its ID
   * @param idConfiguration Id of the configuration to delete
   * @returns
   */
  public static async deleteSchemaById(idConfiguration: number): Promise<void> {
    const url =
      AipConfigurationController.API_BASE_URL +
      `/api/aip/parameters/configuration/delete/byId/${idConfiguration}`;

    try {
      const res = await axios.delete(url);

      if (res.status !== 200) {
        throw new Error(`Failed to delete the server. Status : ${res.status}.`);
      }
    } catch (error) {
      console.error(
        `Failed to reach the API : ${url}. Failed to delete the server.`,
        error
      );
    }
  }
}
