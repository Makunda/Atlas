export interface Framework {
  id: number;
  name: string;
  pattern: string;
  isRegex: boolean;
  description: string;
  type: string;
  category: string;
  internalType: string[];
  location: string;
  discoveryDate: string;
  percentageOfDetection: number;
}
