var twitter = require('./twitterapi');

function tweets(req, res, body) {
  //send json file
  'use strict';
  let username = req.params.handle;
  console.log("Username recieved: "+ username);
  twitter.getTweets(username, res);

}

function friends(req, res, body){
  let username = req.params.handle;
  console.log("Username recieved: " + username);
  twitter.getFriends(username,res);
}

function followers(req,res,body){
  let username = req.params.handle;
  console.log("Username recieved: "+ username);
  twitter.getFollowers(username,res);
}

function favorites(req,res,body){
  let username = req.params.handle;
  console.log("Username recieved: "+ username);
  twitter.getFavorites(username,res);
}

let twitterFunction = {
  tweets, friends, followers, favorites
};

module.exports = twitterFunction;
