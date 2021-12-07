import { Neo4JAccessLayer } from "@database/Neo4JAccessLayer";
import { wrapLogger } from "@shared/Logger";
import BackupNodeImpl from "@entities/extensions/demeter/BackupNodeImpl";
import BackupNode from "@interfaces/extensions/demeter/BackupNode";

/**
 * Communication between Atlas and Demeter / backup module
 */
export default class BackupService {
  private neo4jAl: Neo4JAccessLayer = Neo4JAccessLayer.getInstance();
  private logger = wrapLogger("Backup Service");

  /**
   * Backup an application with a specific name
   * @param application Name of the application
   * @param name Name of the backup
   * @param description Description
   * @param timestamp Timestamp as a string
   * @param picture Picture
   */
  public async backupApplication(application: string,
                                 name: string,
                                 description: string,
                                 timestamp: number,
                                 picture: string,
  ): Promise<void> {
    const req = "CALL demeter.backup.application($application, $name, $description, $timestamp, $picture);";
    const params = {
      application: application,
      name: name,
      description: description,
      timestamp: timestamp,
      picture: picture
    };

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
  public async deleteBackup(application: string, id: number): Promise<void> {
    const req = "CALL demeter.backup.delete($appName, $id);";
    const params = { appName: application, id: id };

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
  public async getSaveList(application: string): Promise<BackupNode[]> {
    const req = "CALL demeter.backup.get.list($appName);";
    const params = { appName: application };

    const returnList: BackupNode[] = [];

    try {
      const results = await this.neo4jAl.execute(req, params);
      for (const record of results.records) {
        returnList.push(BackupNodeImpl.fromRecord(record));
      }

      return returnList;
    } catch (err) {
      this.logger.error("Failed to get the list of saves", err);
      throw new Error(`Failed to get the list of saves ${application}`);
    }
  }
}
