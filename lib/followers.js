module.exports = function (program, client) {
  'use strict';

  function search (name) {
    program.log.debug('Retrieving followers of: "%s"', name);

    var params = {screen_name: name};
    program.client.get('followers/ids', params, function(error, followers, response) {
      if (!error) {
        program.writer.write(JSON.stringify(followers));
      }
    });
  }

  program
    .command('followers [name]')
    .description('Retrieve followers')
    .action(search);
};
