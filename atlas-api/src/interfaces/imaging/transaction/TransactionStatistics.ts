//Transaction statistics

export interface TransactionObjectRatio {
  type: string;
  percentage: number;
}

/**
 * Statistics on a transaction
 */
export default interface TransactionStatistics {
  transactionId: number;
  information: string;
  size: number;

  startTechnology: string;
  endTechnology: string;

  objects:  TransactionObjectRatio[],
  subObjects: TransactionObjectRatio[]
};