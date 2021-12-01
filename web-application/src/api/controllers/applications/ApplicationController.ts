import { ApiComUtils } from "@/api/utils/ApiComUtils";
import { ApiResponse } from "@/api/interface/ApiResponse.interface";
import ProxyAxios from "@/api/utils/ProxyAxios";

export interface ApplicationRecord {
  name: string;
}

export class ApplicationController {
  private static API_BASE_URL = ApiComUtils.getUrl();

  /**
   * Get the list of application as string
   */
  public static async getListApplications(): Promise<string[]> {
    const url =
      ApplicationController.API_BASE_URL + "/api/imaging/applications/all";

    try {
      const res = await ProxyAxios.get<string[]>(url);
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
