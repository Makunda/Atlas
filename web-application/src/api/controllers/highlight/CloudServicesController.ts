import { ApiComUtils } from "@/api/utils/ApiComUtils";
import CloudBlocker from "@/api/interface/highlight/CloudBlocker";
import ProxyAxios from "@/api/utils/ProxyAxios";
import { ApiResponse, ApiResponseImpl } from "@/api/utils/ApiResponse";
import CloudServiceRecommendation from "@/api/interface/highlight/CloudServiceRecommendation";

export class CloudServicesController {
  private static API_BASE_URL = ApiComUtils.getUrl();

  /**
   * Get the url to generate the Paris export
   */
  public static async uploadFile(
    file: any,
    application: string
  ): Promise<CloudServiceRecommendation[]> {
    const url =
      CloudServicesController.API_BASE_URL +
      `/api/highlight/recommendations/cloudService/file/upload/${application}`;

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("application", application);
      const config = {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      };

      // Post the file
      const response = (await ProxyAxios.post(
        url,
        formData,
        config
      )) as ApiResponse;

      const apiResponse = new ApiResponseImpl<CloudServiceRecommendation[]>(
        response
      );

      if (apiResponse.isSuccess()) {
        return apiResponse.getData();
      } else {
        throw new Error(
          `Failed to send the list of recommendation. Status (${
            apiResponse.status
          }). Error: ${apiResponse.getErrors().join(", ")}`
        );
      }
    } catch (error) {
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
    blockers: CloudServiceRecommendation[],
    type: string
  ): Promise<[CloudServiceRecommendation[], CloudServiceRecommendation[]]> {
    const url =
      CloudServicesController.API_BASE_URL +
      "/api/highlight/recommendations/cloudService/apply";

    try {
      const body = {
        blockers: blockers,
        type: type
      };

      // Post the blockers to apply
      const response = (await ProxyAxios.post(url, body)) as ApiResponse;
      const apiResponse = new ApiResponseImpl(response);

      if (apiResponse.isSuccess()) {
        const data: any = apiResponse.getData();
        return [data.applied, data.notApplied];
      } else {
        throw new Error(
          `Failed to apply the list of recommendation. Status (${
            apiResponse.status
          }). Errors: ${apiResponse.getErrors().join(", ")}`
        );
      }
    } catch (error) {
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
    blocker: CloudBlocker
  ): Promise<CloudBlocker[]> {
    const url =
      CloudServicesController.API_BASE_URL +
      "/api/highlight/recommendations/cloudService/test";

    try {
      const body = {
        blocker: blocker
      };

      const res = await ProxyAxios.post(url, body);

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        if (Array.isArray(apiResponse.data)) {
          return apiResponse.data as CloudBlocker[];
        }
      } else {
        throw new Error(
          `Failed to test the recommendations. Status (${res.status}). Message: ${res.data}`
        );
      }
    } catch (error) {
      console.error(
        `Failed to reach the API : ${url}. Failed to test the recommendations.`,
        error
      );
      throw error;
    }
  }
}
