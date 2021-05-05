/**
 * Remove old files, copy front-end ones.
 */

import fs from 'fs-extra';
import Logger from 'jet-logger';
import childProcess from 'child_process';

// Setup logger
const logger = new Logger();
logger.timestamp = false;

const WEB_APP_DIST_PATH = "../web-application/dist";

(async () => {
    try {
        // Remove current build
        console.log("Removing dist folder..");
        await remove('./dist/');
        console.log("Folder removed..");

        console.log("Look for newest versions of the web-application..");

        // Check if
        if (fs.existsSync(WEB_APP_DIST_PATH)) {
            // Unlink old files
            if (fs.existsSync("./src/public/index.html")) fs.unlinkSync("./src/public/index.html")
            if (fs.existsSync("./src/public/js/")) fs.rmdirSync("./src/public/js/", { recursive: true });

            await copy(WEB_APP_DIST_PATH+"/index.html", './src/public/index.html');
            await copy(WEB_APP_DIST_PATH+"/js/", './src/public/js/');
            console.log("Views were updated");

        } else {
            console.log(`Failed to resolve path of web-application : ${WEB_APP_DIST_PATH}`)
        }


        // Copy front-end files
        console.log("Copying resources ..");
        await copy('./src/public', './dist/public');
        await copy('./src/views', './dist/views');
        // Copy production env file
        await copy('./src/pre-start/env/production.env', './dist/pre-start/env/production.env');
        // Copy back-end files
        console.log("Copying done..")

        await exec('tsc --build tsconfig.prod.json', './')
    } catch (err) {
        logger.err(err);
    }
})();


function remove(loc: string): Promise<void> {
    return new Promise((res, rej) => {
        return fs.remove(loc, (err) => {
            return (!!err ? rej(err) : res());
        });
    });
}


function copy(src: string, dest: string): Promise<void> {
    return new Promise((res, rej) => {
        return fs.copy(src, dest, (err) => {
            return (!!err ? rej(err) : res());
        });
    });
}


function exec(cmd: string, loc: string): Promise<void> {
    return new Promise((res, rej) => {
        return childProcess.exec(cmd, {cwd: loc}, (err, stdout, stderr) => {
            if (!!stdout) {
                logger.info(stdout);
            }
            if (!!stderr) {
                logger.warn(stderr);
            }
            return (!!err ? rej(err) : res());
        });
    });
}
