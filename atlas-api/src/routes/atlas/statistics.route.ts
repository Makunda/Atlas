import Route from "@interfaces/routes.interface";
import {Router} from "express";
import StatisticsController from "@controller/atlas/statistics.controller";

class StatisticsRoute implements Route {
    public path = '';
    public router = Router();
    private statisticsController = new StatisticsController();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.post(`${this.path}/find/all`, this.statisticsController.getStatistics);
        this.router.get(`${this.path}/categories`, this.statisticsController.getCategories);
    }
}

export default StatisticsRoute;

