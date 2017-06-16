//Passes in toClick and request from Twitter
//if toClick exists, as in the case of friends and followers
//add the onclick functionality to the HTML tag along with twitter data
//otherwise just draw the data and do not give it onClick functionality
function draw(toClick,req){

  var x = req.map(function(data){
    if (toClick){
      return '<h6 class = "well well-lg col-sm-6 col-sm-offset-3 clickable" onClick="'+toClick+'(this);">'+data+'</h6>';
    }
    else {
      return '<h6 class = "well well-lg col-sm-6 col-sm-offset-3">'+data+'</h6>';
    }
  }).join("");

  //if the length of the response from twitter is 0
  if (req.length == 0)
  {
    alert("this person has no tweets");
  }

  $('#twitterOutput').replaceWith('<div id="twitterOutput">' +x+ '</div>');
}

function loadHandle(e){
  document.getElementById("input").value = e.innerHTML;
  inputCheck(e.innerHTML, "tweets");
}

function fetchTweets(){
  var input = document.getElementById("input").value;
  console.log("Username sent: "+input);
  inputCheck(input,"tweets");
}
//Checking to make sure server is available and correct input was passed
function inputCheck(input, action, toClick){
  input = input.replace('@','');

  if(input.length>0){
    $.get('/'+action+'/' + input, draw.bind(null, toClick))
    .fail(function(){

      let img = "http://images.clipshrine.com/getimg/PngMedium-Sad-PANDA-89849.png"
      //TODO
      //create switch to change URL based on random number
      img = '<img class="animated rubberBand" src=' +img+'></img>';
      img = img + "<figcaption> ET failed to phone home. RIP Harambe. <3 </figcaption>"
      toClick = null;
      draw(toClick, [img]);
    })
  }
  else{
    draw(toClick,["Enter a handle"]);
  }
}

//tweet button click
$( "#tweets" ).click(function() {
  fetchTweets();
});
$("#input").keypress(function(e) {
  if(e.which == 13) {
    fetchTweets();
  }
});

$( "#friends" ).click(function() {

  var input = document.getElementById("input").value;
  console.log("Username sent: "+input);
  inputCheck(input,"friends",'loadHandle');

});

$( "#followers" ).click(function() {

  var input = document.getElementById("input").value;
  console.log("Username sent: "+input);
  inputCheck(input,"followers", 'loadHandle');
});

//scroll shadow effect
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
        $("#banner").addClass("active");
    }
    else {
        $("#banner").removeClass("active");
    }
});
