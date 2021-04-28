// http://localhost:3000/api/imaging/transactions/number/unmasked/ACA

import { ApiComUtils } from "@/api/ApiComUtils";
import axios from "axios";
import { ApiResponse } from "@/api/interface/ApiResponse.interface";
import ITransaction from "@/api/interface/imaging/Transaction.interface";
import ITransactionsInsights from "@/api/interface/imaging/TransactionsInsights.interface";

export default class TransactionController {
  private static API_BASE_URL = ApiComUtils.getUrl();

  /**
   * Unmask all the transaction in an application
   * @param application
   */
  public static async unMaskAllTransaction(
    application: string
  ): Promise<number> {
    const url =
      TransactionController.API_BASE_URL +
      `/api/imaging/transactions/unmask/all/${application}`;

    try {
      const res = await axios.get(url);

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        return Number(apiResponse.data);
      } else {
        throw new Error(
          `Failed to unmask all transactions. Status (${res.status})`
        );
      }
    } catch (error) {
      console.error(`Failed to reach the API : ${url}.`, error);
      throw error;
    }
  }

  /**
   * Retrieve the number of transaction
   * @param application
   */
  public static async getNumberTransaction(
    application: string
  ): Promise<number> {
    const url =
      TransactionController.API_BASE_URL +
      `/api/imaging/transactions/number/unmasked/${application}`;

    try {
      const res = await axios.get(url);

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        return Number(apiResponse.data);
      } else {
        throw new Error(
          `Failed to number of transactions. Status (${res.status})`
        );
      }
    } catch (error) {
      console.error(`Failed to reach the API : ${url}.`, error);
      throw error;
    }
  }

  /**
   * Get the insights of the unmasked transaction
   * @param application Name of the transaction
   */
  public static async getInsightsUnmaskedTransaction(
    application: string
  ): Promise<ITransactionsInsights> {
    const url =
      TransactionController.API_BASE_URL +
      `/api/imaging/transactions/insights/unmasked/${application}`;

    try {
      const res = await axios.get(url);

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        return apiResponse.data as ITransactionsInsights;
      } else {
        throw new Error(
          `Failed to get transactions insights. Status (${res.status})`
        );
      }
    } catch (error) {
      console.error(`Failed to get transactions insights : ${url}.`, error);
      throw error;
    }
  }

  /**
   * Retrieve the number of transaction
   * @param application
   */
  public static async getNumberMaskedTransaction(
    application: string
  ): Promise<number> {
    const url =
      TransactionController.API_BASE_URL +
      `/api/imaging/transactions/number/masked/${application}`;

    try {
      const res = await axios.get(url);

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        return Number(apiResponse.data);
      } else {
        throw new Error(
          `Failed to number of masked transactions. Status (${res.status})`
        );
      }
    } catch (error) {
      console.error(`Failed to reach the API : ${url}.`, error);
      throw error;
    }
  }

  /**
   * Get a batch of transaction
   * @param application Name of the application
   * @param start Start index
   * @param end End index
   * @param sort Sort parameter
   * @param sortDesc Order of the sort
   */
  public static async getBatchMaskedTransaction(
    application: string,
    start: number,
    end: number,
    sort: string,
    sortDesc: string
  ): Promise<ITransaction[]> {
    const url =
      TransactionController.API_BASE_URL +
      `/api/imaging/transactions/batch/masked/${application}`;

    try {
      const body = {
        start: start,
        end: end,
        sort: sort,
        sortDesc: sortDesc
      };

      const res = await axios.post(url, body);

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        if (Array.isArray(apiResponse.data)) {
          return apiResponse.data as ITransaction[];
        }
      } else {
        throw new Error(
          `Failed to a batch of masked transactions. Status (${res.status})`
        );
      }
    } catch (error) {
      console.error(`Failed to reach the API : ${url}.`, error);
      throw error;
    }
  }

  /**
   * Get a batch of transaction
   * @param application Name of the application
   * @param start Start index
   * @param end End index
   * @param sort Sort parameter
   * @param sortDesc Order of the sort
   * @param filter Optional filter on transactions
   */
  public static async getBatchTransaction(
    application: string,
    start: number,
    end: number,
    sort: string,
    sortDesc: string,
    filter?: Record<string, number>
  ): Promise<ITransaction[]> {
    const url =
      TransactionController.API_BASE_URL +
      `/api/imaging/transactions/batch/unmasked/${application}`;

    try {
      const body = {
        start: start,
        end: end,
        sort: sort,
        sortDesc: sortDesc,
        filter: filter
      };

      const res = await axios.post(url, body);

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        if (Array.isArray(apiResponse.data)) {
          return apiResponse.data as ITransaction[];
        }
      } else {
        throw new Error(
          `Failed to a batch of masked transactions. Status (${res.status})`
        );
      }
    } catch (error) {
      console.error(`Failed to reach the API : ${url}.`, error);
      throw error;
    }
  }

  /**
   * Mask a transaction
   * @param application Name of the application
   * @param transactionID Id of the transaction
   */
  public static async maskTransaction(
    application: string,
    transactionID: number
  ): Promise<ITransaction> {
    const url =
      TransactionController.API_BASE_URL +
      `/api/imaging/transactions/mask/single/${application}/${transactionID}`;

    try {
      const res = await axios.get(url);

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        return apiResponse.data as ITransaction;
      } else {
        throw new Error(
          `Failed to get a batch of masked transactions. Status (${res.status})`
        );
      }
    } catch (error) {
      console.error(`Failed to reach the API : ${url}.`, error);
      throw error;
    }
  }

  public static async maskTransactionWithFilter(
    application: string,
    filter: Record<string, unknown>
  ): Promise<ITransaction> {
    const url =
      TransactionController.API_BASE_URL +
      `/api/imaging/transactions/mask/filter/${application}`;

    try {
      const res = await axios.post(url, filter);

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        return apiResponse.data as ITransaction;
      } else {
        throw new Error(
          `Failed to mask transactions with filter. Status (${res.status})`
        );
      }
    } catch (error) {
      console.error(`Failed to reach the API : ${url}.`, error);
      throw error;
    }
  }

  /**
   * Unmask a transaction
   * @param application Name of the application
   * @param transactionID Id of the transaction
   */
  public static async unmaskTransaction(
    application: string,
    transactionID: number
  ): Promise<ITransaction> {
    const url =
      TransactionController.API_BASE_URL +
      `/api/imaging/transactions/unmask/single/${application}/${transactionID}`;

    try {
      const res = await axios.get(url);

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        return apiResponse.data as ITransaction;
      } else {
        throw new Error(
          `Failed to a batch of masked transactions. Status (${res.status})`
        );
      }
    } catch (error) {
      console.error(`Failed to reach the API : ${url}.`, error);
      throw error;
    }
  }

  public static async unmaskAllTransaction(
    application: string
  ): Promise<boolean> {
    const url =
      TransactionController.API_BASE_URL +
      `/api/imaging/transactions/unmask/all/${application}`;

    try {
      const res = await axios.get(url);

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        return Boolean(apiResponse.data);
      } else {
        throw new Error(
          `Failed to un-mask all transactions. Status (${res.status})`
        );
      }
    } catch (error) {
      console.error(`Failed to reach the API : ${url}.`, error);
      throw error;
    }
  }

  /**
   * Mask transaction by number of object inside it
   * @param application Application concerned
   * @param limit Minimum number of object
   */
  public static async maskByCount(
    application: string,
    limit: number
  ): Promise<number> {
    const url =
      TransactionController.API_BASE_URL +
      `/api/imaging/transactions/mask/by/${application}?limit=${limit}`;

    try {
      const res = await axios.get(url);

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        return Number(apiResponse.data);
      } else {
        throw new Error(
          `Failed to un-mask all transactions. Status (${res.status})`
        );
      }
    } catch (error) {
      console.error(`Failed to reach the API : ${url}.`, error);
      throw error;
    }
  }
}
