import { Framework } from "@/api/interface/extensions/artemis/Framework";
import { DetectionStatus } from "@/api/interface/extensions/artemis/detectionStatus.enum";

export interface DetectionResult {
  application: string;
  timestampStart: number;
  timestampFinish: number;
  language: string;
  status: DetectionStatus;
  data: Framework[];
}
