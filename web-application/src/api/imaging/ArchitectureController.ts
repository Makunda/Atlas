import { ApiComUtils } from "@/api/ApiComUtils";
import axios from "axios";
import { ApiResponse } from "@/api/interface/ApiResponse.interface";
import Archimodel from "../interface/imaging/ArchiModel";

export default class ArchitectureController {
  private static API_BASE_URL = ApiComUtils.getUrl();

  /**
   * Retrieve the list of architecture models in the applications
   * @param application Name of the application
   */
  public static async getArchitectures(
    application: string
  ): Promise<Archimodel[]> {
    const url =
      ArchitectureController.API_BASE_URL +
      `/api/imaging/architectures/all/${application}`;

    try {
      const res = await axios.get(url);

      if (res.status == 200) {
        const apiResponse: ApiResponse = res.data;
        if (Array.isArray(apiResponse.data)) {
          return apiResponse.data as Archimodel[];
        }
      } else {
        console.warn(
          `Failed to retrieve architecture elements. Status (${res.status}). Message: ${res.data}`
        );
      }

      return [];
    } catch (error) {
      console.error(
        `Failed to reach the API : ${url}. Failed to retrieve architecture elements.`,
        error
      );
      throw error;
    }
  }

  /**
   * Display architecture element using its id
   * @param id Id of the architecture element
   * @param type Type of the architecture element
   */
  public static async hideArchitectureElement(
    id: number,
    type: string
  ): Promise<void> {
    const url =
      ArchitectureController.API_BASE_URL +
      `/api/imaging/architectures/${type}/hide`;

    try {
      const res = await axios.post(url, { id: id });

      if (res.status != 200) {
        console.warn(
          `Failed to hide architecture element. Status (${res.status}). Message: ${res.data}`
        );
      }
    } catch (error) {
      console.error(
        `Failed to reach the API : ${url}. Failed to hide architecture element.`,
        error
      );
      throw error;
    }
  }

  /**
   * Delete an architecture element using its id
   * @param id Id of the architecture element
   * @param type Type of the architecture element
   */
  public static async deleteArchitectureElement(
    application: string, 
    id: number,
    type: string
  ): Promise<void> {
    const url =
      ArchitectureController.API_BASE_URL +
      `/api/imaging/architectures/${type}/delete`;

    try {
      const res = await axios.post(url, { id: id, application: application });

      if (res.status != 200) {
        throw new Error(
          `Failed to delete architecture element. Status (${res.status}). Message: ${res.data}`
        );
      }
    } catch (error) {
      console.error(
        `Failed to reach the API : ${url}. Failed to delete architecture element.`,
        error
      );
      throw error;
    }
  }

  /**
   * Display architecture element using its id
   * @param id Id of the architecture element
   * @param type Type of the architecture element
   */
  public static async displayArchitectureElement(
    id: number,
    type: string
  ): Promise<void> {
    const url =
      ArchitectureController.API_BASE_URL +
      `/api/imaging/architectures/${type}/display`;

    try {
      const res = await axios.post(url, { id: id });

      if (res.status != 200) {
        throw new Error(
          `Failed to display architecture element. Status (${res.status}). Message: ${res.data}`
        );
      }
    } catch (error) {
      console.error(
        `Failed to reach the API : ${url}. Failed to display architecture element.`,
        error
      );
      throw error;
    }
  }


  /**
   * Modify architecture element using its id
   * @param id Id of the architecture element
   * @param type Type of the architecture element
   */
   public static async updateArchitectureElement(
    id: number,
    type: string,
    data: any
  ): Promise<void> {
    const url =
      ArchitectureController.API_BASE_URL +
      `/api/imaging/architectures/${type}/update`;

    try { 
      const params: any = data;
      params.id = id;

      const res = await axios.post(url, params);

      if (res.status != 200) {
        throw new Error(
          `Failed to update architecture element. Status (${res.status}). Message: ${res.data}`
        );
      }
    } catch (error) {
      console.error(
        `Failed to reach the API : ${url}. Failed to update architecture element.`,
        error
      );
      throw error;
    }
  }

  /**
   * Display an archimodel & all its children
   * @param id Id of the architecture element
   */
  public static async displayCompleteArchimodelElement(
    id: number
  ): Promise<void> {
    const url =
      ArchitectureController.API_BASE_URL +
      `/api/imaging/architectures/archimodel/display/complete`;

    try {
      const res = await axios.post(url, { id: id });

      if (res.status != 200) {
        throw new Error(
          `Failed to display architectures. Status (${res.status}). Message: ${res.data}`
        );
      }
    } catch (error) {
      console.error(
        `Failed to reach the API : ${url}. Failed to display architectures.`,
        error
      );
      throw error;
    }
  }


  /**
   * Duplicate an existing architecture and assign a new name
   * @param id Id of the architecture element
   * @param name Name of the architecture
   */
   public static async duplicateArchiModel(
    id: number,
    name: string
  ): Promise<void> {
    const url =
      ArchitectureController.API_BASE_URL +
      `/api/imaging/architectures/archimodel/duplicate/byId`;

    try {
      const res = await axios.post(url, { id: id, name: name });

      if (res.status != 200) {
        throw new Error(
          `Failed to duplicate architecture element. Status (${res.status}). Message: ${res.data}`
        );
      }
    } catch (error) {
      console.error(
        `Failed to reach the API : ${url}. Failed to duplicate architecture element.`,
        error
      );
      throw error;
    }
  }

  /**
   * Duplicate an existing architecture and assign a new name
   * @param id Id of the architecture element
   * @param application Name of the application
   */
   public static async groupUnassigned(
    id: number,
    application: string
  ): Promise<void> {
    const url =
      ArchitectureController.API_BASE_URL +
      `/api/imaging/architectures/archimodel/group/unassigned`;

    try {
      const res = await axios.post(url, { id: id, application: application });

      if (res.status != 200) {
        throw new Error(
          `Failed to duplicate architecture element. Status (${res.status}). Message: ${res.data}`
        );
      }
    } catch (error) {
      console.error(
        `Failed to reach the API : ${url}. Failed to duplicate architecture element.`,
        error
      );
      throw error;
    }
  }

   /**
   * Duplicate an existing architecture and assign a new name
   * @param id Id of the architecture element
   * @param application Name of the application
   */
    public static async duplicateTaxonomy(
      name: string,
      application: string
    ): Promise<void> {
      const url =
        ArchitectureController.API_BASE_URL +
        `/api/imaging/architectures/archimodel/duplicate/taxonomy`;
  
      try {
        const res = await axios.post(url, { name: name, application: application });
  
        if (res.status != 200) {
          throw new Error(
            `Failed to duplicate CAST Taxonomy. Status (${res.status}). Message: ${res.data}`
          );
        }
      } catch (error) {
        console.error(
          `Failed to reach the API : ${url}. Failed to duplicate CAST Taxonomy.`,
          error
        );
        throw error;
      }
    }
}
