module.exports = function (program, client) {
  'use strict';

  function search (name) {
    program.log.debug('Retrieving tweets of: "%s"', name);

    var params = {screen_name: name,exclude_replies:true,include_rts:false};
    program.client.get('statuses/user_timeline', params, function(error, tweets, response) {
      if (!error) {
        program.writer.write(JSON.stringify(tweets, undefined, 4)); //, undefined, 4 is the formating in json file
      }
    });
  }

  program
    .command('tweets [name]')
    .description('Retrieve Tweets')
    .action(search);
};
