import { Node } from "neo4j-driver";

/**
 * Transaction cluster
 */
export default interface ClusterTransaction {
  id: string;
  parent: string;

  children?: ClusterTransaction[];
  name: string;
  objectSize: number;
  transactionsId: number[];

  entryPoints: Node[];
  endPoints: Node[];

  uniqueness: number;
};