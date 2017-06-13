

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
  body = input;
  $.get('/tweets', function(req,res, body){
    //write to the doc
    for (let key in req)
    {
      $('#tweetCallback').append('<p>' + req[key].text + '<p>');
    }

  });

});
