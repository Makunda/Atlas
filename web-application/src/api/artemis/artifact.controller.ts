import axios from "axios";
import { ApiComUtils } from "../ApiComUtils";
import { IArtifact } from "../interface/ApiArtifact.interface";
import { ApiResponse } from "../interface/ApiResponse.interface";
import { ArtemisController } from "./artemis.controller";

export class ArtifactController {
  private static API_BASE_URL = ApiComUtils.getUrl();

  public static async getArtifactList(
    application: string,
    language: string
  ): Promise<IArtifact[]> {
    const url = ArtifactController.API_BASE_URL + "/api/artemis/artifacts/all";

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
          `Failed to launch the breakdown of the application. Status (${res.status}). Message: ${res.data}`
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

  public static async getArtifactAsTree(
    application: string,
    language: string
  ): Promise<IArtifact[]> {
    const url = ArtifactController.API_BASE_URL + "/api/artemis/artifacts/tree";

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
    item: IArtifact,
    listArtifact: IArtifact[]
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
   */
  public static async buildQuerySet(
    tree: IArtifact[],
    application: string,
    language: string
  ): Promise<string> {
    const listArtifact: IArtifact[] = await this.getArtifactList(
      application,
      language
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
   * @param tree
   * @param application
   * @param language
   */
  public static async launchQuerySet(
    tree: IArtifact[],
    application: string,
    language: string
  )  {
    const listArtifact: IArtifact[] = await this.getArtifactList(
      application,
      language
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
      setRequest +=
        this.buildQuery(
          application,
          tree[key].customName || tree[key].name,
          tree[key].name + "*"
        ) + "\n";
    }

    // Launch the request
  }
}
