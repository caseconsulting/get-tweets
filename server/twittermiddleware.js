var twitter = require('./twitterapi');

function tweets(req, res, body) {
  //send json file
  'use strict';
  let username = req.params.handle;
  console.log("Username recived: "+username);
  twitter.getTweets(username, res);

}

function friends(req, res, body){
  let username = req.params.handle;
  console.log("Username recived: "+username);
  twitter.getFriends(username,res);
}

function followers(req,res,body){
  let username = req.params.handle;
  console.log("Username recived: "+username);
  twitter.getFollowers(username,res);
}

let twitterFunction = {
  tweets, friends, followers
};
module.exports = twitterFunction;
