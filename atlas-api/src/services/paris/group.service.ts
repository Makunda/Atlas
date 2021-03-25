import {logger} from "@shared/logger";
import {int, QueryResult} from "neo4j-driver";
import {Neo4JAccessLayer} from "@database/neo4jAccessLayer";
import HttpException from "@exceptions/HttpException";
import {IGroup} from "@interfaces/paris/group.interface";
import {groupResultFromObj, IGroupResult} from "@interfaces/paris/groupResult.interface";

class GroupService {
    private neo4jAl: Neo4JAccessLayer = Neo4JAccessLayer.getInstance();

    /**
     * Convert a record to a UseCase object
     * @param res Record to convert
     */
    public static convertRecordToGroup(res: any): IGroup {
        return {
            id: int(res.get("id")).toNumber(),
            name: res.get("name"),
            description: res.get("description"),
            cypherRequest: res.get("cypherRequest"),
            groupName: res.get("groupName"),
            categories: res.get("categories") || [],
            cypherRequestReturn: res.get("cypherRequestReturn") || "",
            creationDate: int(res.get("creationDate")).toNumber() || 0,
            active: res.get("active"),
            selected: res.get("selected"),
            types: res.get("types"),
        };
    }

    /**
     * Get the version of Artemis
     */
    public async getAllGroups(): Promise<IGroup[]> {
        try {
            const request = "CALL paris.groups.get.all()";

            const results: QueryResult = await this.neo4jAl.execute(request);

            const groups: IGroup[] = [];
            for (let i = 0; i < results.records.length; i++) {
                const group = GroupService.convertRecordToGroup(results.records[i]);
                groups.push(group);
            }

            return groups;
        } catch (err) {
            logger.error("Failed to verify the retrieve the list of group", err);
            throw new HttpException(500, "Internal error");
        }
    }

    /**
     * Get the version of Artemis
     */
    public async addGroup(group: IGroup): Promise<IGroup> {
        try {
            const request =
                "CALL paris.groups.create($active, $categories, $creationDate, $cypherRequest, $cypherRequestReturn, $description, $groupName, $name, $selected, $typesAsList)";
            const results: QueryResult = await this.neo4jAl.executeWithParameters(
                request,
                group
            );

            if (results.records.length == 0) return null;

            return GroupService.convertRecordToGroup(results.records[0]);
        } catch (err) {
            logger.error("Failed to create a new group", err);
            throw new HttpException(500, "Internal error");
        }
    }

    /**
     * Get the version of Artemis
     */
    public async updateGroup(useCase: IGroup): Promise<IGroup> {
        try {
            console.log("Received ", useCase);
            const request =
                "CALL paris.groups.update.by.id($id, $active, $categories, $creationDate, $cypherRequest, $cypherRequestReturn, $description, $groupName, $name, $selected, $types)";
            const results: QueryResult = await this.neo4jAl.executeWithParameters(
                request,
                useCase
            );

            if (results.records.length == 0) return null;

            return GroupService.convertRecordToGroup(results.records[0]);
        } catch (err) {
            logger.error("Failed to update a use cases", err);
            throw new HttpException(500, "Internal error");
        }
    }

    /**
     * Attach a use case to a group
     * @param idUseCase Id of the use case
     * @param idGroup Id of the group
     */
    public async attachToUseCase(
        idUseCase: number,
        idGroup: number
    ): Promise<Boolean> {
        try {
            const request = "CALL paris.groups.attach.to.case($idUseCase, $idGroup);";
            const params = {idUseCase: idUseCase, idGroup: idGroup};
            const results: QueryResult = await this.neo4jAl.executeWithParameters(
                request,
                params
            );

            if (results.records.length == 0) return false;

            return true;
        } catch (err) {
            logger.error("Failed to attach a group to a use case", err);
            throw new HttpException(500, "Internal error");
        }
    }

    /**
     *
     * @param application Name of the application
     * @param idList List of the Group ID
     * @param executionType Execution Type ( Tags, Statistics, etc...)
     * @returns
     */
    public async executeListGroup(
        application: string,
        idList: number[],
        executionType: string
    ): Promise<number> {
        try {
            const request =
                "CALL paris.groups.execute.list($application, $idList, $executionType);";
            const params = {
                application: application,
                idList: idList,
                executionType: executionType,
            };
            const results: QueryResult = await this.neo4jAl.executeWithParameters(
                request,
                params
            );

            if (results.records.length == 0) return 0;

            return Number(results.records[0].get(0));
        } catch (err) {
            logger.error("Failed to attach a group to a use case", err);
            throw new HttpException(500, "Internal error");
        }
    }

    /**
     * Forecast all the Tag present in database and return only interesting one
     * @param application Name of the application
     */
    public async forecastAll(
        application: string
    ): Promise<IGroupResult[]> {
        try {
            const request =
                "CALL paris.groups.forecast.all($application);";
            const params = {
                application: application
            };

            const results: QueryResult = await this.neo4jAl.executeWithParameters(
                request,
                params
            );

            const groupList: IGroupResult[] = [];
            for(let i = 0; i < results.records.length; i++) {
                groupList.push(groupResultFromObj(results.records[i]));
            }

            return groupList;

        } catch (err) {
            logger.error("Failed to forecast all groups", err);
            throw new HttpException(500, "Internal error");
        }
    }

    /**
     * Delete a group using its id
     * @param idGroup Id o the group to delete
     * @returns
     */
    public async delete(idGroup: number): Promise<boolean> {
        try {
            const request = "CALL paris.groups.delete.by.id($idGroup);";
            const params = {idGroup: idGroup};
            const results: QueryResult = await this.neo4jAl.executeWithParameters(
                request,
                params
            );

            if (results.records.length == 0) return false;

            return true;
        } catch (err) {
            logger.error("Failed to delete a group", err);
            throw new HttpException(500, "Internal error");
        }
    }

    /**
     * Detach a use case to a parent
     * @param idUseCase Id of use case
     * @param idGroup Id of the groups
     */
    public async detachFromUseCase(
        idUseCase: number,
        idGroup: number
    ): Promise<Boolean> {
        try {
            const request =
                "CALL paris.groups.detach.from.case($idUseCase, $idGroup);";
            const params = {idUseCase: idUseCase, idGroup: idGroup};
            const results: QueryResult = await this.neo4jAl.executeWithParameters(
                request,
                params
            );

            if (results.records.length == 0) return false;

            return true;
        } catch (err) {
            logger.error("Failed to detach a group from a use case", err);
            throw new HttpException(500, "Internal error");
        }
    }

    /**
     * Create a group and link it to a use case
     * @param group group to create
     * @param idParent Id of parent use case
     */
    public async createAndAttach(
        group: IGroup,
        idUseCase: number
    ): Promise<IGroup> {
        const newGroup = await this.addGroup(group);

        await this.attachToUseCase(idUseCase, newGroup.id);
        return newGroup;
    }

    /**
     * Change the parent use case of a group
     * @param idGroup group to create
     * @param idParentOld Id of parent use case
     * @param idParentNew Id of parent use case
     */
    public async changeParent(
        idGroup: number,
        idParentOld: number,
        idParentNew: number
    ): Promise<void> {
        await this.detachFromUseCase(idParentOld, idGroup);
        await this.attachToUseCase(idParentNew, idGroup);
    }
}

export default GroupService;
