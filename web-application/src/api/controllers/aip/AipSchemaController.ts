import { ApiComUtils } from '@/api/utils/ApiComUtils';
import { AipSchema } from '@/api/interface/aip/AipSchema';
import ProxyAxios from '@/api/utils/ProxyAxios';

export class AipSchemaController {
  private static API_BASE_URL = ApiComUtils.getUrl();

  /**
   * Create a new schema for the configuration
   * @param idConfiguration Id configuration
   * @param schema Schema to create
   */
  public static async createSchemaNode(
    configurationId: number,
    schema: AipSchema,
  ): Promise<void> {
    const url = `${AipSchemaController.API_BASE_URL
    }/api/aip/parameters/configuration/${configurationId}/add/schemas`;

    try {
      const body = { schema };
      const res = await ProxyAxios.post(url, body);

      if (res.status !== 200) {
        throw new Error(
          `Failed to create the AIP Schema. Status : ${res.status}.`,
        );
      }

      return;
    } catch (error) {
      console.error(
        `Failed to reach the API : ${url}. Failed to create the AIP Schema.`,
        error,
      );
    }
  }
}
