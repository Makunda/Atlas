import ProxyAxios from '@/utils/axios/ProxyAxios';
import Logger from '@/utils/Logger';

export default class InstallationController {
  public static async getImagingPath(): Promise<string> {
    const url = '/api/imaging/installation/imaging/path/base';

    try {
      const res = await ProxyAxios.get<string>(url);

      if (res.isError()) throw res.getErrorsAsString();
      return res.getData();
    } catch (error) {
      Logger.error('Failed to get the imaging path.', error);
      throw error;
    }
  }

  /**
   * Set a new Imaging Path
   * @param path new path
   */
  public static async setImagingPath(path: string): Promise<string> {
    const url = '/api/imaging/installation/imaging/path/base';

    try {
      const body = {
        path,
      };
      const res = await ProxyAxios.post<string>(url, body);

      if (res.isError()) throw res.getErrorsAsString();
      return res.getData();
    } catch (error) {
      Logger.error('Failed to set Imaging path.', error);
      throw error;
    }
  }

  /**
   * Get the status of the demeter extension (version)
   */
  public static async getDemeterStatus(): Promise<string> {
    const url = '/api/atlas/extensions/demeter/version';

    try {
      const res = await ProxyAxios.get<string>(url);

      if (res.isError()) throw res.getErrorsAsString();
      return res.getData();
    } catch (error) {
      Logger.error('Failed to get Demeter Status.', error);
      throw error;
    }
  }

  /**
   * Get the status of the Artemis extension
   */
  public static async getArtemisStatus(): Promise<string> {
    const url = '/api/atlas/extensions/artemis/version';

    try {
      const res = await ProxyAxios.get<string>(url);

      if (res.isError()) throw res.getErrorsAsString();
      return res.getData();
    } catch (error) {
      Logger.error('Failed to get artemis Status.', error);
      throw error;
    }
  }
}
