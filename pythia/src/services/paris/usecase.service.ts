import {logger} from '@shared/logger';
import {int, QueryResult} from 'neo4j-driver';
import {Neo4JAccessLayer} from '@database/neo4jAccessLayer';
import HttpException from '@exceptions/HttpException';
import {IUseCase} from '@interfaces/paris/useCase.interface';
import {Case} from '@interfaces/demeter/Case';

class UseCaseService {
  private neo4jAl: Neo4JAccessLayer = Neo4JAccessLayer.getInstance();

  /**
   * Convert a record to a UseCase object
   * @param res Record to convert
   */
  private static convertRecordToUseCase(res: any): Case {
    return {
      id: int(res.get('id')).toNumber(),
      title: res.get('title'),
      description: res.get('description'),
      categories: res.get('categories') || [],
      active: res.get('active'),
      selected: res.get('selected'),
    };
  }

  /**
   * Get the version of Artemis
   */
  public async getAllUseCases(): Promise<Case[]> {
    try {
      const request = 'CALL paris.cases.get.all()';

      const results: QueryResult = await this.neo4jAl.execute(request);

      const useCases: IUseCase[] = [];
      for (let i = 0; i < results.records.length; i++) {
        const useCase = UseCaseService.convertRecordToUseCase(results.records[i]);
        useCases.push(useCase);
      }

      return useCases;
    } catch (err) {
      logger.error('Failed to verify the retrieve the list of use cases', err);
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

  public async mergeUseCase(useCase: IUseCase): Promise<IUseCase> {
    try {
      const request = 'CALL paris.groups.merge.as.toSort($title, $description, $categories, $active, $selected)';
      const results: QueryResult = await this.neo4jAl.executeWithParameters(request, useCase);

      if (results.records.length == 0) return null;

      return UseCaseService.convertRecordToUseCase(results.records[0]);
    } catch (err) {
      logger.error('Failed to merge a use cases.', err);
      throw new HttpException(500, 'Internal error');
    }
  }
}

export default UseCaseService;
