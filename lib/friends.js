

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> adding-tweet-json: made standalone calls to twitter api
=======
>>>>>>> ba6eb8b735fac0fb88b21a61d00afbe1e9118e3d

  function getFriends (name) {
      'use strict';
    var fs      = require('fs');
    var Twitter = require('twitter');
    require('dotenv').config();

  var fileWriter = fs.createWriteStream("friends.json");
  var params = {sreen_name: name};

  var client = new Twitter({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token_key: process.env.ACCESS_TOKEN_KEY,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
  });

    client.get('friends/ids', params, function(error, friends, response) {
<<<<<<< HEAD
<<<<<<< HEAD
=======
    var params = {sreen_name: name};
    program.client.get('friends/ids', params, function(error, friends, response) {
>>>>>>> adding-tweet-json: added tweets fetching
=======
>>>>>>> adding-tweet-json: made standalone calls to twitter api
=======
>>>>>>> ba6eb8b735fac0fb88b21a61d00afbe1e9118e3d
      if (!error) {
        fileWriter.write(JSON.stringify(friends, undefined, 4));


      }
    });
  };
  getFriends("fxfahad")
