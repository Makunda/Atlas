import axios from "axios";
import { ApiComUtils } from "../ApiComUtils";
import { ApiResponse } from "../interface/ApiResponse.interface";
import flash, { FlashType } from "@/modules/flash/Flash";
import OssRecommendation from "../interface/highlight/OssRecommendation";

export class OSSController {
  protected static relativeUrl = "oss/";
  private static apiBaseUrl =
    ApiComUtils.getUrl() +
    "/api/highlight/recommendations/" +
    OSSController.relativeUrl;

  /**
   * Get the url to generate the Paris export
   */
  public static async uploadFile(
    file: any,
    application: string
  ): Promise<OssRecommendation[]> {
    const url = this.apiBaseUrl + `file/upload/blockers/${application}`;

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("application", application);
      const res = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        if (Array.isArray(apiResponse.data)) {
          return apiResponse.data as OssRecommendation[];
        }
      } else {
        throw new Error(
          `Failed to send the list of recommendation. Status (${res.status}). Message: ${res.data}`
        );
      }
    } catch (error) {
      flash.commit("add", {
        type: FlashType.ERROR,
        title: "Failed to send the list of recommendation.",
        body: error
      });
      console.error(
        `Failed to reach the API : ${url}. Failed to send the list of recommendation .`,
        error
      );
      throw error;
    }
  }

  /**
   * Apply a list of recommendation on the application
   */
  public static async applyBlockers(
    blockers: OssRecommendation[],
    taggingType: string
  ): Promise<OssRecommendation[]> {
    const url = this.apiBaseUrl + "apply/blockers";

    try {
      const body = {
        blockers: blockers,
        taggingType: taggingType
      };

      const res = await axios.post(url, body);

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        if (Array.isArray(apiResponse.data)) {
          return apiResponse.data as OssRecommendation[];
        }
      } else {
        throw new Error(
          `Failed to apply the list of recommendation. Status (${res.status}). Message: ${res.data}`
        );
      }
    } catch (error) {
      flash.commit("add", {
        type: FlashType.ERROR,
        title: "Failed to apply the list of recommendation.",
        body: error
      });
      console.error(
        `Failed to reach the API : ${url}. Failed to apply the list of recommendation .`,
        error
      );
      throw error;
    }
  }

  /**
   * Apply a list of recommendation on the application
   */
  public static async testBlocker(
    blocker: OssRecommendation
  ): Promise<OssRecommendation[]> {
    const url = this.apiBaseUrl + "test/blockers";

    try {
      const body = {
        blocker: blocker
      };

      const res = await axios.post(url, body);

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        if (Array.isArray(apiResponse.data)) {
          return apiResponse.data as OssRecommendation[];
        }
      } else {
        throw new Error(
          `Failed to test the recommendations. Status (${res.status}). Message: ${res.data}`
        );
      }
    } catch (error) {
      flash.commit("add", {
        type: FlashType.ERROR,
        title: "Failed to test the recommendations.",
        body: error
      });
      console.error(
        `Failed to reach the API : ${url}. Failed to test the recommendations.`,
        error
      );
      throw error;
    }
  }
}