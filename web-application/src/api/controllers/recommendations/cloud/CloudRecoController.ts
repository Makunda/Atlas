import axios from "axios";
import { ApiComUtils } from "@/api/utils/ApiComUtils";
import flash, { FlashType } from "@/modules/flash/Flash";
import { ApiResponse } from "@/api/interface/ApiResponse.interface";
import Extension from "@/api/interface/cloud/recommendations/Extension";
import ProxyAxios from "@/api/utils/ProxyAxios";

/**
 * Managing the API calls related to Open source obsolescence
 */
export default class CloudRecoController {
  private static apiBaseUrl =
    ApiComUtils.getUrl() + "/api/cloud/recommendations";

  /**
   * Get the list of extension for cloud recommendations
   */
  public static async getExtensionList(): Promise<Extension[]> {
    const url = this.apiBaseUrl + "/extension/all";

    try {
      const res = await ProxyAxios.get(url);

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        if (Array.isArray(apiResponse.data)) {
          return apiResponse.data as Extension[];
        }
      } else {
        throw new Error(
          `Failed to get the cloud recommendations extensions. Status (${res.status}). Message: ${res.data}`,
        );
      }
    } catch (error) {
      flash.commit("add", {
        type: FlashType.ERROR,
        title: "Failed to get cloud recommendations extensions.",
        body: error,
      });
      console.error(
        `Failed to reach the API : ${url}. Failed to get cloud recommendations extensions.`,
        error,
      );
      throw error;
    }
  }

  /**
   * Apply a list of recommendation on the application
   */
  public static async runExtension(
    id: string,
    application: string,
  ): Promise<any> {
    const url = this.apiBaseUrl + "/extension/run";

    try {
      const body = {
        id: id,
        application: application,
      };
      const res = await ProxyAxios.post(url, body);

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        if (Array.isArray(apiResponse.data)) {
          return apiResponse.data as Extension[];
        }
      } else {
        throw new Error(
          `Failed to run the cloud recommendations extension. Status (${res.status}). Message: ${res.data}`,
        );
      }
    } catch (error) {
      flash.commit("add", {
        type: FlashType.ERROR,
        title: "Failed to run cloud recommendations extension.",
        body: error,
      });
      console.error(
        `Failed to reach the API : ${url}. Failed to run the cloud recommendations extension.`,
        error,
      );
      throw error;
    }
  }
}
