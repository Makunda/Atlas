import Subset from "@interfaces/imaging/Subset";
import { int, Node} from "neo4j-driver";


export default class SubsetNode {
    /**
     * Create an Architecture object from a Node
     * @param {Node} n Node to be converted
     * @param {boolean} hidden Optional, flag the module as hidden
     */
     public static fromObj(n: Node): Subset {
        const properties:any = n.properties;

        return {
            _id: n.identity.toInt(),
            name: String(properties["Name"]),
            type: String(properties["Type"]) || "subset",
            count: int(properties["Count"]).toNumber(),
            modelId: String(properties["ModelId"]),
            subsetId: String(properties["SubsetId"]),
            color: String(properties["Color"]),
        } as Subset;
    }
}