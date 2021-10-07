import axios from "axios";
import { ApiComUtils } from "@/api/utils/ApiComUtils";
import { ApiResponse } from "@/api/interface/ApiResponse.interface";
import { ReportInterface } from "@/api/interface/reports/report.interface";
import ProxyAxios from "@/api/utils/ProxyAxios";

export class ReportController {
  private static API_BASE_URL = ApiComUtils.getUrl();

  /**
   * Get report list
   */
  public static async getReportList(): Promise<ReportInterface[]> {
    const url = ReportController.API_BASE_URL + "/api/atlas/reports/find/all";
    try {
      const res = await ProxyAxios.get(url);

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;

        if (Array.isArray(apiResponse.data)) {
          return apiResponse.data as ReportInterface[];
        }
      } else {
        console.warn(
          `Failed to retrieve the list of Reports. Status (${res.status})`,
        );
        throw new Error(res.data.error);
      }
    } catch (error) {
      console.error(`Failed to retrieve the list of report.`, error);
      throw error;
    }
  }

  private static saveFile(blob, filename) {
    if (window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(blob, filename);
    } else {
      const a = document.createElement("a");
      document.body.appendChild(a);
      const url = window.URL.createObjectURL(blob);
      a.href = url;
      a.download = filename;
      a.click();
      setTimeout(() => {
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      }, 0);
    }
  }

  /**
   * Generate a report, and open a  pop up to download it
   * @param reportId Id of the report to generate
   * @param application Name of the application
   * @param params Parameters
   */
  public static async generateReport(
    reportId: number,
    nickName: string,
    application: string,
    params: any,
  ): Promise<void> {
    const url = ReportController.API_BASE_URL + "/api/atlas/reports/generate";
    try {
      const body = {
        id: reportId,
        application: application,
        parameters: params,
      };
      const res = await ProxyAxios.post(url, body, {
        responseType: "arraybuffer",
      });

      if (res.status == 200) {
        const a = document.createElement("a");

        const file = new Blob([res.data], {
          type:
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,",
        });
        this.saveFile(file, `${nickName}_in_${application}.xlsx`);
      } else {
        console.warn(
          `Failed to retrieve the generate the report. Status (${res.status})`,
        );
        throw new Error(res.data.error);
      }
    } catch (error) {
      console.error(`Failed to retrieve the generate the report.`, error);
      throw error;
    }
  }
}
