import { NextFunction, Request, Response } from 'express';
import ApplicationService from '@services/imaging/application.service';


class ApplicationController {
    private applicationService = new ApplicationService();
  
    public getApplications= async (req: Request, res: Response, next: NextFunction): Promise<void> => {
      try {
  
        const applications: string[] = await this.applicationService.getApplications();
        res.status(200).json({ data: applications, message: 'applications' });
        
      } catch (error) {
        next(error);
      }
    };
  }
  
  export default ApplicationController;