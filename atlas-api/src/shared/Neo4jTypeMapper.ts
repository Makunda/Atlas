/**
 * Neo4j Type Mapper
 */
import { int, Node } from "neo4j-driver";

/**
 * Type manager for Neo4j
 */
export default class Neo4jTypeMapper {

  /**
   * Get a number list from the record
   * @param value Value to convert
   */
  public static getNumberList(value: any): number[] {
    if (!Array.isArray(value)) {
      throw new Error("Value is not an array");
    }

    return value.map(x => int(x).toInt());
  }

  /**
   * Get a node list from the record
   * @param value
   */
  public static getNodeList(value: any): Node[] {
    if (!Array.isArray(value)) {
      throw new Error("Value is not an array");
    }

    return value.map(x => x as Node);
  }
}