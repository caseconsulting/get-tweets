var express = require('express');
var app = express();
const tweet = require('./lib/tweets');

//serves everything in the public folder. ie. index.html and client.js
app.use(express.static('public'));

//route for tweets called by tweets function
app.get('/tweets', function (req, res, body) {
  //send json file
  'use strict';
  

  var Twitter = require('twitter');
  require('dotenv').config();

  var params = {screen_name: "boisseaujacob",exclude_replies:true,include_rts:false};

  var client = new Twitter({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token_key: process.env.ACCESS_TOKEN_KEY,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
  });


    client.get('statuses/user_timeline', params, function(error, tweets, response) {
      if (!error) {
        res.json(tweets);
      }
    });

});

//initialize the server on port 3000
app.listen(3000, function()
{
  //log out status
  console.log("listening on 3000");
});
