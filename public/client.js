//tweet button click
$( "#tweets" ).click(function() {
  //outgoing request for tweets

  var input = document.getElementById("input").value;

  console.log("Username sent: "+input);

  $.get('/tweets/' + input, function(req, res, body){
      var x = req.map(function(tweet){
        return "<h6>"+tweet+"</h6>";
      }).join("");
        $('#twitterOutput').replaceWith('<div id="twitterOutput">'+x+'</div>');
    });
  });


  //friends button click
  $( "#friends" ).click(function() {
    //outgoing request for tweets

    var input = document.getElementById("input").value;

    console.log("Username sent: "+input);

    $.get('/friends/' + input, function(req, res, body){
      var x = req.map(function(friend){
        return "<h6>"+friend+"</h6>";
      }).join("");
        $('#twitterOutput').replaceWith('<div id="twitterOutput">'+x+'</div>');

      });
    });

    //tweet button click
    $( "#followers" ).click(function() {
      //outgoing request for tweets

      var input = document.getElementById("input").value;

      console.log("Username sent: "+input);

      $.get('/followers/' + input, function(req, res, body){
        var x = req.map(function(follower){
          return "<h6>"+follower+"</h6>";
        }).join("");
          $('#twitterOutput').replaceWith('<div id="twitterOutput">'+x+'</div>');

        });
      });
