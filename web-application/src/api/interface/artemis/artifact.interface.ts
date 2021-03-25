export interface Artifact {
  id: number;
  name: string;
  customName?: string;
  parentId: number;
  delimiter: string;
  count: number;
  children?: Artifact[];
}
