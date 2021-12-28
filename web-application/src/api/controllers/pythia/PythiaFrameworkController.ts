import { ApiComUtils } from '@/api/utils/ApiComUtils';
import ProxyAxios from '@/utils/axios/ProxyAxios';
import Logger from '@/utils/Logger';

/**
 * Pythia Framework Controller
 */
export default class PythiaFrameworkController {
  private static API_BASE_URL = `${ApiComUtils.getUrl()}/api/pythia/utils`;

  // Framework insertion
  /**
   * Get the Authentication Status of Pythia
   */
  public static async getAuthenticationStatus(): Promise<string> {
    const url = `${PythiaFrameworkController.API_BASE_URL}/authentication/status`;
    try {
      const response = await ProxyAxios.get<string>(url);

      if (response.isError()) throw response.getErrorsAsString();
      return response.getData();
    } catch (error) {
      Logger.error('Failed to get Pythia Authentication Status.', error);
      throw error;
    }
  }
}
