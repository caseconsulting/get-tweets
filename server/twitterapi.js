var Twitter = require('twitter');
var dotenv = require('dotenv').config();



  var client = new Twitter({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token_key: process.env.ACCESS_TOKEN_KEY,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
  });

function getTweets(name, res){
  var params = {
    screen_name: name,
    exclude_replies: true,
    include_rts: false
  };
  return client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
      res.json(tweets);
    }
  });
}

let svc = {
  getTweets
};

module.exports = svc;