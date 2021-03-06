import axios from "axios";
import { ApiComUtils } from "../ApiComUtils";
import { ApiResponse } from "../interface/ApiResponse.interface";
import { IGroup } from "../interface/paris/group.interface";
import IGroupResult from "@/api/interface/paris/groupResult.interface";

export class GroupController {
  private static API_BASE_URL = ApiComUtils.getUrl();

  /**
   * Get the version of the Demeter extension.
   * Throw an error if the extension is not installed
   */
  public static async getAllGroups(): Promise<IGroup[]> {
    const url = GroupController.API_BASE_URL + "/api/paris/groups/all";

    try {
      const res = await axios.get(url);
      let version: string;

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        if (Array.isArray(apiResponse.data)) {
          return apiResponse.data as IGroup[];
        }
      } else {
        console.warn(
          `Failed to retrieve the list of groups. Status (${res.status})`
        );
      }

      return [];
    } catch (error) {
      console.error(
        `Failed to reach the API : ${url}. Failed to retrieve the list of groups.`,
        error
      );
      throw error;
    }
  }

  /**
   * Add a group
   * @param group Group to add
   */
  public static async addGroup(group: IGroup): Promise<IGroup> {
    const url =
      GroupController.API_BASE_URL + "/api/paris/groups/addWithUseCase";

    try {
      group.creationDate = Date.now();
      group.categories = [];
      group.typesAsList = [];
      group.active = false;
      group.selected = false;

      const res = await axios.post(url, group);

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        return apiResponse.data as IGroup;
      } else {
        console.warn(`Failed to add a groups. Status (${res.status})`);
      }

      return null;
    } catch (error) {
      console.error(
        `Failed to reach the API : ${url}. Failed to add a groups.`,
        error
      );
      throw error;
    }
  }

  /**
   * Delete
   * @param useCase Delete a use case
   */
  public static async deleteGroup(group: IGroup): Promise<boolean> {
    console.log("Tags", group);
    const url =
      GroupController.API_BASE_URL + "/api/paris/groups/delete/" + group.id;

    try {
      const res = await axios.delete(url);

      if (res.status == 200) {
        return true;
      } else {
        throw new Error(`Failed to delete the group  with Id:${group.id}`);
      }
    } catch (error) {
      console.error(
        `Failed to reach the API : ${url}. Failed to delete a group with id:${group.id}.`,
        error
      );
      throw error;
    }
  }

  /**
   * Add a use case
   * @param useCase Use Case to add
   * @param idParent Id of the parent use case
   */
  public static async addGroupWithUseCase(
    group: IGroup,
    idUseCase: number
  ): Promise<IGroup> {
    const url =
      GroupController.API_BASE_URL + "/api/paris/groups/addWithUseCase";

    try {
      const params: any = group;
      params.idUseCase = idUseCase;
      const res = await axios.post(url, params);

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        return apiResponse.data as IGroup;
      } else {
        console.warn(`Failed to add a group. Status (${res.status})`);
      }

      return null;
    } catch (error) {
      console.error(
        `Failed to reach the API : ${url}. Failed to add a group.`,
        error
      );
      throw error;
    }
  }

  /**
   * Edit a use case
   * @param useCase Use Case to add
   */
  public static async editUseCase(group: IGroup): Promise<IGroup> {
    const url = GroupController.API_BASE_URL + "/api/paris/groups/update";

    try {
      const res = await axios.put(url, group);

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        return apiResponse.data as IGroup;
      } else {
        console.warn(`Failed to update a group. Status (${res.status})`);
      }

      return null;
    } catch (error) {
      console.error(
        `Failed to reach the API : ${url}. Failed to update a group.`,
        error
      );
      throw error;
    }
  }

  /**
   *
   * @param application Name of the application
   * @param idList ID of the list
   * @returns  the
   */
  public static async executeListGroupAsTag(
    application,
    idList: IGroup[]
  ): Promise<number> {
    const url = GroupController.API_BASE_URL + "/api/paris/groups/execute";

    try {
      const body = {
        application: application,
        idList: idList,
        executionType: "Tag"
      };

      const res = await axios.post(url, body);

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        return Number(apiResponse.data);
      } else {
        throw new Error(
          `Failed to execute the list of group with Ids : ${idList.join(", ")}.`
        );
      }
    } catch (error) {
      console.error(
        `Failed to reach the API : ${url}. Failed to execute the list of group with Ids : ${idList.join(
          ", "
        )}..`,
        error
      );
      throw error;
    }
  }

  public static async forecastAllGroups(application): Promise<IGroupResult[]> {
    const url = GroupController.API_BASE_URL + "/api/paris/groups/forecast";

    try {
      const body = {
        application: application
      };

      const res = await axios.post(url, body);

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        if (Array.isArray(apiResponse.data)) {
          return apiResponse.data as IGroupResult[];
        }
      } else {
        throw new Error(`Failed with status ${status}.`);
      }
    } catch (error) {
      console.error(`Failed to execute the forecast.`, error);
      throw error;
    }
  }
}
