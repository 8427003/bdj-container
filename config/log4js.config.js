var fs = require('fs-extra');

// 确认logs所需目录存在
fs.ensureDirSync('logs/access/');
fs.ensureDirSync('logs/errors/');
fs.ensureDirSync('logs/system/');

module.exports = {
  appenders: [
    {
      type: 'console'
    },
    {
      type: 'dateFile',
      category: 'access',
      filename: 'logs/access/access',
      pattern: '-yyyy-MM-dd.log',
      alwaysIncludePattern: true
    },
    {
      type: 'dateFile',
      category: 'system',
      filename: 'logs/system/system',
      pattern: '-yyyy-MM-dd.log',
      alwaysIncludePattern: true
    },
    {
      type: 'logLevelFilter',
      level: 'ERROR',
      appender: {
        type: 'dateFile',
        filename: 'logs/errors/error',
        pattern: '-yyyy-MM-dd.log',
        alwaysIncludePattern: true
      }
    }
  ],
  replaceConsole: true
};
