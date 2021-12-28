import { DataCallGraph } from '@/api/interface/imaging/DataCallGraph';
import DataCallGraphInsights from '../../interface/imaging/DataCallGraphInsights';
import ProxyAxios from '@/utils/axios/ProxyAxios';
import Logger from '@/utils/Logger';

/**
 * Data Call graph for controller
 */
export default class DataCallGraphController {
  /**
   * Unmask all the dataCallGraph in an application
   * @param application
   */
  public static async unMaskAllDataCallGraph(
    application: string,
  ): Promise<number> {
    const url = '/api/imaging/dataCallGraph/unmask/all';

    try {
      const res = await ProxyAxios.post<number>(url, {
        application,
      });

      if (res.isError()) throw res.getErrorsAsString();
      return res.getData();
    } catch (error) {
      Logger.error(
        `Failed to unmask all dataCallGraph in application ${application}.`,
        error,
      );
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
    const url = `/api/imaging/dataCallGraph/number/unmasked/${application}`;

    try {
      const res = await ProxyAxios.get<number>(url);
      if (res.isError()) throw res.getErrorsAsString();
      return res.getData();
    } catch (error) {
      Logger.error(
        `Failed to get the number of dataCallGraph in application ${application}.`,
        error,
      );
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
    const url = `/api/imaging/dataCallGraph/insights/unmasked/${application}`;

    try {
      const res = await ProxyAxios.get<DataCallGraphInsights>(url);

      if (res.isError()) throw res.getErrorsAsString();
      return res.getData();
    } catch (error) {
      console.error(
        `Failed to get dataCallGraph insights in application ${application}.`,
        error,
      );
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
    const url = `/api/imaging/dataCallGraph/number/masked/${application}`;

    try {
      const res = await ProxyAxios.get<number>(url);
      if (res.isError()) throw res.getErrorsAsString();
      return res.getData();
    } catch (error) {
      Logger.error(
        `Failed to get the number of masked dataCallGraph ${application}.`,
        error,
      );
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
    const url = `/api/imaging/dataCallGraph/batch/masked/${application}`;

    try {
      const body = {
        start,
        end,
        sort,
        sortDesc,
      };

      const res = await ProxyAxios.post<DataCallGraph[]>(url, body);
      if (res.isError()) throw res.getErrorsAsString();
      return res.getData();
    } catch (error) {
      Logger.error('Failed to get the list of masked datacall graph.', error);
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
    const url = `/api/imaging/dataCallGraph/batch/unmasked/${application}`;

    try {
      const body = {
        start,
        end,
        sort,
        sortDesc,
        filter,
      };

      const res = await ProxyAxios.post<DataCallGraph[]>(url, body);
      if (res.isError()) throw res.getErrorsAsString();
      return res.getData();
    } catch (error) {
      console.error('Failed to get the batch of Datacall graph.', error);
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
    const url = '/api/imaging/dataCallGraph/mask/single';

    try {
      const res = await ProxyAxios.post<DataCallGraph>(url, {
        application,
        dataCallGraphID,
      });

      if (res.isError()) throw res.getErrorsAsString();
      return res.getData();
    } catch (error) {
      console.error('Failed to get the list of data call graph.', error);
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
    const url = '/api/imaging/dataCallGraph/pin/single';

    try {
      const body: any = {
        application,
        dataCallGraphID,
        prefix,
      };
      const res = await ProxyAxios.post<DataCallGraph>(url, body);

      if (res.isError()) throw res.getErrorsAsString();
      return res.getData();
    } catch (error) {
      Logger.error('Failed to pin datacall graph.', error);
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
    const url = '/api/imaging/dataCallGraph/unpin/single';

    try {
      const body: any = {
        application,
        dataCallGraphID,
        prefix,
      };
      const res = await ProxyAxios.post<DataCallGraph>(url, body);

      if (res.isError()) throw res.getErrorsAsString();
      return res.getData();
    } catch (error) {
      Logger.error('Failed to unpin a datacall graph', error);
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
    const url = '/api/imaging/dataCallGraph/rename/single';

    try {
      const body: any = {
        application,
        dataCallGraphID,
        dataCallGraphName: name,
      };
      const res = await ProxyAxios.post<DataCallGraph>(url, body);

      if (res.isError()) throw res.getErrorsAsString();
      return res.getData();
    } catch (error) {
      Logger.error('Failed to rename a datacall graph.', error);
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
    const url = '/api/imaging/dataCallGraph/mask/filter';

    try {
      const res = await ProxyAxios.post<DataCallGraph>(url, {
        application,
        filter,
      });

      if (res.isError()) throw res.getErrorsAsString();
      return res.getData();
    } catch (error) {
      Logger.error('Failed to mask datacall graph with filter.', error);
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
    const url = '/api/imaging/dataCallGraph/unmask/single';

    try {
      const res = await ProxyAxios.post<DataCallGraph>(url, {
        application,
        dataCallGraphID,
      });

      if (res.isError()) throw res.getErrorsAsString();
      return res.getData();
    } catch (error) {
      Logger.error('Failed to unmask a datacall graph.', error);
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
    const url = '/api/imaging/dataCallGraph/unmask/all';

    try {
      const res = await ProxyAxios.post<boolean>(url, {
        application,
      });

      if (res.isError()) throw res.getErrorsAsString();
      return res.getData();
    } catch (error) {
      Logger.error('Failed to unmask all data call graph.', error);
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
    const url = '/api/imaging/dataCallGraph/mask/byCount';

    try {
      const body = {
        application,
        limit,
      };
      const res = await ProxyAxios.post<number>(url, body);

      if (res.isError()) throw res.getErrorsAsString();
      return res.getData();
    } catch (error) {
      Logger.error('Failed to mask datacall graph using a count filter', error);
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
    const url = '/api/imaging/dataCallGraph/mask/byTechnologies';

    try {
      const body = {
        application,
        limit,
      };
      const res = await ProxyAxios.post<number>(url, body);

      if (res.isError()) throw res.getErrorsAsString();
      return res.getData();
    } catch (error) {
      Logger.error(
        'Failed to mask datacall graph using a technology filter',
        error,
      );
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
    const url = '/api/imaging/dataCallGraph/mask/byTerms';

    try {
      const body = {
        application,
        terms,
      };
      const res = await ProxyAxios.post<number>(url, body);

      if (res.isError()) throw res.getErrorsAsString();
      return res.getData();
    } catch (error) {
      Logger.error('Failed to mask datacall graph using a term filter.', error);
      throw error;
    }
  }
}
