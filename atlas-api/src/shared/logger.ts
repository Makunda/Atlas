import winstonDaily from 'winston-daily-rotate-file';
import winston from "winston";

interface IMessage {
    timestamp: any;
    level: string;
    message: string;
}

const {combine, timestamp, printf} = winston.format;

const logger = winston.createLogger({
    level: 'info',

    format: winston.format.combine(
        winston.format.json()
    ),

    defaultMeta: {service: 'user-service'},
    transports: [
        //
        // - Write all logs with level `error` and below to `error.log`
        // - Write all logs with level `info` and below to `combined.log`
        //
        new winstonDaily({
            level: 'info',
            datePattern: 'YYYY-MM-DD',
            dirname: 'logs/info', // log file /logs/info/*.log in save
            filename: `%DATE%.log`,
            maxFiles: 30, // 30 Days saved
            json: false,
            zippedArchive: true,
        }),
        // error log setting
        new winstonDaily({
            level: 'error',
            datePattern: 'YYYY-MM-DD',
            dirname: 'logs/error', // log file /logs/error/*.log in save
            filename: `%DATE%.error.log`,
            maxFiles: 30, // 30 Days saved
            handleExceptions: true,
            json: false,
            zippedArchive: true,
        }),


    ],
});


const stream = {
    write: (message: string) => {
        logger.info(message.substring(0, message.lastIndexOf('\n')));
    },
};


if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.simple(),
    }));
}

export {logger, stream};
