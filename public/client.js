//tweet button click
$( "#tweets" ).click(function() {
  //outgoing request for tweets

  var input = document.getElementById("input").value;

  console.log("Username sent: "+input);

  $.get('/tweets', {handle: input + ''}, function(req, res, body){
      for (let key in req)
      {
        $('#tweetCallback').append('<h6>' + req[key].text + '<h6>');

      }
    });
  });
