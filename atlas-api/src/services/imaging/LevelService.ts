import { logger } from "@shared/Logger";
import { int, Node, QueryResult } from "neo4j-driver";
import { Neo4JAccessLayer } from "@database/Neo4JAccessLayer";
import HttpException from "@exceptions/HttpException";
import { Level, LevelNode } from "@interfaces/imaging/Level";
import TagService from "@services/configuration/TagService";

class LevelService {
  private static HIDDEN_LEVEL_LABEL_PREFIX = "HiddenL";
  private neo4jAl: Neo4JAccessLayer = Neo4JAccessLayer.getInstance();

  /**
   * Create a whole new level in Imaging
   * @param application Name of the application concerned by this level creation
   * @param parentId Id of the parent node ( provide -1 for no parent, in that case the level will be forced as level 1 )
   * @param level Level to create
   */
  public async createLevel(application: string, parentId: number, level: Level): Promise<Level> {
    try {
      if (level.level < 3) {
        throw new Error("Cannot created a level under level 3.");
      }

      const node = new LevelNode(level);
      const req = node.getMergeRequest(application);
      const results: QueryResult = await this.neo4jAl.execute(req);

      if (!results.records || results.records.length === 0) {
        throw new Error(`The request : '${req}'. Returned no result.`);
      }

      const singleRecord = results.records[0];
      const nodeObj = singleRecord.get("node") as Node;
      const levelObj = LevelNode.fromNode(nodeObj);

      // Merge relationship with parent only if valid
      const levelName = `Level${level.level}`;
      const parentLevelName = `Level${level.level - 1}`;

      const mergeReq = `MATCH (p:${parentLevelName}:\`${application}\`), (c:${levelName}:\`${application}\`) 
                WHERE ID(p)=$parentID AND ID(c)=$levelID
                MERGE (p)-[:Aggregates]->(c)
                SET c.FullName = p.FullName + "##" + c.Name
                SET c.Shade = p.Shade + "##" + c.Color
                RETURN DISTINCT p as parent`;

      await this.neo4jAl.executeWithParameters(mergeReq, {
        parentID: int(parentId),
        levelID: int(levelObj._id),
      });

      return levelObj;
    } catch (err) {
      logger.error("LEVEL SERVICE :: Failed to create level.", err);
      throw new HttpException(500, "Internal error");
    }
  }

  /**
   * Get all the level with a certain depth ( from 1 to 5 ) and return a list of them
   * @param application Name of the application
   * @param depth Depth of the level to search
   */
  public async getLevelsByDepth(application: string, depth: number): Promise<Level[]> {
    try {
      const levelName = `Level${depth}`;
      const hiddenLevelName = `${LevelService.HIDDEN_LEVEL_LABEL_PREFIX}${depth}`;

      // Retrieve level and hidden levels
      const request = `MATCH (n:\`${application}\`) 
            WHERE n:${levelName} OR n:${hiddenLevelName} 
            RETURN DISTINCT n as node , 
            CASE WHEN n:${levelName} THEN false ELSE true END as hidden ORDER BY n.Name;`;

      const results: QueryResult = await this.neo4jAl.execute(request);

      const levels: Level[] = [];
      for (const singleRecord of results.records) {
        try {
          const level = singleRecord.get("node");
          const hidden = Boolean(singleRecord.get("hidden"));

          const nodeObj = singleRecord.get("node") as Node;
          const levelObj = LevelNode.fromNode(nodeObj, hidden);

          levels.push(levelObj);
        } catch (e) {
          logger.error(`Failed to convert record to level. Record [${String(singleRecord.get("node"))}]`, e);
        }
      }

      return levels;
    } catch (err) {
      logger.error(`LEVEL SERVICE :: Failed to get the levels with depth :${depth} of application ${application}.`, err);
      throw new HttpException(500, "Internal error");
    }
  }


