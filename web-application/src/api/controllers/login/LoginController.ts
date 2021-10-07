import flash, { FlashType } from "@/modules/flash/Flash";
import { ApiComUtils } from "@/api/utils/ApiComUtils";
import CookieManager from "@/utils/CookieManager";
import ProxyAxios from "@/api/utils/ProxyAxios";
import { ApiResponseImpl, ApiResponse } from "@/api/utils/ApiResponse";
import store from "@/store";

import Vue from "vue";

/**
 * Controller handling the login on the platform
 */
export default class LoginController {
  private static API_BASE_URL = ApiComUtils.getUrl();

  /**
   * Get the version of the Demeter extension.
   * Throw an error if the extension is not installed
   */
  public static async postLogin(
    username: string,
    password: string
  ): Promise<boolean> {
    const url = LoginController.API_BASE_URL + "/api/login";
    try {
      const body = {
        username: username,
        password: password
      };

      const response = (await ProxyAxios.post(url, body)) as ApiResponse;
      const apiResponse = new ApiResponseImpl<string>(response);

      if (apiResponse.isSuccess()) {
        // Store the token
        CookieManager.setAuthCookie(apiResponse.getData());
        store.state.isAuthenticated = true;

        return true;
      } else {
        // The request failed, popup + log
        console.error("Failed to login", apiResponse.getErrors());
        flash.commit("add", {
          type: FlashType.ERROR,
          title: "Failed to login.",
          body: "Bad username/password"
        });
        return false;
      }
    } catch (error) {
      console.error(`Failed to login.`, error);
      flash.commit("add", {
        type: FlashType.ERROR,
        title: "Failed to login.",
        body: error
      });
      return false;
    }
  }

  /**
   * Delete the Auth cookie, and redirect to the login
   */
  public static async logout() {
    try {
      CookieManager.deleteAuthCookie();
    } catch (err) {
      console.error("Failed to destroy the authentication cookie", err);
      flash.commit("add", {
        type: FlashType.ERROR,
        title: "Failed to logout.",
        body: err
      });
      throw err;
    }
  }
}
