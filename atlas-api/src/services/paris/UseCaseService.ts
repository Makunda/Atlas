import {logger} from "@shared/Logger";
import {int, QueryResult} from "neo4j-driver";
import {Neo4JAccessLayer} from "@database/Neo4jAccessLayer";
import HttpException from "@exceptions/HttpException";
import {IUseCase} from "@interfaces/paris/useCase.interface";
import {IGroup} from "@interfaces/paris/group.interface";
import GroupService from "./GroupService";

class UseCaseService {
    private neo4jAl: Neo4JAccessLayer = Neo4JAccessLayer.getInstance();

    /**
     * Convert a record to a UseCase object
     * @param res Record to convert
     */
    private static convertRecordToUseCase(res: any): IUseCase {
        return {
            id: int(res.get("id")).toNumber(),
            title: res.get("title"),
            description: res.get("description"),
            categories: res.get("categories") || [],
            active: res.get("active"),
            selected: res.get("selected"),
        };
    }

    /**
     * Get the version of Artemis
     */
    public async getAllUseCases(): Promise<IUseCase[]> {
        try {
            const request = "CALL paris.cases.get.all()";

            const results: QueryResult = await this.neo4jAl.execute(request);

            const useCases: IUseCase[] = [];
            for (let i = 0; i < results.records.length; i++) {
                const useCase = UseCaseService.convertRecordToUseCase(
                    results.records[i]
                );
                useCases.push(useCase);
            }

            return useCases;
        } catch (err) {
            logger.error("Failed to verify the retrieve the list of use cases", err);
            throw new HttpException(500, "Internal error");
        }
    }

    /**
     * Get root use cases
     */
    public async getRootUseCases(): Promise<IUseCase[]> {
        try {
            const request = "CALL paris.cases.get.roots()";

            const results: QueryResult = await this.neo4jAl.execute(request);

            const useCases: IUseCase[] = [];
            for (let i = 0; i < results.records.length; i++) {
                const useCase = UseCaseService.convertRecordToUseCase(
                    results.records[i]
                );
                useCases.push(useCase);
            }

            return useCases;
        } catch (err) {
            logger.error(
                "Failed to verify the retrieve the list of root use cases",
                err
            );
            throw new HttpException(500, "Internal error");
        }
    }

    /**
     * Get the version of Artemis
     */
    public async checkValidity(
        request: string,
        returnValue: string
    ): Promise<boolean> {
        try {
            const req = "CALL paris.cypher.test.request($request, $returnValue)";
            const params = {request: request, returnValue: returnValue};

            const results: QueryResult = await this.neo4jAl.executeWithParameters(
                req,
                params
            );

            if (!results.records || results.records.length == 0) return false;

            return Boolean(results.records[0].get(0));
        } catch (err) {
            logger.error("Failed to verify the validity of a request", err);
            throw new HttpException(500, "Internal error");
        }
    }

    /**
     * Get root use cases
     */
    public async getAttachedUseCases(id: number): Promise<IUseCase[]> {
        try {
            const request = "CALL paris.cases.get.attached.cases($id)";
            const params = {id: id};

            const results: QueryResult = await this.neo4jAl.executeWithParameters(
                request,
                params
            );

            const useCases: IUseCase[] = [];
            for (let i = 0; i < results.records.length; i++) {
                const useCase = UseCaseService.convertRecordToUseCase(
                    results.records[i]
                );
                useCases.push(useCase);
            }

            return useCases;
        } catch (err) {
            logger.error(
                "Failed to verify the retrieve the list of attached use cases",
                err
            );
            throw new HttpException(500, "Internal error");
        }
    }