  /**
   * Fetch a level using its ID
   * @param application Name of the application
   * @param levelID ID of the level
   */
  public async findLevelById(application: string, levelID: number): Promise<Level> {
    try {
      const request = `MATCH (n:\`${application}\`) 
            WHERE (
            n:Level1 
            OR n:Level2 
            OR n:Level3 
            OR n:Level4 
            OR n:Level5 
            OR n:${LevelService.HIDDEN_LEVEL_LABEL_PREFIX}1
            OR n:${LevelService.HIDDEN_LEVEL_LABEL_PREFIX}2
            OR n:${LevelService.HIDDEN_LEVEL_LABEL_PREFIX}3
            OR n:${LevelService.HIDDEN_LEVEL_LABEL_PREFIX}4
            OR n:${LevelService.HIDDEN_LEVEL_LABEL_PREFIX}5
            )
            AND ID(n)=$idLevel 
            RETURN n as node;`;

      const results: QueryResult = await this.neo4jAl.executeWithParameters(request, { idLevel: int(levelID) });
      if (!results.records || results.records.length == 0) return null;

      const node = results.records[0].get("node") as Node;
      return LevelNode.fromNode(node);
    } catch (err) {
      logger.error(`LEVEL SERVICE :: Failed to get the levels with id :${levelID} of application ${application}.`, err);
      throw new HttpException(500, "Internal error");
    }
  }

  /**
   * Find a level using its name
   * @param application
   * @param name
   */
  public async findLevelsByName(application: string, name: string): Promise<Level[]> {
    try {
      const request = `MATCH (n:\`${application}\`) 
            WHERE ( 
            n:Level1 
            OR n:Level2 
            OR n:Level3 
            OR n:Level4 
            OR n:Level5 
            OR n:${LevelService.HIDDEN_LEVEL_LABEL_PREFIX}1
            OR n:${LevelService.HIDDEN_LEVEL_LABEL_PREFIX}2
            OR n:${LevelService.HIDDEN_LEVEL_LABEL_PREFIX}3
            OR n:${LevelService.HIDDEN_LEVEL_LABEL_PREFIX}4
            OR n:${LevelService.HIDDEN_LEVEL_LABEL_PREFIX}5
            )
            AND n.Name CONTAINS $name
            RETURN n as node;`;

      const results: QueryResult = await this.neo4jAl.executeWithParameters(request, { name: name });
      if (!results.records || results.records.length == 0) return null;

      const levels: Level[] = [];
      for (let i = 0; i < results.records.length; i++) {
        const singleRecord = results.records[i];

        const nodeObj = singleRecord.get("node") as Node;
        const levelObj = LevelNode.fromNode(nodeObj);

        levels.push(levelObj);
      }

      return levels;
    } catch (err) {
      logger.error(`LEVEL SERVICE :: Failed to get the levels with name containing ${name} in application ${application}.`, err);
      throw new HttpException(500, "Internal error");
    }
  }

  /**
   * Merge a Level ( 1 to 5 ) into a Level 5
   * @param application Name of the application
   * @param sourceLevelId ID of the source level
   * @param targetLevelId Id of the level 5 ( Must point to a Level5 )
   */
  public async mergeLevel(application: string, sourceLevelId: number, targetLevelId: number): Promise<number> {
    try {
      const demeterPrefix = await new TagService().getCustomLevelTag();

      const req = `MATCH (lSource:\`${application}\`) WHERE ID(lSource)=$sourceLevelId 
            WITH lSource 
            MATCH (lDest:\`${application}\`:Level5) WHERE ID(lDest)=$targetLevelId 
            WITH lSource, lDest 
            MATCH (lSource)-[:Aggregates*1..5]->(obj:Object) 
            SET obj.Tags = CASE WHEN obj.Tags IS NULL THEN [$dmPrefix+lDest.Name] 
            ELSE obj.Tags + ($dmPrefix+lDest.Name) END 
            RETURN COUNT(DISTINCT obj) as count`;
      const params = {
        sourceLevelId: Number(sourceLevelId),
        targetLevelId: Number(targetLevelId),
        dmPrefix: String(demeterPrefix),
      };

      const res: QueryResult = await this.neo4jAl.executeWithParameters(req, params);
      if (!res.records || res.records.length <= 0) {
        return 0;
      }

      return int(res.records[0].get("count")).toNumber();
    } catch (err) {
      logger.error("LEVEL SERVICE :: Failed to merge levels into another.", err);
      throw new HttpException(500, "Internal error");
    }
  }

