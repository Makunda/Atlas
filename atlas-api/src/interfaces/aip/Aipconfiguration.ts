import { int, Node } from "neo4j-driver";
import { AipSchema } from "./AipSchema";

/**
 * Interface of a configuration node
 */
export interface AipConfiguration {
  id?: number;
  name: string;
  url: string;
  port: number;
  user: string;
  password: string;
  database: string;
  schemas?: AipSchema[];
}

/**
 * AipConfiguration from a Node
 * @param {Node} n Node to transform in object
 * @returns {AipConfiguration} The AipConfiguration object
 * @throws {Exception} If the conversion fails
 */
export function aipConfigurationFromNode(n: Node): AipConfiguration {
  const properties: any = n.properties;

  return {
    id: int(n.identity).toNumber(),
    name: String(properties["Name"]),
    url: String(properties["Url"]),
    port: int(properties["Port"]).toNumber(),
    user: String(properties["User"]),
    database: String(properties["Database"]),
    password: String(properties["Password"]),
  } as AipConfiguration;
}
