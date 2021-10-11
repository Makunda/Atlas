/**
 * Interface for the Cloud recommendation on Cast Highlight
 */
export default interface CloudServiceRecommendation {
  application: string;
  cloudProvider: string;
  serviceName: string;
  description: string;
  documentation: string;
  rule: string;
  ruleType: string;
  trigger: string;
}
