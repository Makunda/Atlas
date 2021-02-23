import axios from "axios";
import { ApiComUtils } from "../ApiComUtils";
import { ApiResponse } from "../interface/ApiResponse.interface";

export class FrameworkAssistants {

    private static API_BASE_URL = ApiComUtils.getUrl();

    
  public static async getPossibleActions(): Promise<string[]> {

    const url =
    FrameworkAssistants.API_BASE_URL +
      "/api/assistants/frameworks/options/actions";

    try {
      const res = await axios.get(url);

      let actions: string[] = [];

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        if (Array.isArray(apiResponse.data)) {
            actions = apiResponse.data;
        }
        
      } else {
        console.warn(
          `Failed to get the actions. Status (${res.status})`
        );
      }
      console.log("Action retrieved", actions)
      return actions;
    } catch (error) {
      console.error(
        `Failed to reach the API : ${url}. Failed to get the list of actions .`,
        error
      );
      throw error;
    }
  }

  public static async getFrameworksCategories(): Promise<string[]> {

    const url =
    FrameworkAssistants.API_BASE_URL +
      "/api/assistants/frameworks/options/categories";

    try {
      const res = await axios.get(url);

      let categories: string[] = [];

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        if (Array.isArray(apiResponse.data)) {
            categories = apiResponse.data;
        }
      } else {
        console.warn(
          `Failed to get the categories. Status (${res.status})`
        );
      }
    
      return categories;
    } catch (error) {
      console.error(
        `Failed to reach the API : ${url}. Failed to get the list of categories .`,
        error
      );
      throw error;
    }
  }
}
