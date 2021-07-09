import {int} from "neo4j-driver";

interface DataCallGraph {
    _id?: number;
    count?: number;
    technologies?: string [];
    numTechnologies?: number;
    name: string;
    fullName: string;
}

function dataCallGraphFromObj(row: any): DataCallGraph {
    return {
        _id: int(row["identity"]).toNumber() || -1,
        fullName: String(row["properties"]["FullName"]),
        name: String(row["properties"]["Name"])
    } as DataCallGraph
}

export {DataCallGraph, dataCallGraphFromObj}