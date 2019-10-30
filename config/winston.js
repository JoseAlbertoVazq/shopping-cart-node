var appRoot = require('app-root-path');
var winston = require('winston');

// define the custom settings for each transport (errors, info, console)
var options = {
    fileErrors: {
      level: 'error',
      filename: `${appRoot}/logs/errors.log`,
      handleExceptions: true,
      json: true,
      maxsize: 5242880, // 5MB
      maxFiles: 5,
      colorize: false,
    },
    fileInfo: {
        level: 'info',
        filename: `${appRoot}/logs/info.log`,
        handleExceptions: true,
        json: true,
        maxsize: 5242880, // 5MB
        maxFiles: 5,
        colorize: false,
      },
    console: {
      level: 'debug',
      handleExceptions: true,
      json: false,
      colorize: true,
    },
  };

  // instantiate a new Winston Logger with the settings defined above
  var logger = new winston.createLogger({
    transports: [
      new winston.transports.File(options.fileErrors),
      new winston.transports.File(options.fileInfo),
      new winston.transports.Console(options.console)
    ],
    exitOnError: false, // do not exit on handled exceptions
  });

  // create a stream object with a 'write' function that will be used by `morgan`
  logger.stream = {
    // use the 'info' log level so the output will be picked up by both transports (file and console)
    write: function(message, encoding) {
      logger.info(message);
    },
  };

  module.exports = logger;