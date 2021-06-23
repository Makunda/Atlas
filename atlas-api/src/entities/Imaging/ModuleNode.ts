import IModule from "@interfaces/imaging/modules.interface";
import { int, Node } from "neo4j-driver";

/**
 * Module node
 */
export default class ModuleNode {

    /**
     * Create an Module from a Node
     * @param {Node} n Node to be converted
     * @param {boolean} hidden Optional, flag the module as hidden
     */
    public static fromObj(n: Node, hidden = false): IModule {
        const properties:any = n.properties;
        return {
            _id: n.identity.toInt(),
            hidden: hidden,
            concept: Boolean(properties["Concept"]) || false,
            alternateDrilldown: Boolean(properties["AlternateDrilldown"]) || false,
            color: String(properties["Color"]),
            count: int(properties["Count"]).toNumber(),
            name: String(properties["Name"]),
        } as IModule;
    }
}
