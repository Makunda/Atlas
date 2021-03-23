// http://localhost:3000/api/imaging/transactions/number/unmasked/ACA

import { ApiComUtils } from "@/api/ApiComUtils";
import axios from "axios";
import { ApiResponse } from "@/api/interface/ApiResponse.interface";
import ITransaction from "@/api/interface/imaging/Transaction.interface";

export default class TransactionController {
  private static API_BASE_URL = ApiComUtils.getUrl();

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
   * Retrieve the number of transaction
   * @param application
   */
  public static async getNumberMaskedTransaction(
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
   */
  public static async getBatchMaskedTransaction(
    application: string,
    start: number,
    end: number
  ): Promise<ITransaction[]> {
    const url =
      TransactionController.API_BASE_URL +
      `/api/imaging/transactions/batch/masked/${application}?start=${start}&end=${end}`;

    try {
      const res = await axios.get(url);

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
   */
  public static async getBatchTransaction(
    application: string,
    start: number,
    end: number
  ): Promise<ITransaction[]> {
    const url =
      TransactionController.API_BASE_URL +
      `/api/imaging/transactions/batch/unmasked/${application}?start=${start}&end=${end}`;

    try {
      const res = await axios.get(url);

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
      `/api/imaging/transactions/mask/${application}/${transactionID}`;

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
      `/api/imaging/transactions/unmask/${application}/${transactionID}`;

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
}
