import axios from "axios";
import PythiaTokenManager from "@modules/pythia/config/PythiaTokenManager";
import PythiaApiResponseImpl from "./PythiaApiResponse";
import config from "config";

/**
 * Axios proxy appending the auth token
 */
export default class PythiaAxiosProxy {
  // Private
  private static pythiaLogin = PythiaTokenManager.getInstance();
  private static BASE_URL = String(config.get("pythia.url"));

  /**
   * Returns the Url of Pythia
   * @returns The base url of Pythia
   */
  public static getUrl(): string {
    return this.BASE_URL;
  }

  /**
   * Get with Authentication
   * @param url Url to query
   * @param config (Optional) Configuration of the query
   * @returns A promise ending when the query is completed
   */
  public static async get<T>(url: string, config?: any): Promise<PythiaApiResponseImpl<T>> {
    config = await this.buildConfig(config); // Create configuration
    url = PythiaAxiosProxy.BASE_URL + url; // Append base url

    try {
      const response = await axios.get(url, config);
      return new PythiaApiResponseImpl<T>(response);
    } catch (error: any) {
      if (error.response) {
        return new PythiaApiResponseImpl<T>(error);
      } else {
        throw error;
      }
    }
  }

  /**
   * Post with Authentication
   * @param url Url to query
   * @param data Data to send
   * @returns A promise ending when the query is completed
   */
  public static async post<T>(url: string, data: any, config?: any): Promise<PythiaApiResponseImpl<T>> {
    config = await this.buildConfig(config); // Create configuration
    url = PythiaAxiosProxy.BASE_URL + url; // Append base url

    try {
      const response = await axios.post(url, data, config);
      return new PythiaApiResponseImpl<T>(response);
    } catch (error: any) {
      if (error.response) {
        return new PythiaApiResponseImpl<T>(error);
      } else {
        throw error;
      }
    }
  }

  /**
   * Put with Authentication
   * @param url Url to query
   * @param data Data to send
   * @returns A promise ending when the query is completed
   */
  public static async put<T>(url: string, data: any, config?: any): Promise<PythiaApiResponseImpl<T>> {
    config = await this.buildConfig(config); // Create configuration
    url = PythiaAxiosProxy.BASE_URL + url; // Append base url

    try {
      const response = await axios.put(url, data, config);
      return new PythiaApiResponseImpl<T>(response);
    } catch (error: any) {
      if (error.response) {
        return new PythiaApiResponseImpl<T>(error);
      } else {
        throw error;
      }
    }
  }

  /**
   * Delete with Authentication
   * @param url Url to query
   * @returns A promise ending when the query is completed
   */
  public static async delete<T>(url: string, config?: any): Promise<PythiaApiResponseImpl<T>> {
    config = await this.buildConfig(config); // Create configuration
    url = PythiaAxiosProxy.BASE_URL + url; // Append base url

    try {
      const response = await axios.delete(url, config);
      return new PythiaApiResponseImpl<T>(response);
    } catch (error: any) {
      if (error.response) {
        return new PythiaApiResponseImpl<T>(error);
      } else {
        throw error;
      }
    }
  }

  /**
   * *Build and return a config containing the header file
   * @param config The existing config
   * @returns Enriched configuration
   */
  private static async buildConfig(config?: any): Promise<any> {
    if (!config) config = {}; // Make sure the config isn't null

    // Check if the token  has been set up for pythia
    if (await this.pythiaLogin.existsToken()) {
      config = {
        headers: {
          Authorization: `Bearer ${String(await this.pythiaLogin.getToken())}`,
        },
      };
    }

    return config;
  }
}
