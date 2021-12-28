import { DetectionResult } from '@/api/interface/extensions/artemis/detectionResult.interface';
import { DetectionStatus } from '@/api/interface/extensions/artemis/detectionStatus.enum';
import { Framework } from '@/api/interface/extensions/artemis/Framework';

export class DetectionResultDTO implements DetectionResult {
  public id: string;

  public application: string;

  public timestampStart: number;

  public timestampFinish = 0;

  public language: string;

  public status: DetectionStatus;

  public data: Framework[] = [];

  static fromRecord(obj: Record<string, any>): DetectionResultDTO {
    if (obj == null) {
      return null;
    }

    const dto = new DetectionResultDTO();
    dto.id = String(obj.id || '');
    dto.application = String(obj.application) || 'No Application';
    dto.timestampStart = Number(obj.timestampStart) || 0;
    dto.timestampFinish = Number(obj.timestampFinish) || 0;
    dto.language = String(obj.language) || 'No language';
    dto.status = obj.status;
    dto.data = obj.data || [];

    return dto;
  }
}
