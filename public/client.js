//tweet button click
$( "#tweets" ).click(function() {
  //outgoing request for tweets

  var input = document.getElementById("input").value;

  console.log("Username sent: "+input);

  $.get('/tweets/' + input, function(req, res, body){
      for (let key in req)
      {
        $('#twitterOutput').append('<h6>' + req[key].text + '<h6>');

      }
    });
  });


  //tweet button click
  $( "#friends" ).click(function() {
    //outgoing request for tweets

    var input = document.getElementById("input").value;

    console.log("Username sent: "+input);

    $.get('/friends/' + input, function(req, res, body){
        for (let key in req)
        {
          $('#twitterOutput').append('<h6>' + req[key].text + '<h6>');

        }
      });
    });

    //tweet button click
    $( "#followers" ).click(function() {
      //outgoing request for tweets

      var input = document.getElementById("input").value;

      console.log("Username sent: "+input);

      $.get('/followers/' + input, function(req, res, body){
          for (let key in req)
          {
            $('#twitterOutput').append('<h6>' + req[key].text + '<h6>');

          }
        });
      });
