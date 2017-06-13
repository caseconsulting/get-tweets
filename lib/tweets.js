<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
 exports.getTweets = function(name) {
=======
function getTweets (name) {
>>>>>>> adding-tweet-json: made standalone calls to twitter api
=======
 exports.getTweets = function(name) {
>>>>>>> adding-tweet-json: moved tweet getting into app.js for now to test
=======
 exports.getTweets = function(name) {
>>>>>>> ba6eb8b735fac0fb88b21a61d00afbe1e9118e3d
    'use strict';
    var fs      = require('fs');
    var Twitter = require('twitter');
    require('dotenv').config();
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ba6eb8b735fac0fb88b21a61d00afbe1e9118e3d

  var fileWriter = fs.createWriteStream("tweets.json");
  var params = {screen_name: name,exclude_replies:true,include_rts:false};

  var client = new Twitter({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token_key: process.env.ACCESS_TOKEN_KEY,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
  });


      client.get('statuses/user_timeline', params, function(error, tweets, response) {
      if (!error) {
      fileWriter.write(JSON.stringify(tweets, undefined, 4)); //, undefined, 4 is the formating in json file
      //console.log(tweets);
      return tweets;

      }
    });
  };
<<<<<<< HEAD
=======
module.exports = function (program, client) {
  'use strict';
=======
>>>>>>> adding-tweet-json: made standalone calls to twitter api

  var fileWriter = fs.createWriteStream("tweets.json");
  var params = {screen_name: name,exclude_replies:true,include_rts:false};

  var client = new Twitter({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token_key: process.env.ACCESS_TOKEN_KEY,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
  });


      client.get('statuses/user_timeline', params, function(error, tweets, response) {
      if (!error) {
      fileWriter.write(JSON.stringify(tweets, undefined, 4)); //, undefined, 4 is the formating in json file
      //console.log(tweets);
      return tweets;

      }
    });
<<<<<<< HEAD
  }

  program
    .command('tweets [name]')
    .description('Retrieve Tweets')
    .action(search);
};
>>>>>>> adding-tweet-json: added tweets fetching
=======
  };
<<<<<<< HEAD
  getTweets("boisseaujacob");
>>>>>>> adding-tweet-json: made standalone calls to twitter api
=======
>>>>>>> adding-tweet-json: moved tweet getting into app.js for now to test
=======
>>>>>>> ba6eb8b735fac0fb88b21a61d00afbe1e9118e3d
