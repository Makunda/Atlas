import axios from "axios";
import { ApiComUtils } from "../../ApiComUtils";
import flash, { FlashType } from "../../../modules/flash/Flash";
import { ApiResponse } from "../../interface/ApiResponse.interface";
import Extension from "../../interface/cloud/recommendations/Extension";

/**
 * Managing the API calls related to Open source obsolescence
 */
export default class CloudRecoController {
  private static apiBaseUrl =
    ApiComUtils.getUrl() + "/api/cloud/recommendations";

  /**
   * Apply a list of recommendation on the application
   */
  public static async getExtensionList(): Promise<Extension[]> {
    const url = this.apiBaseUrl + "/extension/all";

    try {
      const res = await axios.get(url);

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
}
