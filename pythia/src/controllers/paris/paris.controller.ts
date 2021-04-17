import { NextFunction, Request, Response } from 'express';
import { Framework } from '../../interfaces/artemis/framework.interface';
import SynchronizerService from '../../services/synchronizer/synchronizerConfig';
import { logger } from '../../utils/logger';

import { Group } from '@interfaces/demeter/Group';
import { Case } from '@interfaces/demeter/Case';

class ParisController {
  public addGroup = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const frameworksData: Group = req.body;

      const addedFramework: Framework = await this.frameworksService.addFramework(frameworksData);
      await SynchronizerService.getInstance().setLastUpdate();

      res.status(201).json({ data: addedFramework, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public getNumberGroup = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const addedFramework: Framework = await this.frameworksService.addFramework(frameworksData);
      await SynchronizerService.getInstance().setLastUpdate();

      res.status(201).json({ data: addedFramework, message: 'Total' });
    } catch (error) {
      next(error);
    }
  };

  public getAllGroup = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const addedFramework: Framework = await this.frameworksService.addFramework(frameworksData);
      await SynchronizerService.getInstance().setLastUpdate();

      res.status(201).json({ data: addedFramework, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public addCase = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const frameworksData: Case = req.body;

      const addedFramework: Framework = await this.frameworksService.addFramework(frameworksData);
      await SynchronizerService.getInstance().setLastUpdate();

      res.status(201).json({ data: addedFramework, message: 'created' });
    } catch (error) {
      next(error);
    }
  };
}
