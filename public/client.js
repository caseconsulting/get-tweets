function draw(req){
    var x = req.map(function(data){
      return "<h6>"+data+"</h6>";
    }).join("");
      $('#twitterOutput').replaceWith('<div id="twitterOutput">'+x+'</div>');
  }

function inputCheck(input,action){
  if(input.length>0){
    $.get('/'+action+'/' + input, draw);
  }
  else{
    draw(["Enter a handle"]);
  }
}
//tweet button click
$( "#tweets" ).click(function() {
  //outgoing request for tweets

  var input = document.getElementById("input").value;

    console.log("Username sent: "+input);
    inputCheck(input,"tweets");

  });


  //friends button click
  $( "#friends" ).click(function() {
    //outgoing request for tweets

    var input = document.getElementById("input").value;

    console.log("Username sent: "+input);

      inputCheck(input,"friends");
    });

    //tweet button click
    $( "#followers" ).click(function() {
      //outgoing request for tweets

      var input = document.getElementById("input").value;

      console.log("Username sent: "+input);

        inputCheck(input,"followers");
      });
