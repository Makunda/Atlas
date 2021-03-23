import {int} from "neo4j-driver";
import {ILevel} from "@interfaces/imaging/level.interface";

interface ITransaction {
    _id?: number;
    count?: number;
    technologies?: string [];
    name: string;
    fullName: string;
}

function transactionFromObj(row: any): ITransaction {
    return {
        _id: int(row["identity"]).toNumber() || -1,
        fullName: String(row["properties"]["FullName"]),
        name: String(row["properties"]["Name"])
    } as ITransaction
}

export { ITransaction, transactionFromObj }