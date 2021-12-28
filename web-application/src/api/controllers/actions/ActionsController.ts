import { ApiComUtils } from '@/api/utils/ApiComUtils';
import { ApiResponse } from '@/api/interface/ApiResponse.interface';

import ActionInterface from '@/api/interface/actions/Action.interface.fs';
import ProxyAxios from '@/api/utils/ProxyAxios';

export class ActionController {
  private static API_BASE_URL = ApiComUtils.getUrl();

  /**
   * Get action list
   */
  public static async getActionList(): Promise<ActionInterface[]> {
    const url = `${ActionController.API_BASE_URL}/api/atlas/actions/find/all`;
    try {
      const res = await ProxyAxios.get(url);

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;

        if (Array.isArray(apiResponse.data)) {
          return apiResponse.data as ActionInterface[];
        }
      } else {
        console.warn(
          `Failed to retrieve the list of Actions. Status (${res.status})`,
        );
        throw new Error(res.data.error);
      }
    } catch (error) {
      console.error('Failed to retrieve the list of actions.', error);
      throw error;
    }
  }

  /**
   * Execute an action on a specific application
   * @param reportId Id of the action to exceute
   * @param application Name of the application
   */
  public static async executeAction(
    actionId: number,
    application: string,
  ): Promise<boolean> {
    const url = `${ActionController.API_BASE_URL}/api/atlas/actions/execute`;
    try {
      const body = {
        id: actionId,
        application,
      };
      const res = await ProxyAxios.post(url, body, {
        responseType: 'arraybuffer',
      });

      if (res.status == 200) {
        return true;
      }
      console.warn(
        `Failed to retrieve the execute the action. Status (${res.status})`,
      );
      throw new Error(res.data.error);
    } catch (error) {
      console.error('Failed to execute the action.', error);
      throw error;
    }
  }
}
