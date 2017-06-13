

//test function
function helloWorld()
{
  console.log("I am your father");
}

//tweet button click
$( "#tweets" ).click(function() {
  //outgoing request for tweets

  var input = document.getElementById("input").value;

<<<<<<< HEAD
  console.log(input);
<<<<<<< HEAD
  body = input;
  $.get('/tweets', function(req,res, body){
    //write to the doc
<<<<<<< HEAD

    //document.write(req);
=======
    for (let key in req)
    {
      $('#tweetCallback').append('<p>' + req[key].text + '<p>');
    }

>>>>>>> express-basics: added json output to page through client-side jquery
=======
=======
  console.log("Username sent: "+input);
>>>>>>> adding-tweet-json: user can enter @ sign in input

  $.get('/tweets', {handle: input + ''}, function(req, res, body){
      for (let key in req)
      {
        $('#tweetCallback').append('<h6>' + req[key].text + '<h6>');

      }
    });
>>>>>>> express-basics: parameterized routes to enable handle-specific tweet requests
  });
