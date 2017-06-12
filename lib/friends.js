module.exports = function (program, client) {
  'use strict';

  function search (name) {
    program.log.debug('Retrieving friends of: "%s"', name);

    var params = {sreen_name: name};
    program.client.get('friends/ids', params, function(error, friends, response) {
      if (!error) {
        program.writer.write(JSON.stringify(friends));
      }
    });
  }

  program
    .command('friends [name]')
    .description('Retrieve Friends')
    .action(search);
};
