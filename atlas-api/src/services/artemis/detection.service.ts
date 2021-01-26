import app from "@server";
import { logger } from "@shared/Logger";
import config from "config";
import { QueryResult } from "neo4j-driver";
import { Neo4JAccessLayer } from "src/database/neo4jAccessLayer";
import {
  DetectionResult,
  DetectionStatus,
} from "src/interfaces/artemis/detectionStatus.interface";
import { Framework } from "src/interfaces/artemis/framework.interface";

class DetectionService {
  private ARTEMIS_LABEL = config.get("artemis.frameworkNode");
  private neo4jAl: Neo4JAccessLayer = Neo4JAccessLayer.getInstance();

  // Detections
  private pendingApplicationDetection: string[] = [];
  private failedApplicationDetection: string[] = [];
  private finishedApplicationDetection: Map<string, Framework[]> = new Map();

  /**
   * Convert a neo4j record to a Framework
   * @param res Record to convert
   */
  private convertRecordToFramework(res: any): Framework {
    const framework: Framework = {
      name: res.get("name"),
      description: res.get("description"),
      type: res.get("type"),
      category: res.get("category") || "",
      internalType: res.get("internalType") || "",
      location: res.get("location") || "",
      discoveryDate: res.get("discoveryDate"),
      percentageOfDetection: Number(res.get("percentageOfDetection")) || 0,
    };

    return framework;
  }

  /**
   *
   * @param appName Get the result of a pending detection
   */
  public getDetectionStatus(appName: string): DetectionResult {
    if (this.pendingApplicationDetection.indexOf(appName) != -1) {
      return {
        application: appName,
        status: DetectionStatus.Pending,
      };
    } else if (this.failedApplicationDetection.indexOf(appName) != -1) {
      return {
        application: appName,
        status: DetectionStatus.Failure,
      };
    } else if (this.finishedApplicationDetection.has(appName)) {
      return {
        application: appName,
        status: DetectionStatus.Success,
        data: this.finishedApplicationDetection.get(appName),
      };
    } else {
      return {
        application: appName,
        status: DetectionStatus.Unknown,
      };
    }
  }

  /**
   * Get on-going detections
   */
  public getPendingDetections(): DetectionResult[] {
    const detectionResults: DetectionResult[] = [];
    this.pendingApplicationDetection.forEach((element) => {
      detectionResults.push({
        application: element,
        status: DetectionStatus.Pending,
      });
    });

    return detectionResults;
  }

  /**
   * Get succesful detections
   */
  public getSuccesfulDetections(): DetectionResult[] {
    const detectionResults: DetectionResult[] = [];
    this.finishedApplicationDetection.forEach(
      (val: Framework[], key: string) => {
        detectionResults.push({
          application: key,
          status: DetectionStatus.Success,
          data: val,
        });
      }
    );

    return detectionResults;
  }

  /**
   * Get failed detections
   */
  public getFailedDetections(): DetectionResult[] {
    const detectionResults: DetectionResult[] = [];
    this.failedApplicationDetection.forEach((element) => {
      detectionResults.push({
        application: element,
        status: DetectionStatus.Failure,
      });
    });

    return detectionResults;
  }

  /**
   * Launch the framework detector against a specific application
   * @param appName Name of the application concerned by the detection
   * @param language Language for the detection
   */
  public launchDetection(appName: string, language: string): boolean {
    const request = `CALL artemis.launch.detection($applicationName, $language, true);`;
    const params = { applicationName: appName, language: language };

    // If still pending do not launch the detection
    const indexPending: number = this.pendingApplicationDetection.indexOf(
      appName
    );
    if (indexPending != -1) {
      return false;
    }

    // Add Pending detection
    this.pendingApplicationDetection.push(appName);

    this.neo4jAl
      .executeWithParameters(request, params)
      .then((res: QueryResult) => {

        logger.info(`Results of the detection : ${res.records.length}`)
        logger.info(`1st Results of the detection `, res.records[0])
        // Remove from failures
        const indexFailure: number = this.failedApplicationDetection.indexOf(
          appName
        );
        if (indexFailure != -1) {
          this.failedApplicationDetection.splice(indexFailure, 1);
        }

        const resultList: Framework[] = [];
        let framework: Framework;

        for (let i = 0; i < res.records.length; i++) {
          framework = this.convertRecordToFramework(res.records[i]);
          resultList.push(framework);
        }

        // Add to sucess
        this.finishedApplicationDetection.set(appName, resultList);

        return resultList;
      })
      .catch((err) => {
        console.error("The analysis of the application failed.", err);
        this.failedApplicationDetection.push(appName);
      })
      .finally(() => {
        logger.info(`Detection finished for applicaiton ${appName} `)
        const index: number = this.pendingApplicationDetection.indexOf(appName);
        if (index != -1) {
          this.pendingApplicationDetection.splice(index, 1);
        }
      });

    return true;
  }
}

export default DetectionService;
