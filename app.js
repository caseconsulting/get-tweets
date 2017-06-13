var express = require('express');
var app = express();
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const tweet = require('./lib/tweets');
=======
>>>>>>> express-basics: added basic express functionality
=======
const tweet = require('./lib/tweets');
>>>>>>> adding-tweet-json: moved tweet getting into app.js for now to test
=======
const tweet = require('./lib/tweets');
>>>>>>> ba6eb8b735fac0fb88b21a61d00afbe1e9118e3d

//serves everything in the public folder. ie. index.html and client.js
app.use(express.static('public'));

//route for tweets called by tweets function
app.get('/tweets', function (req, res, body) {
  //send json file
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> ba6eb8b735fac0fb88b21a61d00afbe1e9118e3d
  'use strict';
  console.log(req.query.handle);

  var Twitter = require('twitter');
  require('dotenv').config();

<<<<<<< HEAD
<<<<<<< HEAD
  var params = {screen_name: "boisseaujacob",exclude_replies:true,include_rts:false};
>>>>>>> adding-tweet-json: moved tweet getting into app.js for now to test
=======
=======
>>>>>>> ba6eb8b735fac0fb88b21a61d00afbe1e9118e3d
  var params = {
    screen_name: req.query.handle,
    exclude_replies: true,
    include_rts: false
  };
<<<<<<< HEAD
>>>>>>> express-basics: parameterized routes to enable handle-specific tweet requests
=======
>>>>>>> ba6eb8b735fac0fb88b21a61d00afbe1e9118e3d

  var client = new Twitter({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token_key: process.env.ACCESS_TOKEN_KEY,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
  });


<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> express-basics: parameterized routes to enable handle-specific tweet requests
=======
>>>>>>> ba6eb8b735fac0fb88b21a61d00afbe1e9118e3d
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
      res.json(tweets);
    }
  });
<<<<<<< HEAD
<<<<<<< HEAD

=======
  body = "hello skywalker";
  res.send(body);
>>>>>>> express-basics: added basic express functionality
=======
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
      if (!error) {
        res.json(tweets);
      }
    });
=======
>>>>>>> express-basics: parameterized routes to enable handle-specific tweet requests

>>>>>>> adding-tweet-json: moved tweet getting into app.js for now to test
=======

>>>>>>> ba6eb8b735fac0fb88b21a61d00afbe1e9118e3d
});

//initialize the server on port 3000
app.listen(3000, function()
{
  //log out status
  console.log("listening on 3000");
});
