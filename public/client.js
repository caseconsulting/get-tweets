function draw(toClick,req){


    var x = req.map(function(data){

    if(toClick){

      return '<h6 onClick="'+toClick+'(this);">'+data+'</h6>';
    }
    else {


      return '<h6>'+data+'</h6>';
    }
    }).join("");
    if (req.length == 0)
    {
      alert("this person has no tweets");
    }

      $('#twitterOutput').replaceWith('<div id="twitterOutput">'+x+'</div>');
  }
function loadHandle(e){
  document.getElementById("input").value = e.innerHTML;
  inputCheck(e.innerHTML, "tweets");
}

function inputCheck(input,action,toClick){
  input = input.replace('@','');

  if(input.length>0){
    $.get('/'+action+'/' + input, draw.bind(null,toClick))
      .fail(function(){
        draw(toClick, ["Failed to connect to server :(( "]);
      })
  }
  else{
    draw(toClick,["Enter a handle"]);
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

      inputCheck(input,"friends",'loadHandle');
    });

    //tweet button click
    $( "#followers" ).click(function() {
      //outgoing request for tweets

      var input = document.getElementById("input").value;

      console.log("Username sent: "+input);

        inputCheck(input,"followers", 'loadHandle');
      });
