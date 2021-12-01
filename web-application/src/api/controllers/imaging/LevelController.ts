import Level from "@/api/interface/imaging/Level.interface";
import ProxyAxios from "@/utils/axios/ProxyAxios";
import Logger from "@/utils/Logger";

export default class LevelController {
  /**
   * Retrieve the list of root levels in the applications
   * @param application Name of the application
   */
  public static async getRootLevels(application: string): Promise<Level[]> {
    const url = `/api/imaging/levels/roots/${application}`;

    try {
      const res = await ProxyAxios.get<Level[]>(url);

      if (res.isError()) throw res.getErrorsAsString();
      return res.getData();
    } catch (error) {
      Logger.error(` Failed to retrieve root levels.`, error);
      throw error;
    }
  }

  /**
   * Find levels with a specific depth in the application
   * @param application Name of the application
   * @param depth Depth of th level
   */
  public static async findLevelByDepth(
    application: string,
    depth: number
  ): Promise<Level[]> {
    const url = `/api/imaging/levels/byDepth/${application}/${depth}`;

    try {
      const res = await ProxyAxios.get<Level[]>(url);

      if (res.isError()) throw res.getErrorsAsString();
      return res.getData();
    } catch (error) {
      Logger.error(`Failed to retrieve dy depth levels.`, error);
      throw error;
    }
  }

  /**
   * Merge a level into a level 5
   * @param application Name of the application
   * @param sourceId Id of the source level
   * @param destinationId Id of the destination level 5
   */
  public static async mergeLevel(
    application: string,
    sourceId: number,
    destinationId: number
  ): Promise<number> {
    const url = `/api/imaging/levels/merge/${application}`;

    try {
      const res = await ProxyAxios.post<number>(url, {
        sourceId: sourceId,
        destinationId: destinationId
      });
      if (res.isError()) throw res.getErrorsAsString();
      return res.getData();
    } catch (error) {
      Logger.error(`Failed to merge levels.`, error);
      throw error;
    }
  }

  /**
   * Return the list of the level containing a certain string
   * @param application Name of the application
   * @param name Name to search
   */
  public static async findLevelByName(
    application: string,
    name: string
  ): Promise<Level[]> {
    const url = `/api/imaging/levels/find/${application}/name`;

    try {
      const body = { name: name };
      const res = await ProxyAxios.post<Level[]>(url, body);

      if (res.isError()) throw res.getErrorsAsString();
      return res.getData();
    } catch (error) {
      Logger.error(`Failed to retrieve root levels.`, error);
      throw error;
    }
  }

  /**
   * Fetch children of a level
   * @param application Name of the application concerned by the search
   * @param level Parent level
   */
  public static async fetchChildren(
    application: string,
    level: Level
  ): Promise<Level[]> {
    const url = `/api/imaging/levels/attached/${application}/${level._id}`;

    try {
      const res = await ProxyAxios.get<Level[]>(url);

      if (res.isError()) throw res.getErrorsAsString();
      return res.getData();
    } catch (error) {
      Logger.error(`Failed to retrieve attached levels.`, error);
      throw error;
    }
  }

  /**
   * Fetch the parent level of the application
   * @param application Name of the application
   * @param level
   */
  public static async fetchParent(
    application: string,
    level: Level
  ): Promise<Level> {
    const url = `/api/imaging/levels/parent/${application}/${level._id}`;

    try {
      const res = await ProxyAxios.get<Level>(url);

      if (res.isError()) throw res.getErrorsAsString();
      return res.getData();
    } catch (error) {
      Logger.error(`Failed to retrieve attached levels.`, error);
      throw error;
    }
  }

  /**
   * Create a level for a specific application
   * @param application Name of the application
   * @param parentLevelID
   * @param level
   */
  public static async createLevel(
    application: string,
    parentLevelID: number,
    level: Level
  ): Promise<Level> {
    const url = `/api/imaging/levels/create/${application}`;

    try {
      const body: any = level;
      body.parentId = parentLevelID;

      const res = await ProxyAxios.post<Level>(url, body);

      if (res.isError()) throw res.getErrorsAsString();
      return res.getData();
    } catch (error) {
      Logger.error(`Failed to create new levels.`, error);
      throw error;
    }
  }

  public static async updateLevel(
    application: string,
    level: Level
  ): Promise<Level> {
    const url = `/api/imaging/levels/update/${application}/${level._id}`;

    try {
      const body: any = level;

      const res = await ProxyAxios.put<Level>(url, body);

      if (res.isError()) throw res.getErrorsAsString();
      return res.getData();
    } catch (error) {
      Logger.error(`Failed to create new levels.`, error);
      throw error;
    }
  }

  /**
   * Retrieve the list of root levels in the applications
   * @param application Name of the application
   * @param depth Depth of the application
   */
  public static async getHiddenLevelByDepth(
    application: string,
    depth: number
  ): Promise<Level[]> {
    const url = `/api/imaging/levels/hidden/byDepth/${application}/${depth}`;

    try {
      const res = await ProxyAxios.get<Level[]>(url);

      if (res.isError()) throw res.getErrorsAsString();
      return res.getData();
    } catch (error) {
      Logger.error(`Failed to retrieve root levels.`, error);
      throw error;
    }
  }

  /**
   * Display a level that was previously hidden
   * @param application Name of the application
   * @param level Hidden level to display
   */
  public static async unhideLevel(
    application: string,
    level: Level
  ): Promise<Level> {
    const url = `/api/imaging/levels/unhide/${application}`;

    try {
      const body = {
        levelId: level._id
      };

      const res = await ProxyAxios.post<Level>(url, body);

      if (res.isError()) throw res.getErrorsAsString();
      return res.getData();
    } catch (error) {
      Logger.error(`Failed to unhide a level.`, error);
      throw error;
    }
  }

  /**
   * Hide a level in the user interface
   * @param application Name of the application
   * @param level Level to hide
   */
  public static async hideLevel(
    application: string,
    level: Level
  ): Promise<Level> {
    const url = `/api/imaging/levels/hide/${application}`;

    try {
      const body = {
        levelId: level._id
      };

      const res = await ProxyAxios.post<Level>(url, body);

      if (res.isError()) throw res.getErrorsAsString();
      return res.getData();
    } catch (error) {
      Logger.error(`Failed to hide a level.`, error);
      throw error;
    }
  }
}
