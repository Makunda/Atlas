import winston from "winston";

const { combine, timestamp, printf } = winston.format;

const options = {
  file: {
    level: "info",
    filename: `logs/app.log`,
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: true,
  },
  console: {
    level: "info",
    handleExceptions: true,
    json: true,
    colorize: true,
  },
};

const logger = winston.createLogger({
  level: "info",

  format: winston.format.combine(winston.format.json()),

  defaultMeta: { service: "user-service" },
  transports: [new winston.transports.File(options.file), new winston.transports.Console(options.console)],
  exitOnError: false,
});

const stream = {
  write: (message: string) => {
    logger.info(message.substring(0, message.lastIndexOf("\n")));
  },
};

if (process && process.env.NODE_ENV !== "production") {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
  );
}

/**
 * Create a wrapper around a winston logger
 * @param prefix Prefix to assign to the logger
 * @returns
 */
function wrapLogger(prefix: string): winston.Logger {
  const wrapped: winston.Logger = Object.assign({}, logger); // Deep copy

  // Wrap info method
  wrapped.info = (message: any) => {
    return logger.info(`${prefix} :: ${message}`);
  };

  // Wrap error method
  wrapped.error = (message: any, ...meta: any[]) => {
    return logger.error(`${prefix} :: ${message}`, meta);
  };

  return wrapped;
}

export { logger, stream, wrapLogger };
