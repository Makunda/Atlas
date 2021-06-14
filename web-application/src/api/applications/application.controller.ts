import axios from "axios";
import { QueryResult } from "neo4j-driver";
import { ApiComUtils } from "../ApiComUtils";
import { ApiResponse } from "../interface/ApiResponse.interface";
import { Neo4JAccessLayer } from "../Neo4jAccessLayer";
import { IApplicationInsights } from "@/api/interface/imaging/Application.interface";

export interface ApplicationRecord {
  name: string;
}

export class ApplicationController {
  private static API_BASE_URL = ApiComUtils.getUrl();
  private static neo4jal: Neo4JAccessLayer = Neo4JAccessLayer.getInstance();

  public static async getListApplications(): Promise<string[]> {
    const url =
      ApplicationController.API_BASE_URL + "/api/imaging/applications/all";

    try {
      const res = await axios.get(url);
      let applications: string[] = [];

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;

        if (Array.isArray(apiResponse.data)) {
          applications = apiResponse.data;
        }
      } else {
        console.warn(
          `Failed to retrieve application list. Status (${res.status})`
        );
      }

      return applications;
    } catch (error) {
      console.error(
        `Failed to reach the API : ${url}. Failed to retrieve application list.`,
        error
      );
    }
  }

  /**
   * Retrieve insights in an application ( Modules, Levels, Technologies supported by Artemis etc.. )
   * @param application
   */
  public static async getApplicationInsights(
    application: string
  ): Promise<IApplicationInsights> {
    const url =
      ApplicationController.API_BASE_URL +
      "/api/imaging/applications/insights/" +
      application;


    try {
      const res = await axios.get(url);

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        return apiResponse.data as IApplicationInsights;
      } else {
        throw new Error(
          `Failed to retrieve insights for application with name ${application}.`
        );
      }
    } catch (error) {
      console.error(
        `Failed to reach the API : ${url}. Failed to retrieve the insights.`,
        error
      );
    }
  }

  /**
   * Get the technology in one application
   * @param application Name of the application
   */
  public static async getTechnologies(
    application: string
  ): Promise<string[]> {
    const url =
      ApplicationController.API_BASE_URL +
      "/api/imaging/applications/technologies/" +
      application;

    try {
      const res = await axios.get(url);

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        if (Array.isArray(apiResponse.data)) {
          return apiResponse.data as string[];
        }
      } else {
        throw new Error(
          `Failed to retrieve technologies in application with name ${application}.`
        );
      }
    } catch (error) {
      console.error(
        `Failed to reach the API : ${url}. Failed to retrieve the technologies.`,
        error
      );
    }
  }
}
