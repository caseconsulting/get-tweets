var express = require('express');
var app = express();
var twitter = require('./twitterapi');

var twittermiddleware = require('./twittermiddleware');
//serves everything in the public folder. ie. index.html and client.js
app.use(express.static('public'));

//route for tweets called by tweets function
app.get('/tweets', twittermiddleware.tweets);

//route for friends
app.get('/friends', twittermiddleware.friends);

//route for followers
app.get('/followers', twittermiddleware.followers);


//initialize the server on port 3000
app.listen(3000, function()
{
  //log out status
  console.log("listening on 3000");
});
