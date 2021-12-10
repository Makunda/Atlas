import BackupNode from "@interfaces/extensions/demeter/BackupNode";
import { int, Node } from "neo4j-driver";

/**
 * Implementation of the backup node
 */
export default class BackupNodeImpl implements BackupNode {
  id: number;
  name: string;
  description: string;
  timestamp: number;
  picture: string;

  public constructor(id: number, name: string, description: string, timestamp: number, picture: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.timestamp = timestamp;
    this.picture = picture;
  }

  /**
   * Build a BackupNodeImpl from a node
   * @param n Node to convert
   */
  public static fromNode(n: Node): BackupNodeImpl {
    try {
      const id = n.identity.toNumber();
      const name = String(n.properties["name"]);
      const description = String(n.properties["description"]);
      const timestamp = int(n.properties["timestamp"]).toNumber();
      const picture = String(n.properties["picture"]);
      return new BackupNodeImpl(id, name, description, timestamp, picture);
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
      const id = int(record.get("id")).toNumber();
      const name = String(record.get("name"));
      const description = String(record.get("description"));
      const timestamp = int(record.get("timestamp")).toNumber();
      const picture = String(record.get("picture"));
      return new BackupNodeImpl(id, name, description, timestamp, picture);
    } catch (err) {
      throw new Error("Failed to convert the node to a BackupNodeImpl.");
    }
  }
}