import axios from "axios";
import { QueryResult } from "neo4j-driver";
import { ApiComUtils } from "../../../ApiComUtils";
import { ApiResponse } from "../../../interface/ApiResponse.interface";

export class ArtemisFrameworkResult {
  name: string;
  description: string;
  category: string;
  detectedAs: string;
}

export class ArtemisController {
  private static API_BASE_URL = ApiComUtils.getUrl();

  /**
   * Get the list of languages supported by Artemis
   */
  public static async getSupportedLanguages(): Promise<string[]> {
    const url = ArtemisController.API_BASE_URL + "/api/artemis/languages";

    try {
      const res = await axios.get(url);
      let languageList: string[] = [];

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        if (Array.isArray(apiResponse.data)) {
          languageList = apiResponse.data;
        }
      } else {
        console.warn(`Failed to retrieve languages. Status (${res.status})`);
      }

      return languageList;
    } catch (error) {
      console.error(
        `Failed to reach the API : ${url}. Failed to retrieve pending operations.`,
        error,
      );
    }
  }

  /**
   * Set the Online mode of artemis
   */
  public static async setOnlineMode(value: boolean): Promise<boolean> {
    const url =
      ArtemisController.API_BASE_URL + "/api/artemis/utils/mode/online";

    try {
      const res = await axios.post(url, { mode: value });

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        const val = String(apiResponse.data);
        return /true/i.test(val);
      } else {
        throw new Error(
          `API returned status code '${res.status}'. ${res.data}`,
        );
      }
    } catch (error) {
      console.error(
        "Something went wrong trying to change the online mode parameter.",
        error,
      );
      throw error;
    }
  }

  /**
   * Get the Online mode of artemis
   */
  public static async getOnlineMode(): Promise<boolean> {
    const url =
      ArtemisController.API_BASE_URL + "/api/artemis/utils/mode/online";

    try {
      const res = await axios.get(url);

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        const val = String(apiResponse.data);
        return /true/i.test(val);
      } else {
        throw new Error(
          `API returned status code '${res.status}'. ${res.data}`,
        );
      }
    } catch (error) {
      console.error(
        "Something went wrong trying to get the online mode of Artemis.",
        error,
      );
      throw error;
    }
  }

  /**
   * Set the Repository mode of artemis
   */
  public static async setRepositoryMode(value: boolean): Promise<boolean> {
    const url =
      ArtemisController.API_BASE_URL + "/api/artemis/utils/mode/repository";

    try {
      const res = await axios.post(url, { mode: value });

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        const val = String(apiResponse.data);
        return /true/i.test(val);
      } else {
        throw new Error(
          `API returned status code '${res.status}'. ${res.data}`,
        );
      }
    } catch (error) {
      console.error(
        "Something went wrong trying to change the repository mode parameter.",
        error,
      );
      throw error;
    }
  }

  /**
   * Get the Repository mode of artemis
   * TODO : Remove direct call
   */
  public static async getRepositoryMode(): Promise<boolean> {
    const url =
      ArtemisController.API_BASE_URL + "/api/artemis/utils/mode/repository";

    try {
      const res = await axios.get(url);

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        const val = String(apiResponse.data);
        return /true/i.test(val);
      } else {
        throw new Error(
          `API returned status code '${res.status}'. ${res.data}`,
        );
      }
    } catch (error) {
      console.error(
        "Something went wrong trying to get the repository mode of Artemis.",
        error,
      );
      throw error;
    }
  }

  /**
   * Export all the data from artemis to a zip
   */
  public static launchExportAll(): void {
    const url =
      ArtemisController.API_BASE_URL + `/api/artemis/utils/export/all`;

    const popout = window.open(url);
    window.setTimeout(function() {
      popout.close();
    }, 1000);
  }

  /**
   * Send the new configuration to the platform to be processed
   * @param file
   */
  public static async triggerImport(file): Promise<string> {
    const url =
      ArtemisController.API_BASE_URL + `/api/artemis/utils/import/frameworks`;

    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        return String(apiResponse.data);
      } else {
        throw new Error(
          `Failed to perform the extraction of selected artifacts. Status (${res.status}). Message: ${res.data}`,
        );
      }
    } catch (error) {
      console.error(
        `Failed to reach the API : ${url}. Failed to extract the Artifact list.`,
        error,
      );
      throw error;
    }
  }
}
