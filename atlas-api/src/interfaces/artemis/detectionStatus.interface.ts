import {logger} from "@shared/logger";
import {QueryResult, Transaction} from "neo4j-driver";
import {Framework} from "./framework.interface";
import FrameworksService from "@services/artemis/framework.service";
import {Neo4JAccessLayer} from "@database/neo4jAccessLayer";
import {uuidv4} from "../../utils/utils";

export enum DetectionStatus {
    NotStarted,
    Pending,
    Success,
    Failure,
    Unknown
}

/**
 * Class to handle the different properties of a detection
 */
export class Detection {

    // Attribute must be public
    public readonly id: string;
    public readonly application: string;
    public timestampStart: number;
    public timestampFinish = 0;
    public readonly language: string;
    public status: DetectionStatus;
    public data: Framework[] = [];

    constructor(application: string, language: string) {
        this.id = uuidv4();
        this.application = application;
        this.language = language;
        this.status = DetectionStatus.NotStarted;
        this.timestampStart = Date.now();
    }

    public markAsSuccess(data: Framework[]) {
        this.timestampFinish = Date.now();
        this.status = DetectionStatus.Success;
        this.data = data;
    }

    public markAsFailed() {
        this.timestampFinish = Date.now();
        this.status = DetectionStatus.Failure;
    }

    public markAsPending() {
        this.status = DetectionStatus.Pending;
    }

    public getResults(): Framework[] {
        return this.data;
    }

    public getDetectionStatus(): DetectionStatus {
        return this.status;
    }

    public getLanguage(): string {
        return this.language;
    }

    public getApplication(): string {
        return this.application;
    }

    public getId(): string {
        return this.id;
    }

    public isRunning(): boolean {
        return this.status == DetectionStatus.Pending;
    }
}

/**
 * Class handling the detection along its related premise
 */
export class CancellableDetectionPromise {
    private neo4jAl: Neo4JAccessLayer = Neo4JAccessLayer.getInstance();

    private cancel: CallableFunction;
    private promise: Promise<Framework[]>;
    private wrappedPromise: Promise<Framework[]>

    private transaction: Transaction;
    private detection: Detection;

    constructor(application: string, language: string, onError: () => void, onComplete: (data : Detection) => void) {
        try {
            const session = this.neo4jAl.getSession();
            this.transaction = session.beginTransaction();
            this.detection = new Detection(application, language); // Declare a new detection
            this.wrappedPromise = this.buildWrapPromise(application, language);

            this.promise = new Promise((resolve, reject) => {
                this.cancel = reject;
                this.detection.markAsPending();
                this.wrappedPromise.then((res: Framework[]) => {
                    this.transaction.commit().then(r => {
                        this.detection.markAsSuccess(res);
                    });
                    onComplete(this.detection)
                    resolve(res);
                }).catch((err) => {
                    this.transaction.rollback().then(r => {
                        logger.error(`The transaction has been rolled backed.`, err);
                    });
                    logger.error(`The detection for application ${this.detection.getApplication()} was cancelled.`);
                    this.detection.markAsFailed();
                });
            })
        } catch (err) {
            logger.error(`Failed to create a Cancellable promise for application ${application} on ${language}`, err);
            onError();
        }

    }

    /**
     * Generate the primary key of a Detection
     * @param application
     * @param language
     */
    public static generateDetectionPk(application: string, language: string): string {
        return application + "+" + language;
    }

    public cancelPromise() {
        this.cancel();
    }

    /**
     * "Primary key of the detection" to avoid launching the same detection multiple time
     */
    public getDetectionPk(): string {
        return CancellableDetectionPromise.generateDetectionPk(this.detection.getApplication(),
            this.detection.getLanguage());
    }

    public getStatus(): DetectionStatus {
        return this.detection.getDetectionStatus();
    }

    /***
     * Return the detection associated to the promise
     */
    public getDetection(): Detection {
        return this.detection;
    }

    public getResults(): Framework[] {
        return this.detection.getResults();
    }

    public isDone(): boolean {
        return !this.detection.isRunning();
    }

    /**
     * Build the wrap promise
     */
    private buildWrapPromise(application: string, language: string): Promise<Framework[]> {
        return new Promise((resolve, reject) => {
            const request = `CALL artemis.launch.detection($applicationName, $language);`;

            this.transaction.run(request, {applicationName: application, language: language})
                .then((res: QueryResult) => {
                    console.log(`The query ${request} ended.`)
                    const resultList: Framework[] = [];
                    let framework: Framework;

                    for (let i = 0; i < res.records.length; i++) {
                        framework = FrameworksService.convertRecordToFramework(res.records[i]);
                        resultList.push(framework);
                    }
                    console.log(`Detection successful ${resultList.length}`);
                    resolve(resultList);
                })
                .catch((err) => {
                    // Add to failed detections
                    logger.error(`The analysis of the ${application} failed.`, err);
                    console.error(`The query ${request} failed.`, err)
                    reject(err);
                });
        });
    }
}