export interface IArtifact {
  id: number;
  name: string;
  parentId: number;
  delimiter: string;
  count: number;
  children: IArtifact[];
}
