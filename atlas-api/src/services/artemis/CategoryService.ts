import { logger } from "@shared/Logger";
import { Neo4JAccessLayer } from "@database/Neo4JAccessLayer";
import HttpException from "@exceptions/HttpException";
import { int, Record } from "neo4j-driver";
import { Category } from "@interfaces/artemis/Category";
import { CreateCategoryDto } from "@dtos/artemis/category.dto";

function convertRecordToCategoryNode(record: Record): Category {
  return {
    id: int(record.get("id")).toNumber(),
    name: record.get("name"),
    iconUrl: record.get("iconUrl"),
  };
}

class CategoryService {
  private neo4jAl: Neo4JAccessLayer = Neo4JAccessLayer.getInstance();

  /**
   * Get the list of supported languages
   */
  public async getAllNodes(): Promise<Category[]> {
    const req = `CALL artemis.api.category.get.all.nodes()`;

    try {
      const val = await this.neo4jAl.execute(req);
      if (!val.records || val.records.length == 0) return [];

      const nodes: Category[] = [];
      for (let index = 0; index < val.records.length; index++) {
        const element = convertRecordToCategoryNode(val.records[index]);
        nodes.push(element);
      }

      return nodes;
    } catch (err) {
      logger.error("An internal error occurred in CategoryService::getAllNodes ", err);
      throw new HttpException(500, "Internal error");
    }
  }

  /**
   * Find a category node by its Id in the database
   * @param id Id of the Category node to find
   * @return The Category node or Null if none was found
   */
  public async getNodeById(id: number): Promise<Category> {
    const req = `CALL artemis.api.category.get.node.byId($id)`;

    try {
      const val = await this.neo4jAl.executeWithParameters(req, { id: id });
      if (!val.records || val.records.length == 0) return null;

      return convertRecordToCategoryNode(val.records[0]);
    } catch (err) {
      logger.error("An internal error occurred in CategoryService::getNodeById ", err);
      throw new HttpException(500, "Internal error");
    }
  }

  /**
   * Add a category node in the database
   * @param node Node to add
   */
  public async addNode(node: CreateCategoryDto): Promise<Category> {
    const req = `CALL artemis.api.category.create.node($name, $iconUrl)`;

    try {
      const val = await this.neo4jAl.executeWithParameters(req, node);
      if (!val.records || val.records.length == 0) return null;

      return convertRecordToCategoryNode(val.records[0]);
    } catch (err) {
      logger.error("An internal error occurred in CategoryService::addNode ", err);
      throw new HttpException(500, "Internal error");
    }
  }

  /**
   * Update a category node in the database
   * @param node Updated node
   */
  public async updateNode(node: CreateCategoryDto): Promise<Category> {
    const req = `CALL artemis.api.category.update.node($id, $name, $iconUrl)`;

    try {
      const val = await this.neo4jAl.executeWithParameters(req, node);
      if (!val.records || val.records.length == 0) return null;

      return convertRecordToCategoryNode(val.records[0]);
    } catch (err) {
      logger.error("An internal error occurred in CategoryService::updateNode ", err);
      throw new HttpException(500, "Internal error");
    }
  }

  public async removeNode(idNode: number): Promise<boolean> {
    const req = `CALL artemis.api.category.remove.node($idNode)`;
    try {
      const val = await this.neo4jAl.executeWithParameters(req, {
        idNode: idNode,
      });
      if (!val.records || val.records.length == 0) return false;
      return Boolean(val.records[0]);
    } catch (err) {
      logger.error("An internal error occurred in RegexNodeService::removeRegexNode ", err);
      throw new HttpException(500, "Internal error");
    }
  }
}

export default CategoryService;
