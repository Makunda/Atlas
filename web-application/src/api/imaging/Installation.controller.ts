import { ApiComUtils } from "@/api/ApiComUtils";
import axios from "axios";
import { ApiResponse } from "@/api/interface/ApiResponse.interface";

export default class InstallationController {
  private static API_BASE_URL = ApiComUtils.getUrl();

  public static async getImagingPath(): Promise<string> {
    const url =
      this.API_BASE_URL + `/api/imaging/installation/imaging/path/base`;

    try {
      const res = await axios.get(url);

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        return String(apiResponse.data);
      } else {
        console.warn(`Failed to retrieve imaging path. Status (${res.status})`);
        return `The API returned status code : ${res.status}.`;
      }
    } catch (error) {
      console.error(
        `Failed to reach the API : ${url}. Failed to get Imaging path.`,
        error
      );
      throw error;
    }
  }

  /**
   * Set a new Imaging Path
   * @param path new path
   */
  public static async setImagingPath(path: string): Promise<string> {
    const url =
      this.API_BASE_URL + `/api/imaging/installation/imaging/path/base`;

    try {
      const body = {
        path: path
      };
      const res = await axios.post(url, body);

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        return String(apiResponse.data);
      } else {
        console.warn(`Failed to set imaging path. Status (${res.status})`);
        return `The API returned status code : ${res.status}. ${res.data}`;
      }
    } catch (error) {
      console.error(
        `Failed to reach the API : ${url}. Failed to set Imaging path.`,
        error
      );
      throw error;
    }
  }

  /**
   * Get the status of the demeter extension (version)
   */
  public static async getDemeterStatus(): Promise<string> {
    const url = this.API_BASE_URL + `/api/atlas/extensions/demeter/version`;

    try {
      const res = await axios.get(url);

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        return String(apiResponse.data);
      } else {
        console.warn(
          `Failed to get Demeter Status. API Status (${res.status})`
        );
        return `The API returned status code : ${res.status}.`;
      }
    } catch (error) {
      console.error(
        `Failed to reach the API : ${url}. Failed to get Demeter Status.`,
        error
      );
      throw error;
    }
  }

  /**
   * Get the status of the Artemis extension
   */
  public static async getArtemisStatus(): Promise<string> {
    const url = this.API_BASE_URL + `/api/atlas/extensions/artemis/version`;

    try {
      const res = await axios.get(url);

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        return String(apiResponse.data);
      } else {
        console.warn(
          `Failed to get Artemis Status. API Status (${res.status})`
        );
        return `The API returned status code : ${res.status}.`;
      }
    } catch (error) {
      console.error(
        `Failed to reach the API : ${url}. Failed to get artemis Status.`,
        error
      );
      throw error;
    }
  }
}
