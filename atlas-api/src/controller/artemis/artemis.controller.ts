import {NextFunction, Request, Response} from 'express';
import ArtemisService from '@services/artemis/artemis.service';


class ArtemisController {
    private artemisService = new ArtemisService();

    public getVersion = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {

            const version: string = await ArtemisService.getVersion();
            res.status(200).json({data: version, message: 'version'});

        } catch (error) {
            next(error);
        }
    };
}

export default ArtemisController;