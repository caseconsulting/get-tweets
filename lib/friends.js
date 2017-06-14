
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
      if (!error) {
        fileWriter.write(JSON.stringify(friends, undefined, 4));


      }
    });
  };
  getFriends("fxfahad")