  /**
   * Get the children level attached to a parent
   * @param application
   * @param levelID Id of the level to search
   */
  public async getChildrenLevels(application: string, levelID: number): Promise<Level[]> {
    try {
      const level = await this.findLevelById(application, levelID);

      if (level == null || level.level >= 5) return []; // Ignore above level 4

      const childLevelName = `Level${level.level + 1}`;
      const hiddenChildLevelName = `${LevelService.HIDDEN_LEVEL_LABEL_PREFIX}${level.level + 1}`;

      const request = `MATCH (p:\`${application}\`)-[:Aggregates]->(n:\`${application}\`)  
            WHERE ID(p)=$idLevel AND ( n:${childLevelName} OR n:${hiddenChildLevelName} )
            RETURN n as node,
            CASE WHEN n:${childLevelName} THEN false ELSE true END as hidden 
            ORDER BY n.Name;`;

      const results: QueryResult = await this.neo4jAl.executeWithParameters(request, { idLevel: levelID });

      const levels: Level[] = [];
      for (let i = 0; i < results.records.length; i++) {
        const singleRecord = results.records[i];

        const hidden = Boolean(singleRecord.get("hidden"));

        const nodeObj = singleRecord.get("node") as Node;
        const levelObj = LevelNode.fromNode(nodeObj, hidden);

        levels.push(levelObj);
      }
      return levels;
    } catch (err) {
      logger.error(`LEVEL SERVICE :: Failed to get the children levels of level with id : ${levelID} of application ${application}.`, err);
      throw new HttpException(500, "Internal error");
    }
  }

  /**
   * Get the parent level of a level
   * @param application Name of the application
   * @param levelID Id of the level
   */
  public async getParentLevel(application: string, levelID: number): Promise<Level> {
    try {
      const level = await this.findLevelById(application, levelID);

      if (level == null || level.level <= 1) return null; // Ignore under level 1

      const levelName = `Level${level.level}`;
      const parentLevel = `Level${level.level - 1}`;
      const request = `MATCH (p:${parentLevel}:\`${application}\`)-[:Aggregates]->(n:${levelName}:\`${application}\`)  
            WHERE ID(n)=$idLevel 
            RETURN p as node LIMIT 1;`;

      const results: QueryResult = await this.neo4jAl.executeWithParameters(request, { idLevel: levelID });

      if (!results || results.records.length == 0) return null;

      const nodeObj = results.records[0].get("node") as Node;
      const levelObj = LevelNode.fromNode(nodeObj);

      return levelObj;
    } catch (err) {
      logger.error(`LEVEL SERVICE :: Failed to get the parent level of level with id : ${levelID} of application ${application}.`, err);
      throw new HttpException(500, "Internal error");
    }
  }

  /**
   * Refresh a level, their count and re-assign objects if necessary
   * @param application
   * @param level
   */
  public async refreshLevel(application: string, level: Level) {
    const levelName = `Level${level.level}`;

    // For level 5 only recount the objects and also re-assign objects level
    if (level.level == 5) {
      let request = `MATCH (p:${levelName}:\`${application}\`)-[]->(o:Object:\`${application}\`)  
            WHERE ID(p)=$idLevel 
            WITH p, COUNT(o) as countNode 
            SET p.Count = countNode;`;
      await this.neo4jAl.executeWithParameters(request, { idLevel: level._id });

      // Reassign objects
      request = `MATCH (p:${levelName}:\`${application}\`)-[]->(o:Object:\`${application}\`)  
            WHERE ID(p)=$idLevel 
            SET o.Level = p.Name;`;
      await this.neo4jAl.executeWithParameters(request, { idLevel: level._id });
    } else {
      const childrenLevelName = `Level${level.level + 1}`;
      const request = `MATCH (p:${levelName}:\`${application}\`)-[]->(l:\`${childrenLevelName}\`)  
            WHERE ID(p)=$idLevel 
            WITH p, SUM(l.Count) as countNode 
            SET p.Count = countNode;`;
      await this.neo4jAl.executeWithParameters(request, { idLevel: level._id });
    }

    // Recount level above
  }