    /**
     * Get all the groups attached to the use case
     * @param id Id of the use case
     * @returns
     */
    public async getAttachedGroups(id: number): Promise<IGroup[]> {
        try {
            const request = "CALL paris.cases.get.attached.groups($id)";
            const params = {id: id};

            const results: QueryResult = await this.neo4jAl.executeWithParameters(
                request,
                params
            );

            const useCases: IGroup[] = [];
            for (let i = 0; i < results.records.length; i++) {
                const useCase = GroupService.convertRecordToGroup(results.records[i]);
                useCases.push(useCase);
            }

            return useCases;
        } catch (err) {
            logger.error(
                "Failed to verify the retrieve the list of attached use cases",
                err
            );
            throw new HttpException(500, "Internal error");
        }
    }

    /**
     * Get the version of Artemis
     */
    public async removeUseCase(id: number): Promise<boolean> {
        try {
            const request = "CALL paris.cases.delete.by.id($id)";
            const params = {id: id};
            const results: QueryResult = await this.neo4jAl.executeWithParameters(
                request,
                params
            );

            if (results.records.length == 0) return false;

            return Boolean(results.records[0]);
        } catch (err) {
            logger.error("Failed to remove a use case", err);
            throw new HttpException(500, "Internal error");
        }
    }

    /**
     * Add the use case to the knowledge base
     */
    public async addUseCase(useCase: IUseCase): Promise<IUseCase> {
        try {
            const request =
                "CALL paris.cases.create($title, $description, $categories, $active, $selected)";
            const results: QueryResult = await this.neo4jAl.executeWithParameters(
                request,
                useCase
            );

            if (results.records.length == 0) return null;

            return UseCaseService.convertRecordToUseCase(results.records[0]);
        } catch (err) {
            logger.error("Failed to create a new use cases", err);
            throw new HttpException(500, "Internal error");
        }
    }

    /**
     * Update a specific use case using its id. Update also the parent id
     */
    public async updateUseCase(useCase: IUseCase, parentId: number): Promise<IUseCase> {
        try {
            const request =
                "CALL paris.cases.update.by.id($id, $title, $description, $categories, $active, $selected, $parentId)";

            const params: any = useCase;
            params.parentId = parentId;

            const results: QueryResult = await this.neo4jAl.executeWithParameters(
                request,
                params
            );

            if (results.records.length == 0) return null;

            return UseCaseService.convertRecordToUseCase(results.records[0]);
        } catch (err) {
            logger.error("Failed to update a use cases", err);
            throw new HttpException(500, "Internal error");
        }
    }

    /**
     * Attach a use case to a parent
     * @param idParent Id of the parent
     * @param idChild Id of the child
     */
    public async attachUseCase(
        idParent: number,
        idChild: number
    ): Promise<boolean> {
        try {
            const request = "CALL paris.cases.attach.to.case($idParent, $idChild);";
            const params = {idParent: idParent, idChild: idChild};
            const results: QueryResult = await this.neo4jAl.executeWithParameters(
                request,
                params
            );

            if (results.records.length == 0) return false;

            return true;
        } catch (err) {
            logger.error("Failed to verify the create a new use cases", err);
            throw new HttpException(500, "Internal error");
        }
    }

    /**
     * Attach a use case to a parent
     * @param idParent Id of the parent
     * @param idChild Id of the child
     */
    public async detachUseCase(
        idParent: number,
        idChild: number
    ): Promise<boolean> {
        try {
            const request = "CALL paris.cases.detach.from.case($idParent, $idChild);";
            const params = {idParent: idParent, idChild: idChild};
            const results: QueryResult = await this.neo4jAl.executeWithParameters(
                request,
                params
            );

            if (results.records.length == 0) return false;

            return true;
        } catch (err) {
            logger.error("Failed to verify the create a new use cases", err);
            throw new HttpException(500, "Internal error");
        }
    }

    /**
     *
     * @param useCase Use case to create
     * @param idParent Id Parent
     */
    public async createAndAttach(
        useCase: IUseCase,
        idParent: number
    ): Promise<IUseCase> {
        const dioGroup = await this.addUseCase(useCase);

        await this.attachUseCase(idParent, dioGroup.id);
        return dioGroup;
    }
}

export default UseCaseService;
