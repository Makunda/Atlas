import {NextFunction, Request, Response} from 'express';
import {Level} from "@interfaces/imaging/Level";
import LevelService from '@services/imaging/LevelService';
import {logger} from "@shared/Logger";


class LevelController {
    private levelService = new LevelService();

    public getRootLevel = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        const applicationName = String(req.params.application);

        try {
            const levels: Level[] = await this.levelService.getRootLevel(applicationName);
            res.status(200).json({data: levels, message: 'Roots levels'});

        } catch (error) {
            logger.error(`Failed to get Root level in application '${applicationName}.'`, error);
            next(error);
        }
    };

    public getAttachedLevel = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        const applicationName = String(req.params.application);
        const levelId = Number(req.params.id);

        try {
            const levels: Level[] = await this.levelService.getChildrenLevels(applicationName, levelId);
            res.status(200).json({data: levels, message: 'Attached'});

        } catch (error) {
            logger.error(`Failed to get level with id '${levelId}' in application '${applicationName}.'`, error);
            next(error);
        }
    };

    public getParentLevel = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        const applicationName = String(req.params.application);
        const levelId = Number(req.params.id);

        try {
            const levels: Level = await this.levelService.getParentLevel(applicationName, levelId);
            res.status(200).json({data: levels, message: 'Attached'});
        } catch (error) {
            logger.error(`Failed to get parent of level with id '${levelId}' in application '${applicationName}.'`, error);
            next(error);
        }
    };

    public createLevel = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        if(!req.body) {
            res.status(400).json({error: true, message: "Missing 'body' in request."});
            return;
        }

        if(!req.body.parentId) {
            res.status(400).json({error: true, message: "Missing 'parentId' parameter in request body."});
            return;
        }

        const level: Level = req.body;
        const parentLevelID = Number(req.body.parentId);
        const applicationName = String(req.params.application);

        try {
            const createdLevel: Level = await this.levelService.createLevel(applicationName, parentLevelID, level);
            res.status(200).json({data: createdLevel, message: 'Created'});

        } catch (error) {
            logger.error(`Failed to create level in application '${applicationName}.'`, error);
            next(error);
        }
    };


    public updateLevel = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        if(!req.body) {
            res.status(400).json({error: true, message: "Missing 'body' in request."});
            return;
        }

        const level: Level = req.body;
        const applicationName = String(req.params.application);

        try {
            const updatedLevel: Level = await this.levelService.updateLevel(applicationName, level);
            res.status(200).json({data: updatedLevel, message: 'Updated'});

        } catch (error) {
            logger.error(`Failed to update level in application '${applicationName}.'`, error);
            next(error);
        }
    };

    public hideLevel = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        if(!req.body.levelId) {
            res.status(400).json({error: true, message: "Missing 'levelId' parameter in request body."});
            return;
        }

        const idLevel: number = req.body.levelId;
        const applicationName = String(req.params.application);

        try {
            const updatedLevel: Level = await this.levelService.hideLevel(applicationName, idLevel);
            res.status(200).json({data: updatedLevel, message: 'Level hidden'});

        } catch (error) {
            logger.error(`Failed to hide level with id:'${idLevel}' in application '${applicationName}.'`, error);
            next(error);
        }
    };

    public unHideLevel = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        if(!req.body.levelId) {
            res.status(400).json({error: true, message: "Missing 'levelId' parameter in request body."});
            return;
        }

        const idLevel: number = req.body.levelId;
        const applicationName = String(req.params.application);

        try {
            const updatedLevel: Level = await this.levelService.unHideLevel(applicationName, idLevel);
            res.status(200).json({data: updatedLevel, message: 'Level hidden'});
        } catch (error) {
            logger.error(`Failed to unhide level with id:'${idLevel}' in application '${applicationName}.'`, error);
            next(error);
        }
    };

    public findHiddenLevelByDepth = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        const depthLevel = Number(req.params.depth);
        const applicationName = String(req.params.application);

        try {
            const hiddenLevel: Level[] = await this.levelService.findHiddenLevelByDetph(applicationName, depthLevel);
            res.status(200).json({data: hiddenLevel, message: 'Levels hidden'});
        } catch (error) {
            logger.error(`Failed to find hidden level with depth:'${depthLevel}' in application '${applicationName}.'`, error);
            next(error);
        }
    };

    public findHiddenLevelById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        if(!req.body.idLevel) {
            res.status(400).json({error: true, message: "Missing 'idLevel' parameter in request body."});
            return;
        }

        const idLevel: number = req.body.idLevel;
        const applicationName = String(req.params.application);

        try {
            const hiddenLevel: Level = await this.levelService.findHiddenLevelById(applicationName, idLevel);
            res.status(200).json({data: hiddenLevel, message: `Hidden level with id ${idLevel}`});
        } catch (error) {
            logger.error(`Failed to find hidden level with id:'${idLevel}' in application '${applicationName}.'`, error);
            next(error);
        }
    };

    /**
     * Merge a level 5 into another one
     * POST Body {
     *     sourceId: number,
     *     destinationId: number
     * }
     * @param req
     * @param res
     * @param next
     */
    public mergeLevel = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

        if(!req.body.sourceId) {
            res.status(400).json({error: true, message: "Missing 'sourceId' parameter in request body."});
            return;
        }

        if(!req.body.destinationId) {
            res.status(400).json({error: true, message: "Missing 'destinationId' parameter in request body."});
            return;
        }

        const applicationName = String(req.params.application);
        const sourceId = parseInt(req.body.sourceId);
        const destinationId = parseInt(req.body.destinationId);

        try {
            const objectMerged: number = await this.levelService.mergeLevel(applicationName, sourceId, destinationId);
            res.status(200).json({data: objectMerged, message: `Merged ${objectMerged} objects`});
        } catch (error) {
            logger.error(`Failed to merge level with ID:'${sourceId}' into level with ID:'${destinationId}' in application '${applicationName}.'`, error);
            next(error);
        }
    };

    public findLevelByDepth = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        const applicationName = String(req.params.application);
        const levelDepth = parseInt(req.params.depth);

        try {
            const levels: Level[] = await this.levelService.getLevelsByDepth(applicationName, levelDepth);
            res.status(200).json({data: levels, message: `Level ${levelDepth}`});
        } catch (error) {
            logger.error(`Failed to retrieve levels with depth:'${levelDepth}' in application '${applicationName}.'`, error);
            next(error);
        }
    };

    public findLevelByName = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        if(!req.body.name) {
            res.status(400).json({error: true, message: "Missing 'name' parameter in request body."});
            return;
        }

        const levelName = String(req.body.name);
        const applicationName = String(req.params.application);

        try {
            const levels: Level[] = await this.levelService.findLevelsByName(applicationName, levelName);
            res.status(200).json({data: levels, message: `Levels with Name`});
        } catch (error) {
            logger.error(`Failed to retrieve levels containing:'${levelName}' in application '${applicationName}.'`, error);
            next(error);
        }
    };

    public findLevelByID = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        if(!req.body.levelId) {
            res.status(400).json({error: true, message: "Missing 'levelId' parameter in request body."});
            return;
        }

        const levelId = Number(req.body.levelId);
        const applicationName = String(req.params.application);

        try {
            const level: Level = await this.levelService.findLevelById(applicationName, levelId);
            res.status(200).json({data: level, message: `Level with ID`});
        } catch (error) {
            logger.error(`Failed to retrieve levels with Id:'${levelId}' in application '${applicationName}.'`, error);
            next(error);
        }
    };

}

export default LevelController;