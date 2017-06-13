var express = require('express');
var app = express();

//serves everything in the public folder. ie. index.html and client.js
app.use(express.static('public'));

//route for tweets called by tweets function
app.get('/tweets', function (req, res, body) {
  //send json file
  body = "hello skywalker";
  res.send(body);
});

//initialize the server on port 3000
app.listen(3000, function()
{
  //log out status
  console.log("listening on 3000");
});
