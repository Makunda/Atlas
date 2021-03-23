import {logger} from "@shared/logger";
import {QueryResult} from "neo4j-driver";
import {Neo4JAccessLayer} from "@database/neo4jAccessLayer";
import HttpException from "@exceptions/HttpException";
import {ILevel, LevelNode} from "@interfaces/imaging/level.interface";

class LevelService {
    private neo4jAl: Neo4JAccessLayer = Neo4JAccessLayer.getInstance();

    /**
     * Create a whole new level in Imaging
     * @param application Name of the application concerned by this level creation
     * @param parentId Id of the parent node ( provide -1 for no parent, in that case the level will be forced as level 1 )
     * @param level Level to create
     */
    public async createLevel(application: string, parentId: number, level: ILevel): Promise<ILevel> {
        try {
            if(parentId == -1 && level.level != 1 ) {
                throw new Error("Cannot created a level with no parent, if the level is not a level 1.")
            }

            if(level.level < 3 ) {
                throw new Error("Cannot created a level under level 3.")
            }

            const node = new LevelNode(level);
            const req = node.getMergeRequest(application);
            const results: QueryResult = await this.neo4jAl.execute(req);

            if(!results.records || results.records.length === 0) {
                throw new Error(`The request : '${req}'. Returned no result.`)
            }

            const singleRecord = results.records[0];
            const row = singleRecord.get("node");
            const levelObj =  LevelNode.fromObj(row).getRecord();

            // Merge relationship with parent only if valid
            if(parentId != -1 && level.level-1 < 0) {
                const levelName = `Level${level.level}`;
                const parentLevelName = `Level${level.level - 1}`;

                const mergeReq = `MATCH (p:${parentLevelName}:\`${application}\`), (c:${levelName}:\`${application}\`) 
                WHERE ID(p)=${parentId} AND ID(c)=${levelObj._id}  
                MERGE (p)-[:Aggregates]->(c)
                SET c.FullName = p.FullName + "##" + c.Name
                SET c.Shade = p.Shade + "##" + c.Color
                RETURN p as parent`;

                await this.neo4jAl.execute(mergeReq);
            }

            return levelObj;
        } catch (err) {
            logger.error(
                `Failed to create level.`,
                err
            );
            throw new HttpException(500, "Internal error");
        }
    }

    public async getLevelsByDepth(application: string, depth: number): Promise<ILevel[]> {
        try {
            const levelName = `Level${depth}`
            const request = `MATCH (n:${levelName}:\`${application}\`) RETURN n as node ORDER BY n.Name;`;

            const results: QueryResult = await this.neo4jAl.execute(request);

            const levels: ILevel[] = [];
            for (let i = 0; i < results.records.length; i++) {
                const singleRecord = results.records[i];
                const level = singleRecord.get("node");
                levels.push( LevelNode.fromObj(level).getRecord() );
            }

            return levels;
        } catch (err) {
            console.error("DEBUG :", err)
            logger.error(
                `Failed to get the levels with depth :${depth} of application ${application}.`,
                err
            );
            throw new HttpException(500, "Internal error");
        }
    }

    /**
     * Fetch a level using its ID
     * @param application Name of the application
     * @param levelID ID of the level
     */
    public async findLevelById(application: string, levelID: number) : Promise<ILevel> {
        try {
            const request = `MATCH (n:\`${application}\`) 
            WHERE ( n:Level1 OR n:Level2 OR n:Level3 OR n:Level4 OR n:Level5 )
            AND ID(n)=$idLevel 
            RETURN n as node;`;

            const results: QueryResult = await this.neo4jAl.executeWithParameters(request, { "idLevel": levelID });
            if(!results.records || results.records.length == 0) return null;

            return LevelNode.fromObj(results.records[0].get("node")).getRecord();
        } catch (err) {
            logger.error(
                `Failed to get the levels with id :${levelID} of application ${application}.`,
                err
            );
            throw new HttpException(500, "Internal error");
        }
    }

