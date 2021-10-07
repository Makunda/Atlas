import axios from "axios";
import { ApiComUtils } from "@/api/utils/ApiComUtils";
import { ApiResponse } from "@/api/interface/ApiResponse.interface";
import ProxyAxios from "@/api/utils/ProxyAxios";

export class UtilsController {
  private static API_BASE_URL = ApiComUtils.getUrl();

  /**
   * Get the actual version of the demeter extension
   */
  public static async healthCheck(): Promise<boolean> {
    const url = UtilsController.API_BASE_URL + "/api/utils/healthCheck";

    try {
      const res = await ProxyAxios.get(url);

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        return Boolean(apiResponse.data);
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  }
}
