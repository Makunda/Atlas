import { Framework } from "./framework.interface";

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
  
