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

    public hideLevel = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const idLevel: number = req.body.levelId;
            const applicationName = String(req.params.application);

            const updatedLevel: ILevel = await this.levelService.hideLevel(applicationName, idLevel);
            res.status(200).json({data: updatedLevel, message: 'Level hidden'});

        } catch (error) {
            next(error);
        }
    };

    public unHideLevel = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const idLevel: number = req.body.levelId;
            const applicationName = String(req.params.application);

            const updatedLevel: ILevel = await this.levelService.unHideLevel(applicationName, idLevel);
            res.status(200).json({data: updatedLevel, message: 'Level hidden'});

        } catch (error) {
            next(error);
        }
    };

    public findHiddenLevelByDetph = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const depthLevel: number = Number(req.params.depth);
            const applicationName = String(req.params.application);

            const hiddenLevel: ILevel[] = await this.levelService.findHiddenLevelByDetph(applicationName, depthLevel);
            res.status(200).json({data: hiddenLevel, message: 'Levels hidden'});

        } catch (error) {
            next(error);
        }
    };

    public findHiddenLevelById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const idLevel: number = req.body.idLevel;
            const applicationName = String(req.params.application);

            const hiddenLevel: ILevel = await this.levelService.findHiddenLevelById(applicationName, idLevel);
            res.status(200).json({data: hiddenLevel, message: 'Levels with depth'});

        } catch (error) {
            next(error);
        }
    };


    public findLevelByDepth = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const levelDepth = Number(req.params.depth);
            const applicationName = String(req.params.application);

            const levels: ILevel[] = await this.levelService.getLevelsByDepth(applicationName, levelDepth);
            res.status(200).json({data: levels, message: `Level ${levelDepth}`});

        } catch (error) {
            next(error);
        }
    };

    public findLevelByName = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const levelName = String(req.body.name);
            const applicationName = String(req.params.application);

            const levels: ILevel[] = await this.levelService.findLevelsByName(applicationName, levelName);
            res.status(200).json({data: levels, message: `Levels with Name`});

        } catch (error) {
            next(error);
        }
    };

    public findLevelByID = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const levelId = Number(req.body.levelId);
            const applicationName = String(req.params.application);

            const level: ILevel = await this.levelService.findLevelById(applicationName, levelId);
            res.status(200).json({data: level, message: `Level with ID`});

        } catch (error) {
            next(error);
        }
    };

}

export default LevelController;