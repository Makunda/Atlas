export interface IArtifact {
  id: number;
  name: string;
  fullName: string;
  customName?: string;
  parentId: number;
  delimiter: string;
  count: number;
  children: IArtifact[];
  objectTypes: string[];
  levels: string[];
  modules: string[];
  subsets: string[];
}
