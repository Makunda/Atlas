import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import path from 'path';
import helmet from 'helmet';
import cors from 'cors';

import express, {NextFunction, Request, Response} from 'express';
import StatusCodes from 'http-status-codes';
import 'express-async-errors';

import BaseRouter from './routes';
import {logger} from '@shared/logger';
import LoginService from "@services/login/login.service";

const app = express();
const {BAD_REQUEST} = StatusCodes;

let loginService : LoginService;

// Initialize login service
try {
    loginService = LoginService.getInstance();
} catch (err) {
    logger.error("Fatal error, failed to instantiate LoginService.", err);
    throw Error("Login service failed to start");
}

let wall = false;

/************************************************************************************
 *                              Set basic express settings
 ***********************************************************************************/

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

// No cache on the Server
app.use(function (req, res, next) {
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.header('Expires', '-1');
    res.header('Pragma', 'no-cache');
    next()
});

// Show routes called in console during development
if (process.env.NODE_ENV === 'development') {
    // Cors 
    app.use(cors());
    app.use(morgan('dev'));
}

// Activate helmet on production environment
if (process.env.NODE_ENV === 'production') {
    app.use(helmet());
}

app.use(function (req, res, next) {
    res.setHeader(
        'Content-Security-Policy',
        "default-src * 'unsafe-inline' 'unsafe-eval'; script-src * 'unsafe-inline' 'unsafe-eval'; connect-src * 'unsafe-inline'; img-src * data: blob: 'unsafe-inline'; frame-src *; style-src * 'unsafe-inline';"
    );
    next();
});

app.use(/^\/api\/(?!login).*/, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await loginService.verifyActualLicense();
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        if(!result) {
            next(new Error("NO LICENCE DETECTED"));
        } else {
            next();
        }
    } catch (err) {
        next(err);
    }
});



// Add APIs
app.use('/api', BaseRouter);

// Front-end
app.get('/', (req, res) => {
    res.redirect("/atlas/main")
});

// Print API errors
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    logger.error(err);
    return res.status(BAD_REQUEST).json({
        error: err.message,
    });
});

/************************************************************************************
 *                              Serve front-end content
 ***********************************************************************************/

const viewsDir = path.join(__dirname, 'public');
app.set('views', viewsDir);
const staticDir = path.join(__dirname, 'public');
app.use(express.static(staticDir));
app.get('/atlas/*', (req: Request, res: Response) => {
    res.sendFile('index.html', {root: viewsDir});
});

app.get('', (req: Request, res: Response) => {
    res.redirect('/atlas/');
});

// Export express instance
export default app;
