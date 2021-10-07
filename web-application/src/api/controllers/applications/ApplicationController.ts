import { ApiComUtils } from "@/api/utils/ApiComUtils";
import { ApiResponse } from "@/api/interface/ApiResponse.interface";
import { ApplicationInsights } from "@/api/interface/imaging/Application.interface";
import ProxyAxios from "@/api/utils/ProxyAxios";

export interface ApplicationRecord {
  name: string;
}

export class ApplicationController {
  private static API_BASE_URL = ApiComUtils.getUrl();

  public static async getListApplications(): Promise<string[]> {
    const url =
      ApplicationController.API_BASE_URL + "/api/imaging/applications/all";

    try {
      const res = await ProxyAxios.get(url);
      let applications: string[] = [];

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;

        if (Array.isArray(apiResponse.data)) {
          applications = apiResponse.data;
        }
      } else {
        console.warn(
          `Failed to retrieve application list. Status (${res.status})`
        );
      }

      return applications;
    } catch (error) {
      console.error(
        `Failed to reach the API : ${url}. Failed to retrieve application list.`,
        error
      );
    }
  }

  /**
   * Retrieve insights in an application ( Modules, Levels, Technologies supported by Artemis etc.. )
   * @param application
   */
  public static async getApplicationInsights(
    application: string
  ): Promise<ApplicationInsights> {
    const url =
      ApplicationController.API_BASE_URL +
      "/api/imaging/applications/insights/" +
      application;

    try {
      const res = await ProxyAxios.get(url);

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        return apiResponse.data as ApplicationInsights;
      } else {
        throw new Error(
          `Failed to retrieve insights for application with name ${application}.`
        );
      }
    } catch (error) {
      console.error(
        `Failed to reach the API : ${url}. Failed to retrieve the insights.`,
        error
      );
    }
  }

  /**
   * Get the technology in one application
   * @param application Name of the application
   */
  public static async getTechnologies(application: string): Promise<string[]> {
    const url =
      ApplicationController.API_BASE_URL +
      "/api/imaging/applications/technologies/" +
      application;

    try {
      const res = await ProxyAxios.get(url);

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        if (Array.isArray(apiResponse.data)) {
          return apiResponse.data as string[];
        }
      } else {
        throw new Error(
          `Failed to retrieve technologies in application with name ${application}.`
        );
      }
    } catch (error) {
      console.error(
        `Failed to reach the API : ${url}. Failed to retrieve the technologies.`,
        error
      );
    }
  }

  public static async getLevelsByDepth(
    application: string,
    depthLevel: number
  ): Promise<string[]> {
    const url =
      ApplicationController.API_BASE_URL +
      `/api/imaging/applications/levels/${application}/${depthLevel}/name`;

    try {
      const res = await ProxyAxios.get(url);

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        if (Array.isArray(apiResponse.data)) {
          return apiResponse.data as string[];
        }
      } else {
        throw new Error(
          `Failed to retrieve levels${depthLevel} in application with name ${application}.`
        );
      }
    } catch (error) {
      console.error(
        `Failed to reach the API : ${url}. Failed to retrieve levels${depthLevel} in application with name ${application}.`,
        error
      );
    }
  }
}
