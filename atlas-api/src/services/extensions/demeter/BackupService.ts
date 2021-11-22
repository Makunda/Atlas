import { Neo4JAccessLayer } from "@database/Neo4JAccessLayer";
import { wrapLogger } from "@shared/Logger";

/**
 * Communication between Atlas and Demeter / backup module
 */
export default class BackupService {
  private neo4jAl: Neo4JAccessLayer = Neo4JAccessLayer.getInstance();
  private logger = wrapLogger("Backup Service");

  /**
   * Backup an application with a specific name
   * @param application Name of the application
   * @param save Name of the save
   */
  public async backupApplication(application: string, save: string): Promise<void> {
    const req = "CALL demeter.backup.application($appName, $save);";
    const params = { appName: application, save: save };

    try {
      await this.neo4jAl.execute(req, params);
    } catch (err) {
      this.logger.error("Failed to create a backup for an application", err);
      throw new Error(`Failed to create a backup for application ${application}`);
    }
  }

  /**
   * Rollback an application to a previous save
   * @param application Name of the application
   * @param save Name of the save
   */
  public async rollbackApplication(application: string, save: string): Promise<void> {
    const req = "CALL demeter.backup.rollback($appName, $save);";
    const params = { appName: application, save: save };

    try {
      await this.neo4jAl.execute(req, params);
    } catch (err) {
      this.logger.error("Failed to rollback an application", err);
      throw new Error(`Failed to rollback an application ${application}`);
    }
  }

  /**
   * Remove a save state from an application
   * @param application Name of the application
   * @param save Name of the save
   */
  public async deleteBackup(application: string, save: string): Promise<void> {
    const req = "CALL demeter.backup.delete($appName, $save);";
    const params = { appName: application, save: save };

    try {
      await this.neo4jAl.execute(req, params);
    } catch (err) {
      this.logger.error("Failed to rollback an application", err);
      throw new Error(`Failed to delete the backup in the application ${application}`);
    }
  }

  /**
   * Get the list of save for an application
   * @param application Name of the application
   */
  public async getSaveList(application: string): Promise<string[]> {
    const req = "CALL demeter.backup.get.list($appName);";
    const params = { appName: application };

    const returnList: string[] = [];

    try {
      const results = await this.neo4jAl.execute(req, params);
      for (const record of results.records) {
        returnList.push(String(record.get(0)));
      }

      return returnList;
    } catch (err) {
      this.logger.error("Failed to get the list of saves", err);
      throw new Error(`Failed to get the list of saves ${application}`);
    }
  }
}
