import {int, Record} from "neo4j-driver";

interface IGroupResult {
    idGroup: number;
    objectConcerned : number;
    name: string;
    description: string;
}

function groupResultFromObj(row: Record): IGroupResult {

    return {
        idGroup: int(row.get("idGroup")).toNumber() || -1,
        objectConcerned: int(row.get("objectConcerned")).toNumber() || 0,
        name: String(row.get("name")),
        description: String(row.get("description"))
    } as IGroupResult
}

export { IGroupResult, groupResultFromObj }