import { ApiComUtils } from '@/api/utils/ApiComUtils';
import { ApiResponse } from '@/api/interface/ApiResponse.interface';
import Transaction from '@/api/interface/imaging/Transaction.interface';
import TransactionsInsights from '@/api/interface/imaging/TransactionsInsights.interface';
import Logger from '@/utils/Logger';
import TransactionStatistics from '@/api/interface/imaging/TransactionStatistics';
import ProxyAxios from '@/api/utils/ProxyAxios';
import { NewAxiosProxy } from '@/utils/axios/ProxyAxios';

export default class TransactionController {
  private static API_BASE_URL = ApiComUtils.getUrl();

  /**
   * Unmask all the transaction in an application
   * @param application
   */
  public static async unMaskAllTransaction(
    application: string,
  ): Promise<number> {
    const url = `${TransactionController.API_BASE_URL
    }/api/imaging/transactions/unmask/all`;

    try {
      const res = await ProxyAxios.post(url, { application });

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        return Number(apiResponse.data);
      }
      throw new Error(
        `Failed to unmask all transactions. Status (${res.status}). Error: ${res.data.message}`,
      );
    } catch (error) {
      Logger.error(`Failed to reach the API : ${url}.`, error);
      throw error;
    }
  }

  /**
   * Retrieve the number of transaction
   * @param application
   */
  public static async getNumberTransaction(
    application: string,
  ): Promise<number> {
    const url = `${TransactionController.API_BASE_URL
    }/api/imaging/transactions/number/unmasked/${application}`;

    try {
      const res = await ProxyAxios.get(url);

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        return Number(apiResponse.data);
      }
      throw new Error(
        `Failed to number of transactions. Status (${res.status})`,
      );
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
    application: string,
  ): Promise<TransactionsInsights> {
    const url = `${TransactionController.API_BASE_URL
    }/api/imaging/transactions/insights/unmasked/${application}`;

    try {
      const res = await ProxyAxios.get(url);

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        return apiResponse.data as TransactionsInsights;
      }
      throw new Error(
        `Failed to get transactions insights. Status (${res.status})`,
      );
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
    application: string,
  ): Promise<number> {
    const url = `${TransactionController.API_BASE_URL
    }/api/imaging/transactions/number/masked/${application}`;

    try {
      const res = await ProxyAxios.get(url);

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        return Number(apiResponse.data);
      }
      throw new Error(
        `Failed to number of masked transactions. Status (${res.status})`,
      );
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
    sortDesc: string,
  ): Promise<Transaction[]> {
    const url = `${TransactionController.API_BASE_URL
    }/api/imaging/transactions/batch/masked/${application}`;

    try {
      const body = {
        start,
        end,
        sort,
        sortDesc,
      };

      const res = await ProxyAxios.post(url, body);

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        if (Array.isArray(apiResponse.data)) {
          return apiResponse.data as Transaction[];
        }
      } else {
        throw new Error(
          `Failed to a batch of masked transactions. Status (${res.status}). Error: ${res.data.message}.`,
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
    filter?: Record<string, number>,
  ): Promise<Transaction[]> {
    const url = `${TransactionController.API_BASE_URL
    }/api/imaging/transactions/batch/unmasked/${application}`;

    try {
      const body = {
        start,
        end,
        sort,
        sortDesc,
        filter,
      };

      const res = await ProxyAxios.post(url, body);

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        if (Array.isArray(apiResponse.data)) {
          return apiResponse.data as Transaction[];
        }
      } else {
        throw new Error(
          `Failed to a batch of transactions. Status (${res.status}). Error: ${res.data.message}.`,
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
    transactionID: number,
  ): Promise<Transaction> {
    const url = `${TransactionController.API_BASE_URL
    }/api/imaging/transactions/mask/single`;

    try {
      const res = await ProxyAxios.post(url, {
        application,
        transactionID,
      });

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        return apiResponse.data as Transaction;
      }
      throw new Error(
        `Failed to get a batch of masked transactions. Status (${res.status}). Error: ${res.data.message}`,
      );
    } catch (error) {
      console.error(`Failed to reach the API : ${url}.`, error);
      throw error;
    }
  }

  /**
   * Pin a transaction with a specific prefix
   * @param application Name of the application
   * @param transactionID Id of the transaction
   * @param prefix Prefix to apply
   */
  public static async pinTransaction(
    application: string,
    transactionID: number,
    prefix: string,
  ): Promise<Transaction> {
    const url = `${TransactionController.API_BASE_URL
    }/api/imaging/transactions/pin/single`;

    try {
      const body: any = {
        application,
        transactionID,
        prefix,
      };
      const res = await ProxyAxios.post(url, body);

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        return apiResponse.data as Transaction;
      }
      throw new Error(
        `Failed to pin a transaction. Status (${res.status}). Error: ${res.data.message}`,
      );
    } catch (error) {
      console.error(`Failed to reach the API : ${url}.`, error);
      throw error;
    }
  }

  /**
   * Unpin a transaction with a specific prefix
   * @param application Name of the application
   * @param transactionID Id of the transaction
   * @param prefix Prefix to apply
   */
  public static async unpinTransaction(
    application: string,
    transactionID: number,
    prefix: string,
  ): Promise<Transaction> {
    const url = `${TransactionController.API_BASE_URL
    }/api/imaging/transactions/unpin/single`;

    try {
      const body: any = {
        application,
        transactionID,
        prefix,
      };
      const res = await ProxyAxios.post(url, body);

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        return apiResponse.data as Transaction;
      }
      throw new Error(
        `Failed to unpin a transaction. Status (${res.status}). Error: ${res.data.message}.`,
      );
    } catch (error) {
      console.error(`Failed to reach the API : ${url}.`, error);
      throw error;
    }
  }

  /**
   * Rename a transaction by its ID
   * @param application Name of the application
   * @param transactionID Id of the transaction
   * @param name New Name to apply
   */
  public static async renameTransaction(
    application: string,
    transactionID: number,
    name: string,
  ): Promise<Transaction> {
    const url = `${TransactionController.API_BASE_URL
    }/api/imaging/transactions/rename/single`;

    try {
      const body: any = {
        application,
        transactionID,
        transactionName: name,
      };
      const res = await ProxyAxios.post(url, body);

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        return apiResponse.data as Transaction;
      }
      throw new Error(
        `Failed to rename a transaction. Status (${res.status}). Error: ${res.data.message}`,
      );
    } catch (error) {
      console.error(`Failed to reach the API : ${url}.`, error);
      throw error;
    }
  }

  /**
   * Mask a batch  of transaction not compliant with the filter
   * @param application Name of the application
   * @param filter Filter to be applied
   */
  public static async maskTransactionWithFilter(
    application: string,
    filter: Record<string, unknown>,
  ): Promise<Transaction> {
    const url = `${TransactionController.API_BASE_URL
    }/api/imaging/transactions/mask/filter`;

    try {
      const res = await ProxyAxios.post(url, {
        application,
        filter,
      });

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        return apiResponse.data as Transaction;
      }
      throw new Error(
        `Failed to mask transactions with filter. Status (${res.status}). Error: ${res.data.message}`,
      );
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
    transactionID: number,
  ): Promise<Transaction> {
    const url = `${TransactionController.API_BASE_URL
    }/api/imaging/transactions/unmask/single`;

    try {
      const res = await ProxyAxios.post(url, {
        application,
        transactionID,
      });

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        return apiResponse.data as Transaction;
      }
      throw new Error(
        `Failed to a batch of masked transactions. Status (${res.status}). Error: ${res.data.message}.`,
      );
    } catch (error) {
      console.error(`Failed to reach the API : ${url}.`, error);
      throw error;
    }
  }

  /**
   * Unmask all the transaction in an application
   * @param application Name of the application
   */
  public static async unmaskAllTransaction(
    application: string,
  ): Promise<boolean> {
    const url = `${TransactionController.API_BASE_URL
    }/api/imaging/transactions/unmask/all`;

    try {
      const res = await ProxyAxios.post(url, { application });

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        return Boolean(apiResponse.data);
      }
      throw new Error(
        `Failed to un-mask all transactions. Status (${res.status})`,
      );
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
    limit: number,
  ): Promise<number> {
    const url = `${TransactionController.API_BASE_URL
    }/api/imaging/transactions/mask/byCount`;

    try {
      const body = {
        application,
        limit,
      };
      const res = await ProxyAxios.post(url, body);

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        return Number(apiResponse.data);
      }
      throw new Error(
        `Failed to mask transactions by Number of objects. Status (${res.status})`,
      );
    } catch (error) {
      console.error(`Failed to reach the API : ${url}.`, error);
      throw error;
    }
  }

  /**
   * Mask transaction by number of technology inside it
   * @param application Application concerned
   * @param limit Minimum number of technology
   */
  public static async maskByTechnology(
    application: string,
    limit: number,
  ): Promise<number> {
    const url = `${TransactionController.API_BASE_URL
    }/api/imaging/transactions/mask/byTechnologies`;

    try {
      const body = {
        application,
        limit,
      };
      const res = await ProxyAxios.post(url, body);

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        return Number(apiResponse.data);
      }
      throw new Error(
        `Failed to mask transactions by Number of Technology. Status (${res.status}). Error: ${res.data.message}.`,
      );
    } catch (error) {
      console.error(`Failed to reach the API : ${url}.`, error);
      throw error;
    }
  }

  /**
   * Mask transaction by list of terms in the name
   * @param application Application concerned
   * @param terms
   */
  public static async maskByTerms(
    application: string,
    terms: string[],
  ): Promise<number> {
    const url = `${TransactionController.API_BASE_URL
    }/api/imaging/transactions/mask/byTerms`;

    try {
      const body = {
        application,
        terms,
      };
      const res = await ProxyAxios.post(url, body);

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        return Number(apiResponse.data);
      }
      throw new Error(
        `Failed to mask transactions by terms. Status (${res.status})`,
      );
    } catch (error) {
      Logger.error(`Failed to reach the API : ${url}.`, error);
      throw error;
    }
  }

  /**
   * Get statistics for an application
   * @param transactionId Id of the transaction
   * @returns The statistics related to the transaction
   */
  public static async getStatistics(
    transactionId: number,
  ): Promise<TransactionStatistics> {
    const route = 'api/imaging/transactions/statistics/single';
    try {
      const response = await NewAxiosProxy.post<TransactionStatistics>(route, {
        id: transactionId,
      });
      if (response.isError()) throw response.getErrorsAsString();
      return response.getData();
    } catch (error) {
      Logger.error(
        `Failed to get the statistics for transaction with id [${transactionId}].`,
        error,
      );
      throw error;
    }
  }

  /**
   * Display a hidden technology
   * @param transactionId Id of the transaction
   * @param objectType Object or Subobject
   * @param technology Technology to hide
   */
  public static async showTechnology(
    transactionId: number,
    objectType: string,
    technology: string,
  ): Promise<void> {
    const route = 'api/imaging/transactions/technology/display';
    try {
      const response = await NewAxiosProxy.post<void>(route, {
        id: transactionId,
        objectType,
        technology,
      });
      if (response.isError()) throw response.getErrorsAsString();
    } catch (error) {
      Logger.error(
        `Failed to show '${technology}' in transaction with id [${transactionId}].`,
        error,
      );
      throw error;
    }
  }

  /**
   * Hide a technology
   * @param transactionId Id of the transaction
   * @param objectType Object or SubObject
   * @param technology Technology to hide
   */
  public static async hideTechnology(
    transactionId: number,
    objectType: string,
    technology: string,
  ): Promise<void> {
    const route = 'api/imaging/transactions/technology/hide';
    try {
      console.log('Posting with ', {
        id: transactionId,
        objectType,
        technology,
      });
      const response = await NewAxiosProxy.post<void>(route, {
        id: transactionId,
        objectType,
        technology,
      });
      if (response.isError()) throw response.getErrorsAsString();
    } catch (error) {
      Logger.error(
        `Failed to hide'${technology}' in transaction with id [${transactionId}].`,
        error,
      );
      throw error;
    }
  }
}
