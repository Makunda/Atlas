export default class APIUtils {
  private static port = "3000";
  private static url = "localhost";
  /**
   * Get the default url of the API
   * @returns {string} Return the url of the api
   */
  public static getAPIurl(): string {
    return `http://${this.url}:${this.port}/api`;
  }

  public static getBaseUrl(): string {
    return `http://${this.url}:${this.port}`;
  }
}
