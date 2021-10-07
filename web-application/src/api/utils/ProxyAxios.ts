import { Cookie } from "@/enum/Cookie";
import axios, { AxiosResponse } from "axios";
import Vue from "vue";

export default class ProxyAxios {
  /**
   * Get with Authentication
   * @param url Url to query
   *  @param config configuration of the request
   * @returns A promise ending when the query is completed
   */
  public static async get(url: string, config?: any): Promise<any> {
    // Authenticated user
    const requestConfiguration: any = config || {};
    if (!requestConfiguration.headers) requestConfiguration.headers = {};

    if (Vue.$cookies.isKey(Cookie.AUTH_COOKIE)) {
      requestConfiguration.headers["Authorization"] =
        "Bearer " + String(Vue.$cookies.get(Cookie.AUTH_COOKIE));
    }

    try {
      return await axios.get(url, requestConfiguration);
    } catch (error) {
      if (error.response) {
        return error.response as AxiosResponse;
      } else {
        throw error;
      }
    }
  }

  /**
   * Post with Authentication
   * @param url Url to query
   * @param data Data to send
   * @param config configuration of the request
   * @returns A promise ending when the query is completed
   */
  public static async post(url: string, data: any, config?: any): Promise<any> {
    // Authenticated user
    const requestConfiguration: any = config || {};
    if (!requestConfiguration.headers) requestConfiguration.headers = {};

    if (Vue.$cookies.isKey(Cookie.AUTH_COOKIE)) {
      requestConfiguration.headers["Authorization"] =
        "Bearer " + String(Vue.$cookies.get(Cookie.AUTH_COOKIE));
    }

    try {
      return axios.post(url, data, requestConfiguration);
    } catch (error) {
      if (error.response) {
        return error.response as AxiosResponse;
      } else {
        throw error;
      }
    }
  }

  /**
   * Delete with Authentication
   * @param url Url to query
   * @param config configuration of the request
   * @returns A promise ending when the query is completed
   */
  public static async delete(url: string, config?: any): Promise<any> {
    // Authenticated user
    const requestConfiguration: any = config || {};
    if (!requestConfiguration.headers) requestConfiguration.headers = {};

    if (Vue.$cookies.isKey(Cookie.AUTH_COOKIE)) {
      requestConfiguration.headers["Authorization"] =
        "Bearer " + String(Vue.$cookies.get(Cookie.AUTH_COOKIE));
    }

    try {
      return await axios.delete(url, requestConfiguration);
    } catch (error) {
      if (error.response) {
        return error.response as AxiosResponse;
      } else {
        throw error;
      }
    }
  }

  /**
   * Update with Authentication
   * @param url Url to query
   * @param data Data to pass to the API
   * @param config configuration of the request
   * @returns A promise ending when the query is completed
   */
  public static async put(url: string, data: any, config?: any): Promise<any> {
    // Authenticated user
    const requestConfiguration: any = config || {};
    if (!requestConfiguration.headers) requestConfiguration.headers = {};

    if (Vue.$cookies.isKey(Cookie.AUTH_COOKIE)) {
      requestConfiguration.headers["Authorization"] =
        "Bearer " + String(Vue.$cookies.get(Cookie.AUTH_COOKIE));
    }

    try {
      return await axios.put(url, data, requestConfiguration);
    } catch (error) {
      if (error.response) {
        return error.response as AxiosResponse;
      } else {
        throw error;
      }
    }
  }
}
