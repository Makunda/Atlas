import { Cookie } from "@/enum/Cookie";
import Vue from "vue";
import store from "@/store";

export default class CookieManager {
  private static verified = false;

  /**
   * Get the Auth cookie name
   * @returns The name of the authorization cookie
   */
  public static setAuthCookie(token: string, skipVerification = true): void {
    Vue.$cookies.set(Cookie.AUTH_COOKIE, token);
    if (!skipVerification) this.verifyCookie();
  }

  /**
   * Get the authentication cookie
   */
  public static getAuthCookie(): string {
    return Vue.$cookies.get(Cookie.AUTH_COOKIE);
  }

  /**
   * Check of the authorization cookie exists
   */
  public static isSetAuthCookie(): boolean {
    return Vue.$cookies.isKey(Cookie.AUTH_COOKIE);
  }

  /**
   * Check if an authenticated cookie has been set
   * @returns True if an authentication cookie has been setup
   */
  public static async isAuthenticated(): Promise<boolean> {
    // No token
    if (!Vue.$cookies.isKey(Cookie.AUTH_COOKIE)) {
      store.commit("setAuthentication", false);
      return false; // Cookie not set
    }

    // If token verified
    if (this.verified) {
      return true;
    } else {
      // Else verify the token
      return this.verifyCookie();
    }
  }

  /**
   * Destroy auth cookie
   */
  public static deleteAuthCookie(): void {
    Vue.$cookies.remove(Cookie.AUTH_COOKIE);
    this.verified = false;
    store.state.isAuthenticated = false;
    store.commit("setAuthentication", false);
  }

  /**
   * Verifiy the validity of the Auth cookie
   * @returns True if the cookie has been verified
   */
  public static verifyCookie(): boolean {
    // Check the validity of the cookie
    store.commit("setAuthentication", true);
    this.verified = true;
    return this.verified;
  }
}
