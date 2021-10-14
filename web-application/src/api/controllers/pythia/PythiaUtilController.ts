import flash, { FlashType } from "@/modules/flash/Flash";
import { ApiComUtils } from "@/api/utils/ApiComUtils";
import ProxyAxios from "@/api/utils/ProxyAxios";
import ApiResponseImpl from "@/api/utils/ApiResponse";

/**
 * Controller handling the login on the platform
 */
export default class PythiaUtilController {
  private static API_BASE_URL = ApiComUtils.getUrl() + "/api/pythia/utils";

  /**
   * Apply a new Pythia Token
   */
  public static async postToken(token: string): Promise<void> {
    const url = PythiaUtilController.API_BASE_URL + "/token";
    try {
      const response = await ProxyAxios.post(url, {
        token: token
      });
      const apiResponse = new ApiResponseImpl<string>(response);

      if (apiResponse.isSuccess()) {
        flash.commit("add", {
          type: FlashType.SUCCESS,
          title: "New Pythia token applied",
          body: "Successfully applied a new token."
        });
      } else {
        // The request failed, popup + log
        console.error(
          "Failed to apply a new Token",
          apiResponse.getErrorsAsString()
        );
        flash.commit("add", {
          type: FlashType.ERROR,
          title: "Failed to apply a new Token",
          body: apiResponse.getErrorsAsString()
        });
        throw apiResponse.getErrorsAsString();
      }
    } catch (error) {
      console.error(`Failed to apply a new Token.`, error);
      flash.commit("add", {
        type: FlashType.ERROR,
        title: "Failed to apply a new Token.",
        body: error
      });
      throw error;
    }
  }

  /**
   * Check if a pythia Token has been set
   */
  public static async getTokenPresence(): Promise<boolean> {
    const url = PythiaUtilController.API_BASE_URL + "/token";
    try {
      const response = await ProxyAxios.get(url);
      const apiResponse = new ApiResponseImpl<boolean>(response);
      return apiResponse.getData() || false;
    } catch (error) {
      console.error(`Failed to get Pythia Token.`, error);
      return false;
    }
  }

  /**
   * Get the URL of Pythia
   */
  public static async getURL(): Promise<string> {
    const url = PythiaUtilController.API_BASE_URL + "/url";
    try {
      const response = await ProxyAxios.get(url);
      const apiResponse = new ApiResponseImpl<string>(response);

      if (apiResponse.isSuccess()) {
        return apiResponse.getData();
      } else {
        throw apiResponse.getErrorsAsString();
      }
    } catch (error) {
      console.error(`Failed to get Pythia URL.`, error);
      throw error;
    }
  }

  /**
   * Get the Authentication Status of Pythia
   */
  public static async getAuthenticationStatus(): Promise<string> {
    const url = PythiaUtilController.API_BASE_URL + "/authentication/status";
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

  /**
   * Get the Status of Pythia
   */
  public static async getStatus(): Promise<string> {
    const url = PythiaUtilController.API_BASE_URL + "/status";
    try {
      const response = await ProxyAxios.get(url);
      const apiResponse = new ApiResponseImpl<string>(response);

      if (apiResponse.isSuccess()) {
        return apiResponse.getData();
      } else {
        throw apiResponse.getErrorsAsString();
      }
    } catch (error) {
      console.error(`Failed to get Pythia status.`, error);
      throw error;
    }
  }
}
