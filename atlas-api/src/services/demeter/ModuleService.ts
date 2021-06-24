/* eslint-disable max-len */
import { Neo4JAccessLayer } from "@database/Neo4jAccessLayer";
import ModuleNode from "@entities/Imaging/ModuleNode";
import HttpException from "@exceptions/HttpException";
import IModule from "@interfaces/imaging/Module";
import TagService from "@services/configuration/TagService";
import { logger } from "@shared/Logger";
import { QueryResult, Node, int} from "neo4j-driver";

/**
 * Class managing the different action linked to the Modules
 */
export default class ModuleService {
    private static NEO4JAL: Neo4JAccessLayer = Neo4JAccessLayer.getInstance();

     /**
     * Group modules inside one application
     * @param application Name of the application
     */
      public async executeGrouping(application: string): Promise<number> {
        const request = `CALL demeter.group.modules("${application}")`;

        const results: QueryResult = await ModuleService.NEO4JAL.execute(request);
        return results.records.length || 0;
    }

    /**
     * Group modules across all applications
     */
    public async executeGroupingInAllApplications(): Promise<number> {
        const request = `CALL demeter.api.group.modules.all()`;

        const results: QueryResult = await ModuleService.NEO4JAL.execute(request);
        return results.records.length || 0;
    }

    /**
     * Get the hidden module label
     * @returns {string} The Hidden module label
     */
    public async getHiddenModuleLabel() : Promise<string>{
        const req = `CALL demeter.module.get.hiddenLabel()`;
        const res:QueryResult = await ModuleService.NEO4JAL.execute(req);
        if(!res || res.records.length == 0) throw new Error("Failed to retrieve the hidden module label");
        return res.records[0].get(0);
    }


    /**
     * Get the complete list of modules for one application
     * @param {string} application Name of the application
     * @return {IModule[]} A promise returning the list of Modules
     */
    public async getAllModule(application: string) : Promise<IModule[]> {
        try {
            const req = `MATCH (m:Module:\`${application}\`) RETURN m as node`;
            const res: QueryResult = await ModuleService.NEO4JAL.execute(req);

            if(!res || res.records.length == 0) return [];
            
            const modules: IModule[] = [];
            for (let index = 0; index < res.records.length; index++) {
                const element: Node = res.records[index].get("node");
                try {
                    modules.push(ModuleNode.fromObj(element))
                } catch (err) {
                    logger.error(`The module with id: ${element.identity.toNumber()} is not in a correct format`, err)
                }
            }

            return modules;
        } catch(error) {
            logger.error(`Failed to retrieve all modules in application ${application}.`, error);
            throw new HttpException(500, "Failed to retrieve modules");
        }
    }

    /**
     * Get the complete list of hidden modules for one application
     * @param {string} application Name of the application
     * @return {IModule[]} A promise returning the list of hidden Module
     */
     public async getHiddenModule(application: string) : Promise<IModule[]> {
        try {
            const hiddenPrefix = await this.getHiddenModuleLabel()

            const req = `MATCH (m:${hiddenPrefix}:\`${application}\`) 
            RETURN m as node`;
            const res: QueryResult = await ModuleService.NEO4JAL.execute(req);
            
            if(!res || res.records.length == 0) return [];
            
            const modules: IModule[] = [];
            for (let index = 0; index < res.records.length; index++) {
                const element: Node = res.records[index].get("node");
                modules.push(ModuleNode.fromObj(element, true));
            }

            return modules;
        } catch(error) {
            logger.error(`Failed to retrieve all hidden modules in application ${application}.`, error);
            throw new HttpException(500, "Failed to retrieve hidden modules");
        }
    }

