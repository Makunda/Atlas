import PythiaAxiosProxy from "./com/PythiaAxiosProxy";
import PythiaTokenManager from "./config/PythiaTokenManager";
import PythiaApiService from "./services/PythiaApiService";
import { PythiaApiStatus } from "./enum/PythiaAPIStatus";
import HighlightFramework from "./interfaces/HighlightFramework";
import PythiaApiResponseImpl from "./com/PythiaApiResponse";
import PythiaHighlightFrameworkService from "./services/PythiaHighlightFrameworkService";
import { PythiaAuthenticationStatus } from "./enum/PythiaAuthenticationStatus";

/**
 * Default class to handle pythia functions
 */
export default class Pythia {
  private pythiaTokenManager: PythiaTokenManager;

  /**
   * Create a pythia token and store it in the database
   * @param token Token to create
   */
  public getUrl(): string {
    return PythiaAxiosProxy.getUrl();
  }

  /**
   * Create a pythia token and store it in the database
   * @param token Token to create
   */
  public async createPythiaToken(token: string): Promise<void> {
    return this.pythiaTokenManager.createToken(token);
  }

  /**
   * Check if a pythia token is set
   * @return True if it is, false otherwise
   */
  public async isTokenSet(): Promise<boolean> {
    return this.pythiaTokenManager.existsToken();
  }

  /** ---------------------------------------------------------------------------------- **
   ** API FUNCTIONS : UTILS                                                              **
   ** ---------------------------------------------------------------------------------- **/

  /**
   * Get the status of pythia
   * @returns The Status of the API
   */
  public async getStatus(): Promise<PythiaApiStatus> {
    return PythiaApiService.getStatus();
  }

  /**
   * Get the authentication status
   * @returns Authentication Status
   */
  public async getAuthenticationStatus(): Promise<PythiaAuthenticationStatus> {
    return PythiaApiService.getAuthenticationStatus();
  }

  /** ---------------------------------------------------------------------------------- **
   ** Highlight framework                                                                **
   ** ---------------------------------------------------------------------------------- **/

  /**
   * Create a new Highlight Framework.
   * This request produce an error if a framework with the same component name exists
   * @param framework Highlight Framework to create
   * @returns The created Framework
   */
  public async createHighlightFramework(framework: HighlightFramework): Promise<PythiaApiResponseImpl<HighlightFramework>> {
    return PythiaHighlightFrameworkService.createHighlightFramework(framework);
  }

  /**
   * Create multiple new Highlight Framework
   * @param frameworks Highlight Frameworks to create
   * @returns The list of Create Highlight frameworks
   */
  public async bulkCreateHighlightFramework(frameworks: HighlightFramework[]): Promise<PythiaApiResponseImpl<HighlightFramework[]>> {
    return PythiaHighlightFrameworkService.bulkCreateHighlightFramework(frameworks);
  }

  /**
   * No arg constructor
   */
  public constructor() {
    this.pythiaTokenManager = PythiaTokenManager.getInstance(); // declare token manager
  }
}

/**
 * Export class
 */
export { PythiaApiResponseImpl };

/**
 * Export interfaces
 */
export { HighlightFramework as PythiaHighlightFramework, PythiaAuthenticationStatus, PythiaApiStatus };
