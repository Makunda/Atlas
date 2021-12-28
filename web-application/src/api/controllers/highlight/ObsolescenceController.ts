import { ApiComUtils } from '@/api/utils/ApiComUtils';
import { ApiResponse } from '@/api/interface/ApiResponse.interface';
import flash, { FlashType } from '@/modules/flash/Flash';
import OssRecommendation from '@/api/interface/highlight/OssRecommendation';
import ProxyAxios from '@/api/utils/ProxyAxios';

/**
 * Managing the API calls related to Open source obsolescence
 */
export class ObsolescenceController {
  protected static relativeUrl = 'obsolescence/';

  private static apiBaseUrl =
    `${ApiComUtils.getUrl()
    }/api/highlight/recommendations/${
      ObsolescenceController.relativeUrl}`;

  /**
   * Get the url to generate the Paris export
   */
  public static async uploadFile(
    file: any,
    application: string,
  ): Promise<OssRecommendation[]> {
    const url = `${this.apiBaseUrl}file/upload/${application}`;

    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('application', application);
      const res = await ProxyAxios.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        if (Array.isArray(apiResponse.data)) {
          return apiResponse.data as OssRecommendation[];
        }
      } else {
        throw new Error(
          `Failed to send the list of recommendation. Status (${res.status}). Message: ${res.data}`,
        );
      }
    } catch (error) {
      flash.commit('add', {
        type: FlashType.ERROR,
        title: 'Failed to send the list of recommendation.',
        body: error,
      });
      console.error(
        `Failed to reach the API : ${url}. Failed to send the list of recommendation .`,
        error,
      );
      throw error;
    }
  }

  /**
   * Apply a list of recommendation on the application
   */
  public static async applyBlockers(
    blockers: OssRecommendation[],
    taggingType: string,
  ): Promise<[OssRecommendation[], OssRecommendation[]]> {
    const url = `${this.apiBaseUrl}apply`;

    try {
      const body = {
        blockers,
        taggingType,
      };

      const res = await ProxyAxios.post(url, body);

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;

        let applied: OssRecommendation[] = [];
        let notApplied: OssRecommendation[] = [];

        if (apiResponse.data && Array.isArray(apiResponse.data.applied)) {
          applied = apiResponse.data.applied as OssRecommendation[];
        }

        if (apiResponse.data && Array.isArray(apiResponse.data.notApplied)) {
          notApplied = apiResponse.data.notApplied as OssRecommendation[];
        }

        return [applied, notApplied];
      }
      throw new Error(
        `Failed to apply the list of recommendation. Status (${res.status}). Message: ${res.data}`,
      );
    } catch (error) {
      flash.commit('add', {
        type: FlashType.ERROR,
        title: 'Failed to apply the list of recommendation.',
        body: error,
      });
      console.error(
        `Failed to reach the API : ${url}. Failed to apply the list of recommendation .`,
        error,
      );
      throw error;
    }
  }

  /**
   * Apply a list of recommendation on the application
   */
  public static async testBlocker(
    blocker: OssRecommendation,
  ): Promise<[OssRecommendation[], OssRecommendation[]]> {
    const url = `${this.apiBaseUrl}test`;

    try {
      const body = {
        blocker,
      };

      const res = await ProxyAxios.post(url, body);

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;

        let applied: OssRecommendation[] = [];
        let notApplied: OssRecommendation[] = [];

        if (apiResponse.data && Array.isArray(apiResponse.data.applied)) {
          applied = apiResponse.data.applied as OssRecommendation[];
        }

        if (apiResponse.data && Array.isArray(apiResponse.data.notApplied)) {
          notApplied = apiResponse.data.notApplied as OssRecommendation[];
        }

        return [applied, notApplied];
      }
      throw new Error(
        `Failed to test the recommendations. Status (${res.status}). Message: ${res.data}`,
      );
    } catch (error) {
      flash.commit('add', {
        type: FlashType.ERROR,
        title: 'Failed to test the recommendations.',
        body: error,
      });
      console.error(
        `Failed to reach the API : ${url}. Failed to test the recommendations.`,
        error,
      );
      throw error;
    }
  }
}
