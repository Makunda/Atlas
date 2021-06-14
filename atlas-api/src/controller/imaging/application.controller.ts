import {NextFunction, Request, Response} from 'express';
import ApplicationService from '@services/imaging/application.service';
import {IApplicationInsights} from "@interfaces/imaging/applicationInsights.interface";


class ApplicationController {
    private applicationService = new ApplicationService();

    public getApplications = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {

            const applications: string[] = await this.applicationService.getApplications();
            res.status(200).json({data: applications, message: 'applications'});

        } catch (error) {
            next(error);
        }
    };

    public getApplicationsInsights = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const applicationName = String(req.params.application);
            const insights: IApplicationInsights = await this.applicationService.getApplicationsInsights(applicationName);
            res.status(200).json({data: insights, message: 'Insights'});

        } catch (error) {
            next(error);
        }
    };

    public getTechnology = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const applicationName = String(req.params.application);
            const insights: string[] = await this.applicationService.getTechnology(applicationName);
            res.status(200).json({data: insights, message: 'Technology'});

        } catch (error) {
            next(error);
        }
    };
}

export default ApplicationController;