  /**
   * Update a level
   * @param application Name of the application concerned by the change
   * @param levelID Id of the level to change
   * @param level New Level
   */
  public async updateLevel(application: string, level: Level): Promise<Level> {
    try {
      // find corresponding level
      const foundLevel = await this.findLevelById(application, level._id);
      if (!foundLevel) return null; // Ignore above level 4

      const levelName = `Level${foundLevel.level}`;
      const request = `MATCH (p:${levelName}:\`${application}\`)   
            WHERE ID(p)=$idLevel 
            SET p.Concept = $concept
            SET p.AlternateDrilldown = $alternateDrillDown
            SET p.Color = $color
            SET p.FullName = $fullName
            SET p.Name = $name
            SET p.Level = $level
            SET p.Count = 0 
            SET p.Shade  = $shade
            RETURN p as node;`;

      const results: QueryResult = await this.neo4jAl.executeWithParameters(request, {
        idLevel: foundLevel._id,
        concept: level.concept,
        alternateDrillDown: level.alternateDrilldown,
        color: level.color,
        fullName: level.fullName,
        name: level.name,
        level: level.level,
        shade: level.shade,
      });

      if (!results || results.records.length == 0) return null;

      const nodeObj = results.records[0].get("node") as Node;
      const levelObj = LevelNode.fromNode(nodeObj);

      await this.refreshLevel(application, levelObj);

      return levelObj;
    } catch (err) {
      logger.error(`LEVEL SERVICE :: Failed to get the children levels of level with id : ${level._id} of application ${application}.`, err);
      throw new HttpException(500, "Internal error");
    }
  }

  /**
   * Get root level in one application
   * @param application Name of the application
   */
  public async getRootLevel(application: string): Promise<Level[]> {
    try {
      return this.getLevelsByDepth(application, 1);
    } catch (err) {
      logger.error(`LEVEL SERVICE :: Failed to get the root levels of application ${application}.`, err);
      throw new HttpException(500, "Internal error");
    }
  }

  /**
   * Refresh all the levels in one application
   * @param application Application Name
   * @param depth Depth of the level
   */
  public async refreshLevels(application: string, depth: number): Promise<void> {
    if (depth >= 1 && depth < 5) {
      // Refresh level 1-4
      const req = `
            MATCH (l51:Level${depth}:\`${application}\`)-[r:References]->(l52:Level${depth}:\`${application}\`) 
            DELETE r;`;
      const req2 = `MATCH (l51:Level${depth}:\`${application}\`)-[]->(:Level${depth + 1})-[]->(:Level${
        depth + 1
      })<-[]-(l52:Level${depth}:\`${application}\`) 
            WHERE ID(l51)<>ID(l52) WITH l51, l52 MERGE (l51)-[:References]->(l52);`;
      await this.neo4jAl.execute(req);
      await this.neo4jAl.execute(req2);
    } else if (depth == 5) {
      // Refresh level 5
      const req = `
            MATCH (l51:Level5:\`${application}\`)-[r:References]->(l52:Level5:\`${application}\`) 
            DELETE r;`;
      const req2 = `MATCH (l51:Level5:\`${application}\`)-[]->(:Object)-[]->(:Object)<-[]-(l52:Level5:\`${application}\`) 
            WHERE ID(l51)<>ID(l52) WITH l51, l52 MERGE (l51)-[:References]->(l52);`;
      await this.neo4jAl.execute(req);
      await this.neo4jAl.execute(req2);
    } else {
      return;
    }

    // Refresh levels
    if (depth > 1) await this.refreshLevels(application, depth - 1);
  }

  /**
   * Get all the level that where hidden
   * @param application Name of application
   * @param depth Depth of the application
   */
  public async findHiddenLevelByDetph(application: string, depth: number): Promise<Level[]> {
    const labelName = `${LevelService.HIDDEN_LEVEL_LABEL_PREFIX}${depth}`;
    const req = `MATCH (l:${labelName}) RETURN l as node;`;

    const results: QueryResult = await this.neo4jAl.execute(req);

    const levels: Level[] = [];
    for (let i = 0; i < results.records.length; i++) {
      const singleRecord = results.records[i];

      const nodeObj = results.records[0].get("node") as Node;
      const levelObj = LevelNode.fromNode(nodeObj);

      levels.push(levelObj);
    }
    return levels;
  }

  /**
   * Get a hidden level by its id
   * @param application Application name
   * @param id Id of the level
   */
  public async findHiddenLevelById(application: string, id: number): Promise<Level> {
    // Search application
    const req = `MATCH (l:\`${application}\`) WHERE ID(l)=$idLevel RETURN DISTINCT l as node;`;
    const results: QueryResult = await this.neo4jAl.executeWithParameters(req, { idLevel: id });

    if (results.records && results.records.length) return null;

    // Return the level
    const nodeObj = results.records[0].get("node") as Node;
    return LevelNode.fromNode(nodeObj);
  }

