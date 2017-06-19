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
      let cleanTweets = tweets.map(tweet => tweet.text);
      res.json(cleanTweets);
    }
  });
}

function getFriends(name, res){
  var params = {
    screen_name: name
    };

    return client.get('friends/list', params, function(error, friends, response) {
        if (!error) {
          let cleanFriends = friends.users.map(friend=>friend.screen_name);
          res.json(cleanFriends);
        }
      });
}

function getFollowers(name, res){
  var params = {
    screen_name: name
    };
    return client.get('followers/list', params, function(error, followers, response) {
    if (!error) {
      let cleanFollowers = followers.users.map(follower=>follower.screen_name);
      res.json(cleanFollowers);
    }
  });
}

function getFavorites(name, res){
  var params = {
    screen_name: name
    };
  return client.get('favorites/list', params, function(error, tweets, response) {
    if (!error) {
      let cleanTweets = tweets.map(tweet => tweet.text);
      res.json(cleanTweets);
    }
  });
}

function getStatus(name, res){
  // var params = {
  //   screen_name: name
  //   };
  return client.get('application/rate_limit_status', function(error, tweets, response) {
    if (!error) {
      let cleanTweets = tweets.map(tweet => tweet.text);
      res.json(cleanTweets);
    }
  });
}

let svc = {
  getTweets, getFriends, getFollowers, getFavorites, getStatus
};

module.exports = svc;
