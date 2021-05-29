import config from "config";
import {CreateFrameworkDto} from "../../dtos/artemis/frameworks.dto";
import HttpException from "../../exceptions/HttpException";
import {Framework} from "@interfaces/artemis/framework.interface";
import {logger} from "@shared/logger";
import {Neo4JAccessLayer} from "../../database/neo4jAccessLayer";
import {int, QueryResult, Record} from "neo4j-driver";
import CategoryService from "@services/artemis/category.service";

class FrameworksService {
    private ARTEMIS_LABEL = config.get("artemis.frameworkNode");
    private neo4jAl: Neo4JAccessLayer = Neo4JAccessLayer.getInstance();

    // Detections
    private pendingApplicationDetection: string[] = [];
    private failedApplicationDetection: string[] = [];
    private finishedApplicationDetection: Map<string, Framework[]> = new Map();

    /**
     * Convert a neo4j record to a Framework
     * @param res Record to convert
     */
    public static convertRecordToFramework(res: Record): Framework {

        return {
            id: int(res.get("id")).toNumber() || -1,
            name: res.get("name"),
            pattern: res.get("pattern"),
            isRegex: Boolean(res.get("isRegex")),
            description: res.get("description"),
            type: res.get("type"),
            category: res.get("category") || "",
            internalType: res.get("internalType") || [""],
            location: res.get("location") || "",
            discoveryDate: res.get("discoveryDate"),
            percentageOfDetection: Number(res.get("percentageOfDetection")) || 0,
        };
    }

    /**
     * Find a framework in the database
     * @param name Name of the Framework to find
     * @param internalType Internal type of the framework
     */
    public async findFrameworkbyName(
        name: string,
        internalType?: string
    ): Promise<Framework> {
        try {
            let val: QueryResult;

            if (internalType) {
                const req = `CALL artemis.api.find.framework($name, $internalType)`;
                val = await this.neo4jAl.executeWithParameters(req, {
                    name: name,
                    internalType: internalType,
                });
            } else {
                const req = `CALL artemis.api.find.framework($name)`;
                val = await this.neo4jAl.executeWithParameters(req, {name: name});
            }

            if (!val.records || val.records.length == 0) return null;

            const singleRecord = val.records[0];
            return FrameworksService.convertRecordToFramework(singleRecord);
        } catch (err) {
            logger.error(
                "An internal error occurred in FrameworksServices::findFrameworkbyName ",
                err
            );
            throw new HttpException(500, "Internal error");
        }
    }

    /**
     * Get a list of (max 10) frameworks containing the search item
     * @param name Name to search
     */
    public async searchFrameworkByName(name: string): Promise<Framework[]> {
        const res: QueryResult = await this.neo4jAl.executeWithParameters(
            "CALL artemis.api.find.framework.name.contains($name, 10);",
            {name: name}
        );

        const returnList: Framework[] = [];
        let singleRecord;
        for (let index = 0; index < res.records.length; index++) {
            singleRecord = res.records[index];
            returnList.push(FrameworksService.convertRecordToFramework(singleRecord));
        }

        return returnList;
    }

    /**
     * Find a framework in the database with the Name and the Type
     * @param name Name of the Framework to find
     */
    public async findFrameworkbyNameAndType(
        name: string,
        internalType: string
    ): Promise<Framework> {
        const req = `CALL artemis.api.find.framework($name, $internalType)`;

        try {
            const val = await this.neo4jAl.executeWithParameters(req, {
                name: name,
                internalType: internalType,
            });
            if (!val.records || val.records.length == 0) return null;

            const singleRecord = val.records[0];
            return FrameworksService.convertRecordToFramework(singleRecord);
        } catch (err) {
            logger.error(
                "An internal error occurred in FrameworksServices::findFrameworkbyNameAndType ",
                err
            );
            throw new HttpException(500, "Internal error");
        }
    }

    /** Merge the framework */
    public async mergeFramework(
        frameworkData: CreateFrameworkDto
    ): Promise<Framework> {
        // Clean Framework
        frameworkData.discoveryDate = frameworkData.discoveryDate || '0';
        frameworkData.percentageOfDetection = frameworkData.percentageOfDetection || 1;
        frameworkData.numberOfDetection = frameworkData.numberOfDetection || 0;

        const cs = new CategoryService();
        let categoryName : string;
        if(!isNaN(Number(frameworkData.category))) {
            const categoryNode =  await cs.getNodeById(Number(frameworkData.category));
            categoryName = categoryNode.name;
        } else {
            categoryName = String(frameworkData.category);
        }

        const req = `CALL artemis.api.merge.framework($name, $pattern, $isRegex, $discoveryDate, $location, $description, $type, $category, $internalType, $numberOfDetection, $percentageOfDetection)`;

        const params: any = Object.assign({}, frameworkData);
        params.category = categoryName ? categoryName : "Undefined";

        try {
            const val = await this.neo4jAl.executeWithParameters(req, params);
            if (!val.records || val.records.length == 0) return null;

            const singleRecord = val.records[0];
            return FrameworksService.convertRecordToFramework(singleRecord);
        } catch (err) {
            logger.error(
                "An internal error occurred in FrameworksServices::mergeFramework ",
                err
            );
            throw new HttpException(500, "Internal error");
        }
    }

