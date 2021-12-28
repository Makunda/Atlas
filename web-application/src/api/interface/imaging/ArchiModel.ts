/**
 * {
    "identity": 1230,
    "labels": [
        "ArchiModel",
        "TreasuryEdge"
    ],
    "properties": {
    "Type": "archimodel",
    "Count": 3467,
    "ModelId": "4",
    "Color": "rgb(34,199,214)",
    "Name": "BNYM Internal Classes"
    }
    }
 */

import Subset from './Subset';

export default interface Archimodel {
  _id: number;
  name: string;
  type: string;
  count: number;
  modelId: string;
  color: string;
  subsets?: Subset[];
  hidden: boolean;
}
