import axios from "axios";
import { use } from "vue/types/umd";
import { ApiComUtils } from "@/api/utils/ApiComUtils";
import { ApiResponse } from "@/api/interface/ApiResponse.interface";
import { IGroup } from "@/api/interface/paris/group.interface";
import { IUseCase } from "@/api/interface/paris/useCase.interface";
import ProxyAxios from "@/api/utils/ProxyAxios";

export class UseCaseController {
  private static API_BASE_URL = ApiComUtils.getUrl();

  /**
   * Get the version of the Demeter extension.
   * Throw an error if the extension is not installed
   */
  public static async getAllUseCase(): Promise<IUseCase[]> {
    const url = UseCaseController.API_BASE_URL + "/api/paris/useCases/all";

    try {
      const res = await ProxyAxios.get(url);

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        if (Array.isArray(apiResponse.data)) {
          return apiResponse.data as IUseCase[];
        }
      } else {
        console.warn(
          `Failed to retrieve the list of use cases. Status (${res.status})`,
        );
      }

      return [];
    } catch (error) {
      console.error(
        `Failed to reach the API : ${url}. Failed to retrieve the list of use cases.`,
        error,
      );
      throw error;
    }
  }

  /**
   * Get all the root use cases ( not attached to another one )
   */
  public static async getRootUseCase(): Promise<IUseCase[]> {
    const url = UseCaseController.API_BASE_URL + "/api/paris/useCases/roots";

    try {
      const res = await ProxyAxios.get(url);

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        if (Array.isArray(apiResponse.data)) {
          return apiResponse.data as IUseCase[];
        }
      } else {
        console.warn(
          `Failed to retrieve the list of use cases. Status (${res.status})`,
        );
      }

      return [];
    } catch (error) {
      console.error(
        `Failed to reach the API : ${url}. Failed to retrieve the list of use cases.`,
        error,
      );
      throw error;
    }
  }

  /**
   * Get all the attached use cases
   * @param id Id of the use case
   */
  public static async getAttachedUseCase(id: number): Promise<IUseCase[]> {
    const url =
      UseCaseController.API_BASE_URL +
      "/api/paris/useCases/attached/" +
      id +
      "/useCases";

    try {
      const res = await ProxyAxios.get(url);

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        if (Array.isArray(apiResponse.data)) {
          return apiResponse.data as IUseCase[];
        }
      } else {
        console.warn(
          `Failed to retrieve the list of use cases. Status (${res.status})`,
        );
      }

      return [];
    } catch (error) {
      console.error(
        `Failed to reach the API : ${url}. Failed to retrieve the list of use cases.`,
        error,
      );
      throw error;
    }
  }

  public static async getAttachedGroups(id: number): Promise<IGroup[]> {
    const url =
      UseCaseController.API_BASE_URL +
      "/api/paris/useCases/attached/" +
      id +
      "/groups";

    try {
      const res = await ProxyAxios.get(url);

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        if (Array.isArray(apiResponse.data)) {
          return apiResponse.data as IGroup[];
        }
      } else {
        console.warn(
          `Failed to retrieve the list of use cases. Status (${res.status})`,
        );
      }

      return [];
    } catch (error) {
      console.error(
        `Failed to reach the API : ${url}. Failed to retrieve the list of use cases.`,
        error,
      );
      throw error;
    }
  }

  /**
   * Add a use case
   * @param useCase Use Case to add
   */
  public static async addUseCase(useCase: IUseCase): Promise<IUseCase> {
    const url = UseCaseController.API_BASE_URL + "/api/paris/useCases/add";

    try {
      const res = await ProxyAxios.post(url, useCase);

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        return apiResponse.data as IUseCase;
      } else {
        console.warn(`Failed to add a use cases. Status (${res.status})`);
      }

      return null;
    } catch (error) {
      console.error(
        `Failed to reach the API : ${url}. Failed to add a use cases.`,
        error,
      );
      throw error;
    }
  }

  /**
   * Delete
   * @param useCase Delete a use case
   */
  public static async deleteUseCase(useCase: IUseCase): Promise<boolean> {
    const url =
      UseCaseController.API_BASE_URL +
      "/api/paris/useCases/delete/" +
      useCase.id;

    try {
      const res = await ProxyAxios.delete(url);

      if (res.status == 200) {
        return true;
      } else {
        throw new Error(`Failed to delete the Use Case with Id:${useCase.id}`);
      }
    } catch (error) {
      console.error(
        `Failed to reach the API : ${url}. Failed to delete a use cases.`,
        error,
      );
      throw error;
    }
  }

  /**
   * Add a use case
   * @param useCase Use Case to add
   * @param idParent Id of the parent use case
   */
  public static async addUseCaseWithParent(
    useCase: IUseCase,
    idParent: number,
  ): Promise<IUseCase> {
    const url =
      UseCaseController.API_BASE_URL + "/api/paris/useCases/addWithParent";

    try {
      const params: any = useCase;
      params.idParent = idParent;
      const res = await ProxyAxios.post(url, params);

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        return apiResponse.data as IUseCase;
      } else {
        console.warn(`Failed to add a use cases. Status (${res.status})`);
      }

      return null;
    } catch (error) {
      console.error(
        `Failed to reach the API : ${url}. Failed to add a use cases.`,
        error,
      );
      throw error;
    }
  }

  /**
   * Check the validity of a query before the insertion
   * @param request Request to verify
   * @param awaitedResult Value
   * @returns
   */

  public static async checkValidity(
    request: IUseCase,
    awaitedResult: number,
  ): Promise<boolean> {
    const url =
      UseCaseController.API_BASE_URL + "/api/paris/useCases/check/validity";

    try {
      const params: any = {};
      params.request = request;
      params.awaitedResult = awaitedResult;

      const res = await ProxyAxios.post(url, params);

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        return Boolean(apiResponse.data);
      } else {
        console.warn(
          `Failed to verify the validity of the request. Status (${res.status})`,
        );
      }

      return false;
    } catch (error) {
      console.error(
        `Failed to reach the API : ${url}. Failed to verify the validity of the request.`,
        error,
      );
      throw error;
    }
  }

  /**
   * Edit a use case
   * @param useCase Use Case to add
   * @param parentId Id of the parent (-1 for a root component )
   */
  public static async editUseCase(
    useCase: IUseCase,
    parentId: number,
  ): Promise<IUseCase> {
    const url = UseCaseController.API_BASE_URL + "/api/paris/useCases/update";

    try {
      const body = useCase;
      body.parentId = parentId;

      const res = await ProxyAxios.put(url, body);

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        return apiResponse.data as IUseCase;
      } else {
        console.warn(`Failed to update a use cases. Status (${res.status})`);
      }

      return null;
    } catch (error) {
      console.error(
        `Failed to reach the API : ${url}. Failed to update a use cases.`,
        error,
      );
      throw error;
    }
  }
}
