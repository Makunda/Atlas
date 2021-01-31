import axios from "axios";
import { ApiComUtils } from "../ApiComUtils";
import { DetectionResult, Framework } from "../interface/ApiArtemis.interface";
import { ApiResponse } from "../interface/ApiResponse.interface";

export class FrameworkController {
  private static API_BASE_URL = ApiComUtils.getUrl();

  // Find frameworks by name
  public static async findFramework(
    name: string,
    internalType?: string
  ): Promise<DetectionResult[]> {
    let url =
      FrameworkController.API_BASE_URL + "/api/artemis/frameworks/find/";

    try {
      // Build the URl ( optional type internalType)
      const sanitizedName = name.replace(" ", "+");
      url += sanitizedName;

      if (internalType && internalType != "") {
        const sanitizedInternal = internalType.replace(" ", "+");
        url += "?internalType=" + sanitizedInternal;
      }

      const res = await axios.get(url);
      let detectionList: DetectionResult[] = [];

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        if (Array.isArray(apiResponse.data)) {
          detectionList = apiResponse.data;
        }
      } else {
        console.warn(
          `Failed to retrieve frameworks by its name. Status (${res.status})`
        );
      }

      return detectionList;
    } catch (error) {
      console.error(
        `Failed to reach the API : ${url}. Failed to retrieve frameworks by its name.`,
        error
      );
      throw error;
    }
  }

  // Get the number of Frameworks
  public static async getTotalFramework(
    internalType?: string
  ): Promise<number> {
    let url =
      FrameworkController.API_BASE_URL + "/api/artemis/frameworks/total";

    try {
      // Build the URl ( optional type internalType)
      if (internalType && internalType != "") {
        const sanitizedInternal = internalType.replace(" ", "+");
        url += "?internalType=" + sanitizedInternal;
      }

      const res = await axios.get(url);
      let num: number;
      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        num = Number(apiResponse.data);
      } else {
        console.warn(
          `Failed to retrieve number of frameworks by internalType. Status (${res.status})`
        );
      }

      return num;
    } catch (error) {
      console.error(
        `Failed to reach the API : ${url}. Failed to retrieve frameworks by internalType.`,
        error
      );
      throw error;
    }
  }

  // Get a batch of framework ( filter by internal type possible )
  public static async getFrameworkBatch(
    start: number,
    stop: number,
    internalType?: string
  ): Promise<Framework[]> {
    let url =
      FrameworkController.API_BASE_URL + "/api/artemis/frameworks/batch";

    try {
      // Build the URl ( optional type internalType)
      url += "?start=" + start;
      url += "&stop=" + stop;

      if (internalType && internalType != "") {
        const sanitizedInternal = internalType.replace(" ", "+");
        url += "&internalType=" + sanitizedInternal;
      }

      const res = await axios.get(url);
      let detectionList: Framework[] = [];

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        if (Array.isArray(apiResponse.data)) {
          detectionList = apiResponse.data;
        }
      } else {
        console.warn(
          `Failed to retrieve a batch of frameworks by internalType. Status (${res.status})`
        );
      }

      return detectionList;
    } catch (error) {
      console.error(
        `Failed to reach the API : ${url}. Failed to retrieve a batch frameworks by internalType.`,
        error
      );
      throw error;
    }
  }
}
