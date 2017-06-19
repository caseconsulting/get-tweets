var Twitter = require('twitter');
var dotenv = require('dotenv').config();
var _ = require('lodash');


  var client = new Twitter({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token_key: process.env.ACCESS_TOKEN_KEY,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
  });

// function getTweets(name, res){
//   var params = {
//     screen_name: name,
//     exclude_replies: true,
//     include_rts: false
//   };
//   return client.get('statuses/user_timeline', params, function(error, tweets, response) {
//     if (!error) {
//       let cleanTweets = tweets.map(tweet => tweet.text);
//       res.json(cleanTweets);
//     }
//   });
// }

// getTweets initializes reduceItems with fieldName and res
// when .get async calls finally calls its callback
// it is called the rest of the necessary parameters of
// fieldName and res. _.curry is very similar to what .bind does
function getTweets(name, res){
  console.info("it this even getting called");
  var params = {
    screen_name: name,
    exclude_replies: true,
    include_rts: false
  };

  return client.get(
    'statuses/user_timeline',
    params,
    svc._reduceItems('text', res)
  );
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

// function is initialized with type and response
const _reduceItems = _.curry((fieldName, res, error, items) => {
console.log('----------- items', items);
console.log("fieldName", fieldName);
  if (!error) {
    let reduceItems = items.map(item => item[fieldName]);
    console.log("reduceItems", reduceItems);
    res.json(reduceItems);
  }
});

let svc = {
  getTweets, getFriends, getFollowers, _reduceItems
};

module.exports = svc;
