/**
 * {
    "identity": 1230,
    "labels": [
        "ArchiModel",
        "TreasuryEdge"
    ],
    "properties": {
        "Name": "BNYM Internal Classes"
        "Type": "archimodel",
        "Count": 3467,
        "ModelId": "4",
        "Color": "rgb(34,199,214)",
    }
    }
 */

import Subset from "./Subset";

export default interface Archimodel {
  _id?: number;
  hidden: boolean;
  name: string;
  type: string;
  count: number;
  modelId: string;
  color: string;
  subsets?: Subset[];
}
