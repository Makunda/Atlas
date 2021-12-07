import { Neo4JAccessLayer } from "@database/Neo4JAccessLayer";
import { DetectionCandidate } from "@dtos/artemis/detectionCandidate.dto";
import DetectionService from "@services/extensions/artemis/DetectionService";
import { logger } from "@shared/Logger";
import { CancellableDetectionPromise } from "@interfaces/artemis/DetectionStatus";
import ArtemisParameters from "@entities/extensions/artemis/ArtemisParameters";

export class DetectionQueueAssistant {
  private static INSTANCE: DetectionQueueAssistant;

  private neo4jAl: Neo4JAccessLayer = Neo4JAccessLayer.getInstance();
  private detectionService: DetectionService = DetectionService.getInstance();

  private onGoingDetection: CancellableDetectionPromise;
  private candidateList: DetectionCandidate[];

  constructor() {
    this.candidateList = [];
    this.checkQueue();
  }

  public static getInstance(): DetectionQueueAssistant {
    if (DetectionQueueAssistant.INSTANCE == null) {
      DetectionQueueAssistant.INSTANCE = new DetectionQueueAssistant();
    }

    return DetectionQueueAssistant.INSTANCE;
  }

  /**
   *
   * @returns The current item in the pipeline
   */
  public getCurrent(): DetectionCandidate {
    if (this.onGoingDetection == null) return null;
    const detection = this.onGoingDetection.getDetection();
    return {
      application: detection.getApplication(),
      languages: [detection.getLanguage()],
      onlineMode: detection.parameters.getOnlineMode(),
      repositoryMode: detection.parameters.getRepositoryMode(),
      pythiaURL: detection.parameters.getPythiaUrl(),
      pythiaToken: detection.parameters.getPythiaToken(),
    };
  }

  public addCandidate(candidate: DetectionCandidate): void {
    let i: number;
    // Search and merge
    for (i = 0; i < this.candidateList.length; i++) {
      if (this.candidateList[i].application === candidate.application) {
        candidate.languages.forEach(x => {
          if (this.candidateList[i].languages.indexOf(x) == -1) {
            this.candidateList[i].languages.push(x);
          }
        });

        return;
      }
    }

    // the candidate is not in the pipeline
    this.candidateList.push(candidate);
  }

  public removeCandidateByName(name: string): void {
    this.candidateList = this.candidateList.filter(x => {
      return x.application == name;
    });
  }

  public getQueue(): DetectionCandidate[] {
    return this.candidateList;
  }

  /**
   * Flush the entire list and cancel the current detection
   */
  public flushCandidates(): void {
    logger.info("Flush applications");
    try {
      if (this.onGoingDetection) this.onGoingDetection.cancelPromise(); // cancel the current detection
    } catch (err) {
      logger.error("Failed to cancel the current promise trying to flush the queue");
    }
    this.candidateList = [];
  }

  /**
   * Check the queue and the current detection running. If the detection is done, it will process the next one.
   */
  private checkQueue() {
    // If the detection is finished or empty launch the next candidate
    if (this.candidateList.length > 0 && (this.onGoingDetection == null || this.onGoingDetection.isDone())) {
      let appName = "";
      let language = "";
      let parameters: ArtemisParameters;
      let elem;
      try {
        // Process the next one and verify the number of languages to analyze

        if (this.candidateList[0].languages.length > 1) {
          // Pop the language that will be analyzed
          elem = this.candidateList[0];
        } else {
          // Everything will be analyzed, we can remove it from the list
          elem = this.candidateList.shift();
        }

        language = elem.languages.pop();
        appName = elem.application;
        parameters = new ArtemisParameters()
          .setOnlineMode(elem.onlineMode)
          .setRepositoryMode(elem.repositoryMode)
          .setPythiaParameters(elem.pythiaURL, elem.pythiaToken);

        this.onGoingDetection = this.detectionService.launchDetection(appName, language, parameters);
      } catch (err) {
        logger.error(`Failed to launch the detection on application ${appName}. Reason : ${err}`);
      }
    }
    const that = this;
    setTimeout(
      function() {
        that.checkQueue();
      }.bind(this),
      5000,
    );
  }
}
