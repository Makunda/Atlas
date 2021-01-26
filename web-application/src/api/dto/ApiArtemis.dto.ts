import {
  DetectionResult,
  DetectionStatus,
  Framework
} from "../interface/ApiArtemis.interface";

export class DetectionResultDTO implements DetectionResult {
  status: DetectionStatus;
  application = "";
  data?: Framework[] = [];

  constructor(obj: Record<string, any>) {
    this.status = obj["status"];
    this.application = obj["application"];
    this.data = obj["data"] != null ? obj["data"] : [];
  }
}
