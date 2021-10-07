import axios from "axios";
import { ApiComUtils } from "@/api/utils/ApiComUtils";
import { ApiResponse } from "@/api/interface/ApiResponse.interface";
import CloudBlocker from "@/api/interface/highlight/CloudBlocker";
import ProxyAxios from "@/api/utils/ProxyAxios";

export class CloudBlockersController {
  private static API_BASE_URL = ApiComUtils.getUrl();

  /**
   * Get the url to generate the Paris export
   */
  public static async uploadFile(
    file: any,
    application: string,
  ): Promise<CloudBlocker[]> {
    const url =
      CloudBlockersController.API_BASE_URL +
      `/api/highlight/recommendations/cloud/file/upload/blockers/${application}`;

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("application", application);
      const res = await ProxyAxios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        if (Array.isArray(apiResponse.data)) {
          return apiResponse.data as CloudBlocker[];
        }
      } else {
        throw new Error(
          `Failed to send the list of recommendation. Status (${res.status}). Message: ${res.data}`,
        );
      }
    } catch (error) {
      console.error(
        `Failed to reach the API : ${url}. Failed to send the list of recommendation .`,
        error,
      );
      throw error;
    }
  }

  /**
   * Apply a list of recommendation on the application
   */
  public static async applyBlockers(
    blockers: CloudBlocker[],
    type: string,
  ): Promise<[CloudBlocker[], CloudBlocker[]]> {
    const url =
      CloudBlockersController.API_BASE_URL +
      "/api/highlight/recommendations/cloud/apply/blockers";

    try {
      const body = {
        blockers: blockers,
        type: type,
      };

      const res = await ProxyAxios.post(url, body);

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;

        let applied: CloudBlocker[] = [];
        let notApplied: CloudBlocker[] = [];

        if (apiResponse.data && Array.isArray(apiResponse.data.applied)) {
          applied = apiResponse.data.applied as CloudBlocker[];
        }

        if (apiResponse.data && Array.isArray(apiResponse.data.notApplied)) {
          notApplied = apiResponse.data.notApplied as CloudBlocker[];
        }

        return [applied, notApplied];
      } else {
        throw new Error(
          `Failed to apply the list of recommendation. Status (${res.status}). Message: ${res.data}`,
        );
      }
    } catch (error) {
      console.error(
        `Failed to reach the API : ${url}. Failed to apply the list of recommendation .`,
        error,
      );
      throw error;
    }
  }

  /**
   * Apply a list of recommendation on the application
   */
  public static async testBlocker(
    blocker: CloudBlocker,
  ): Promise<CloudBlocker[]> {
    const url =
      CloudBlockersController.API_BASE_URL +
      "/api/highlight/recommendations/cloud/test/blockers";

    try {
      const body = {
        blocker: blocker,
      };

      const res = await ProxyAxios.post(url, body);

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        if (Array.isArray(apiResponse.data)) {
          return apiResponse.data as CloudBlocker[];
        }
      } else {
        throw new Error(
          `Failed to test the recommendations. Status (${res.status}). Message: ${res.data}`,
        );
      }
    } catch (error) {
      console.error(
        `Failed to reach the API : ${url}. Failed to test the recommendations.`,
        error,
      );
      throw error;
    }
  }
}
