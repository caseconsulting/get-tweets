var express = require('express');
var app = express();
<<<<<<< HEAD
const tweet = require('./lib/tweets');
=======
>>>>>>> express-basics: added basic express functionality

//serves everything in the public folder. ie. index.html and client.js
app.use(express.static('public'));

//route for tweets called by tweets function
app.get('/tweets', function (req, res, body) {
  //send json file
<<<<<<< HEAD
  'use strict';
  let username = req.query.handle;
  var Twitter = require('twitter');
  require('dotenv').config();

  if(username[0]=='@'){
  username = username.replace('@','');
  }
  console.log("Username recived: "+username);
  var params = {
    screen_name: username,
    exclude_replies: true,
    include_rts: false
  };

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

=======
  body = "hello skywalker";
  res.send(body);
>>>>>>> express-basics: added basic express functionality
});

//initialize the server on port 3000
app.listen(3000, function()
{
  //log out status
  console.log("listening on 3000");
});
