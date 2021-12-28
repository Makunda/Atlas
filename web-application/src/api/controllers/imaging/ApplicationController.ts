import ProxyAxios from '@/utils/axios/ProxyAxios';
import Logger from '@/utils/Logger';
import { ApplicationInsights } from '@/api/interface/imaging/ApplicationInsights';

/**
 * Controller to ge the informations about the applications
 */
export default class ApplicationController {
  /**
   * Get the list of the application as string
   */
  public static async getListApplication(): Promise<string[]> {
    try {
      const url = 'api/imaging/applications/all';
      const response = await ProxyAxios.get<string[]>(url);
      if (response.isError()) throw response.getErrorsAsString();

      const applicationList = response.getData();
      return applicationList.sort();
    } catch (err) {
      const message = 'Failed to get the list of application';
      Logger.error(message, err);
      throw err;
    }
  }

  /**
   * Get the insights for a specific application
   * @param application Name of the application
   */
  public static async getApplicationInsights(
    application: string,
  ): Promise<ApplicationInsights> {
    try {
      const url = `api/imaging/applications/insights/single/${application}`;
      const response = await ProxyAxios.get<ApplicationInsights>(url);
      if (response.isError()) throw response.getErrorsAsString();

      return response.getData();
    } catch (err) {
      const message = 'Failed to get the insights of the application';
      Logger.error(message, err);
      throw err;
    }
  }

  /**
   * Get the list of all the application insights
   */
  public static async getAllApplicationsInsights(): Promise<
    ApplicationInsights[]
    > {
    try {
      const url = 'api/imaging/applications/insights/all';
      const response = await ProxyAxios.get<ApplicationInsights[]>(url);
      if (response.isError()) throw response.getErrorsAsString();

      return response.getData();
    } catch (err) {
      const message = 'Failed to get the insights of the application';
      Logger.error(message, err);
      throw err;
    }
  }
}
