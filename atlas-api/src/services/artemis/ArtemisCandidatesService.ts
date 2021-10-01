import { Record } from "neo4j-driver";
import { Neo4JAccessLayer } from "@database/Neo4jAccessLayer";
import { DetectionCandidate } from "@dtos/artemis/detectionCandidate.dto";
import { logger } from "@shared/Logger";
import HttpException from "@exceptions/HttpException";

export class ArtemisCandidates {
  private neo4jAl: Neo4JAccessLayer = Neo4JAccessLayer.getInstance();

  /**
   * Get the complete list of artemis candidates, and the technologies covered
   */
  public async getCandidateList(): Promise<DetectionCandidate[]> {
    const req = `CALL artemis.api.application.get.all.candidate.languages()`;
    try {
      const val = await this.neo4jAl.execute(req);

      if (!val.records || val.records.length == 0) return [];

      const candidates = [];
      for (const it in val.records) {
        if (Object.prototype.hasOwnProperty.call(val.records, it)) {
          candidates.push(this.convertRecordToDetectionCandidate(val.records[it]));
        }
      }
      return candidates;
    } catch (err) {
      logger.error("An internal error occurred in RegexNodeService::getRegexRequest ", err);
      throw new HttpException(500, "Internal error");
    }
  }

  /**
   * Get information about the technologies covered by Artemis
   * @param applicationName
   */
  public async getCandidateInformation(applicationName: string): Promise<DetectionCandidate> {
    const req = `CALL artemis.api.application.get.candidate.languages($ApplicationName)`;
    const params = { ApplicationName: applicationName };

    try {
      const val = await this.neo4jAl.executeWithParameters(req, params);
      if (!val.records || val.records.length == 0) return null;

      return this.convertRecordToDetectionCandidate(val.records[0]);
    } catch (err) {
      logger.error("An internal error occurred in ArtemisCandidate::getCandidateList ", err);
      throw new HttpException(500, "Internal error");
    }
  }

  private convertRecordToDetectionCandidate(res: Record): DetectionCandidate {
    const candidate: DetectionCandidate = {
      application: res.get("application"),
      languages: res.get("languages"),
    };

    return candidate;
  }
}
