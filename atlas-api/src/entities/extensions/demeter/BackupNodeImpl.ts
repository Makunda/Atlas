import BackupNode from "@interfaces/extensions/demeter/BackupNode";
import { Node } from "neo4j-driver";

/**
 * Implementation of the backup node
 */
export default class BackupNodeImpl implements BackupNode {
  name: string;
  description: string;
  timestamp: number;
  picture: string;

  public constructor(description: string, name: string, timestamp: number, picture: string) {
    this.description = description;
    this.name = name;
    this.timestamp = timestamp;
    this.picture = picture;
  }

  /**
   * Build a BackupNodeImpl from a node
   * @param n Node to convert
   */
  public static fromNode(n: Node): BackupNodeImpl {
    try {
      const name = String(n.properties["name"]);
      const description = String(n.properties["description"]);
      const timestamp = Number(n.properties["timestamp"]);
      const picture = String(n.properties["picture"]);
      return new BackupNodeImpl(name, description, timestamp, picture);
    } catch (err) {
      throw new Error("Failed to convert the node to a BackupNodeImpl.");
    }
  }

  /**
   * Build a BackupNodeImpl from a node
   * @param record Record to convert
   */
  public static fromRecord(record: any): BackupNodeImpl {
    try {
      const name = String(record.get("name"));
      const description = String(record.get("description"));
      const timestamp = Number(record.get("timestamp"));
      const picture = String(record.get("picture"));
      return new BackupNodeImpl(name, description, timestamp, picture);
    } catch (err) {
      throw new Error("Failed to convert the node to a BackupNodeImpl.");
    }
  }
}