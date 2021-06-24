import axios from "axios";
import { ApiComUtils } from "../ApiComUtils";
import { ApiResponse } from "../interface/ApiResponse.interface";
import Module from "../interface/imaging/Module";

export default class ModuleController {
    private static API_BASE_URL = ApiComUtils.getUrl();
  
    /**
     * Retrieve the list of modules in the applications
     * @param application Name of the application
     */
    public static async getModules(application: string): Promise<Module[]> {
      const url =
        ModuleController.API_BASE_URL + `/api/imaging/modules/all/${application}`;
  
      try {
        const res = await axios.get(url);
  
        if (res.status == 200) {
          const apiResponse: ApiResponse = res.data;
          if (Array.isArray(apiResponse.data)) {
            return apiResponse.data as Module[];
          }
        } else {
          console.warn(`Failed to retrieve module. Status (${res.status}). Message: ${res.data}`);
        }
  
        return [];
      } catch (error) {
        console.error(
          `Failed to reach the API : ${url}. Failed to retrieve modules.`,
          error
        );
        throw error;
      }
    }

    /**
     * Retrieve the list of hidden modules in the applications
     * @param application Name of the application
     */
     public static async getHiddenModules(application: string): Promise<Module[]> {
        const url =
          ModuleController.API_BASE_URL + `/api/imaging/modules/all/${application}/hidden`;
    
        try {
          const res = await axios.get(url);
    
          if (res.status == 200) {
            const apiResponse: ApiResponse = res.data;
            if (Array.isArray(apiResponse.data)) {
              return apiResponse.data as Module[];
            }
          } else {
            console.warn(`Failed to retrieve hidden modules. Status (${res.status}). Message: ${res.data}`);
          }
    
          return [];
        } catch (error) {
          console.error(
            `Failed to reach the API : ${url}. Failed to retrieve modules.`,
            error
          );
          throw error;
        }
      }

     /**
     * Hide a module by its ID
     * @param id Id of the module to hide
     */
     public static async hideById(id: number): Promise<boolean> {
      const url =
        ModuleController.API_BASE_URL + `/api/imaging/modules/hide`;
  
      try {
        const body = { id: id };
        const res = await axios.post(url, body);
  
        if (res.status == 200) {
          const apiResponse: ApiResponse = res.data;
          if (Array.isArray(apiResponse.data)) {
            return true;
          }
        } else {
          throw new Error(`Failed to hide module ${id}. Status (${res.status}). Message: ${res.data}`);
        }
  
      } catch (error) {
        console.error(
          `Failed to reach the API : ${url}. Failed to hide the module.`,
          error
        );
        throw error;
      }
    }

     /**
     * UnHide a module by its ID
     * @param id Id of the module to hide
     */
      public static async unHideById(id: number): Promise<boolean> {
        const url =
          ModuleController.API_BASE_URL + `/api/imaging/modules/unhide`;
    
        try {
          const body = { id: id };
          const res = await axios.post(url, body);
    
          if (res.status == 200) {
            const apiResponse: ApiResponse = res.data;
            if (Array.isArray(apiResponse.data)) {
              return true;
            }
          } else {
            throw new Error(`Failed to unhide module ${id}. Status (${res.status}). Message: ${res.data}`);
          }
    
        } catch (error) {
          console.error(
            `Failed to reach the API : ${url}. Failed to unhide the module.`,
            error
          );
          throw error;
        }
      }


    /**
     * Delete a module by its ID
     * @param id Id of the module to hide
     */
      public static async deleteById(id: number): Promise<boolean> {
        const url =
          ModuleController.API_BASE_URL + `/api/imaging/modules/delete`;
    
        try {
          const body = { id: id };
          const res = await axios.post(url, body);
    
          if (res.status == 200) {
            const apiResponse: ApiResponse = res.data;
            if (Array.isArray(apiResponse.data)) {
              return true;
            }
          } else {
            throw new Error(`Failed to delete module ${id}. Status (${res.status}). Message: ${res.data}`);
          }
    
        } catch (error) {
          console.error(
            `Failed to reach the API : ${url}. Failed to delete the module.`,
            error
          );
          throw error;
        }
      }


     /**
     * Update a module by its ID
     * @param id Id of the module to hide
     */
       public static async updateById(id: number, data: Module): Promise<Module> {
        const url =
          ModuleController.API_BASE_URL + `/api/imaging/modules/update`;
    
        try {
          const body: any = data;
          body.id = id; 
          
          const res = await axios.put(url, body);
    
          if (res.status == 200) {
            const apiResponse: ApiResponse = res.data;
            return apiResponse.data as Module|null;
          } else {
            throw new Error(`Failed to update module ${id}. Status (${res.status}). Message: ${res.data}`);
          }
    
        } catch (error) {
          console.error(
            `Failed to reach the API : ${url}. Failed to update the module.`,
            error
          );
          throw error;
        }
      }



       /**
     * Merge two modules by their ID
     * @param {number} application Name of the application
     * @param {number} idSource Id of the module to be merge
     * @param {number} idDest Id of the destination module
     */
        public static async mergeModules(application: string, idSource: number, idDest: number): Promise<Module> {
          const url =
            ModuleController.API_BASE_URL + `/api/imaging/modules/merge`;
      
          try {
            const body: any = {
              application: application,
              idSource: idSource,
              idDest: idDest
            }
            
            const res = await axios.post(url, body);
      
            if (res.status == 200) {
              const apiResponse: ApiResponse = res.data;
              return apiResponse.data as Module|null;
            } else {
              throw new Error(`Failed to merge the two modules. Status (${res.status}). Message: ${res.data}`);
            }
      
          } catch (error) {
            console.error(
              `Failed to reach the API : ${url}. Failed to merge the module.`,
              error
            );
            throw error;
          }
        }
}