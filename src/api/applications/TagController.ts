import { QueryResult } from "neo4j-driver";
import { int } from "neo4j-driver";
import { Neo4JAccessLayer } from "../Neo4jAccessLayer";

export interface TagResult {
  type: "tag";
  id: number;
  name: string;
  description: string;
  numMatch: number;
  categories: string;
  useCase: string;
}

export class TagController {
  private static neo4jal: Neo4JAccessLayer = Neo4JAccessLayer.getInstance();

  /**
   * Get results of the statistics
   * @param configuration Name of the configuration to use
   * @param applicationName Name of the application
   */
  public static async getTagResults(
    configuration: string,
    applicationName: string
  ): Promise<TagResult[]> {
    const request = `CALL demeter.tag.getAsList('${configuration}', '${applicationName}')`;

    const results: QueryResult = await this.neo4jal.execute(request);

    const appNames: TagResult[] = [];
    for (let i = 0; i < results.records.length; i++) {
      const singleRecord = results.records[i];

      const id = int(singleRecord.get("id")).toNumber();
      const tag = singleRecord.get("tag");
      const description = singleRecord.get("description") || "No description";
      const numMatch = int(singleRecord.get("numMatch")).toInt();
      const categories: string =
        singleRecord.get("categories") || "No category";
      const useCase = singleRecord.get("useCase");

      appNames.push({
        type: "tag",
        id: id,
        name: tag,
        description: description,
        numMatch: numMatch,
        categories: categories,
        useCase: useCase
      });
    }

    return appNames;
  }

  /**
   * Execute a specific tag
   * @param tag Tag to create
   */
  public static async createTag(tag: TagResult, configurationName: string) {
    return;
  }

  /**
   * Execute a specific tag on an Application
   * @param applicationName Name of the application
   * @param tagId Id of the tag to execute
   */
  public static async executeTag(
    applicationName: string,
    tagId: number
  ): Promise<TagResult> {
    const request = "CALL demeter.tag.execute( $id, $applicationName)";

    const results: QueryResult = await this.neo4jal.executeWithParameters(
      request,
      { applicationName: applicationName, id: tagId }
    );

    const singleRecord = results.records[0];

    const id = int(singleRecord.get("id")).toNumber();
    const tag = singleRecord.get("tag");
    const description = singleRecord.get("description") || "No description";
    const numMatch = int(singleRecord.get("numMatch")).toInt();
    const categories: string = singleRecord.get("categories") || "No category";
    const useCase = singleRecord.get("useCase");

    return {
      type: "tag",
      id: id,
      name: tag,
      description: description,
      numMatch: numMatch,
      categories: categories,
      useCase: useCase
    };
  }

  public static async checkValidity(request: string) {
    // Todo Fill this section
    console.log("Non Empty");
  }
}
