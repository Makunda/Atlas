import { ApiComUtils } from "@/api/ApiComUtils";
import axios from "axios";
import { ApiResponse } from "@/api/interface/ApiResponse.interface";
import Archimodel from "../interface/imaging/ArchiModel";

export default class ArchitectureController {
  private static API_BASE_URL = ApiComUtils.getUrl();

    /**
     * Retrieve the list of architecture models in the applications
     * @param application Name of the application
     */
     public static async getArchitectures(application: string): Promise<Archimodel[]> {
        const url =
        ArchitectureController.API_BASE_URL + `/api/imaging/architectures/all/${application}`;
    
        try {
          const res = await axios.get(url);
    
          if (res.status == 200) {
            const apiResponse: ApiResponse = res.data;
            if (Array.isArray(apiResponse.data)) {
              return apiResponse.data as Archimodel[];
            }
          } else {
            console.warn(`Failed to retrieve architectures. Status (${res.status}). Message: ${res.data}`);
          }
    
          return [];
        } catch (error) {
          console.error(
            `Failed to reach the API : ${url}. Failed to retrieve architectures.`,
            error
          );
          throw error;
        }
      }

}