/**
 * {
 *    "identity": 1232,
 *    "labels": [
 *      "Subset",
 *      "TreasuryEdge"
 *    ],
 *    "properties": {
 *  "Type": "subset",
 *  "SubsetId": "2",
 *  "Color": "rgb(34,199,214)",
 *  "Count": 730,
 *  "ModelId": "2",
 *  "Name": "bnym"
 *    }
 *  }
 */

export default interface Subset {
  _id: number;
  name: string;
  type: string;
  count: number;
  modelId: string;
  color: string;
  hidden: boolean;
}
