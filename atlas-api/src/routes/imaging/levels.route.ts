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
        this.router.get(`${this.path}/parent/:application/:id`, this.levelcontroller.getParentLevel);
        this.router.get(`${this.path}/byDepth/:application/:id`, this.levelcontroller.findLevelByDepth);
        this.router.get(`${this.path}/find/:application/name`, this.levelcontroller.findLevelByName);
        this.router.get(`${this.path}/find/:application/id`, this.levelcontroller.findLevelByID);
        this.router.post(`${this.path}/hide/:application`, this.levelcontroller.hideLevel);
        this.router.put(`${this.path}/update/:application/:id`, this.levelcontroller.updateLevel);
        this.router.post(`${this.path}/create/:application`, this.levelcontroller.createLevel);
    }
}

export default LevelsRoute;

