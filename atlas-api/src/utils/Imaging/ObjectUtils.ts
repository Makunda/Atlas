import { Neo4JAccessLayer } from "@database/Neo4JAccessLayer";
import { logger } from "@shared/Logger";

/**
 * Handle all the functions related to Objects in Imaging
 */
export default class ObjectUtils {
  // Static declaration
  private static neo4jAccessLayer = Neo4JAccessLayer.getInstance();

  /**
   * Flag the list of object
   * @param objectList List of object to flag
   * @param property Name of the property to apply
   * @param value Value of this property
   */
  public static async flagListObjects(application: string, objectList: number[], property: string, value: any): Promise<void> {
    if (property.includes(" ")) throw new Error("The property cannot contain any space.");

    const req = `UNWIND $idList AS id 
    WITH id
    MATCH (o:Object:\`${application}\`) WHERE ID(o)=id 
    SET o.${property}=$value
    `;

    try {
      this.neo4jAccessLayer.executeWithParameters(req, { idList: objectList, value: value });
    } catch (error) {
      logger.error(`Failed to flag the list of object provided with property [${property}].`, error);
      throw error;
    }
  }
}
