import { Neo4JAccessLayer } from "@database/Neo4JAccessLayer";
import { wrapLogger } from "@shared/Logger";
import { Node } from "neo4j-driver";
import Neo4jNode from "../../../sdk/Neo4jNode";
import DataCallGraphUtils from "../../../sdk/datacallgraph/DataCallGraphUtils";


export default class DataCallGraphManipulation {

  private neo4jAl: Neo4JAccessLayer = Neo4JAccessLayer.getInstance();
  private logger = wrapLogger("DataCall Graph Manipulation");

  /**
   * Copy a data graph with a new name
   * @param id Id of the data call graph
   * @param name Name of the data call graph
   * @param fullName Full Name of the data call graph
   */
  public async copyDataCallGraph(id: number, name: string, fullName: string): Promise<void> {
    try {
      // Verify the existence of the data call graph
      let node: Node = await DataCallGraphUtils.findById(id);
      const dataCallGraphID = node.identity.toNumber();

      // Copy Data call graph node
      const dataGraphCopy: Node = await Neo4jNode.duplicateNode(node);

      // Copy Start and end node
      const startNode: Node = await DataCallGraphUtils.findStartNodeById(dataCallGraphID);
      const startNodeCopy: Node = await Neo4jNode.duplicateNode(startNode);
      const endNode: Node = await DataCallGraphUtils.findEndNodeById(dataCallGraphID);
      const endNodeCopy: Node = await Neo4jNode.duplicateNode(endNode);

      // Links nodes
      await Neo4jNode.linkObjects(dataGraphCopy, startNodeCopy, "StartsWith");
      await Neo4jNode.linkObjects(dataGraphCopy, endNodeCopy, "EndsWith");

      // Copy and link nodes
      const nodes = await DataCallGraphUtils.findDataGraphNodesById(dataCallGraphID);
      for (const n of nodes) {
        await Neo4jNode.linkObjects(dataGraphCopy, n, "Contains");
      }

      // Rename nodes
      node = await DataCallGraphUtils.renameById(dataCallGraphID, name, fullName);
    } catch (e) {
      this.logger.error("Failed to duplicate a data call graph", e);
      throw new Error("Failed to duplicate the data call graph");
    }
  }

}