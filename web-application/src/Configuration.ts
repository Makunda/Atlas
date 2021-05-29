import { AuthToken } from "neo4j-driver/types/driver";
import Vue from "vue";
import VueCookies from "vue-cookies";

Vue.use(VueCookies);
Vue.$cookies.config("30d", "/");

const COOKIE_NAME = "olympus";
let PROPERTIES: Properties;

export interface Credentials {
  user: string;
  password: string;
}

export class Properties {
  refreshRate = 500;
  configurationName = "Configuration_1";
  neo4jUri = "neo4j://localhost:7687";
  token = {} as AuthToken;
}

export class Configuration {
  /**
   * Save the authentication token
   * @param token Auth token to save
   */
  public static setAuthToken(token: AuthToken) {
    PROPERTIES.token = token;
    // window.sessionStorage.setItem(COOKIE_NAME, JSON.stringify(PROPERTIES));
    console.log("Token was set");

    //this.saveProperties(this.properties);
  }

  /**
   * Retrieve the Neo4J authentication token
   */
  public static getAuthToken(): AuthToken {
    return PROPERTIES.token;
  }

  /**
   * Load properties from local storage, if it doesn't exist create one from template
   */
  public static getProperties(): Properties {
    const val = sessionStorage.getItem(COOKIE_NAME);
    if (val != null) {
      return JSON.parse(val);
    } else {
      return new Properties();
    }
  }

  /**
   * Save the parameters
   * @param properties New parameters
   */
  public static saveProperties(properties: Properties) {
    sessionStorage.setItem(COOKIE_NAME, JSON.stringify(properties));
  }

  /**
   * Delete the parameters
   * @param properties New parameters
   */
  public static deleteProperties() {
    sessionStorage.clear();
  }
}
