

//test function
function helloWorld()
{
  console.log("I am your father");
}

//tweet button click
$( "#tweets" ).click(function() {
  //outgoing request for tweets

  var input = document.getElementById("input").value;

  console.log(input);

  $.get('/tweets', {handle: input + ''}, function(req, res, body){
      for (let key in req)
      {
        $('#tweetCallback').append('<p>' + req[key].text + '<p>');
      }
    });
  });
