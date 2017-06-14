var twitter = require('./twitterapi');

function tweets(req, res, body) {
  //send json file
  'use strict';
  let username = req.query.handle;

  if(username[0]=='@'){
  username = username.replace('@','');
  }
  console.log("Username recived: "+username);
  twitter.getTweets(username, res);

}

function friends(req, res, body){
  let username = req.query.handle;

  if(username[0]=='@'){
  username = username.replace('@','');
  }
  console.log("Username recived: "+username);
  twitter.getfriends(username,res);
}

function followers(req,res,body){
  let username = req.query.handle;

  if(username[0]=='@'){
  username = username.replace('@','');
  }
  console.log("Username recived: "+username);
  twitter.getFollowers(username,res);
}

let twitterFunction = {
  tweets, friends, followers
}
module.exports = twitterFunction;
