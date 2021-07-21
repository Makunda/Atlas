import {Node, int} from "neo4j-driver";

/**
 * Different types of schema that can be 
 */
export enum SchemaType {
    LOCAL = "Local",
    MANAGEMENT = "Management",
    CENTRAL = "Central"
}

/**
 * Get the associated enum value
 */
export function schemaTypeFromString(type: string) : SchemaType {
    switch(type) {
        case "Local":
            return SchemaType.LOCAL;
        case "Management":
            return SchemaType.MANAGEMENT;
        case "Central":
            return SchemaType.CENTRAL;
        default:
            throw new Error(`${type} doesn't exist in the SchemaType.`)
    }
}



/**
 * Schema of one application on the server
 */
export interface AipSchema {
    id?: number
    name: string,
    schema: string,
    type: SchemaType
}

/**
 * AipSchema from a Node
 * @param {Node} n Node to transform in object 
 * @returns {AipSchema} The AipSchema Object
 * @throws {Exception} When the node is not formatted correctly
 */
 export function aipSchemaFromNode(n: Node) : AipSchema{
    const properties: any = n.properties;

    const type = schemaTypeFromString(properties["Type"]);

    return {
        id: int(n.identity).toNumber(),
        name: String(properties["Name"]),
        schema: String(properties["Url"]),
        type: type
    } as AipSchema;
}