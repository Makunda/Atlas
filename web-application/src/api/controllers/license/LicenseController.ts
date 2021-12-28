import { ApiComUtils } from '@/api/utils/ApiComUtils';
import { ApiResponse } from '@/api/interface/ApiResponse.interface';
import { License, LicenseStatus } from '@/api/interface/license/License';
import ProxyAxios from '@/api/utils/ProxyAxios';

export class LicenseController {
  private static API_BASE_URL = ApiComUtils.getUrl();

  /**
   * Get the version of the Demeter extension.
   * Throw an error if the extension is not installed
   */
  public static async getLicense(): Promise<License> {
    const url = `${LicenseController.API_BASE_URL}/api/license`;
    try {
      const res = await ProxyAxios.get(url);

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        return {
          license: String(apiResponse.data),
          status: LicenseStatus.VALID,
        };
      }
      console.warn(`Failed to retrieve the license. Status (${res.status})`);
      return { license: String(res.data), status: LicenseStatus.NOT_VALID };
    } catch (error) {
      console.warn('Failed to retrieve the license.', error);
      return { license: 'NO LICENSE', status: LicenseStatus.NOT_VALID };
    }
  }

  /**
   * Apply  a new license on the application
   * @param license
   */
  public static async applyLicense(license: string): Promise<License> {
    const url = `${LicenseController.API_BASE_URL}/api/license`;

    try {
      const body: any = {};
      body.license = license;
      const res = await ProxyAxios.post(url, body);

      if (res.status == 200) {
        return {
          license: String(license),
          status: LicenseStatus.VALID,
        };
      }
      console.warn(`Failed to apply a new license. Status (${res.status})`);
      return { license: String(res.data), status: LicenseStatus.NOT_VALID };
    } catch (error) {
      console.warn('Failed to apply a new  license.', error);
      return { license: String(license), status: LicenseStatus.NOT_VALID };
    }
  }
}
