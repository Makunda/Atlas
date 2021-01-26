
export interface IFramework {
  name: string;
  description: string;
  type: string;
  category?: string;
  internalType?: string;
  location: string;
  discoveryDate: string;
  percentageOfDetection: number;
}


export enum IDetectionStatus {
    Pending,
    Success,
    Failure,
    Unknown
  }


export interface IDetectionResult {
    status: IDetectionStatus;
    application: string;
    data?: IFramework[];
}
  
