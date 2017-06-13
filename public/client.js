

//test function
function helloWorld()
{
  console.log("I am your father");
}

//tweet button click
$( "#tweets" ).click(function() {
  //outgoing request for tweets
  $.get('/tweets', function(req,res, body){
    //write to the doc
    document.write(req);
  });

});
