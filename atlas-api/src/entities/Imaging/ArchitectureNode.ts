import { Neo4JAccessLayer } from "@database/Neo4JAccessLayer";
import Archimodel from "@interfaces/imaging/ArchiModel";
import Subset from "@interfaces/imaging/Subset";
import ArchitectureService from "@services/demeter/ArchitectureService";
import { int, Node } from "neo4j-driver";
import SubsetNode from "./SubsetNode";

export default class ArchitectureNode {
  private static NEO4JAL: Neo4JAccessLayer = Neo4JAccessLayer.getInstance();

  /**
   * Create an Architecture object from a Node
   * @param {Node} n Node to be converted
   * @param {boolean} hidden Optional, flag the architecture as hidden
   */
  public static async fromObj(n: Node): Promise<Archimodel> {
    const properties: any = n.properties;
    const hiddenArchiLabel = await ArchitectureService.getHiddenArchitectureLabel();

    const hidden = n.labels.includes(hiddenArchiLabel);

    const model = {
      _id: n.identity.toInt(),
      hidden: hidden,
      name: String(properties["Name"]),
      type: String(properties["Type"]) || "archimodel",
      count: int(properties["Count"]).toNumber(),
      modelId: String(properties["ModelId"]),
      color: String(properties["Color"]),
    } as Archimodel;

    const hiddenLabel = await ArchitectureService.getHiddenSubsetLabel();
    // Find subset nodes
    const req = `MATCH (a)-[:Contains]->(s) WHERE ID(a)=$IdNode
        AND ( s:Subset or s:${hiddenLabel} )
        RETURN s as node`;

    const subsets: Subset[] = [];
    const res = await ArchitectureNode.NEO4JAL.executeWithParameters(req, { IdNode: model._id });
    if (res && res.records.length > 0) {
      for (let index = 0; index < res.records.length; index++) {
        const node: Node = res.records[index].get("node");
        subsets.push(await SubsetNode.fromObj(node));
      }
    }
    model.subsets = subsets;
    return model;
  }
}