    /**
     * Update a module by its Id ( The count, Id, hidden properties cannot be update )
     * @param {number} idModule Id of the module
     * @param {IModule} module module new parameters
     * @return {Promise<IModule|null>} A promise returning the module or null if no module was found
     */
    public async updateModule(idModule: number, module: IModule) : Promise<IModule|null>{
        try {
            const hiddenPrefix = await this.getHiddenModuleLabel()

            const req = `MATCH (m) 
            WHERE (m:Module or m:${hiddenPrefix}) AND ID(m)=$idModule
            WITH m, m.Name as oldName
            SET m.Name=$name
            SET m.Color=$color
            WITH m, oldName
            MATCH (m)-[]->(o) WHERE o:Object OR o:SubObject
            SET o.Module = CASE WHEN o.Module IS NULL THEN [$name] ELSE [ x in o.Module WHERE NOT x=oldName ] + $name END
            RETURN m as node`;

            const params: any = module;
            params.idModule = idModule;

            const res: QueryResult = await ModuleService.NEO4JAL.executeWithParameters(req, params);
            if(!res || res.records.length == 0) return null;
            
            const element: Node = res.records[0].get("node");
        
            return ModuleNode.fromObj(element, true);
        } catch(error) {
            logger.error(`Failed to retrieve update module with id ${idModule}.`, error);
            throw new HttpException(500, "Failed to update a module");
        }
    }


    /**
     * Merge Module into another
     * @param {string} application Name of the application 
     * @param {number} idModuleSource Id of the module that will be merged
     * @param {number} idModuleDest Id of the destination module
     * @return {Promise<number>} A promise returning the number of object merged
     */
     public async mergeModule(application: string, idModuleSource: number, idModuleDest: number) : Promise<number>{
        try {
            const modulePrefix = await (new TagService()).getCustomModuleTag();

            const req = `MATCH (d:Module:\`${application}\`)  WHERE ID(d)=$IdDest 
            WITH d as dest 
            MATCH (m:Module:\`${application}\`)-[:Contains]->(obj:Object)  WHERE ID(m)=$IdSource
            SET obj.Tags = CASE WHEN obj.Tags IS NULL THEN [($Prefix + dest.Name)] ELSE [ x IN obj.Tags WHERE NOT x CONTAINS $Prefix ] + ($Prefix + dest.Name) END RETURN COUNT(DISTINCT obj) as count;
            `;

            const params = {IdSource: idModuleSource, IdDest: idModuleDest, Prefix: modulePrefix };
            const res: QueryResult = await ModuleService.NEO4JAL.executeWithParameters(req, params);
            if(!res || res.records.length == 0) return 0;
                    
            return int(res.records[0].get("count")).toInt();
        } catch(error) {
            logger.error(`Failed to merge module with id ${idModuleSource} in ${idModuleDest}.`, error);
            throw new HttpException(500, "Failed to update a module");
        }
    }

    /**
     * Hide a specific module
     * @param {number} id Id of the module
     */
     public async hideById(id: number) : Promise<void> {
        try {
            const req = `CALL demeter.module.hide.byId($idModule)`;
            await ModuleService.NEO4JAL.executeWithParameters(req, {idModule: id});
        } catch(error) {
            logger.error(`Failed to hide a module with ID '${id}'.`, error);
            throw new HttpException(500, "Failed to hide a module");
        }
    }

    /**
     * Unhide a specific module by its ID
     * @param {number} id Id of the module
     */
     public async unhideById(id: number) : Promise<void> {
        try {
            const req = `CALL demeter.module.display.byId($idModule)`;
            await ModuleService.NEO4JAL.executeWithParameters(req, {  idModule: id});
        } catch(error) {
            logger.error(`Failed to display a module with ID '${id}'.`, error);
            throw new HttpException(500, "Failed to display a module");
        }
    }

    /**
     * Delete a Module by its Id
     * @param {number} id Id of the module
     */
     public async deleteById(id: number) : Promise<void> {
        try {
            const req = `CALL demeter.module.delete.byId($idModule)`;
            await ModuleService.NEO4JAL.executeWithParameters(req, {  idModule: id});
        } catch(error) {
            logger.error(`Failed to delete a module with ID '${id}'.`, error);
            throw new HttpException(500, "Failed to delete module");
        }
    }

    
}