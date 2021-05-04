export default interface ITransaction {
  _id?: number;
  count?: number;
  name: string;
  technologies?: string[];
  numTechnologies?: number;
  fullName: string;
}
