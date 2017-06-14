function draw(req){
    var x = req.map(function(data){
      return "<h6>"+data+"</h6>";
    }).join("");
      $('#twitterOutput').replaceWith('<div id="twitterOutput">'+x+'</div>');
  }

//tweet button click
$( "#tweets" ).click(function() {
  //outgoing request for tweets

  var input = document.getElementById("input").value;

  console.log("Username sent: "+input);

  $.get('/tweets/' + input, draw);
  });


  //friends button click
  $( "#friends" ).click(function() {
    //outgoing request for tweets

    var input = document.getElementById("input").value;

    console.log("Username sent: "+input);

    $.get('/friends/' + input, draw);
    });

    //tweet button click
    $( "#followers" ).click(function() {
      //outgoing request for tweets

      var input = document.getElementById("input").value;

      console.log("Username sent: "+input);

      $.get('/followers/' + input, draw);
      });
