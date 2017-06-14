var express = require('express');
var app = express();
var twitter = require('./twitterapi');
var tweetsmiddle = require('./twittermiddleware');
//serves everything in the public folder. ie. index.html and client.js
app.use(express.static('public'));

//route for tweets 
app.get('/tweets', tweetsmiddle);

//route for friends
app.get('/friends', friendsmiddle);

//route for followers
app.get('/followers', followersmiddle);

//initialize the server on port 3000
app.listen(3000, function()
{
  //log out status
  console.log("listening on 3000");
});
