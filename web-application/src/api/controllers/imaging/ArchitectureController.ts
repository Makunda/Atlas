import { error } from 'neo4j-driver';
import Archimodel from '@/api/interface/imaging/ArchiModel';
import ProxyAxios from '@/utils/axios/ProxyAxios';
import Logger from '@/utils/Logger';

export default class ArchitectureController {
  /**
   * Retrieve the list of architecture models in the applications
   * @param application Name of the application
   */
  public static async getArchitectures(
    application: string,
  ): Promise<Archimodel[]> {
    const url = `/api/imaging/architectures/all/${application}`;

    try {
      const res = await ProxyAxios.get<Archimodel[]>(url);

      if (res.isError()) throw res.getErrorsAsString();
      return res.getData();
    } catch (error) {
      Logger.error('Failed to retrieve architecture elements.', error);
      throw error;
    }
  }

  /**
   * Display architecture element using its id
   * @param id Id of the architecture element
   * @param type Type of the architecture element
   */
  public static async hideArchitectureElement(
    id: number,
    type: string,
  ): Promise<void> {
    const url = `/api/imaging/architectures/${type}/hide`;

    try {
      const res = await ProxyAxios.post(url, { id });
      if (res.isError()) throw res.getErrorsAsString();
    } catch (error) {
      console.error(
        `Failed to reach the API : ${url}. Failed to hide architecture element.`,
        error,
      );
      throw error;
    }
  }

  /**
   * Delete an architecture element using its id
   * @param application Name of the application
   * @param id Id of the architecture element
   * @param type Type of the architecture element
   */
  public static async deleteArchitectureElement(
    application: string,
    id: number,
    type: string,
  ): Promise<void> {
    const url = `/api/imaging/architectures/${type}/delete`;

    try {
      const res = await ProxyAxios.post(url, {
        id,
        application,
      });

      if (res.isError()) throw res.getErrorsAsString();
    } catch (error) {
      console.error(
        `Failed to reach the API : ${url}. Failed to delete architecture element.`,
        error,
      );
      throw error;
    }
  }

  /**
   * Generate Modules definition from an Architecture view
   * @param {string} application Name of the application
   * @param {number} id Id of the Architecture module
   */
  public static async generateModulesFromArchitecture(
    application: string,
    id: number,
  ): Promise<void> {
    const url = '/api/imaging/architectures/archimodel/generate/modules';

    try {
      const res = await ProxyAxios.post<string[]>(url, { id });

      if (res.isError()) {
        throw res.getErrorsAsString();
      } else {
        // Save as text file the result
        const queries = res.getData();

        const pom = document.createElement('a');
        pom.setAttribute(
          'href',
          `data:text/plain;charset=utf-8,${
            encodeURIComponent(queries.join('\n'))}`,
        );
        pom.setAttribute('download', `Module_definition_${application}.txt`);

        if (document.createEvent) {
          const event = document.createEvent('MouseEvents');
          event.initEvent('click', true, true);
          pom.dispatchEvent(event);
        } else {
          pom.click();
        }
      }
    } catch (error) {
      console.error(
        `Failed to reach the API : ${url}. Failed to generate module from architecture views.`,
        error,
      );
      throw error;
    }
  }

  /**
   * Display architecture element using its id
   * @param id Id of the architecture element
   * @param type Type of the architecture element
   */
  public static async displayArchitectureElement(
    id: number,
    type: string,
  ): Promise<void> {
    const url = `/api/imaging/architectures/${type}/display`;

    try {
      const res = await ProxyAxios.post(url, { id });
      if (res.isError()) throw res.getErrorsAsString();
    } catch (error) {
      Logger.error('Failed to display architecture element.', error);
      throw error;
    }
  }

  /**
   * Modify architecture element using its id
   * @param id Id of the architecture element
   * @param type Type of the architecture element
   * @param data Body to send in the query
   */
  public static async updateArchitectureElement(
    id: number,
    type: string,
    data: any,
  ): Promise<void> {
    const url = `/api/imaging/architectures/${type}/update`;

    try {
      const params: any = data;
      params.id = id;

      const res = await ProxyAxios.post(url, params);
      if (res.isError()) throw res.getErrorsAsString();
    } catch (error) {
      console.error(
        `Failed to reach the API : ${url}. Failed to update architecture element.`,
        error,
      );
      throw error;
    }
  }

  /**
   * Display an archimodel & all its children
   * @param id Id of the architecture element
   */
  public static async displayCompleteArchimodelElement(
    id: number,
  ): Promise<void> {
    const url = '/api/imaging/architectures/archimodel/display/complete';

    try {
      const res = await ProxyAxios.post(url, { id });
      if (res.isError()) throw res.getErrorsAsString();
    } catch (error) {
      Logger.error('Failed to display architectures.', error);
      throw error;
    }
  }

  /**
   * Duplicate an existing architecture and assign a new name
   * @param id Id of the architecture element
   * @param name Name of the architecture
   */
  public static async duplicateArchiModel(
    id: number,
    name: string,
  ): Promise<void> {
    const url = '/api/imaging/architectures/archimodel/duplicate/byId';

    try {
      const res = await ProxyAxios.post(url, { id, name });
      if (res.getErrorsAsString()) throw error;
    } catch (error) {
      console.error(
        `Failed to reach the API : ${url}. Failed to duplicate architecture element.`,
        error,
      );
      throw error;
    }
  }

  /**
   * Duplicate an existing architecture and assign a new name
   * @param id Id of the architecture element
   * @param application Name of the application
   */
  public static async groupUnassigned(
    id: number,
    application: string,
  ): Promise<void> {
    const url = '/api/imaging/architectures/archimodel/group/unassigned';

    try {
      const res = await ProxyAxios.post(url, {
        id,
        application,
      });

      if (res.getErrorsAsString()) throw error;
    } catch (error) {
      Logger.error(
        `Failed to reach the API : ${url}. Failed to duplicate architecture element.`,
        error,
      );
      throw error;
    }
  }

  /**
   * Duplicate an existing architecture and assign a new name
   * @param name Name of the architecture to replicated
   * @param application Name of the application
   */
  public static async duplicateTaxonomy(
    name: string,
    application: string,
  ): Promise<void> {
    const url = '/api/imaging/architectures/archimodel/duplicate/taxonomy';

    try {
      const res = await ProxyAxios.post(url, {
        name,
        application,
      });
      if (res.getErrorsAsString()) throw error;
    } catch (error) {
      Logger.error('Failed to duplicate CAST Taxonomy.', error);
      throw error;
    }
  }
}
