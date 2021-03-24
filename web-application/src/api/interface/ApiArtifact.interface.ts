export interface IArtifact {
  id: number;
  name: string;
  customName?: string;
  parentId: number;
  delimiter: string;
  count: number;
  children?: IArtifact[];
}
