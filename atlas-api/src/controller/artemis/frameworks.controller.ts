import { NextFunction, Request, Response } from 'express';
import { Framework } from '@interfaces/artemis/framework.interface';
import FrameworksService from '@services/artemis/framework.service';

class FrameworksController {
  public frameworksService = new FrameworksService();

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
}

export default FrameworksController;
