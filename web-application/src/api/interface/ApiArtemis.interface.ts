export interface Framework {
  name: string;
  description: string;
  type: string;
  category?: string;
  internalType?: string;
  location: string;
  discoveryDate: string;
  percentageOfDetection: number;
}

export enum DetectionStatus {
  Pending,
  Success,
  Failure,
  Unknown
}

export interface DetectionResult {
  status: DetectionStatus;
  application: string;
  data?: Framework[];
}
