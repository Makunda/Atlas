import { Framework } from "@/api/interface/artemis/framework.interface";
import { DetectionStatus } from "@/api/interface/artemis/detectionStatus.enum";

export interface DetectionResult {
  application: string;
  timestampStart: number;
  timestampFinish: number;
  language: string;
  status: DetectionStatus;
  data: Framework[];
}
