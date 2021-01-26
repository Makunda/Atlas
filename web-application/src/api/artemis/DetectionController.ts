import { QueryResult } from "neo4j-driver";
import { Neo4JAccessLayer } from "../Neo4jAccessLayer";
import axios from "axios";
import { ApiResponse } from "../interface/ApiResponse.interface";
import { DetectionResultDTO } from "../dto/ApiArtemis.dto";
import { DetectionResult } from "../interface/ApiArtemis.interface";


export default class DetectionController {

    private static API_BASE_URL = window.location.origin;

    private static PENDING_DETECTIONS:DetectionResult[] = [];
    private static SUCCESSFUL_DETECTIONS:DetectionResult[] = [];
    private static FAILED_DETECTIONS:DetectionResult[] = [];

    public static async launchDetection(application:string, language:string) : Promise<boolean> {
        const url = DetectionController.API_BASE_URL+"/api/detection/launch";

        const data = {
            "application": application,
            "language": language
        }
        try {
            const res = await axios.post(url, data);

            if(res.status == 200) {
                const apiResponse:ApiResponse = res.data;
                return Boolean(apiResponse.data);

            } else {
                console.warn(`Failed to launch the detection. Status (${res.status})`);
                return false;
            }
        } catch (error) {
            console.error(`Failed to reach the API : ${url}. The detection was not launched.`, error);
        }
        
    }

    /**
     * Get pending detection operations
     */
    private static async getPendingDetections() : Promise<DetectionResult[]> {
        const url = DetectionController.API_BASE_URL+"/api/detection/pending";

        try {
            const res = await axios.get(url);
            let detectionList:DetectionResult[] = [];

            if(res.status == 200) {
                const apiResponse:ApiResponse = res.data;
                if(Array.isArray(apiResponse.data)) {
                    detectionList = apiResponse.data;
                }
                
            } else {
                console.warn(`Failed to launch the detection. Status (${res.status})`);
            }

            DetectionController.PENDING_DETECTIONS = detectionList;
            return detectionList;
        } catch (error) {
            console.error(`Failed to reach the API : ${url}. Failed to retrieve pending operations.`, error);
        }  
    }

    public static async getApplicationStatus(application:string): Promise<DetectionResult> {
        const url = DetectionController.API_BASE_URL+"/api/detection/status/"+application;

        try {
            const res = await axios.get(url);

            if(res.status == 200) {
                const apiResponse:ApiResponse = res.data;
                const appStatus:DetectionResultDTO = new DetectionResultDTO(apiResponse.data);
                return appStatus;
            } else {
                console.warn(`Failed to launch the detection. Status (${res.status})`);
                return null;
            }
        } catch (error) {
            console.error(`Failed to reach the API : ${url}. Failed to retrieve pending operations.`, error);
        }  
    }

    private 
}

// Launch routines