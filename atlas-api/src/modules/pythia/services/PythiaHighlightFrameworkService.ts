import PythiaApiResponseImpl from "../com/PythiaApiResponse";
import PythiaAxiosProxy from "../com/PythiaAxiosProxy";
import HighlightFramework from "../interfaces/HighlightFramework";

/**
 * Manage Highlight Frameworks on Pythia
 */
export default class PythiaHighlightFrameworkService {
  /**
   * Create a Highlight framework
   */
  public static async createHighlightFramework(framework: HighlightFramework): Promise<PythiaApiResponseImpl<HighlightFramework>> {
    return PythiaAxiosProxy.post<HighlightFramework>("api/framework/highlight/create", framework);
  }

  /**
   * Create multiple Highlight frameworks
   */
  public static async bulkCreateHighlightFramework(frameworks: HighlightFramework[]): Promise<PythiaApiResponseImpl<HighlightFramework[]>> {
    return PythiaAxiosProxy.post<HighlightFramework[]>("api/framework/highlight/create", { frameworks: frameworks });
  }

  /**
   * Get a component by its exact component name
   */
  public static async getHighlightFrameworkByComponent(component: string): Promise<PythiaApiResponseImpl<HighlightFramework>> {
    return PythiaAxiosProxy.get<HighlightFramework>(`api/framework/highlight/getByComponent/${component}/overview`);
  }

  /**
   * Get a component by its exact component name
   */
  public static async deleteHighlightFramework(id: string): Promise<PythiaApiResponseImpl<HighlightFramework>> {
    return PythiaAxiosProxy.delete<HighlightFramework>(`api/framework/highlight/delete/${id}`);
  }
}
