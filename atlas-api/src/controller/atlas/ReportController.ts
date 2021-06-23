import {NextFunction, Request, Response} from "express";
import ReportingEngine from "@services/atlas/reporting/ReportingEngine";
import {logger} from "@shared/Logger";
import {ReportInterface} from "@interfaces/report/Report.interface";


export class ReportController {
    private reportService = ReportingEngine.getInstance();

    /**
     * Get the list of the report.
     * OPTIONNAL ?category=string To filter report based on their category
     * @param req
     * @param res
     * @param next
     */
    public getReports = (req: Request, res: Response, next: NextFunction): void => {
        try {
            // Check options
            if ("category" in Object.keys(req.query)) {
                const category = String(req.query.category);
                const reports: ReportInterface[] = this.reportService.getReportsByCategory(category);
                res.status(200).json({data: reports, message: `Report list`});
            } else {
                const reports: ReportInterface[] = this.reportService.getReports();
                res.status(200).json({data: reports, message: `Report list`});
            }
        } catch (error) {
            next(error);
        }
    };

    /**
     * Get a single report by its ID.
     * If the report is not found, return null
     * @param req
     * @param res
     * @param next
     */
    public getReportById = (req: Request, res: Response, next: NextFunction): void => {
        try {
            const id = Number(req.params.id);
            const report: ReportInterface = this.reportService.getReportById(id);
            res.status(200).json({data: report, message: `Report ${id}`});
        } catch (error) {
            next(error);
        }
    };

    /**
     * Get the list of categories in the reports
     * @param req
     * @param res
     * @param next
     */
    public getCategories = (req: Request, res: Response, next: NextFunction): void => {
        try {
            const categories: string[] = this.reportService.getCategories();
            res.status(200).json({data: categories, message: `Report Categories`});
        } catch (error) {
            next(error);
        }
    };

    /**
     * Generate a report and send the file.
     * POST BODY {
     *     id: number,
     *     application: string,
     *     parameters: any
     * }
     * @param req
     * @param res
     * @param next
     */
    public generateReport = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const body = req.body;
            let parameters = {};

            if (body.id == null) throw new Error("Missing 'id' property.")
            if (body.application == null) throw new Error("Missing 'application' property.")
            if (body.parameters != null) parameters = body.parameters;
            const id = body.id, application = body.application;

            const filePath: string = await this.reportService.generateReportAndExport(id, application, parameters);
            res.sendFile(filePath, function (err) {
                if (err) {
                    next(err);
                } else {
                    logger.info(`Sent Report file :${filePath}. Will now proceed to its deletion.`);

                    try {
                        //fs.unlinkSync(filePath);
                        logger.info("File was successfully removed.")
                    } catch (err) {
                        logger.error("Failed to delete.")
                    }

                }
            });
        } catch (error) {
            logger.error(`The generation of report failed`, error);
            next(error);
        }
    };
}