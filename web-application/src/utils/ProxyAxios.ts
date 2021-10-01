import { Cookie } from "@/enum/Cookie";
import axios, { AxiosResponse } from "axios";
import Vue from "vue";

export default class ProxyAxios {
  /**
   * Get with Authentication
   * @param url Url to query
   * @returns A promise ending when the query is completed
   */
  public static async get(url: string): Promise<any> {
    // Authenticated user
    let config = {};

    if (Vue.$cookies.isKey(Cookie.AUTH_COOKIE)) {
      config = {
        headers: {
          Authorization: `Bearer ${String(
            Vue.$cookies.get(Cookie.AUTH_COOKIE)
          )}`
        }
      };
    }

    try {
      return await axios.get(url, config);
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
   * @returns A promise ending when the query is completed
   */
  public static async post(url: string, data: any): Promise<any> {
    // Authenticated user
    let config = {};

    if (Vue.$cookies.isKey(Cookie.AUTH_COOKIE)) {
      config = {
        headers: {
          Authorization: `Bearer ${String(
            Vue.$cookies.get(Cookie.AUTH_COOKIE)
          )}`
        }
      };
    }

    try {
      return axios.post(url, data, config);
    } catch (error) {
      if (error.response) {
        return error.response as AxiosResponse;
      } else {
        throw error;
      }
    }
  }
}