    /**
     *
     * @param oldName
     * @param oldInternalType
     * @param frameworkData
     */
    public async updateFramework(
        oldName: string,
        oldInternalType: string[],
        frameworkData: CreateFrameworkDto
    ): Promise<boolean> {
        // Check if the Framework already exist. Update it, if it has more properties
        const inBase: Framework = await this.findFrameworkbyName(
            frameworkData.name
        );

        // Assign number of detection
        const params: any = Object.assign({}, frameworkData);
        params.numberOfDetection = 0;
        params.oldName = oldName;
        params.oldInternalType = oldInternalType;

        if (inBase == null)
            throw new HttpException(
                404,
                `Framework with name ${frameworkData.name} does not exist.`
            );
        const req = `CALL artemis.api.update.framework($oldName, $oldInternalType, $name, $pattern, $isRegex, $discoveryDate, $location, $description, $type, $category, $internalType, $numberOfDetection, $percentageOfDetection);`;

        try {
            const results = await this.neo4jAl.executeWithParameters(req, params);
            if (!results.records || results.records.length == 0) return null;
            const singleRecord = Boolean(results.records[0].get(0));

            return singleRecord;
        } catch (err) {
            logger.error(
                "An internal error occurred in FrameworksServices::updateFrameworks",
                err
            );
            throw new HttpException(500, "Internal error");
        }
    }

    /**
     * Update a framework using its ID
     * @param frameworkData Framework to modify
     */
    public async updateFrameworkById(frameworkData: CreateFrameworkDto): Promise<boolean> {
        console.log("Incoming framework", frameworkData)
        const params: any = Object.assign({}, frameworkData);
        // Force Id
        //params.id = int(frameworkData.id);
        const req = `CALL artemis.api.update.framework.by.id($id, $name, $pattern, $isRegex, $discoveryDate, $location, $description, $type, $category, $internalType);`;

        try {
            const results = await this.neo4jAl.executeWithParameters(req, params);
            if (!results.records || results.records.length == 0) return null;
            return Boolean(results.records[0].get(0));
        } catch (err) {
            logger.error(
                "An internal error occurred in FrameworksServices::updateFrameworksById",
                err
            );
            throw new HttpException(500, "Internal error");
        }

    }

    /**
     * Force the add of a framework ( can ca  use interference with existing frameworks, it's recommended to use the merge option )
     * @param frameworkData Framework to add
     */
    public async forceAddFramework(frameworkData: CreateFrameworkDto): Promise<boolean> {
        const params: any = Object.assign({}, frameworkData);
        // Force Id
        //params.id = int(frameworkData.id);
        const req = `CALL artemis.api.add.framework($id, $name, $pattern, $isRegex, $discoveryDate, $location, $description, $type, $category, $internalType);`;

        try {
            const results = await this.neo4jAl.executeWithParameters(req, params);
            if (!results.records || results.records.length == 0) return null;
            return Boolean(results.records[0].get(0));
        } catch (err) {
            logger.error(
                "An internal error occurred in FrameworksServices::updateFrameworksById",
                err
            );
            throw new HttpException(500, "Internal error");
        }

    }

    /**
     * Framework data to add
     * @param frameworkData Data to add
     */
    public async addFramework(
        frameworkData: CreateFrameworkDto
    ): Promise<Framework> {
        // Check if the Framework already exist. Update it, if it has more properties
        logger.info(
            `Adding Framework with name ${frameworkData.name}`,
            frameworkData
        );

        return await this.mergeFramework(frameworkData);

    }

    /**
     * Get the total number of framework in the database
     */
    public async getNumberFrameworks(): Promise<number> {
        const req = `CALL artemis.api.get.framework.number()`;
        const results = await this.neo4jAl.execute(req);

        if (!results.records || results.records.length == 0) return 0;

        return int(results.records[0].get(0)).toNumber();
    }

