import LevelService from "@services/imaging/level.service";
import {NextFunction, Request, Response} from "express";
import {ILevel} from "@interfaces/imaging/level.interface";
import InstallationService from "@services/installation/installation.service";


export default class InstallationController {
    private installationService = InstallationService.getInstance();

    public getImagingPath = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const path: string = this.installationService.getImagingFolder();
            res.status(200).json({data: path, message: 'Imaging folder path'});

        } catch (error) {
            next(error);
        }
    };

    public setImagingPath = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const newPath = String(req.body.path);
            this.installationService.setImagingFolder(newPath);
            res.status(200).json({data: newPath, message: 'Path changed'});

        } catch (error) {
            next(error);
        }
    };

    public getNeo4jPluginPath = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const path: string = this.installationService.getPluginFolder();
            res.status(200).json({data: path, message: 'Neo4j plugin folder path'});
        } catch (error) {
            next(error);
        }
    };

    public getIconFolder = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const path: string = this.installationService.getIconFolder();
            res.status(200).json({data: path, message: 'Neo4j plugin folder path'});
        } catch (error) {
            next(error);
        }
    };



}