import { Neo4JAccessLayer } from "@database/Neo4JAccessLayer";
import ClusterTransaction from "@interfaces/extensions/caesar/ClusterTransaction";
import { wrapLogger } from "@shared/Logger";
import { int } from "neo4j-driver";
import Neo4jTypeMapper from "@shared/Neo4jTypeMapper";

/**
 * Classification Controller
 */
export default class ClassificationService {

  private neo4jal: Neo4JAccessLayer;
  private logger = wrapLogger("Classification Controller");

  /**
   * Constructor of the Classification
   */
  public constructor() {
    this.neo4jal = Neo4JAccessLayer.getInstance();
  }

  /**
   * Get the list of cluster
   * @param application Name of the application
   * @param minSize Minimum size of the transaction
   */
  public async getTransactionClustersFlat(application: string, minSize: number): Promise<ClusterTransaction[]> {
    const req = "CALL caesar.classify.cluster($application, $minSize)";
    try {
      const results = await this.neo4jal.execute(req, { application: application, minSize: minSize });
      if (!results.records || results.records.length == 0) throw new Error("No results returned by the classify request");

      const returnList: ClusterTransaction[] = [];
      results.records.forEach(x => {
        returnList.push({
          id: String(x.get("id")),
          parent: String(x.get("parent")),
          name: String(x.get("name")),
          objectSize: int(x.get("objectSize")).toInt(),
          transactionsId: Neo4jTypeMapper.getNumberList(x.get("transactionsId")),
          entryPoints: Neo4jTypeMapper.getNodeList(x.get("entryPoints")),
          endPoints: Neo4jTypeMapper.getNodeList(x.get("endPoints")),
          uniqueness: int(x.get("uniqueness")).toInt(),
        } as ClusterTransaction);
      });

      return returnList;
    } catch (e) {
      this.logger.error("Failed to classify the transactions", e);
      throw new Error("Failed to classify the transaction.");
    }
  }

  /**
   * Get the list of cluster as a tree with the *children* property
   * @param application Name of the application
   * @param minSize Minimum size of the transaction
   */
  public async getTransactionClustersTree(application: string, minSize: number): Promise<ClusterTransaction[]> {
    const clusterList = await this.getTransactionClustersFlat(application, minSize);

    // Parse the list append if no key item as a value
    const roots = clusterList.filter(x => x.parent == "");
    roots.forEach(x => this.recLeafInsert(x, clusterList));

    return roots;
  }

  /**
   * Recursive insert of the element from a root
   * @param cluster Root of insertion
   * @param elements Elements to insert
   * @private
   */
  private recLeafInsert(cluster: ClusterTransaction, elements: ClusterTransaction[]): ClusterTransaction {
    for (let i = 0; i < elements.length; i++) {
      let it = elements[i];
      if (cluster.id == it.parent) {
        it = this.recLeafInsert(it, elements);
        cluster.children.push(it);
      }
    }

    return cluster;
  }

}