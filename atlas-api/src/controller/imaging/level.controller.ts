import {NextFunction, Request, Response} from 'express';
import {ILevel} from "@interfaces/imaging/level.interface";
import LevelService from '@services/imaging/level.service';


class LevelController {
    private levelService = new LevelService();

    public getRootLevel = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const applicationName = String(req.params.application);
            const levels: ILevel[] = await this.levelService.getRootLevel(applicationName);
            res.status(200).json({data: levels, message: 'Roots levels'});

        } catch (error) {
            next(error);
        }
    };

    public getAttachedLevel = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const applicationName = String(req.params.application);
            const levelId = Number(req.params.id);
            const levels: ILevel[] = await this.levelService.getChildrenLevels(applicationName, levelId);
            res.status(200).json({data: levels, message: 'Attached'});

        } catch (error) {
            next(error);
        }
    };

    public getParentLevel = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const applicationName = String(req.params.application);
            const levelId = Number(req.params.id);
            const levels: ILevel = await this.levelService.getParentLevel(applicationName, levelId);
            res.status(200).json({data: levels, message: 'Attached'});

        } catch (error) {
            next(error);
        }
    };

    public createLevel = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const level: ILevel = req.body;
            const parentLevelID = Number(req.body.parentId);
            const applicationName = String(req.params.application);

            const createdLevel: ILevel = await this.levelService.createLevel(applicationName, parentLevelID, level);
            res.status(200).json({data: createdLevel, message: 'Created'});

        } catch (error) {
            next(error);
        }
    };


    public updateLevel = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const level: ILevel = req.body;
            const applicationName = String(req.params.application);

            const updatedLevel: ILevel = await this.levelService.updateLevel(applicationName, level);
            res.status(200).json({data: updatedLevel, message: 'Updated'});

        } catch (error) {
            next(error);
        }
    };

}

export default LevelController;