    /**
     * Get the children level attached to a parent
     * @param application
     * @param levelID Id of the level to search
     */
    public async getChildrenLevels(application: string, levelID: number): Promise<ILevel[]> {
        try {

            const level = await this.findLevelById(application, levelID);

            if(level == null || level.level >= 5) return []; // Ignore above level 4

            const levelName = `Level${level.level}`;
            const childLevelName = `Level${level.level+1}`;
            const request = `MATCH (p:${levelName}:\`${application}\`)-[:Aggregates]->(n:${childLevelName}:\`${application}\`)  
            WHERE ID(p)=$idLevel 
            RETURN n as node ORDER BY n.Name;`;

            const results: QueryResult = await this.neo4jAl.executeWithParameters(request, { "idLevel": levelID });

            const levels: ILevel[] = [];
            for (let i = 0; i < results.records.length; i++) {
                const singleRecord = results.records[i];
                const level = singleRecord.get("node");
                levels.push( LevelNode.fromObj(level).getRecord() );
            }
            return levels;
        } catch (err) {
            logger.error(
                `Failed to get the children levels of level with id : ${levelID} of application ${application}.`,
                err
            );
            throw new HttpException(500, "Internal error");
        }
    }

    /**
     * Refresh a level, their count and re-assign objects if necessary
     * @param application
     * @param level
     */
    public async refreshLevel(application: string, level: ILevel) {
        const levelName = `Level${level.level}`;

        // For level 5 only recount the objects and also re-assign objects level
        if(level.level == 5) {
            let request = `MATCH (p:${levelName}:\`${application}\`)-[]->(o:Object:\`${application}\`)  
            WHERE ID(p)=$idLevel 
            WITH p, COUNT(o) as countNode 
            SET p.Count = countNode;`;
            await this.neo4jAl.executeWithParameters(request, { "idLevel": level._id });

            // Reassign objects
            request = `MATCH (p:${levelName}:\`${application}\`)-[]->(o:Object:\`${application}\`)  
            WHERE ID(p)=$idLevel 
            SET o.Level = p.Name;`;
            await this.neo4jAl.executeWithParameters(request, { "idLevel": level._id });

        } else {
            const childrenLevelName = `Level${level.level+1}`;
            const request = `MATCH (p:${levelName}:\`${application}\`)-[]->(l:\`${childrenLevelName}\`)  
            WHERE ID(p)=$idLevel 
            WITH p, SUM(l.Count) as countNode 
            SET p.Count = countNode;`;
            await this.neo4jAl.executeWithParameters(request, { "idLevel": level._id });
        }

        // Recount level above
    }

    /**
     * Update a level
     * @param application Name of the application concerned by the change
     * @param levelID Id of the level to change
     * @param level New Level
     */
    public async updateLevel(application: string, level: ILevel): Promise<ILevel> {
        try {
            // find corresponding level
            const foundLevel = await this.findLevelById(application, level._id);
            if(level == null || level.level >= 5) return null; // Ignore above level 4

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

            const results: QueryResult = await this.neo4jAl.executeWithParameters(request,
                {
                    "idLevel": foundLevel._id,
                    "concept": level.concept,
                    "alternateDrillDown": level.alternateDrilldown,
                    "color": level.color,
                    "fullName": level.fullName,
                    "name": level.name,
                    "level": level.level,
                    "shade": level.shade
                });

            if(!results || results.records.length == 0) return null;

            const levelUpdate =  LevelNode.fromObj(results.records[0].get("node")).getRecord();
            await this.refreshLevel(application, levelUpdate);

            return levelUpdate;

        } catch (err) {
            logger.error(
                `Failed to get the children levels of level with id : ${level._id} of application ${application}.`,
                err
            );
            throw new HttpException(500, "Internal error");
        }
    }

    /**
     * Get root level in one application
     * @param application Name of the application
     */
    public async getRootLevel(application: string): Promise<ILevel[]> {
        try {
            return this.getLevelsByDepth(application, 1);
        } catch (err) {
            logger.error(
                `Failed to get the root levels of application ${application}.`,
                err
            );
            throw new HttpException(500, "Internal error");
        }
    }
}


export default LevelService;