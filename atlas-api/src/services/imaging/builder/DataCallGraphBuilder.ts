import DataCallGraphUtils from "../../../sdk/datacallgraph/DataCallGraphUtils";
import { Node } from "neo4j-driver";
import ImagingNode from "../../../sdk/ImagingNode";
import { Direction } from "../../../sdk/Direction";

export default class DataCallGraphBuilder {

  /**
   * Regenerate the data call graph
   * @param id d of the data call graph
   */
  public async regenerate(id: number, type: string[]) {
    const relationships = ["ACCESS", "INHERIT", "BELONGTO", "USE", "RELYON", "IN", "PROTOTYPE",
      "OUT", "REFER", "CALL", "MONITOR", "INCLUDE", "POST", "GET", "MENTION"];

    const startingObject = await DataCallGraphUtils.findStartingObjectById(id);

    // Propagate the data call graph
    const stackNode = await ImagingNode.getLinkedObjects(startingObject, Direction.OUTGOING, relationships);
    const nodes = [] as Node[];

    let node: Node;
    let neighbors: Node[];

    while (stackNode.length > 0) {
      node = stackNode.pop();
      if (!node) break;

      nodes.push(node);
      neighbors = await ImagingNode.getLinkedObjects(startingObject, Direction.OUTGOING, relationships);
      // Filter neighbors based on their type
      // neighbors = neighbors.filter(x => );
    }

  }
}