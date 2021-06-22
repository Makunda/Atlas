import { Framework } from "@/api/interface/artemis/framework.interface";
import { DetectionStatus } from "@/api/interface/artemis/detectionStatus.enum";

/**
 * Detection interface
 */
export default interface DetectionInterface {
  id: string;
  application: string;
  timestampStart: number;
  timestampFinish: number;
  language: string;
  status: DetectionStatus;
  data: Framework[];
}
