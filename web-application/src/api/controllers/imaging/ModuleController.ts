import Module from '@/api/interface/imaging/Module';
import ProxyAxios from '@/utils/axios/ProxyAxios';
import Logger from '@/utils/Logger';

export default class ModuleController {
  /**
   * Retrieve the list of modules in the applications
   * @param application Name of the application
   */
  public static async getModules(application: string): Promise<Module[]> {
    const url = `/api/imaging/modules/all/${application}`;

    try {
      const res = await ProxyAxios.get<Module[]>(url);

      if (res.isError()) throw res.getErrorsAsString();
      return res.getData();
    } catch (error) {
      Logger.error('Failed to retrieve modules.', error);
      throw error;
    }
  }

  /**
   * Retrieve the list of hidden modules in the applications
   * @param application Name of the application
   */
  public static async getHiddenModules(application: string): Promise<Module[]> {
    const url = `/api/imaging/modules/all/${application}/hidden`;

    try {
      const res = await ProxyAxios.get<Module[]>(url);

      if (res.isError()) throw res.getErrorsAsString();
      return res.getData();
    } catch (error) {
      Logger.error('Failed to retrieve modules.', error);
      throw error;
    }
  }

  /**
   * Hide a module by its ID
   * @param id Id of the module to hide
   */
  public static async hideById(id: number): Promise<boolean> {
    const url = '/api/imaging/modules/hide';

    try {
      const body = { id };
      const res = await ProxyAxios.post<boolean>(url, body);

      if (res.isError()) throw res.getErrorsAsString();
      return res.getData();
    } catch (error) {
      Logger.error('Failed to hide the module.', error);
      throw error;
    }
  }

  /**
   * UnHide a module by its ID
   * @param id Id of the module to hide
   */
  public static async unHideById(id: number): Promise<boolean> {
    const url = '/api/imaging/modules/unhide';

    try {
      const body = { id };
      const res = await ProxyAxios.post<boolean>(url, body);

      if (res.isError()) throw res.getErrorsAsString();
      return res.getData();
    } catch (error) {
      const message = 'Failed to unhide the module.';
      Logger.error(message, error);
      throw new Error(message);
    }
  }

  /**
   * Delete a module by its ID
   * @param id Id of the module to hide
   */
  public static async deleteById(id: number): Promise<boolean> {
    const url = '/api/imaging/modules/delete';

    try {
      const body = { id };
      const res = await ProxyAxios.post<boolean>(url, body);

      if (res.isError()) throw res.getErrorsAsString();
      return res.getData();
    } catch (error) {
      const message = ' Failed to delete the module';
      Logger.error(message, error);
      throw new Error(message);
    }
  }

  /**
   * Update a module by its ID
   * @param id Id of the module to hide
   * @param data Module data to update
   */
  public static async updateById(id: number, data: Module): Promise<Module> {
    const url = '/api/imaging/modules/update';

    try {
      const body: any = data;
      body.id = id;

      const res = await ProxyAxios.put<Module>(url, body);
      if (res.isError()) throw res.getErrorsAsString();
      return res.getData();
    } catch (error) {
      const message = ' Failed to update the module';
      Logger.error(message, error);
      throw new Error(message);
    }
  }

  /**
   * Merge two modules by their ID
   * @param {number} application Name of the application
   * @param {number} idSource Id of the module to be merge
   * @param {number} idDest Id of the destination module
   */
  public static async mergeModules(
    application: string,
    idSource: number,
    idDest: number,
  ): Promise<Module> {
    const url = '/api/imaging/modules/merge';

    try {
      const body: any = {
        application,
        idSource,
        idDest,
      };

      const res = await ProxyAxios.post<Module>(url, body);

      if (res.isError()) throw res.getErrorsAsString();
      return res.getData();
    } catch (error) {
      const message = ' Failed to merge the module';
      Logger.error(message, error);
      throw new Error(message);
    }
  }
}
