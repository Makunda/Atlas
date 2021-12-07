import { CandidateResults } from "@/api/interface/extensions/demeter/CandidateResults";
import { Level5Group } from "@/api/interface/extensions/demeter/Level";
import ProxyAxios from "@/utils/axios/ProxyAxios";
import Logger from "@/utils/Logger";

export class LevelController {
  /**
   * Group object in a specific application
   * @param applicationName Name of the application
   */
  public static async executeGrouping(
    applicationName: string
  ): Promise<number> {
    const url = `/api/demeter/levels/${applicationName}/group`;

    try {
      const res = await ProxyAxios.post<number>(url);

      if (res.isError()) throw res.getErrorsAsString();
      return res.getData();
    } catch (error) {
      Logger.error(
        `Failed to group nodes in application ${applicationName}.`,
        error
      );
      throw error;
    }
  }

  /**
   * Retrieve of the level 5 specific to one application
   * @param applicationName Name of the application
   */
  public static async getCandidates(
    applicationName: string
  ): Promise<CandidateResults[]> {
    const url = `/api/demeter/levels/${applicationName}/candidates`;

    try {
      const res = await ProxyAxios.get<CandidateResults[]>(url);
      if (res.isError()) throw res.getErrorsAsString();

      return res.getData();
    } catch (error) {
      Logger.error(
        `Failed to retrieve levels of application ${applicationName}.`,
        error
      );
      throw error;
    }
  }

  /**
   * Retrieve of the level 5 specific to one application
   * @param applicationName Name of the application
   */
  public static async getAllLevels(
    applicationName: string
  ): Promise<Level5Group[]> {
    const url = `/api/demeter/levels/${applicationName}/all`;

    try {
      const res = await ProxyAxios.get<Level5Group[]>(url);
      if (res.isError()) throw res.getErrorsAsString();

      return res.getData();
    } catch (error) {
      Logger.error(
        `Failed to retrieve levels in application ${applicationName}.`,
        error
      );
      throw error;
    }
  }

  /**
   * Retrieve of the level 5 specific to one application
   * @param applicationName Name of the application
   */
  public static async getDemeterLevels(
    applicationName: string
  ): Promise<Level5Group[]> {
    if (applicationName == "") return;

    const url = `/api/demeter/levels/${applicationName}/grouped`;

    try {
      const res = await ProxyAxios.get<Level5Group[]>(url);

      if (res.isError()) throw res.getErrorsAsString();
      return res.getData();
    } catch (error) {
      Logger.error(
        `Failed to reach the API : ${url}. Failed to retrieve grouped levels.`,
        error
      );
      throw error;
    }
  }

  /**
   * Undo the grouping of a specific level in an application
   * @param applicationName Name of the application targeted by the undo
   * @param groupName Name of the group
   */
  public static async undoGroupedLevel5(
    applicationName: string,
    groupName: string
  ): Promise<boolean> {
    const url = `/api/demeter/levels/${applicationName}/undo`;

    try {
      const res = await ProxyAxios.post<boolean>(url, { level: groupName });

      if (res.isError()) throw res.getErrorsAsString();
      return res.getData();
    } catch (error) {
      Logger.error(
        `Failed to undo a grouped level in application ${applicationName}.`,
        error
      );
      throw error;
    }
  }

  /**
   * Undo all the demeter level in one application
   * @param applicationName
   */
  public static async undoAllGroupedLevel5(
    applicationName: string
  ): Promise<boolean> {
    const url = `/api/demeter/levels/${applicationName}/undo/all`;

    try {
      const res = await ProxyAxios.post<boolean>(url);

      if (res.isError()) throw res.getErrorsAsString();
      return res.getData();
    } catch (error) {
      console.error(
        `Failed to reach the API : ${url}. Failed to undo akk grouped levels.`,
        error
      );
      throw error;
    }
  }

  /**
   * Rename
   * @param applicationName Name of the application
   * @param groupName Old name of the group
   * @param newName New name of the module
   */
  public static async renameLevel(
    applicationName: string,
    groupName: string,
    newName: string
  ): Promise<boolean> {
    const url = `/api/demeter/levels/${applicationName}/rename`;

    try {
      const res = await ProxyAxios.post<boolean>(url, {
        level: groupName,
        newLevel: newName
      });
      if (res.isError()) throw res.getErrorsAsString();

      return res.getData();
    } catch (error) {
      Logger.error(
        `Failed to rename a grouped level in application ${applicationName}.`,
        error
      );
      throw error;
    }
  }
}
