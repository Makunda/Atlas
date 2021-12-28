import ProxyAxios from '@/utils/axios/ProxyAxios';
import Logger from '@/utils/Logger';
import ClusterTransaction from '@/api/interface/extensions/caesar/ClusterTransaction';

/**
 * Classify controller
 */
export default class ClassifyController {
  /**
   * Get the list of transaction clusters as a treee
   * @param application Application name
   * @param minSize Minimum transaction size
   */
  public static async getTransactionCluster(
    application: string,
    minSize: number,
  ): Promise<ClusterTransaction[]> {
    try {
      const url = 'api/caesar/classify/transactions/cluster';
      const response = await ProxyAxios.get<ClusterTransaction[]>(url);
      if (response.isError()) throw response.getErrorsAsString();

      return response.getData();
    } catch (err) {
      const message = 'Failed to get the list of transaction cluster';
      Logger.error(message, err);
      throw err;
    }
  }
}
