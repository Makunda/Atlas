import PythiaAxiosProxy from "../com/PythiaAxiosProxy";
import { PythiaApiStatus } from "../enum/PythiaAPIStatus";
import { logger } from "@shared/Logger";
import { PythiaAuthenticationStatus } from "../enum/PythiaAuthenticationStatus";

/**
 * Communication with pythia
 */
export default class PythiaApiService {
  /**
   * Get the status of the API
   */
  public static async getStatus(): Promise<PythiaApiStatus> {
    try {
      const response = await PythiaAxiosProxy.get<string>("status");
      // If status 404
      if (response.getStatus() == 404) {
        return PythiaApiStatus.UNREACHABLE;
      }

      // Else if not a success
      if (!response.isSuccess()) {
        return PythiaApiStatus.ERROR;
      }

      switch (response.getData()) {
        case "Running":
          return PythiaApiStatus.RUNNING;
        case "Maintenance":
          return PythiaApiStatus.MAINTENANCE;
        default:
          return PythiaApiStatus.ERROR;
      }
    } catch (error) {
      logger.error("Failed to retrieve the status of the API.", error);
      return PythiaApiStatus.UNREACHABLE;
    }
  }

  /**
   * Get the Authentication status
   */
  public static async getAuthenticationStatus(): Promise<PythiaAuthenticationStatus> {
    try {
      const response = await PythiaAxiosProxy.get<string>("authentication/status");

      // If status 404
      if (response.getStatus() == 404) {
        return PythiaAuthenticationStatus.UNREACHABLE;
      }

      if (!response.isSuccess()) {
        return PythiaAuthenticationStatus.NOT_AUTHENTICATED;
      } else {
        return PythiaAuthenticationStatus.AUTHENTICATED;
      }
    } catch (error) {
      logger.error("Failed to retrieve the authentication status.", error);
      return PythiaAuthenticationStatus.UNREACHABLE;
    }
  }
}
