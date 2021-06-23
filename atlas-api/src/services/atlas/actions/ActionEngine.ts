import {Neo4JAccessLayer} from "@database/Neo4jAccessLayer";
import path from "path";

import {logger} from "@shared/Logger";
import fs from "fs";
import glob from "glob";
import ActionInterface from "@interfaces/actions/Action.interface";
import TagService from "@services/configuration/TagService";


export default class ActionEngine {

    private static INSTANCE: ActionEngine = null;
    private static APPLICATION_NAME_PROP = /%APPLICATION_NAME%/g;
    private static TAG_PROP = /%TAG%/g;
    private static NEO4JAL = Neo4JAccessLayer.getInstance();
    private static TAGSERVICE = new TagService();

    private readonly actionFolder: string;
    private actionList: ActionInterface[] = [];
    private filesLoaded: string[] = [];

    private constructor() {
        const appDir = path.dirname(require.main.filename);
        this.actionFolder = path.join(appDir, "../serialization/actions");
        this.loadActions();
    }

    /**
     * Get the instance of the singleton
     */
    public static getInstance(): ActionEngine {
        if (ActionEngine.INSTANCE == null) {
            ActionEngine.INSTANCE = new ActionEngine();
        }

        return ActionEngine.INSTANCE;
    }

    /**
     * Get the list of the actions
     * @private
     */
    public getActions(): ActionInterface[] {
        return this.actionList;
    }

    /**
     * Get a report using its id
     * @param id Id of the report
     */
    public getActionById(id: number): ActionInterface | null {
        for (let i = 0; i < this.actionList.length; i++) {
            if (this.actionList[i].id == id) return this.actionList[i];
        }
        return null;
    }

    /**
     * Get the list of the report
     * @param category Category to search
     */
    public getActionsByCategory(category: string): ActionInterface[] {
        const actions: ActionInterface[] = [];
        this.actionList.forEach(x => {
            if (category in x.categories) actions.push(x);
        });
        return actions;
    }


    /**
     * Get the categories of the actions
     */
    public getCategories(): string[] {
        const categoriesSet = new Set();
        this.actionList.forEach(x => {
            x.categories.forEach(x => categoriesSet.add(x));
        });

        return [...categoriesSet] as string[];
    }

    /**
     * Execute an action on a specific application
     * @param idAction Id of the action to execute
     * @param application Name of the application
     */
    public async executeAction(idAction: number, application: string): Promise<void> {
        const action: ActionInterface = this.getActionById(idAction);
        if (action == null) throw new Error(`Action with ID ${idAction} doesn't exist.`);

        try {

            let req = action.request.replace(ActionEngine.APPLICATION_NAME_PROP, application);
            req = req.replace(ActionEngine.TAG_PROP, await this.getTag(action.tag));

            await ActionEngine.NEO4JAL.execute(req);

        } catch (err) {
            logger.error(`Failed to execute action with Id ${idAction}.`, err);
            throw new Error(`Failed to execute action with Id ${idAction}.`);
        }

    }

    /**
     * Process a json file in the Action directory
     * @param path Path of the file
     * @return The Action found in the file, or an empty array if something went wrong
     * @private
     */
    private processFile(path: string): ActionInterface[] {
        try {
            const actionList: ActionInterface[] = [];
            const content: string = fs.readFileSync(path, {encoding: 'utf8'});
            return JSON.parse(content) as ActionInterface[];
        } catch (err) {
            logger.error(`Failed to load file with path ${path}.`, err);
            return [];
        }
    }

    /**
     * Get a Demeter tag
     * @param tagType Type of the tag
     * @private
     */
    private async getTag(tagType: string) {
        switch (tagType.toLowerCase()) {
            case "level":
                return await ActionEngine.TAGSERVICE.getCustomLevelTag();
            case "module":
                return await ActionEngine.TAGSERVICE.getCustomModuleTag();
            case "architecture":
                return await ActionEngine.TAGSERVICE.getCustomArchitectureTag();
            case "frameworks":
                return await ActionEngine.TAGSERVICE.getCustomFrameworksTag();
            default:
                throw new Error(`The tag ${tagType} is not recognized as a valid tag.`);
        }
    }

    /**
     * List the actions files  in the actions directory and store them as a list
     * @private
     */
    private loadActions(): void {
        const fileList: string[] = glob.sync(`${this.actionFolder}/*.json`);
        let it = 0;
        fileList.forEach(x => {
            try {
                const actionList: ActionInterface[] = this.processFile(x);
                for (let i = 0; i < actionList.length; i++) {
                    try {
                        actionList[i].id = it;
                        it = it + 1;
                        this.actionList.push(actionList[i]);
                    } catch (ignored) {
                    }
                }

                this.filesLoaded.push(x);
            } catch (err) {
                logger.error(`Failed to open the action file: ${x}.`, err);
            }
        })
    }


}