import axios from "axios";
import { ApiComUtils } from "../ApiComUtils";
import { ApiResponse } from "../interface/ApiResponse.interface";
import { Artifact } from "../interface/artemis/artifact.interface";

export class ArtifactController {
  private static API_BASE_URL = ApiComUtils.getUrl();

  /**
   * Get the list of Artifact
   * @param application Name of the application
   * @param language Name of language
   * @param external External
   */
  public static async getArtifactList(
    application: string,
    language: string,
    external: boolean
  ): Promise<Artifact[]> {
    const url =
      ArtifactController.API_BASE_URL +
      `/api/artemis/artifacts/all?external=${external}`;

    const data = {
      application: application,
      language: language
    };
    try {
      const res = await axios.post(url, data);

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        if (Array.isArray(apiResponse.data)) {
          return apiResponse.data;
        }
      } else {
        throw new Error(
          `Failed to launch the breakdown of the application. Status (${res.status}). Message: ${res.data}.`
        );
      }
    } catch (error) {
      console.error(
        `Failed to reach the API : ${url}. The breakdown failed.`,
        error
      );
      throw error;
    }
  }

  /**
   * Get the list of Artifact as Tree
   * @param application Name of the application
   * @param language Name of language
   * @param external External
   */
  public static async getArtifactAsTree(
    application: string,
    language: string,
    external: boolean
  ): Promise<Artifact[]> {
    const url =
      ArtifactController.API_BASE_URL +
      `/api/artemis/artifacts/tree?external=${external}`;

    const data = {
      application: application,
      language: language
    };
    try {
      const res = await axios.post(url, data);

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        if (Array.isArray(apiResponse.data)) {
          return apiResponse.data;
        }
      } else {
        throw new Error(
          `Failed to get the Artifact tree of the application. Status (${res.status}). Message: ${res.data}`
        );
      }
    } catch (error) {
      console.error(
        `Failed to reach the API : ${url}. Failed to get the Artifact tree.`,
        error
      );
      throw error;
    }
  }

  /**
   * Build the query
   * @param application Name of the application
   * @param frameworkName Name of the framework
   * @param regex
   */
  public static buildQuery(
    application: string,
    frameworkName: string,
    regex: string
  ): string {
    const tag: string = "$l_" + frameworkName;
    return (
      "MATCH (obj:Object:`" +
      application +
      "`) WHERE any( x IN ['" +
      regex +
      "'] WHERE obj.FullName=~x ) SET obj.Tags = CASE WHEN obj.Tags IS NULL THEN ['" +
      tag +
      "'] ELSE [ x IN obj.Tags WHERE NOT x CONTAINS '$l_' ] + '" +
      tag +
      "' END  RETURN COUNT(DISTINCT obj) as count;"
    );
  }

  public static getFullNameRec(
    item: Artifact,
    listArtifact: Artifact[]
  ): string {
    let fullName = item.name + item.delimiter;
    let prev = item.parentId;
    while (prev > 0) {
      // find in list the parent
      const newItem = listArtifact.find(x => x.id == prev);
      if (newItem) {
        fullName = newItem.name + newItem.delimiter + fullName;
        prev = newItem.parentId;
      } else {
        break;
      }
    }
    return fullName;
  }

  /**
   * Tree i
   * @param tree Tree selected
   * @param application Name of the application
   * @param language Language
   * @param external
   * @external Externality of the artifact
   */
  public static async buildQuerySet(
    tree: Artifact[],
    application: string,
    language: string,
    external: boolean
  ): Promise<string> {
    const listArtifact: Artifact[] = await this.getArtifactList(
      application,
      language,
      external
    );

    for (const key in tree) {
      const element = ArtifactController.getFullNameRec(
        tree[key],
        listArtifact
      );
      tree[key].name = element;
    }

    let setRequest = "";
    for (const key in tree) {
      const elem = tree[key];
      setRequest += `<span style='color: #66B245'>// Application : ${application}  :   ${tree[
        key
      ].customName || tree[key].name} </span><br />`;
      setRequest += this.buildQuery(
        application,
        tree[key].customName || tree[key].name,
        tree[key].name + "*"
      );
      setRequest += "<br /><br />";
    }

    return setRequest;
  }

  /**
   * Launch selected query against the database
   * @param application Name of the application
   * @param artifactList
   * @param extractionType
   * @param groupType
   */
  public static async launchQuerySet(
    application: string,
    artifactList: Artifact[],
    extractionType: string,
    groupType: string,
    primaryGroupName: string,
    secondaryGroupName: string
  ) {
    const url =
      ArtifactController.API_BASE_URL + `/api/artemis/artifacts/extract`;

    const data = {
      application: application,
      artifactList: artifactList,
      extractionType: extractionType,
      groupType: groupType,
      primaryGroupName: primaryGroupName,
      secondaryGroupName: secondaryGroupName
    };
    try {
      const res = await axios.post(url, data);

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        return apiResponse.data;
      } else {
        throw new Error(
          `Failed to perform the extraction of selected artifacts. Status (${res.status}). Message: ${res.data}`
        );
      }
    } catch (error) {
      console.error(
        `Failed to reach the API : ${url}. Failed to extract the Artifact list.`,
        error
      );
      throw error;
    }
  }
}