  /**
   * Un-hide a Children
   * @param application Name of the application
   * @param id Id of the children
   */
  public async unHideChildren(application: string, id: number): Promise<Level> {
    // Get the level
    const level = await this.findLevelById(application, id);

    // Reformat the level
    const labelName = `${LevelService.HIDDEN_LEVEL_LABEL_PREFIX}${level.level}`;
    const newLabel = `Level${level.level}`;

    // Change the label
    const req = `MATCH (l:${labelName}) WHERE ID(l)=$idNode 
        REMOVE l:${labelName} SET l:${newLabel} RETURN l as node;`;
    const results: QueryResult = await this.neo4jAl.executeWithParameters(req, { idNode: id });

    // Parse all the level under it
    if (level.level < 5) {
      const childLevelName = `${LevelService.HIDDEN_LEVEL_LABEL_PREFIX}${level.level + 1}`;
      const request = `MATCH (p:\`${application}\`)-[:Aggregates]->(n:${childLevelName}:\`${application}\`)  
            WHERE ID(p)=$idLevel 
            RETURN ID(n) as id_node;`;

      const results: QueryResult = await this.neo4jAl.executeWithParameters(request, { idLevel: level._id });
      for (let i = 0; i < results.records.length; i++) {
        const singleRecord = results.records[i];
        const childId = int(singleRecord.get("id_node")).toNumber();
        await this.unHideChildren(application, childId);
      }
    }

    // Parse the parents to reactive them
    if (level.level > 1) {
      const childLevelName = `${LevelService.HIDDEN_LEVEL_LABEL_PREFIX}${level.level - 1}`;
      const request = `MATCH (p:\`${application}\`)<-[:Aggregates]-(n:${childLevelName}:\`${application}\`)  
            WHERE ID(p)=$idLevel 
            RETURN ID(n) as id_node;`;

      const results: QueryResult = await this.neo4jAl.executeWithParameters(request, { idLevel: level._id });
      for (let i = 0; i < results.records.length; i++) {
        const singleRecord = results.records[i];
        const parentnId = int(singleRecord.get("id_node")).toNumber();
        await this.unHideChildren(application, parentnId);
      }
    }

    if (results.records && results.records.length) return null;

    // Return the level
    const nodeObj = results.records[0].get("node") as Node;
    return LevelNode.fromNode(nodeObj);
  }

  /**
   * Hide a level and all its children
   * @param application
   * @param levelID
   */
  public async hideChildren(application: string, levelID: number): Promise<Level> {
    // Find the level
    const level = await this.findLevelById(application, levelID);
    if (level == null) return;

    const newLabel = `${LevelService.HIDDEN_LEVEL_LABEL_PREFIX}${level.level}`;
    const oldLabel = `Level${level.level}`;

    // Hide the level
    const request = `MATCH (n:\`${application}\`) 
            WHERE ( n:Level1 OR n:Level2 OR n:Level3 OR n:Level4 OR n:Level5 )
            AND ID(n)=$idLevel 
            REMOVE n:${oldLabel} SET n:${newLabel}
            RETURN n as node;`;
    const results: QueryResult = await this.neo4jAl.executeWithParameters(request, { idLevel: int(levelID) });

    // Hide children levels recursively
    if (level.level < 5) {
      const childLevelName = `Level${level.level + 1}`;
      const request = `MATCH (p:\`${application}\`)-[:Aggregates]->(n:${childLevelName}:\`${application}\`)  
            WHERE ID(p)=$idLevel 
            RETURN ID(n) as id_node;`;

      const results: QueryResult = await this.neo4jAl.executeWithParameters(request, { idLevel: level._id });
      for (let i = 0; i < results.records.length; i++) {
        const singleRecord = results.records[i];
        const childId = int(singleRecord.get("id_node")).toNumber();
        await this.hideChildren(application, childId);
      }
    }

    // refresh the levels
    if (!results.records || results.records.length == 0) return null;

    const nodeObj = results.records[0].get("node") as Node;
    return LevelNode.fromNode(nodeObj);
  }

  /**
   * Unhide a level and all the children under it
   * @param application
   * @param levelID
   */
  public async unHideLevel(application: string, levelID: number): Promise<Level> {
    try {
      const level: Level = await this.unHideChildren(application, levelID);

      // Refresh all the levels
      await this.refreshLevels(application, 5);
      return level;
    } catch (err) {
      logger.error(`Failed to hide the level with id :${levelID} of application ${application}.`, err);
      throw new HttpException(500, "Internal error");
    }
  }

