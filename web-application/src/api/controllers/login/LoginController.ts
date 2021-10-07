import flash, { FlashType } from "@/modules/flash/Flash";
import axios from "axios";
import { ApiComUtils } from "../../ApiComUtils";
import { ApiResponse } from "../../interface/ApiResponse.interface";

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
      const res = await axios.post(url, body);
      const apiResponse: ApiResponse = res.data;

      if (res.status == 200) {
        // Store the token

        return true;
      } else {
        // The request failed, popup + log
        console.error("Failed to login", apiResponse.errors);
        flash.commit("add", {
          type: FlashType.ERROR,
          title: "Failed to login.",
          body: "Bad username/password"
        });
        return false;
      }
    } catch (error) {
      console.warn(`Failed to login.`, error);
      flash.commit("add", {
        type: FlashType.ERROR,
        title: "Failed to login.",
        body: error
      });
    }
  }
}
