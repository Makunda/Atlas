import axios from "axios";
import { ApiComUtils } from "../ApiComUtils";
import { ApiResponse } from "../interface/ApiResponse.interface";
import ILevel from "@/api/interface/imaging/Level.interface";

export default class LevelController {
  private static API_BASE_URL = ApiComUtils.getUrl();

    /**
     * Retrieve the list of root levels in the applications
     * @param application Name of the application
     */
  public static async getRootLevels(application: string): Promise<ILevel[]> {
    const url =
      LevelController.API_BASE_URL + `/api/imaging/levels/roots/${application}`;

    try {
      const res = await axios.get(url);

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        if(Array.isArray(apiResponse.data)) {
            return apiResponse.data as ILevel[];
        }
      } else {
        console.warn(`Failed to retrieve root levels. Status (${res.status})`);
      }

      return [];
    } catch (error) {
      console.error(
        `Failed to reach the API : ${url}. Failed to retrieve root levels.`,
        error
      );
      throw error;
    }
  }

  /**
   * Fetch children of a level
   * @param application Name of the application concerned by the search
   * @param level Parent level
   */
  public static async fetchChildren(application: string, level: ILevel): Promise<ILevel[]> {
    const url =
        LevelController.API_BASE_URL + `/api/imaging/levels/attached/${application}/${level._id}`;

    try {
      const res = await axios.get(url);

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        if(Array.isArray(apiResponse.data)) {
          return apiResponse.data as ILevel[];
        }
      } else {
        console.warn(`Failed to retrieve attached levels. Status (${res.status})`);
      }

      return [];
    } catch (error) {
      console.error(
          `Failed to reach the API : ${url}. Failed to retrieve attached levels.`,
          error
      );
      throw error;
    }
  }

  /**
   * Fetch the parent level of the application
   * @param application Name of the application
   * @param level
   */
  public static async fetchParent(application: string, level: ILevel): Promise<ILevel> {
    const url =
        LevelController.API_BASE_URL + `/api/imaging/levels/parent/${application}/${level._id}`;

    try {
      const res = await axios.get(url);

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        return apiResponse.data as ILevel;
      } else {
        throw new Error("Failed to fetch the parent levels");
      }
    } catch (error) {
      console.error(
          `Failed to reach the API : ${url}. Failed to retrieve attached levels.`,
          error
      );
      throw error;
    }
  }

  public static async createLevel(application: string, parentLevelID: number, level: ILevel): Promise<ILevel> {
    const url =
        LevelController.API_BASE_URL + `/api/imaging/levels/create/${application}`;

    try {
      const body: any = level;
      body.parentId = parentLevelID;

      const res = await axios.post(url, body);

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        return apiResponse.data as ILevel;
      } else {
        throw new Error("Failed to create new levels");
      }
    } catch (error) {
      console.error(
          `Failed to reach the API : ${url}. Failed to create new levels.`,
          error
      );
      throw error;
    }
  }

  public static async updateLevel(application: string, level: ILevel): Promise<ILevel> {
    const url =
        LevelController.API_BASE_URL + `/api/imaging/levels/update/${application}/${level._id}`;

    try {
      const body: any = level;

      const res = await axios.put(url, body);

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        return apiResponse.data as ILevel;
      } else {
        throw new Error("Failed to create new levels");
      }
    } catch (error) {
      console.error(
          `Failed to reach the API : ${url}. Failed to create new levels.`,
          error
      );
      throw error;
    }
  }
}
