import {Router} from 'express';
import Route from '@interfaces/routes.interface';
import LevelController from "@controller/imaging/level.controller";


class LevelsRoute implements Route {
    public path = '';
    public router = Router();
    private levelcontroller = new LevelController();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(`${this.path}/roots/:application`, this.levelcontroller.getRootLevel);
        this.router.get(`${this.path}/attached/:application/:id`, this.levelcontroller.getAttachedLevel);
        this.router.put(`${this.path}/update/:application/:id`, this.levelcontroller.updateLevel);
        this.router.post(`${this.path}/create/:application`, this.levelcontroller.createLevel);
    }
}

export default LevelsRoute;

