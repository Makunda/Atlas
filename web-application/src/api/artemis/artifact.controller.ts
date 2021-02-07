import axios from "axios";
import { ApiComUtils } from "../ApiComUtils";
import { Artifact } from "../interface/ApiArtifact.interface";
import { ApiResponse } from "../interface/ApiResponse.interface";

export class ArtifactController {
  private static API_BASE_URL = ApiComUtils.getUrl();

  public static async getArtifactList(
    application: string,
    language: string
  ): Promise<Artifact[]> {
    const url = ArtifactController.API_BASE_URL + "/api/artemis/artifacts/all";

    const data = {
      application: application,
      language: language,
    };
    try {
      const res = await axios.post(url, data);

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        if (Array.isArray(apiResponse)) {
          return apiResponse;
        }
      } else {
        throw new Error(
          `Failed to launch the breakdown of the application. Status (${res.status}). Message: ${res.data}`
        );
      }
    } catch (error) {
      console.error(
        `Failed to reach the API : ${url}. The breakdown failed.`,
        error
      );
      throw error;
    }
  }

  public static async getArtifactAsTree(
    application: string,
    language: string
  ): Promise<Artifact[]> {
    const url = ArtifactController.API_BASE_URL + "/api/artemis/artifacts/tree";

    const data = {
      application: application,
      language: language,
    };
    try {
      const res = await axios.post(url, data);

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        if (Array.isArray(apiResponse.data)) {
          return apiResponse.data;
        }
      } else {
        throw new Error(
          `Failed to get the Artifact tree of the application. Status (${res.status}). Message: ${res.data}`
        );
      }
    } catch (error) {
      console.error(
        `Failed to reach the API : ${url}. Failed to get the Artifact tree.`,
        error
      );
      throw error;
    }
  }


}
