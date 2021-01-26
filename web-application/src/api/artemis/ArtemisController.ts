import { QueryResult } from "neo4j-driver";
import { Neo4JAccessLayer } from "../Neo4jAccessLayer";

export class ArtemisFrameworkResult {
  name: string;
  description: string;
  category: string;
  detectedAs: string;
}

export class ArtemisController {
  private static neo4jal: Neo4JAccessLayer = Neo4JAccessLayer.getInstance();

  /**
   * Get the list of languages supported by Artemis
   * TO DO : Bind this list to Artemis
   */
  public static getSupportedLanguages(): string[] {
    return ["Cobol", "Java"];
  }

  /**
   * Get the version of the Artemis extension.
   * Throw an error if the extension is not installed
   */
  public static async getArtemisVersion(): Promise<string> {
    const request = "CALL artemis.version()";
    const results: QueryResult = await this.neo4jal.execute(request);

    if (!results.records || results.records.length == 0) {
      throw new Error(
        "The artemis extension is not installed or not properly working."
      );
    }

    return results.records[0].get(0);
  }

  /**
   * Set the workspace of artemis
   */
  public static async setWorkspace(workspacePath: string): Promise<string> {
    try {
      const request = `CALL artemis.set.workspace(${workspacePath});`;

      const results: QueryResult = await this.neo4jal.execute(request);
      const newPath: string = results.records[0].get(0);

      console.log(`Artemis workspace was successfully changed to ${newPath}.`);

      return (
        "The path of artemis was successfully changed to : " + workspacePath
      );
    } catch (error) {
      console.error("Something went wrong during the workspace change.", error);
      throw error;
    }
  }

  /**
   * Get the workspace of artemis
   */
  public static async getWorkspace(): Promise<string> {
    const request = `CALL artemis.get.workspace();`;

    const results: QueryResult = await this.neo4jal.execute(request);
    const newPath: string = results.records[0].get(0);

    return newPath;
  }

  /**
   * Set the Online mode of artemis
   */
  public static async setOnlineMode(value: boolean): Promise<boolean> {
    try {
      const request = `CALL artemis.set.onlineMode(${value});`;

      const results: QueryResult = await this.neo4jal.execute(request);
      const newValue: string = results.records[0].get(0);

      return Boolean(newValue);
    } catch (error) {
      console.error(
        "Something went wrong trying to change the online mode parameter.",
        error
      );
      throw error;
    }
  }

  /**
   * Get the Online mode of artemis
   */
  public static async getOnlineMode(): Promise<boolean> {
    const request = `CALL artemis.get.onlineMode();`;

    const results: QueryResult = await this.neo4jal.execute(request);
    const newValue: string = results.records[0].get(0);
    return Boolean(newValue);
  }

  /**
   * Set the Repository mode of artemis
   */
  public static async setRepositoryMode(value: boolean): Promise<boolean> {
    try {
      const request = `CALL artemis.set.repositoryMode(${value});`;

      const results: QueryResult = await this.neo4jal.execute(request);
      const newValue: string = results.records[0].get(0);

      return Boolean(newValue);
    } catch (error) {
      console.error(
        "Something went wrong trying to change the Repository mode parameter.",
        error
      );
      throw error;
    }
  }

  /**
   * Get the Repository mode of artemis
   */
  public static async getRepositoryMode(): Promise<boolean> {
    const request = `CALL artemis.get.repositoryMode();`;

    const results: QueryResult = await this.neo4jal.execute(request);
    const newValue: string = results.records[0].get(0);
    return Boolean(newValue);
  }

  /**
   * Set the Repository mode of artemis
   */
  public static async setMailsRecipients(
    listRecipients: string
  ): Promise<boolean> {
    try {
      const request = `CALL artemis.set.mailsRecipients(${listRecipients});`;

      const results: QueryResult = await this.neo4jal.execute(request);

      const newValue: string = results.records[0].get(0);

      return Boolean(newValue);
    } catch (error) {
      console.error(
        "Something went wrong trying to change the Mail recipients list.",
        error
      );
      throw error;
    }
  }

  /**
   * Get the Repository mode of artemis
   */
  public static async getMailsRecipients(): Promise<string[]> {
    const request = `CALL artemis.get.mailsRecipients();`;

    const results: QueryResult = await this.neo4jal.execute(request);
    const newValue: string = results.records[0].get(0);
    return newValue.split(",");
  }

  /**
   * Launch the detection on a module
   */
  public static async launchDetection(
    applicationName: string,
    language: string
  ): Promise<ArtemisFrameworkResult[]> {
    const request = `CALL artemis.launch.detection("${applicationName}", "${language}", true);`;

    const resultList: ArtemisFrameworkResult[] = [];
    const results: QueryResult = await this.neo4jal.execute(request);

    for (let i = 0; i < results.records.length; i++) {
      const name = results.records[i].get("name");
      const description = results.records[i].get("description");
      const detectedAs = results.records[i].get("detectedAs");
      const category = results.records[i].get("category");
      resultList.push({
        name: name,
        description: description,
        category: category,
        detectedAs: detectedAs
      });
    }

    return resultList;
  }


}
