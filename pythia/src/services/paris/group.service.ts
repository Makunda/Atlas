import {logger} from '@shared/logger';
import {int, QueryResult} from 'neo4j-driver';
import HttpException from '@exceptions/HttpException';
import {Neo4JAccessLayer} from '@utils/neo4jAccessLayer';
import {Group} from '@interfaces/demeter/Group';
import {Case} from '@interfaces/demeter/Case';

class GroupService {
  private neo4jAl: Neo4JAccessLayer = Neo4JAccessLayer.getInstance();

  /**
   * Convert a record to a UseCase object
   * @param res Record to convert
   */
  public static convertRecordToGroup(res: any): Group {
    return {
      id: int(res.get('id')).toNumber(),
      name: res.get('name'),
      description: res.get('description'),
      cypherRequest: res.get('cypherRequest'),
      groupName: res.get('groupName'),
      categories: res.get('categories') || [],
      cypherRequestReturn: res.get('cypherRequestReturn') || '',
      creationDate: int(res.get('creationDate')).toNumber() || 0,
      active: res.get('active'),
      selected: res.get('selected'),
      types: res.get('types'),
    };
  }

  /**
   * Get the version of Artemis
   */
  public async getAllGroups(): Promise<Group[]> {
    try {
      const request = 'CALL paris.groups.get.all()';

      const results: QueryResult = await this.neo4jAl.execute(request);

      const groups: Group[] = [];
      for (let i = 0; i < results.records.length; i++) {
        const group = GroupService.convertRecordToGroup(results.records[i]);
        groups.push(group);
      }

      return groups;
    } catch (err) {
      logger.error('Failed to verify the retrieve the list of group', err);
      throw new HttpException(500, 'Internal error');
    }
  }

  /**
   * Get the version of Artemis
   */
  public async addGroup(group: Group): Promise<Group> {
    try {
      const request =
        'CALL paris.groups.create($active, $categories, $creationDate, $cypherRequest, $cypherRequestReturn, $description, $groupName, $name, $selected, $typesAsList)';
      const results: QueryResult = await this.neo4jAl.executeWithParameters(request, group);

      if (results.records.length == 0) return null;

      return GroupService.convertRecordToGroup(results.records[0]);
    } catch (err) {
      logger.error('Failed to create a new group', err);
      throw new HttpException(500, 'Internal error');
    }
  }

  /**
   * Get the version of Artemis
   */
  public async updateGroup(useCase: IGroup): Promise<IGroup> {
    try {
      const request =
        'CALL paris.groups.update.by.id($id, $active, $categories, $creationDate, $cypherRequest, $cypherRequestReturn, $description, $groupName, $name, $selected, $types)';
      const results: QueryResult = await this.neo4jAl.executeWithParameters(request, useCase);

      if (results.records.length == 0) return null;

      return GroupService.convertRecordToGroup(results.records[0]);
    } catch (err) {
      logger.error('Failed to update a use cases', err);
      throw new HttpException(500, 'Internal error');
    }
  }

  /**
   * Get root use cases
   */
  public async getRootUseCases(): Promise<Case[]> {
    try {
      const request = 'CALL paris.cases.get.roots()';

      const results: QueryResult = await this.neo4jAl.execute(request);

      const useCases: Case[] = [];
      for (let i = 0; i < results.records.length; i++) {
        const useCase = UseCaseService.convertRecordToUseCase(results.records[i]);
        useCases.push(useCase);
      }

      return useCases;
    } catch (err) {
      logger.error('Failed to verify the retrieve the list of root use cases', err);
      throw new HttpException(500, 'Internal error');
    }
  }
}

export default GroupService;
