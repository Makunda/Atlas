/**
 * Pre-start is where we want to place things that must run BEFORE the express server is started.
 * This is useful for environment variables, command-line arguments, and cron-jobs.
 */

import path from 'path';
import dotenv from 'dotenv';
import commandLineArgs from 'command-line-args';

/**
 * Set the production path
 */
function setProdPath() {
    require("module-alias/register")
}

(() => {
    // Setup command line options
    path.join(__dirname, './env/production.env')
    const options = commandLineArgs([
        {
            name: 'env',
            alias: 'e',
            defaultValue: 'development',
            type: String,
        },
    ]);
    // Set the env file
    const result2 = dotenv.config({
        path: path.join(__dirname, `./env/${options.env}.env`),
    });
    if (result2.error) {
        throw result2.error;
    }

    // Print
    console.log("Process ENV : " + process.env.NODE_ENV)
    if (process.env.NODE_ENV === 'production') {
        setProdPath()
    }
})();
