import config from "config";
import {Neo4JAccessLayer} from "@database/neo4jAccessLayer";
import {
    CancellableDetectionPromise,
    Detection,
    DetectionStatus,
} from "@interfaces/artemis/detectionStatus.interface";
import {logger} from "@shared/logger";

class DetectionService {

    private static INSTANCE: DetectionService;
    private ARTEMIS_LABEL = config.get("artemis.frameworkNode");
    private neo4jAl: Neo4JAccessLayer = Neo4JAccessLayer.getInstance();

    // Detections
    private detectionList: CancellableDetectionPromise[] = [];
    private resultList: Detection[] = [];


    /**
     * Singleton
     * @private
     */
    private constructor() {
    }

    /**
     * Get the instance of the Detection Service
     * @return An initialized Detection Service
     */
    public static getInstance(): DetectionService {
        if (DetectionService.INSTANCE == null) {
            DetectionService.INSTANCE = new DetectionService();
        }

        return DetectionService.INSTANCE
    }

    /**
     * Find a pending detection based on application name and language
     * @param application Name of the application
     * @param language Language of the detection
     */
    public findPendingDetection(application: string, language: string): CancellableDetectionPromise | null {
        // If still pending do not launch the detection
        const genPk = CancellableDetectionPromise.generateDetectionPk(application, language);
        for (const i of this.detectionList) {
            if (i.getDetectionPk() == genPk) {
                return i;
            }
        }
        return null;
    }

    /**
     * Remove a detection from the list using the application and the language
     * @param application
     * @param language
     */
    public removePendingDetection(application: string, language: string): boolean {
        // If still pending do not launch the detection
        const genPk = CancellableDetectionPromise.generateDetectionPk(application, language);
        for (let i = 0; i < this.detectionList.length; i++) {
            if (this.detectionList[i].getDetectionPk() == genPk) {
                this.detectionList.splice(i, 1);
                return true;
            }

        }
        return false;
    }

    /**
     * Add a detection to the detection results list
     * Only keeps the 20 latest results.
     * @param detection Detection to be saved
     */
    public addToResult(detection: Detection) : void {
        // shift the list if too big
        if(this.resultList.length > 20) this.resultList.shift();
        this.resultList.push(detection);
    }

    /**
     * Find a result using the ID of the detection
     * @param idDetection
     */
    public findResult(idDetection: string) : Detection|null {
        for (let i = 0; i < this.resultList.length; i++) {
            if(idDetection == this.resultList[i].getId()) return this.resultList[i];
        }
        return null;
    }

    /**
     * Get the list of results
     */
    public getResults() : Detection[] {
        return this.resultList;
    }

    /**
     * Remove all the results saved
     */
    public flushResults() : void {
        this.resultList = [];
    }

    /**
     * Get the result of a pending detection
     * @param appName Name of the application
     * @param language
     */
    public getDetectionStatus(appName: string, language: string): Detection | null {
        const detection = this.findPendingDetection(appName, language)
        if (detection == null) return null;

        return detection.getDetection();
    }

    /**
     * Get on-going detections
     */
    public getPendingDetections(): Detection[] {
        return this.detectionList.filter(x => x.getStatus() == DetectionStatus.Pending)
            .map(x => x.getDetection());
    }

    /**
     * Get successful detections
     */
    public getSuccessfulDetections(): Detection[] {
        return this.detectionList.filter(x => x.getStatus() == DetectionStatus.Success)
            .map(x => x.getDetection());
    }

    /**
     * Get failed detections
     */
    public getFailedDetections(): Detection[] {
        return this.detectionList.filter(x => x.getStatus() == DetectionStatus.Failure)
            .map(x => x.getDetection());
    }

    /**
     * Get a detection using its ID
     * @param uuid
     */
    public getDetectionByID(uuid: string): Detection | null {
        const indexPending: number = this.detectionList.findIndex(
            (i) => i.getDetection().getId() == uuid
        );

        if (indexPending != -1) {
            return null;
        }

        return this.detectionList[indexPending].getDetection();
    }

    /**
     * Launch the framework detector against a specific application
     * @param appName Name of the application concerned by the detection
     * @param language Language for the detection
     */
    public launchDetection(appName: string, language: string): CancellableDetectionPromise {

        // If still pending do not launch the detection
        const indexPending: number = this.detectionList.findIndex(
            (i) => i.getDetectionPk() == CancellableDetectionPromise.generateDetectionPk(appName, language)
        );

        if (indexPending != -1) {
            this.detectionList[indexPending].cancelPromise();
            this.detectionList.splice(indexPending, 1);
        }


        // Make the promise above cancellable for the user
        const cancellablePromise: CancellableDetectionPromise = new CancellableDetectionPromise(appName, language, () => {
            this.removeCancellablePromise(cancellablePromise);
        }, (data: Detection) => {
            this.addToResult(data);
        } );
        this.detectionList.push(cancellablePromise);

        return cancellablePromise;
    }

    /**
     * Get the result of a detection based on its name and language
     * @param application
     * @param language
     */
    public getDetectionResults(application: string, language: string): Detection {
        logger.info(`Requesting detection results for application ${application} and language : ${language}.`)
        const promiseDetection = this.findPendingDetection(application, language);

        if (promiseDetection == null) {
            throw Error(`No detection on application : ${application} and language ${language} was found.`);
        }

        // Check if the detection is done
        return promiseDetection.getDetection()
    }

    /**
     * Stop the detection of an application
     * @param application
     * @param language
     */
    public cancelDetection(application: string, language: string): void {

        try {
            const detection = this.findPendingDetection(application, language)
            if (detection == null) return null;

            detection.cancelPromise();

            this.removePendingDetection(application, language);
        } catch (err) {
            logger.error("Failed to cancel a promise.", err);
            throw new Error(`Failed to cancel the promise for application ${application}.`)
        }
    }

    /**
     * Remove a specific cancellable promise from the list
     * @param cancellablePromise To be removec
     * @private
     */
    private removeCancellablePromise(cancellablePromise: CancellableDetectionPromise) {
        const indexPending: number = this.detectionList.findIndex(
            (i) => i.getDetectionPk() == cancellablePromise.getDetectionPk()
        );

        if (indexPending != -1) {
            this.detectionList[indexPending].cancelPromise();
            this.detectionList.splice(indexPending, 1);
        }
    }
}

export default DetectionService;
