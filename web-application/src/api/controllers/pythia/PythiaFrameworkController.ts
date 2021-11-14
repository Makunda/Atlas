import { ApiComUtils } from "@/api/utils/ApiComUtils";
import ApiResponseImpl from "@/api/utils/ApiResponse";
import ProxyAxios from "@/utils/ProxyAxios";
import PythiaUtilController from "./PythiaUtilController";

/**
 * Pythia Framework Controller
 */
export default class PythiaFrameworkController {
  private static API_BASE_URL = ApiComUtils.getUrl() + "/api/pythia/utils";

  // Framework insertion
  /**
   * Get the Authentication Status of Pythia
   */
  public static async getAuthenticationStatus(): Promise<string> {
    const url =
      PythiaFrameworkController.API_BASE_URL + "/authentication/status";
    try {
      const response = await ProxyAxios.get(url);
      const apiResponse = new ApiResponseImpl<string>(response);

      if (apiResponse.isSuccess()) {
        return apiResponse.getData();
      } else {
        throw apiResponse.getErrorsAsString();
      }
    } catch (error) {
      console.error(`Failed to get Pythia Authentication Status.`, error);
      throw error;
    }
  }
}
