import {logger} from "@shared/logger";
import config from "config";
import {QueryResult} from "neo4j-driver";
import {Neo4JAccessLayer} from "@database/neo4jAccessLayer";
import {CancellablePromise, Detection,} from "@interfaces/artemis/detectionStatus.interface";
import {Framework} from "@interfaces/artemis/framework.interface";
import FrameworksService from "./framework.service";

class DetectionService {

    private static INSTANCE: DetectionService;
    private ARTEMIS_LABEL = config.get("artemis.frameworkNode");
    private neo4jAl: Neo4JAccessLayer = Neo4JAccessLayer.getInstance();

    // Detections
    private pendingApplicationDetection: Detection[] = [];
    private pendingPromiseDetection: CancellablePromise<Framework[]>[] = [];

    private failedApplicationDetection: Detection[] = [];
    private finishedApplicationDetection: Detection[] = [];

    private constructor() {

    }

    public static getInstance(): DetectionService {
        if (DetectionService.INSTANCE == null) {
            DetectionService.INSTANCE = new DetectionService();
        }

        return DetectionService.INSTANCE
    }

    /**
     * Get the result of a pending detection
     * @param appName Name of the application
     */
    public getDetectionStatus(appName: string): Detection {

        const indexPending = this.pendingApplicationDetection.findIndex(
            (i) => i.application === appName
        );
        if (indexPending != -1)
            return this.pendingApplicationDetection[indexPending];

        // Successful detection
        const indexSuccess = this.finishedApplicationDetection.findIndex(
            (i) => i.application === appName
        );
        if (indexSuccess != -1)
            return this.finishedApplicationDetection[indexSuccess];

        const indexFailure = this.failedApplicationDetection.findIndex(
            (i) => i.application === appName
        );
        if (indexFailure != -1)
            return this.failedApplicationDetection[indexFailure];

        return null;
    }

    /**
     * Get on-going detections
     */
    public getPendingDetections(): Detection[] {
        return this.pendingApplicationDetection;
    }

    /**
     * Get succesful detections
     */
    public getSuccesfulDetections(): Detection[] {
        return this.finishedApplicationDetection;
    }

    /**
     * Get failed detections
     */
    public getFailedDetections(): Detection[] {
        return this.failedApplicationDetection;
    }

    /**
     * Remove a detection from the list of pending operations
     * @param detection Detection to remove
     */
    public removeFromPending(detection: Detection): boolean {
        const index: number = this.pendingApplicationDetection.findIndex(
            (i) => {
                return i.application === detection.application && i.language === detection.language
            }
        );

        if (index < 0) return false;

        this.pendingApplicationDetection.splice(index, 1);
        return true;
    }

    /**
     * Launch the framework detector against a specific application
     * @param appName Name of the application concerned by the detection
     * @param language Language for the detection
     */
    public launchDetection(appName: string, language: string): CancellablePromise<Framework[]> {
        const request = `CALL artemis.launch.detection($applicationName, $language);`;
        const params = {applicationName: appName, language: language};

        // If still pending do not launch the detection
        const indexPending: number = this.pendingApplicationDetection.findIndex(
            (i) => i.application === appName
        );
        if (indexPending != -1) {
            return null;
        }

        const detection: Detection = new Detection(appName, language);
        detection.markAsPending();

        // Add Pending detection
        this.pendingApplicationDetection.push(detection);

        const session = this.neo4jAl.getSession();
        const transaction = session.beginTransaction();

        const promise: Promise<Framework[]> = new Promise((resolve, reject) => {

            transaction.run(request, params)
                .then((res: QueryResult) => {
                    logger.info(`Results of the detection : ${res.records.length}`);
                    logger.info(`1st Results of the detection `, res.records[0]);
                    // Remove from failures
                    const indexFailure: number = this.failedApplicationDetection.findIndex(
                        (i) => i.application === appName
                    );
                    if (indexFailure != -1) {
                        this.failedApplicationDetection.splice(indexFailure, 1);
                    }

                    const resultList: Framework[] = [];
                    let framework: Framework;

                    for (let i = 0; i < res.records.length; i++) {
                        framework = FrameworksService.convertRecordToFramework(res.records[i]);
                        resultList.push(framework);
                    }

                    // Add to sucess
                    detection.markAsSuccess(resultList);
                    this.finishedApplicationDetection.push(detection);
                    resolve(resultList);
                })
                .catch((err) => {
                    // Add to failed detections
                    logger.error("The analysis of the application failed.", err);
                    detection.markAsFailed();
                    this.failedApplicationDetection.push(detection);
                    resolve([]);
                })
                .finally(() => {
                    logger.info(`Detection finished for application ${appName} `);
                    const index: number = this.pendingApplicationDetection.findIndex(
                        (i) => i.application === appName
                    );
                    if (index != -1) {
                        this.pendingApplicationDetection.splice(index, 1);
                    }
                });
        });

        // Make the promise above cancellable for the user
        const cancellablePromise: CancellablePromise<Framework[]> = new CancellablePromise(appName, language, transaction, promise);
        this.pendingPromiseDetection.push(cancellablePromise);

        return cancellablePromise;
    }

    /**
     * Stop the detection of an application
     * @param applicationName Name of the application
     */
    public cancelDetection(applicationName: string, language: string): boolean {
        let canceled = false;
        // Cancel the promise
        this.pendingPromiseDetection.forEach(function (item, index, object) {
            if (item.application === applicationName && item.language === language) {
                item.cancel(); // Stop the execution of the promise
                object.splice(index, 1);
                canceled = true;
            }
        });

        // Remove from pending
        const index: number = this.pendingApplicationDetection.findIndex(
            (i) => {
                return i.application === applicationName && i.language === language
            }
        );
        if (index != -1) {
            this.pendingApplicationDetection.splice(index, 1);
            canceled = true;
        } else {
            canceled = false;
        }

        return canceled;
    }
}

export default DetectionService;