  /**
   * Hide a level in the hierarchy
   * @param application
   * @param levelID
   */
  public async hideLevel(application: string, levelID: number): Promise<Level> {
    try {
      const level: Level = await this.hideChildren(application, levelID);

      // Refresh all the levels
      await this.refreshLevels(application, 5);
      return level;
    } catch (err) {
      logger.error(`Failed to hide the level with id :${levelID} of application ${application}.`, err);
      throw new HttpException(500, "Internal error");
    }
  }

  /**
   * Create level
   * @param depth Depth of the level
   * @param application  Name of the application
   * @param fullName  FullName of the level
   * @param name  Name of the level
   */
  public async createNamedLevel(depth: number, application: string, fullName: string, name: string): Promise<Node> {
    try {
      const reqCreateLevel3 = `MERGE (level:Level${depth}:\`${application}\` { 
        Concept: false,
        Color: "rgb(176,196,222)",
        FullName: $fullName,
        Level: $depth,
        Count: 0,
        Shade: "rgb(105,105,105)##rgb(0,0,128)##rgb(176,196,222)",
        Name: $name"
      }) RETURN level as node`;
      const mergeLevel3 = await this.neo4jAl.executeWithParameters(reqCreateLevel3, {
        name: name,
        fullName: fullName,
        depth: depth,
      });
      if (mergeLevel3 && mergeLevel3.records.length > 0) {
        return mergeLevel3.records[0].get("node") as Node;
      } else {
        throw new Error(`Failed to create a level ${depth} node. No results`);
      }
    } catch (err) {
      logger.error(`Failed to create a level ${depth} node.`, err);
      throw new Error(`Failed to create a level ${depth} node`);
    }
  }

  /**
   *
   * @param depth Depth of the level
   * @param application  Name of the application
   * @param name Name of the level
   */
  public async findLevelByNameAndDepth(depth: number, application: string, name: string): Promise<Node | null> {
    try {
      const reqLevel3 = `MATCH (level:Level${depth}:\`${application}\`) WHERE level.Name=$name RETURN level as node LIMIT 1;`;
      const resultsLevel3 = await this.neo4jAl.executeWithParameters(reqLevel3, { name: name });
      if (resultsLevel3 && resultsLevel3.records.length > 0) {
        return resultsLevel3.records[0].get("node");
      } else {
        return null;
      }
    } catch (err) {
      logger.error(`Failed to find a level ${depth} node by name.`, err);
      throw new Error(`Failed to find a level ${depth} node by name`);
    }
  }

  /**
   * Group objects with a  category
   * @param application Name of the application
   * @param category Name of the category ( Level 3 )
   * @param name Name of the levels 4 & 5
   * @param idList List of objects
   */
  public async groupWithCategory(application: string, category: string, name: string, idList: number[]): Promise<void> {
    try {
      const req = "CALL demeter.group.with.category($application, $category, $name, $idList)";
      await this.neo4jAl.executeWithParameters(req, {
        application: application,
        category: category,
        name: name,
        idList: idList,
      });
    } catch (err) {
      logger.error("Failed to find group the objects by category.", err);
      throw new Error("Failed to find group the objects by category");
    }
  }

  /**
   * Group  a list of node following a CAST Taxonomy
   * @param application Application to process
   * @param taxonomy CAST Taxonomy to create
   * @param idList List of node ID to group
   */
  public async groupWithTaxonomy(application: string, taxonomy: string, idList: number[]): Promise<void> {
    // Check cast taxonomy
    const splitTax = taxonomy.split("##");
    if (splitTax.length < 5) throw new Error("Cast Taxonomy isn't valid");

    // Make sure the array does not contain any empty element
    for (let i = 0; i < splitTax.length; i++) {
      if (splitTax[i] === "") {
        throw new Error("Cast Taxonomy isn't valid. Cannot contains null element ");
      }
    }

    try {
      const req = "CALL demeter.group.with.taxonomy($application, $level1, $level2, $level3, $level4, $level5, $idList)";
      await this.neo4jAl.executeWithParameters(req, {
        application: application,
        level1: splitTax[0],
        level2: splitTax[1],
        level3: splitTax[2],
        level4: splitTax[3],
        level5: splitTax[4],
        idList: idList,
      });
    } catch (err) {
      logger.error("Failed to group the objects by taxonomy.", err);
      throw new Error("Failed to  group the objects by taxonomy");
    }
  }
}

export default LevelService;
