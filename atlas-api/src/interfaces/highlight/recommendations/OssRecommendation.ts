/**
 * Open source safety interface
 */
export default interface OssRecommendation {
  application: string;
  origin: string;
  description: string;
  version: string;
  component: string;
  patterns: string[];
  status: string;
  technology: string;
  link: string;
  release: string;
  lastVersion: string;
  lastRelease: string;
  gap: string;
  releaseFrequency: string;
  licenses: string[];
  vulnerabilityCritical: string[];
  vulnerabilityHigh: string[];
  vulnerabilityMedium: string[];
  vulnerabilityLow: string[];

  // Integration to the application
  integration?: OssLinks[];
}

/**
 * Links
 */
export interface OssLinks {
  type: string;
  count: number;
}
