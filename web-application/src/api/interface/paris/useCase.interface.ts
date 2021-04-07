
export interface IUseCase {
    id: number;
    title : string;
    parentId?: number;
    description: string;
    categories: string[];
    active: boolean;
    selected: boolean;
    children?: IUseCase[];
  }
