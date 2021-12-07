export interface Artifact {
  id: number;
  name: string;
  fullName: string;
  customName?: string;
  parentId: number;
  delimiter: string;
  count: number;
  objectTypes: string[];
  levels: string[];
  modules: string[];
  subsets: string[];
  children?: Artifact[];
}
