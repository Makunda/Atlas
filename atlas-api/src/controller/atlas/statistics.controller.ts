import {NextFunction, Request, Response} from "express";
import StatisticsEngine from "@services/atlas/statistics/StatisticsEngine";
import StatisticResultInterface from "@interfaces/statistics/statisticResult.interface";
import {logger} from "@shared/logger";


export default class StatisticsController {

    private statisticEngine: StatisticsEngine = StatisticsEngine.getInstance();

    /**
     * Get the list of the actions.
     * OPTIONNAL ?category=string To filter actions based on their category
     * @param req
     * @param res
     * @param next
     */
    public getStatistics = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {

            const body = req.body;
            if (body.application == null) throw new Error("Missing 'application' property.")

            // Check options
            if (body.category != null) {
                const category = String(req.query.category);
                const stats: StatisticResultInterface[] = await this.statisticEngine.getStatisticsByCategory(category, body.application);
                res.status(200).json({data: stats, message: `Result list`});
            } else {
                const stats: StatisticResultInterface[] = await this.statisticEngine.getStatistics(body.application);
                res.status(200).json({data: stats, message: `Result list`});
            }
        } catch (error) {
            logger.error("Failed to get Statistics", error)
            next(error);
        }
    };

    /**
     * Get the list of categories in the statistics
     * @param req
     * @param res
     * @param next
     */
    public getCategories = (req: Request, res: Response, next: NextFunction): void => {
        try {
            const categories: string[] = this.statisticEngine.getCategories();
            res.status(200).json({data: categories, message: `Statistics Categories`});
        } catch (error) {
            next(error);
        }
    };

}