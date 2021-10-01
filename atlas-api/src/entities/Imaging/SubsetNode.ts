import Subset from "@interfaces/imaging/Subset";
import ArchitectureService from "@services/demeter/ArchitectureService";
import { int, Node } from "neo4j-driver";

export default class SubsetNode {
  /**
   * Create an Architecture object from a Node
   * @param {Node} n Node to be converted
   */
  public static async fromObj(n: Node): Promise<Subset> {
    const properties: any = n.properties;

    const hiddenLabel = await ArchitectureService.getHiddenSubsetLabel();
    const hidden = n.labels.includes(hiddenLabel);

    return {
      _id: n.identity.toInt(),
      name: String(properties["Name"]),
      hidden: hidden,
      type: String(properties["Type"]) || "subset",
      count: int(properties["Count"]).toNumber(),
      modelId: String(properties["ModelId"]),
      subsetId: String(properties["SubsetId"]),
      color: String(properties["Color"]),
    } as Subset;
  }
}
