var fs      = require('fs');

module.exports = function (program) {
  'use strict';

  program.option('-o, --output <file>', 'file to output.  Default is the logger');

  var argv = program.normalize(process.argv);

  // find the index of output
  var idx = Math.max(argv.indexOf('-o'), argv.indexOf('--output'));

  // determine if we will output to a file or not
  program.output = idx > -1;

  if(program.output){

    var fileName = argv[idx + 1];
    program.writer = fs.createWriteStream(fileName);
    program.log.debug('Writing Output to %s', fileName);
  }

};
