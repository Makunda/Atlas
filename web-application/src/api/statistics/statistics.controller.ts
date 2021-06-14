import axios from "axios";
import { ApiComUtils } from "../ApiComUtils";
import { ApiResponse } from "../interface/ApiResponse.interface";
import { ReportInterface } from "@/api/interface/reports/report.interface";
import ILevel from "@/api/interface/imaging/Level.interface";
import { error } from "neo4j-driver";
import ActionInterface from "@/api/interface/actions/Action.interface.fs";
import StatisticInterface from "@/api/interface/statistics/Statistic.interface";

export class StatisticsController {
  private static API_BASE_URL = ApiComUtils.getUrl();

  /**
   * Get Statistics list for an application
   * @param application Name of the application
   * @param category Category of the statistics
   */
  public static async getStatisticsList(
    application: string,
    category?: string
  ): Promise<StatisticInterface[]> {
    const url =
      StatisticsController.API_BASE_URL + "/api/atlas/statistics/find/all";
    try {
      const body: any = {
        application: application
      };
      if (category) body.category = category;
      const res = await axios.post(url);

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;

        if (Array.isArray(apiResponse.data)) {
          return apiResponse.data as StatisticInterface[];
        }
      } else {
        console.warn(
          `Failed to retrieve the list of statistics. Status (${res.status})`
        );
        throw new Error(res.data.error);
      }
    } catch (error) {
      console.error(`Failed to retrieve the list of statistics.`, error);
      throw error;
    }
  }

  /**
   * Get the list of the categories
   */
  public static async getCategories(): Promise<string[]> {
    const url =
      StatisticsController.API_BASE_URL + "/api/atlas/statistics/categories";
    try {
      const res = await axios.get(url);

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        if (Array.isArray(apiResponse.data)) {
          return apiResponse.data as string[];
        }
      } else {
        console.warn(
          `Failed to retrieve the execute the action. Status (${res.status})`
        );
        throw new Error(res.data.error);
      }
    } catch (error) {
      console.error(`Failed to execute the action.`, error);
      throw error;
    }
  }
}
