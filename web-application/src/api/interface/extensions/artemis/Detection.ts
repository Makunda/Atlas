import { Framework } from '@/api/interface/extensions/artemis/Framework';
import { DetectionStatus } from '@/api/interface/extensions/artemis/detectionStatus.enum';

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
