import {Request, Router} from 'express';
import ArtemisController from '@controller/artemis/ArtemisController';
import Route from '@interfaces/routes.interface';
import path from "path";
import multer, {Multer} from "multer";
import fs from "fs";


class ArtemisRoute implements Route {
    public path = '';
    public router = Router();
    public artemisController = new ArtemisController();

    private multerUpload: Multer;

    constructor() {


        // Multer
        type CallbackFunction = (...args: any) => void;
        const appDir = path.dirname(require.main.filename);
        const tempDirectory: string = appDir + "/../temp/";

        if (!fs.existsSync(tempDirectory)) {
            fs.mkdirSync(tempDirectory);
        }

        const storage = multer.diskStorage({
            destination: function (req: Request, file: any, cb: CallbackFunction) {
                cb(null, tempDirectory);
            },

            filename: function (req: Request, file: any, cb: CallbackFunction) {
                cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
            }
        });
        this.multerUpload = multer({storage: storage});

        this.initializeRoutes();

    }

    private initializeRoutes() {
        this.router.get(`${this.path}/version`, this.artemisController.getVersion);
        this.router.get(`${this.path}/export/all`, this.artemisController.exportFrameworks);
        this.router.post(`${this.path}/import/frameworks`, this.multerUpload.single('file'),
            this.artemisController.importFrameworks);
    }
}

export default ArtemisRoute;

