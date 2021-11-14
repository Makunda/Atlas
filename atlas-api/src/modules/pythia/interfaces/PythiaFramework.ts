/**
 * Framework structure on Pythia
 */
export default interface PythiaFramework {
  name: string;
  imagingName: string;
  description: string;
  location: string;
  tags: string[];
  isRoot: boolean;

  detectionData: string;
  patterns: PythiaFramework[];
}
