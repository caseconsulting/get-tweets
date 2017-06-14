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

function getFriends(name, res){
  var params = {sreen_name: name};

      client.get('friends/ids', params, function(error, friends, response) {
        if (!error) {
          res.json(friends);
        }
      });
}

function getFollowers(name, res){
  var params = {screen_name: name};
    program.client.get('followers/ids', params, function(error, followers, response) {
    if (!error) {
      res.json(followers);
    }
  });
}

let svc = {
  getTweets, getFriends, getFollowers
};

module.exports = svc;
