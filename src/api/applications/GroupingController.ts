import { int, Node, QueryResult } from "neo4j-driver";
import { Neo4JAccessLayer } from "../Neo4jAccessLayer";

export interface GroupRecord {
  application: string;
  tags: string[];
  countTag: number;
}

export interface Level5Group {
  id: number;
  name: string;
  application: string;
  numObjects: number;
  demeterGroup: boolean;
}


export interface ModuleGroup {
  id: number;
  name: string;
  application: string;
  numObjects: number;
  demeterGroup: boolean;
}

/**
 * Controller managing the Demeter Groups in the database
 */
export class GroupingController {
  private static neo4jal: Neo4JAccessLayer = Neo4JAccessLayer.getInstance();
  private static tagPrefix = "Dm_gl_";

  /**
   * Get Demeter Groups in every application present in the Database
   */
  public static async getGroupingCandidates(): Promise<GroupRecord[]> {
    const request = `MATCH (app:Application) 
      WITH [app.Name] as appName 
      MATCH (o:Object) WHERE EXISTS(o.Tags) AND any( x IN o.Tags WHERE x CONTAINS '${GroupingController.tagPrefix}' ) 
      AND any( x IN LABELS(o) WHERE x IN appName) 
      RETURN DISTINCT [ x IN LABELS(o) WHERE x IN appName][0] as application , [x IN o.Tags WHERE x CONTAINS '${GroupingController.tagPrefix}'] as tags,  COUNT(o) as numTags`;

    const results: QueryResult = await this.neo4jal.execute(request);

    const appNames: GroupRecord[] = [];
    for (let i = 0; i < results.records.length; i++) {
      const singleRecord = results.records[i];
      const appName = singleRecord.get("application");
      const tags = singleRecord.get("tags");
      const countTag = singleRecord.get("numTags");

      appNames.push({ application: appName, tags: tags, countTag: countTag });
    }

    return appNames;
  }

  /**
   * Return the Demeter groups detected for a specific application
   * @param application Name of the application
   */
  public static async getApplicationGroupingCandidates(
    application: string
  ): Promise<GroupRecord | null> {
    const request = `MATCH (app:Application) WHERE app.Name='${application}' 
      WITH [app.Name] as appName 
      MATCH (o:Object) WHERE EXISTS(o.Tags) AND any( x IN o.Tags WHERE x CONTAINS '${GroupingController.tagPrefix}' ) AND any( x IN LABELS(o) WHERE x IN appName) 
      RETURN DISTINCT [ x IN LABELS(o) WHERE x IN appName][0] as application , [x IN o.Tags WHERE x CONTAINS '${GroupingController.tagPrefix}'] as tags,  COUNT(o) as numTags`;

    const results: QueryResult = await this.neo4jal.execute(request);

    if (results.records.length == 0) {
      console.log("No result for application with name : " + application);
      return null;
    }

    const singleRecord = results.records[0];

    const appName = singleRecord.get("application");
    const tags = singleRecord.get("tags");
    const countTag = singleRecord.get("numTags");

    return { application: appName, tags: tags, countTag: countTag };
  }

  /**
   * Group Obejct in a specific application
   * @param application
   */
  public static async executeGrouping(application: string): Promise<void> {
    const request = `CALL demeter.group.levels("${application}")`;

    const results: QueryResult = await this.neo4jal.execute(request);

    const levels: Node[] = [];
    for (let i = 0; i < results.records.length; i++) {
      const singleRecord: any = results.records[i];
      console.log("Received node ", singleRecord);
      levels.push(singleRecord);
    }
  }

  /**
   * Get Demeter Groups in a specific application present in the Database
   */
  public static async getDemeterGroupedLevels5(
    applicationName: string
  ): Promise<Level5Group[]> {
    const request = `MATCH (app:Application) WHERE app.Name='${applicationName}' 
      WITH [app.Name] as appName  
      MATCH (l:Level5:${applicationName})-[:Aggregates]->(o:Object) WHERE l.FullName=~'.*##Dml_(.*)'
      RETURN ID(l) as id, l.Name as groupName, COUNT(o) as numObjects ;`;

    const results: QueryResult = await this.neo4jal.execute(request);

    const appNames: Level5Group[] = [];
    for (let i = 0; i < results.records.length; i++) {
      const singleRecord = results.records[i];

      const id = int(singleRecord.get("id")).toNumber();
      const groupName = singleRecord.get("groupName");
      const numObjects = singleRecord.get("numObjects");

      appNames.push({
        id: id,
        name: groupName,
        application: applicationName,
        numObjects: numObjects,
        demeterGroup: true
      });
    }

    return appNames;
  }

  /**
   * Get Demeter Module in a specific application present in the Database
   */
  public static async getDemeterModules(
    applicationName: string
  ): Promise<ModuleGroup[]> {
    const request = `MATCH (app:Application) WHERE app.Name='${applicationName}' 
      WITH [app.Name] as appName  
      MATCH (l:Module:${applicationName}) WHERE l.AipId=-1
      RETURN ID(l) as id, l.Name as groupName, l.Count as numObjects ;`;

    const results: QueryResult = await this.neo4jal.execute(request);

    const modules: ModuleGroup[] = [];
    for (let i = 0; i < results.records.length; i++) {
      const singleRecord = results.records[i];

      const id = int(singleRecord.get("id")).toNumber();
      const groupName = singleRecord.get("groupName");
      const numObjects = singleRecord.get("numObjects");

      modules.push({
        id: id,
        name: groupName,
        application: applicationName,
        numObjects: numObjects,
        demeterGroup: true
      });
    }

    return modules;
  }

  /**
   * Retrieve of the level 5 specific to one application
   * @param applicationName Name of the application
   */
  public static async getAllLevels(
    applicationName: string
  ): Promise<Level5Group[]> {
    const request = `MATCH (app:Application) WHERE app.Name='${applicationName}' 
      WITH [app.Name] as appName  
      MATCH (l:Level5:${applicationName})-[:Aggregates]->(o:Object) 
      RETURN ID(l) as id, l.Name as groupName, l.FullName as fullName, COUNT(o) as numObjects ;`;

    const results: QueryResult = await this.neo4jal.execute(request);

    const appNames: Level5Group[] = [];
    for (let i = 0; i < results.records.length; i++) {
      const singleRecord = results.records[i];

      const id = int(singleRecord.get("id")).toNumber();
      const groupName = singleRecord.get("groupName");
      const numObjects = int(singleRecord.get("numObjects")).toNumber();
      const fullName: string = singleRecord.get("fullName");

      const isDemeterGroup = fullName.includes("##Dml_");

      appNames.push({
        id: id,
        name: groupName,
        application: applicationName,
        numObjects: numObjects,
        demeterGroup: isDemeterGroup
      });
    }

    return appNames;
  }

  /**
   * Undo the grouping of a specific level in an application
   * @param applicationName Name of the application targeted by the undo
   * @param groupName Name of the group
   */
  public static async undoGroupedLevel5(
    applicationName: string,
    groupName: string
  ): Promise<string> {
    const request = `CALL demeter.undo.oneLevel('${applicationName}', '${groupName}');`;

    const results: QueryResult = await this.neo4jal.execute(request);
    const retMsg: string = results.records[0].get(0);

    return retMsg;
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
    const request = `CALL demeter.rename.level('${applicationName}', '${groupName}', '${newName}');`;

    const results: QueryResult = await this.neo4jal.execute(request);
    const retMsg: boolean = results.records[0].get(0);

    return retMsg;
  }
}
