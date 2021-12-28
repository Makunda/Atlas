import ProxyAxios from '@/utils/axios/ProxyAxios';
import Logger from '@/utils/Logger';
import Backup from '@/api/interface/extensions/demeter/Backup';

/**
 * Backup Controller
 */
export default class BackupController {
  /**
   * Get the list of available backup for the application
   * @param application Name of the application
   */
  public static async getList(application: string): Promise<Backup[]> {
    try {
      const url = 'api/demeter/backup/list';
      const response = await ProxyAxios.post<Backup[]>(url, {
        application,
      });
      if (response.isError()) throw response.getErrorsAsString();
      return response.getData();
    } catch (err) {
      const message = 'Failed to get the list of backup';
      Logger.error(message, err);
      throw err;
    }
  }

  /**
   * Get the list of available backup for the application
   * @param application Name of the application
   * @param name Name of the backup
   * @param description Description
   * @param timestamp Timestamp
   * @param picture Picture as base 64
   */
  public static async createBackup(
    application: string,
    name: string,
    description: string,
    timestamp: string,
    picture: string,
  ): Promise<void> {
    try {
      const url = 'api/demeter/backup/create';
      const response = await ProxyAxios.post<void>(url, {
        application,
        name,
        description,
        timestamp,
        picture,
      });
      if (response.isError()) throw response.getErrorsAsString();
    } catch (err) {
      const message = 'Failed to create a backup';
      Logger.error(message, err);
      throw err;
    }
  }

  /**
   * Get the list of available backup for the application
   * @param application Name of the applicatio
   * @param id Id of the backup
   */
  public static async deleteBackup(
    application: string,
    id: number,
  ): Promise<void> {
    try {
      const url = 'api/demeter/backup/delete';
      const response = await ProxyAxios.post<void>(url, {
        application,
        id,
      });
      if (response.isError()) throw response.getErrorsAsString();
    } catch (err) {
      const message = 'Failed to delete the backup';
      Logger.error(message, err);
      throw err;
    }
  }

  /**
   * Get the list of available backup for the application
   * @param application Name of the application
   */
  public static async rollback(application: string, id: number): Promise<void> {
    try {
      const url = 'api/demeter/backup/rollback';
      const response = await ProxyAxios.post<void>(url, {
        application,
        id,
      });
      if (response.isError()) throw response.getErrorsAsString();
    } catch (err) {
      const message = 'Failed to rollback the application';
      Logger.error(message, err);
      throw err;
    }
  }
}
