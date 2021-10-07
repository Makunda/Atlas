import { ApiComUtils } from "@/api/utils/ApiComUtils";
import axios from "axios";
import { ApiResponse } from "@/api/interface/ApiResponse.interface";
import { DataCallGraph } from "@/api/interface/imaging/DataCallGraph";
import DataCallGraphInsights from "../../interface/imaging/DataCallGraphInsights";
import ProxyAxios from "@/api/utils/ProxyAxios";

export default class DataCallGraphController {
  private static API_BASE_URL = ApiComUtils.getUrl();

  /**
   * Unmask all the dataCallGraph in an application
   * @param application
   */
  public static async unMaskAllDataCallGraph(
    application: string,
  ): Promise<number> {
    const url =
      DataCallGraphController.API_BASE_URL +
      `/api/imaging/dataCallGraph/unmask/all`;

    try {
      const res = await ProxyAxios.post(url, { application: application });

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        return Number(apiResponse.data);
      } else {
        throw new Error(
          `Failed to unmask all dataCallGraph. Status (${res.status}). Error: ${res.data.message}`,
        );
      }
    } catch (error) {
      console.error(`Failed to reach the API : ${url}.`, error);
      throw error;
    }
  }

  /**
   * Retrieve the number of dataCallGraph
   * @param application
   */
  public static async getNumberDataCallGraph(
    application: string,
  ): Promise<number> {
    const url =
      DataCallGraphController.API_BASE_URL +
      `/api/imaging/dataCallGraph/number/unmasked/${application}`;

    try {
      const res = await ProxyAxios.get(url);

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        return Number(apiResponse.data);
      } else {
        throw new Error(
          `Failed to number of dataCallGraph. Status (${res.status})`,
        );
      }
    } catch (error) {
      console.error(`Failed to reach the API : ${url}.`, error);
      throw error;
    }
  }

  /**
   * Get the insights of the unmasked dataCallGraph
   * @param application Name of the dataCallGraph
   */
  public static async getInsightsUnmaskedDataCallGraph(
    application: string,
  ): Promise<DataCallGraphInsights> {
    const url =
      DataCallGraphController.API_BASE_URL +
      `/api/imaging/dataCallGraph/insights/unmasked/${application}`;

    try {
      const res = await ProxyAxios.get(url);

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        return apiResponse.data as DataCallGraphInsights;
      } else {
        throw new Error(
          `Failed to get dataCallGraph insights. Status (${res.status})`,
        );
      }
    } catch (error) {
      console.error(`Failed to get dataCallGraph insights : ${url}.`, error);
      throw error;
    }
  }

  /**
   * Retrieve the number of dataCallGraph
   * @param application
   */
  public static async getNumberMaskedDataCallGraph(
    application: string,
  ): Promise<number> {
    const url =
      DataCallGraphController.API_BASE_URL +
      `/api/imaging/dataCallGraph/number/masked/${application}`;

    try {
      const res = await ProxyAxios.get(url);

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        return Number(apiResponse.data);
      } else {
        throw new Error(
          `Failed to number of masked dataCallGraph. Status (${res.status})`,
        );
      }
    } catch (error) {
      console.error(`Failed to reach the API : ${url}.`, error);
      throw error;
    }
  }

  /**
   * Get a batch of dataCallGraph
   * @param application Name of the application
   * @param start Start index
   * @param end End index
   * @param sort Sort parameter
   * @param sortDesc Order of the sort
   */
  public static async getBatchMaskedDataCallGraph(
    application: string,
    start: number,
    end: number,
    sort: string,
    sortDesc: string,
  ): Promise<DataCallGraph[]> {
    const url =
      DataCallGraphController.API_BASE_URL +
      `/api/imaging/dataCallGraph/batch/masked/${application}`;

    try {
      const body = {
        start: start,
        end: end,
        sort: sort,
        sortDesc: sortDesc,
      };

      const res = await ProxyAxios.post(url, body);

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        if (Array.isArray(apiResponse.data)) {
          return apiResponse.data as DataCallGraph[];
        }
      } else {
        throw new Error(
          `Failed to a batch of masked dataCallGraph. Status (${res.status}). Error: ${res.data.message}.`,
        );
      }
    } catch (error) {
      console.error(`Failed to reach the API : ${url}.`, error);
      throw error;
    }
  }

  /**
   * Get a batch of dataCallGraph
   * @param application Name of the application
   * @param start Start index
   * @param end End index
   * @param sort Sort parameter
   * @param sortDesc Order of the sort
   * @param filter Optional filter on dataCallGraph
   */
  public static async getBatchDataCallGraph(
    application: string,
    start: number,
    end: number,
    sort: string,
    sortDesc: string,
    filter?: Record<string, number>,
  ): Promise<DataCallGraph[]> {
    const url =
      DataCallGraphController.API_BASE_URL +
      `/api/imaging/dataCallGraph/batch/unmasked/${application}`;

    try {
      const body = {
        start: start,
        end: end,
        sort: sort,
        sortDesc: sortDesc,
        filter: filter,
      };

      const res = await ProxyAxios.post(url, body);

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        if (Array.isArray(apiResponse.data)) {
          return apiResponse.data as DataCallGraph[];
        }
      } else {
        throw new Error(
          `Failed to a batch of dataCallGraph. Status (${res.status}). Error: ${res.data.message}.`,
        );
      }
    } catch (error) {
      console.error(`Failed to reach the API : ${url}.`, error);
      throw error;
    }
  }

  /**
   * Mask a dataCallGraph
   * @param application Name of the application
   * @param dataCallGraphID Id of the dataCallGraph
   */
  public static async maskDataCallGraph(
    application: string,
    dataCallGraphID: number,
  ): Promise<DataCallGraph> {
    const url =
      DataCallGraphController.API_BASE_URL +
      `/api/imaging/dataCallGraph/mask/single`;

    try {
      const res = await ProxyAxios.post(url, {
        application: application,
        dataCallGraphID: dataCallGraphID,
      });

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        return apiResponse.data as DataCallGraph;
      } else {
        throw new Error(
          `Failed to get a batch of masked dataCallGraph. Status (${res.status}). Error: ${res.data.message}`,
        );
      }
    } catch (error) {
      console.error(`Failed to reach the API : ${url}.`, error);
      throw error;
    }
  }

  /**
   * Pin a dataCallGraph with a specific prefix
   * @param application Name of the application
   * @param dataCallGraphID Id of the dataCallGraph
   * @param prefix Prefix to apply
   */
  public static async pinDataCallGraph(
    application: string,
    dataCallGraphID: number,
    prefix: string,
  ): Promise<DataCallGraph> {
    const url =
      DataCallGraphController.API_BASE_URL +
      `/api/imaging/dataCallGraph/pin/single`;

    try {
      const body: any = {
        application: application,
        dataCallGraphID: dataCallGraphID,
        prefix: prefix,
      };
      const res = await ProxyAxios.post(url, body);

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        return apiResponse.data as DataCallGraph;
      } else {
        throw new Error(
          `Failed to pin a dataCallGraph. Status (${res.status}). Error: ${res.data.message}`,
        );
      }
    } catch (error) {
      console.error(`Failed to reach the API : ${url}.`, error);
      throw error;
    }
  }

  /**
   * Unpin a dataCallGraph with a specific prefix
   * @param application Name of the application
   * @param dataCallGraphID Id of the dataCallGraph
   * @param prefix Prefix to apply
   */
  public static async unpinDataCallGraph(
    application: string,
    dataCallGraphID: number,
    prefix: string,
  ): Promise<DataCallGraph> {
    const url =
      DataCallGraphController.API_BASE_URL +
      `/api/imaging/dataCallGraph/unpin/single`;

    try {
      const body: any = {
        application: application,
        dataCallGraphID: dataCallGraphID,
        prefix: prefix,
      };
      const res = await ProxyAxios.post(url, body);

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        return apiResponse.data as DataCallGraph;
      } else {
        throw new Error(
          `Failed to unpin a dataCallGraph. Status (${res.status}). Error: ${res.data.message}.`,
        );
      }
    } catch (error) {
      console.error(`Failed to reach the API : ${url}.`, error);
      throw error;
    }
  }

  /**
   * Rename a dataCallGraph by its ID
   * @param application Name of the application
   * @param dataCallGraphID Id of the dataCallGraph
   * @param name New Name to apply
   */
  public static async renameDataCallGraph(
    application: string,
    dataCallGraphID: number,
    name: string,
  ): Promise<DataCallGraph> {
    const url =
      DataCallGraphController.API_BASE_URL +
      `/api/imaging/dataCallGraph/rename/single`;

    try {
      const body: any = {
        application: application,
        dataCallGraphID: dataCallGraphID,
        dataCallGraphName: name,
      };
      const res = await ProxyAxios.post(url, body);

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        return apiResponse.data as DataCallGraph;
      } else {
        throw new Error(
          `Failed to rename a dataCallGraph. Status (${res.status}). Error: ${res.data.message}`,
        );
      }
    } catch (error) {
      console.error(`Failed to reach the API : ${url}.`, error);
      throw error;
    }
  }

  /**
   * Mask a batch  of dataCallGraph not compliant with the filter
   * @param application Name of the application
   * @param filter Filter to be applied
   */
  public static async maskDataCallGraphWithFilter(
    application: string,
    filter: Record<string, unknown>,
  ): Promise<DataCallGraph> {
    const url =
      DataCallGraphController.API_BASE_URL +
      `/api/imaging/dataCallGraph/mask/filter`;

    try {
      const res = await ProxyAxios.post(url, {
        application: application,
        filter: filter,
      });

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        return apiResponse.data as DataCallGraph;
      } else {
        throw new Error(
          `Failed to mask dataCallGraph with filter. Status (${res.status}). Error: ${res.data.message}`,
        );
      }
    } catch (error) {
      console.error(`Failed to reach the API : ${url}.`, error);
      throw error;
    }
  }

  /**
   * Unmask a dataCallGraph
   * @param application Name of the application
   * @param dataCallGraphID Id of the dataCallGraph
   */
  public static async unmaskDataCallGraph(
    application: string,
    dataCallGraphID: number,
  ): Promise<DataCallGraph> {
    const url =
      DataCallGraphController.API_BASE_URL +
      `/api/imaging/dataCallGraph/unmask/single`;

    try {
      const res = await ProxyAxios.post(url, {
        application: application,
        dataCallGraphID: dataCallGraphID,
      });

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        return apiResponse.data as DataCallGraph;
      } else {
        throw new Error(
          `Failed to a batch of masked dataCallGraph. Status (${res.status}). Error: ${res.data.message}.`,
        );
      }
    } catch (error) {
      console.error(`Failed to reach the API : ${url}.`, error);
      throw error;
    }
  }

  /**
   * Unmask all the dataCallGraph in an application
   * @param application Name of the application
   */
  public static async unmaskAllDataCallGraph(
    application: string,
  ): Promise<boolean> {
    const url =
      DataCallGraphController.API_BASE_URL +
      `/api/imaging/dataCallGraph/unmask/all`;

    try {
      const res = await ProxyAxios.post(url, { application: application });

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        return Boolean(apiResponse.data);
      } else {
        throw new Error(
          `Failed to un-mask all dataCallGraph. Status (${res.status})`,
        );
      }
    } catch (error) {
      console.error(`Failed to reach the API : ${url}.`, error);
      throw error;
    }
  }

  /**
   * Mask dataCallGraph by number of object inside it
   * @param application Application concerned
   * @param limit Minimum number of object
   */
  public static async maskByCount(
    application: string,
    limit: number,
  ): Promise<number> {
    const url =
      DataCallGraphController.API_BASE_URL +
      `/api/imaging/dataCallGraph/mask/byCount`;

    try {
      const body = {
        application: application,
        limit: limit,
      };
      const res = await ProxyAxios.post(url, body);

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        return Number(apiResponse.data);
      } else {
        throw new Error(
          `Failed to mask dataCallGraph by Number of objects. Status (${res.status})`,
        );
      }
    } catch (error) {
      console.error(`Failed to reach the API : ${url}.`, error);
      throw error;
    }
  }

  /**
   * Mask dataCallGraph by number of technology inside it
   * @param application Application concerned
   * @param limit Minimum number of technology
   */
  public static async maskByTechnology(
    application: string,
    limit: number,
  ): Promise<number> {
    const url =
      DataCallGraphController.API_BASE_URL +
      `/api/imaging/dataCallGraph/mask/byTechnologies`;

    try {
      const body = {
        application: application,
        limit: limit,
      };
      const res = await ProxyAxios.post(url, body);

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        return Number(apiResponse.data);
      } else {
        throw new Error(
          `Failed to mask dataCallGraph by Number of Technology. Status (${res.status}). Error: ${res.data.message}.`,
        );
      }
    } catch (error) {
      console.error(`Failed to reach the API : ${url}.`, error);
      throw error;
    }
  }

  /**
   * Mask dataCallGraph by list of terms in the name
   * @param application Application concerned
   * @param terms
   */
  public static async maskByTerms(
    application: string,
    terms: string[],
  ): Promise<number> {
    const url =
      DataCallGraphController.API_BASE_URL +
      `/api/imaging/dataCallGraph/mask/byTerms`;

    try {
      const body = {
        application: application,
        terms: terms,
      };
      const res = await ProxyAxios.post(url, body);

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        return Number(apiResponse.data);
      } else {
        throw new Error(
          `Failed to mask dataCallGraph by terms. Status (${res.status})`,
        );
      }
    } catch (error) {
      console.error(`Failed to reach the API : ${url}.`, error);
      throw error;
    }
  }
}
