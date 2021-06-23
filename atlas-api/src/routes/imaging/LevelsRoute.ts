import {Router} from 'express';
import Route from '@interfaces/routes.interface';
import LevelController from "@controller/imaging/LevelController";


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
        this.router.get(`${this.path}/byDepth/:application/:depth`, this.levelcontroller.findLevelByDepth);
        this.router.get(`${this.path}/find/:application/id`, this.levelcontroller.findLevelByID);
        this.router.post(`${this.path}/find/:application/name`, this.levelcontroller.findLevelByName);
        this.router.post(`${this.path}/hide/:application`, this.levelcontroller.hideLevel);
        this.router.put(`${this.path}/update/:application/:id`, this.levelcontroller.updateLevel);
        this.router.post(`${this.path}/create/:application`, this.levelcontroller.createLevel);

        this.router.post(`${this.path}/merge/:application`, this.levelcontroller.mergeLevel);

        this.router.post(`${this.path}/unhide/:application`, this.levelcontroller.unHideLevel);
        this.router.get(`${this.path}/hidden/find/:application`, this.levelcontroller.findHiddenLevelById);


        this.router.get(`${this.path}/hidden/byDepth/:application/:depth`, this.levelcontroller.findHiddenLevelByDepth);
    }
}

export default LevelsRoute;

