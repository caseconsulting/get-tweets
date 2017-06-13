var twitter = require('./twitterapi');

function tweetsmiddle(req, res, body) {
  //send json file
  'use strict';
  let username = req.query.handle;

  if(username[0]=='@'){
  username = username.replace('@','');
  }
  console.log("Username recived: "+username);
  twitter.getTweets(username, res);

}

module.exports = tweetsmiddle;
