import { ApiComUtils } from "@/api/utils/ApiComUtils";
import { Category } from "@/api/interface/ApiCategory.interface";
import { ApiResponse } from "@/api/interface/ApiResponse.interface";
import ProxyAxios from "@/api/utils/ProxyAxios";

export class CategoryController {
  private static API_BASE_URL = ApiComUtils.getUrl();

  public static async addNode(item: Category): Promise<Category> {
    const url = CategoryController.API_BASE_URL + "/api/artemis/category";

    try {
      const res = await ProxyAxios.post(url, item);

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        return apiResponse.data as Category;
      } else {
        throw new Error(
          `Failed to add a Category Node. Status (${res.status}) : Error : ${res.data}`
        );
      }
    } catch (error) {
      console.error(
        `Failed to reach the API : ${url}. Failed to add a Category Node..`,
        error
      );
      throw error;
    }
  }

  /**
   *
   * @param item Node to update
   */
  public static async updateNode(item: Category): Promise<Category> {
    const url = CategoryController.API_BASE_URL + "/api/artemis/category";

    try {
      const res = await ProxyAxios.put(url, item);

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        return apiResponse.data as Category;
      } else {
        throw new Error(
          `Failed to update a Category Node. Status (${res.status}) : Error : ${res.data}`
        );
      }
    } catch (error) {
      console.error(
        `Failed to reach the API : ${url}. Failed to update a Category Node..`,
        error
      );
      throw error;
    }
  }

  /**
   * Delete a Category
   * @param item Item to delete
   */
  public static async deleteNode(item: Category): Promise<boolean> {
    const url =
      CategoryController.API_BASE_URL + `/api/artemis/category/${item.id}`;

    try {
      const res = await ProxyAxios.delete(url);

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        return Boolean(apiResponse.data);
      } else {
        throw new Error(
          `Failed to delete a Category Node. Status (${res.status}) : Error : ${res.data}`
        );
      }
    } catch (error) {
      console.error(
        `Failed to reach the API : ${url}. Failed to delete a Category Node..`,
        error
      );
      throw error;
    }
  }

  /**
   * Get the category node
   */
  public static async getAllNode(): Promise<Category[]> {
    const url = CategoryController.API_BASE_URL + "/api/artemis/category/all";

    try {
      const res = await ProxyAxios.get(url);

      let results: Category[] = [];
      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        if (Array.isArray(apiResponse.data)) {
          results = apiResponse.data;
        }
        return results;
      } else {
        throw new Error(
          `Failed to retrieve the list of Category Nodes. Status (${res.status}) : Error : ${res.data}`
        );
      }
    } catch (error) {
      console.error(
        `Failed to reach the API : ${url}. Failed to retrieve the list of Category Nodes..`,
        error
      );
      throw error;
    }
  }
}
