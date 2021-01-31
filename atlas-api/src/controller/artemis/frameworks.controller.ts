import { NextFunction, Request, Response } from 'express';
import { Framework } from '@interfaces/artemis/framework.interface';
import FrameworksService from '@services/artemis/framework.service';

class FrameworksController {
  public frameworksService = new FrameworksService();

  // Get a specific framework by its name
  public getFrameworkByName = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {

      const name = String(req.params.name);
      let findFramework: Framework

      if(req.query.internalType) {
        // Request with internal
        const internalType: string = String(req.query.internalType).replace("+", " ");
        findFramework = await this.frameworksService.findFrameworkbyNameAndType(name, internalType);
      } else {
        // No internal type specified
        findFramework = await this.frameworksService.findFrameworkbyName(name);
      }
       
      if(findFramework == null) {
        res.status(404).send({ data: null, message: 'Not Found' });
      } else {
        res.status(200).json({ data: findFramework, message: 'findByName' });
      }
      
    } catch (error) {
      next(error);
    }
  };


  // Get the number of frameworks in the database ( Filter on internal type )
  public getNumberFrameworks = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      let num: number;

      if(req.query.internalType) {
        // Request with internal type
        const internalType: string = String(req.query.internalType).replace("+", " ");
        num = await this.frameworksService.getNumberFrameworksWithInternalType(internalType);
      } else {
        // No internal type specified
        num = await this.frameworksService.getNumberFrameworks();
      }
       
      res.status(200).send({ data: num, message: 'Number of frameworks' });
    } catch (error) {
      next(error);
    }
  }

  // Get the number of frameworks in the database ( Filter on internal type )
  // Req params : start:number, stop: number, internal:type
  public getFrameworksBatch = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const start: number = req.query.start ? Number(req.query.start) : 0;
      const stop: number = req.query.stop ? Number(req.query.stop) : 10;
      let frameworks: Framework[];

      if(req.query.internalType) {
        // Request with internal type
        const internalType: string = String(req.query.internalType).replace("+", " ");
        frameworks = await this.frameworksService.getFrameworksBatch(start, stop, internalType);
      } else {
        // No internal type specified
        frameworks = await this.frameworksService.getFrameworksBatch(start, stop);
      }
       
      res.status(200).send({ data: frameworks, message: 'Batch' });
    } catch (error) {
      next(error);
    }
  }

}

export default FrameworksController;
