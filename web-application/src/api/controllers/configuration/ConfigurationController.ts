import { ApiComUtils } from '@/api/utils/ApiComUtils';
import { ApiResponse } from '@/api/interface/ApiResponse.interface';
import ProxyAxios from '@/api/utils/ProxyAxios';

export default class ConfigurationController {
  private static API_BASE_URL = ApiComUtils.getUrl();

  public static async getArtemisWorkspace(): Promise<string> {
    const url = `${ConfigurationController.API_BASE_URL
    }/api/configuration/parameters/artemis/workspace`;

    try {
      const res = await ProxyAxios.get(url);

      if (res.status == 200 || res.status == 304) {
        const apiResponse: ApiResponse = res.data;
        return String(apiResponse.data);
      }
      throw new Error(
        `Failed to retrieve the workspace of Artemis. Status (${res.status})`,
      );
    } catch (error) {
      console.error(`Failed to reach the API : ${url}.`, error);
      throw error;
    }
  }

  public static async setArtemisWorkspace(
    newWorkspace: string,
  ): Promise<string> {
    const url = `${ConfigurationController.API_BASE_URL
    }/api/configuration/parameters/artemis/workspace`;

    try {
      const res = await ProxyAxios.post(url, {
        workspace: newWorkspace,
      });

      if (res.status == 200 || res.status == 304) {
        const apiResponse: ApiResponse = res.data;
        return String(apiResponse.data);
      }
      throw new Error(
        `Failed to set the workspace of Artemis. Status (${res.status})`,
      );
    } catch (error) {
      console.error(`Failed to reach the API : ${url}.`, error);
      throw error;
    }
  }

  public static async getDemeterWorkspace(): Promise<string> {
    const url = `${ConfigurationController.API_BASE_URL
    }/api/configuration/parameters/demeter/workspace`;

    try {
      const res = await ProxyAxios.get(url);

      if (res.status == 200 || res.status == 304) {
        const apiResponse: ApiResponse = res.data;
        return String(apiResponse.data);
      }
      throw new Error(
        `Failed to retrieve the workspace of Demeter. Status (${res.status})`,
      );
    } catch (error) {
      console.error(`Failed to reach the API : ${url}.`, error);
      throw error;
    }
  }

  public static async setInternalMode(value: boolean): Promise<boolean> {
    const url = `${ConfigurationController.API_BASE_URL
    }/api/configuration/parameters/artemis/internalMode`;

    try {
      const res = await ProxyAxios.post(url, { value });

      if (res.status == 200 || res.status == 304) {
        const apiResponse: ApiResponse = res.data;
        return Boolean(apiResponse.data);
      }
      throw new Error(
        `Failed to set the internalMode of Artemis. Status (${res.status})`,
      );
    } catch (error) {
      console.error(`Failed to reach the API : ${url}.`, error);
      throw error;
    }
  }

  public static async getInternalMode(): Promise<boolean> {
    const url = `${ConfigurationController.API_BASE_URL
    }/api/configuration/parameters/artemis/internalMode`;

    try {
      const res = await ProxyAxios.get(url);

      if (res.status == 200 || res.status == 304) {
        const apiResponse: ApiResponse = res.data;
        return Boolean(apiResponse.data);
      }
      throw new Error(
        `Failed to retrieve the internalMode of Artemis. Status (${res.status})`,
      );
    } catch (error) {
      console.error(`Failed to reach the API : ${url}.`, error);
      throw error;
    }
  }

  public static async setDemeterWorkspace(
    newWorkspace: string,
  ): Promise<string> {
    const url = `${ConfigurationController.API_BASE_URL
    }/api/configuration/parameters/demeter/workspace`;

    try {
      const res = await ProxyAxios.post(url, {
        workspace: newWorkspace,
      });

      if (res.status == 200 || res.status == 304) {
        const apiResponse: ApiResponse = res.data;
        return String(apiResponse.data);
      }
      throw new Error(
        `Failed to set the workspace of Demeter. Status (${res.status})`,
      );
    } catch (error) {
      console.error(`Failed to reach the API : ${url}.`, error);
      throw error;
    }
  }
}
