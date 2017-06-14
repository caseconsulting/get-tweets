
exports.getTweets = function(name) {
  'use strict';
  var fs      = require('fs');
  var Twitter = require('twitter');
  require('dotenv').config();

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
}
