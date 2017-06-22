var express = require('express');
var app = express();
var cors = require('cors');
var twitter = require('./twitterapi');
var twittermiddleware = require('./twittermiddleware');

//To prevent cross-origin issues...yeah next level... oh yeah
//enables cors for all routes
app.use(cors());
//serves everything in the public folder. ie. index.html and client.js
app.use(express.static('public'));

//route for tweets called by tweets function
app.get('/tweets/:handle', twittermiddleware.tweets);

//route for friends
app.get('/friends/:handle', twittermiddleware.friends);

//route for followers
app.get('/followers/:handle', twittermiddleware.followers);

app.get('/favorites/:handle', twittermiddleware.favorites);

//app.get('/status', twitter.status);

//initialize the server on port 3000
app.listen(3000, function()
{
  //log out status
  console.log("CORS-enabled, listening on 3000");
});