    /**
     * Get the total number of framework of a certain type
     * @param internalType Internal Type to look for
     */
    public async getNumberFrameworksWithInternalType(
        internalType: string
    ): Promise<number> {
        const req = `CALL artemis.api.get.framework.number($internalType)`;
        const results = await this.neo4jAl.executeWithParameters(req, {
            internalType: internalType,
        });

        if (!results.records || results.records.length == 0) return 0;

        return int(results.records[0].get(0)).toNumber();
    }

    /**
     * Get a part of the frameworks determined by their index
     * @param start Start index
     * @param stop Stop index
     * @param internalType Internal type to search (Optionnal)
     */
    public async getFrameworksBatch(
        start: number,
        stop: number,
        internalType?: string
    ): Promise<Framework[]> {
        let res: QueryResult;
        if (internalType && internalType != "") {
            res = await this.neo4jAl.executeWithParameters(
                "CALL artemis.api.get.framework.batch($start, $stop, $internalType);",
                {start: start, stop: stop, internalType: internalType}
            );
        } else {
            res = await this.neo4jAl.executeWithParameters(
                "CALL artemis.api.get.framework.batch($start, $stop);",
                {start: start, stop: stop}
            );
        }

        const returnList: Framework[] = [];
        let singleRecord;
        for (let index = 0; index < res.records.length; index++) {
            singleRecord = res.records[index];
            returnList.push(FrameworksService.convertRecordToFramework(singleRecord));
        }

        return returnList;
    }

    /**
     * Get the list of Framework necessitating a validation
     */
    public async getToValidateFrameworks(): Promise<Framework[]> {
        const res: QueryResult = await this.neo4jAl.execute(
            "CALL artemis.api.get.framework.to.validate();"
        );


        const returnList: Framework[] = [];
        let singleRecord;
        for (let index = 0; index < res.records.length; index++) {
            singleRecord = res.records[index];
            returnList.push(FrameworksService.convertRecordToFramework(singleRecord));
        }

        return returnList;
    }


    /**
     * Get the list of internal type
     */
    public async getFrameworksinternalType(): Promise<string[]> {
        const res: QueryResult = await this.neo4jAl.execute(
            "CALL artemis.api.get.framework.internalType()"
        );

        const returnList: string[] = [];
        let singleRecord;
        for (let index = 0; index < res.records.length; index++) {
            singleRecord = String(res.records[index].get(0));

            if (singleRecord.length == 0 || singleRecord == "null") continue;

            returnList.push(singleRecord);
        }

        return returnList;
    }

    /**
     * Retrieve the list of duplicates values
     */
    public async getDuplicateFrameworks(): Promise<Framework[]> {
        const res: QueryResult = await this.neo4jAl.execute(
            "CALL artemis.api.get.framework.duplicates()"
        );

        const returnList: Framework[] = [];
        let singleRecord;
        for (let index = 0; index < res.records.length; index++) {
            singleRecord = res.records[index];
            returnList.push(FrameworksService.convertRecordToFramework(singleRecord));
        }


        return returnList;
    }

    /**
     * Auto clean the repository of frameworks
     */
    public async autoClean(): Promise<number> {
        const res: QueryResult = await this.neo4jAl.execute(
            "CALL artemis.api.get.framework.duplicates()"
        );

        if (res.records.length > 0) {
            return Number(res.records[0].get(0));
        }

        return 0;
    }


    /**
     * Delete a framework by its ID
     * @param id Id of the framework to delete
     */
    public async deleteFrameworkById(id: number): Promise<boolean> {
        const res = "CALL artemis.api.delete.framework.by.id($id)";
        const params = {id: id};

        try {
            const results = await this.neo4jAl.executeWithParameters(res, params);
            if (!results.records || results.records.length == 0) return null;
            return Boolean(results.records[0].get(0));
        } catch (err) {
            logger.error(
                "An internal error occurred in FrameworksServices::deleteFrameworkById",
                err
            );
            throw new HttpException(500, "Internal error");
        }
    }

    /**
     * Delete a framework by its ID
     * @param id Id of the framework to delete
     */
    public async toggleFrameworkTypeById(id: number): Promise<boolean> {
        const res = "CALL artemis.api.toggle.validation.framework.by.id($id)";
        const params = {id: id};

        try {
            const results = await this.neo4jAl.executeWithParameters(res, params);
            if (!results.records || results.records.length == 0) return null;
            return Boolean(results.records[0].get(0));
        } catch (err) {
            logger.error(
                "An internal error occurred in FrameworksServices::toggleFrameworkTypeById",
                err
            );
            throw new HttpException(500, "Internal error");
        }
    }
}

export default FrameworksService;
