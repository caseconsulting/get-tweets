var winston = require('winston');

module.exports = function (program) {
  'use strict';

  program.option('-d, --debug', 'enable debugger');

  var argv = program.normalize(process.argv);
  program.debug = argv.indexOf('-d') > -1 || argv.indexOf('--debug') > -1; // Need this early

  winston.cli();
  winston.level = (program.debug) ? 'debug' : 'info';

  program.log = winston;

  if (program.debug) {
    program.log.debug('Debug logging is on');
  }
};
