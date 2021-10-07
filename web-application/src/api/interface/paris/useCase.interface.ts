export interface UseCase {
  id: number;
  title: string;
  parentId?: number;
  description: string;
  categories: string[];
  active: boolean;
  selected: boolean;
  children?: UseCase[];
}
