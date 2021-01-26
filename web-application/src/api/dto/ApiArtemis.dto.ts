import {
  IDetectionResult,
  IDetectionStatus,
  IFramework,
} from "../interface/ApiArtemis.interface";

export class DetectionResultDTO implements IDetectionResult {
  status: IDetectionStatus;
  application = "";
  data?: IFramework[] = [];

  constructor(obj: Record<string, any>) {
    this.status = obj["status"];
    this.application = obj["application"];
    this.data = obj["data"] != null ? obj["data"] : [];
  }
}
