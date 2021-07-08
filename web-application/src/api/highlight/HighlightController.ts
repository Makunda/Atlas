import axios from "axios";
import { ApiComUtils } from "../ApiComUtils";
import { ApiResponse } from "../interface/ApiResponse.interface";
import CloudBlocker from "../interface/highlight/CloudBlocker";

export class HighlightController {
  private static API_BASE_URL = ApiComUtils.getUrl();

  /**
   * Get the url to generate the Paris export
   */
  public static async uploadFile(file: any, application: string): Promise<CloudBlocker[]> {
    const url =
      HighlightController.API_BASE_URL + "/api/highlight/recommendations/file";

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
          if(Array.isArray(apiResponse.data)) {
              return apiResponse.data as CloudBlocker[];
          }
        } else {
          throw new Error(
            `Failed to send the list of recommendation. Status (${res.status}). Message: ${res.data}`
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
}