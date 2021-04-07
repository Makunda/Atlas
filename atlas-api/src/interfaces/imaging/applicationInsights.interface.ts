
import {int, Record} from "neo4j-driver";
import {ITransaction} from "@interfaces/imaging/transaction.interface";

export interface IApplicationInsights {
    name: string;
    levels5: string[];
    modules: string[];
    architectures: string[];
    technologies: string[];
}
