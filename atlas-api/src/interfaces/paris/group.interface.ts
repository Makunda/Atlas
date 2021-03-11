
export interface IGroup {
    id: number;
    name : string;
    description: string;
    cypherRequest: string;
    cypherRequestReturn: string;
    groupName: string;
    categories: string[];
    creationDate: number;
    active: boolean;
    selected: boolean;
  }
