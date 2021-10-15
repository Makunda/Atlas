import { logger } from "@shared/Logger";
import { QueryResult, Transaction } from "neo4j-driver";
import { Framework } from "./FrameworkInterface";
import FrameworksService from "@services/extensions/artemis/FrameworkService";
import { Neo4JAccessLayer } from "@database/Neo4JAccessLayer";
import { uuidv4 } from "../../utils/utils";
import ArtemisParameters from "@entities/extensions/artemis/ArtemisParameters";

export enum DetectionStatus {
  NotStarted,
  Pending,
  Success,
  Failure,
  Unknown,
}

/**
 * Class to handle the different properties of a detection
 */
export class Detection {
  // Attribute must be public
  public readonly id: string;
  public readonly application: string;
  public readonly parameters: ArtemisParameters;
  public timestampStart: number;
  public timestampFinish = 0;
  public readonly language: string;
  public status: DetectionStatus;
  public data: Framework[] = [];

  /**
   * Constructor  of the detection class
   * @param application Name of the application to analyze
   * @param language Language of the detection
   * @param parameters  List of parameters
   */
  constructor(application: string, language: string, parameters: ArtemisParameters) {
    this.id = uuidv4();
    this.application = application;
    this.language = language;
    this.parameters = parameters;
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
  private id: string;

  private cancel: CallableFunction;
  private promise: Promise<Framework[]>;
  private wrappedPromise: Promise<Framework[]>;

  private transaction: Transaction;
  private detection: Detection;

  constructor(application: string, language: string, parameters: ArtemisParameters, onError: () => void, onComplete: (data: Detection) => void) {
    try {
      this.id = uuidv4();
      const session = this.neo4jAl.getSession();
      this.transaction = session.beginTransaction();
      this.detection = new Detection(application, language, parameters); // Declare a new detection
      this.wrappedPromise = this.buildWrapPromise(application, language, parameters);

      this.promise = new Promise((resolve, reject) => {
        this.cancel = reject;
        this.detection.markAsPending();
        this.wrappedPromise
          .then((res: Framework[]) => {
            this.transaction.commit().then(r => {
              this.detection.markAsSuccess(res);
            });
            onComplete(this.detection);
            resolve(res);
          })
          .catch(err => {
            this.transaction.rollback().then(r => {
              logger.error(`The transaction has been rolled backed in detection with id [${this.id}].`, err);
            });
            logger.error(`The detection for application ${this.detection.getApplication()} was cancelled.`);
            this.detection.markAsFailed();
          });
      });
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

  /**
   * Cancel the promise when called
   */
  public cancelPromise() {
    this.cancel();
  }

  /**
   * "Primary key of the detection" to avoid launching the same detection multiple time
   */
  public getDetectionPk(): string {
    return CancellableDetectionPromise.generateDetectionPk(this.detection.getApplication(), this.detection.getLanguage());
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
   * Wrap the function around a promise
   * @param application Name of the application to launch the detection on
   * @param language Language of the detection
   * @param parameters Parameters of the detection
   * @returns A promise returning the list of detected frameworks
   */
  private buildWrapPromise(application: string, language: string, parameters: ArtemisParameters): Promise<Framework[]> {
    logger.info(`Building detection promise for application '${application}/${language} with ID [${this.id}].`);
    return new Promise((resolve, reject) => {
      const request = "CALL artemis.launch.detection($applicationName, $language, $params);";

      this.transaction
        .run(request, { applicationName: application, language: language, params: parameters.toJSON() })
        .then((res: QueryResult) => {
          const resultList: Framework[] = [];
          let framework: Framework;

          for (let i = 0; i < res.records.length; i++) {
            framework = FrameworksService.convertRecordToFramework(res.records[i]);
            resultList.push(framework);
          }
          logger.info(`The detection promise with ID [${this.id}] ended. It returned ${resultList.length} records.`);
          resolve(resultList);
        })
        .catch(err => {
          // Add to failed detections
          logger.error(`The analysis of the ${application} with id [${this.id}]failed.`, err);
          reject(err);
        });
    });
  }
}
