import { int, Node } from "neo4j-driver";
import { AipSchema } from "./AipSchema";
import AipApplication from "@modules/aip/interfaces/AipApplication";

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
  applications?: AipApplication[];
}


