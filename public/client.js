//Passes in toClick and request from Twitter
//if toClick exists, as in the case of friends and followers
//add the onclick functionality to the HTML tag along with twitter data
//otherwise just draw the data and do not give it onClick functionality
function draw(toClick,req){

  //maps through for all elements of the array
  var x = req.map(function(data){
    if (toClick){
      return '<h6 class = "well well-lg col-sm-6 col-sm-offset-3 clickable animated bounceInDown" onClick="'+toClick+'(this);">'+data+'</h6>';
    }
    else {
      //checks to see if the data element of the array req is the string "error"
      if (data === "error"){
          req.shift();
          return req[0];

      }
      else {
          return '<h6 class = "well well-lg col-sm-6 col-sm-offset-3 animated bounceInDown">'+data+'</h6>';
        }
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

function fetchTweets(action){
  var input = document.getElementById("input").value;
  console.log("Username sent: "+input);
  inputCheck(input,action);
}

//Checking to make sure server is available and correct input was passed
function inputCheck(input, action, toClick){
  input = input.replace('@','');

  if(input.length>0){
    $.get('/'+action+'/' + input, draw.bind(null, toClick))
    .fail(function(){

      let img = "http://images.clipshrine.com/getimg/PngMedium-Sad-PANDA-89849.png"

      img = '<img class="connectRefused animated rubberBand" src=' +img+'></img>';
      img = img + "<figcaption> ET failed to phone home. RIP Harambe. <3 </figcaption>"
      toClick = null;
      draw(toClick, ["error", img]);
    })
  }
  else{
    draw(toClick,["Enter a handle"]);
  }
}

//tweet button click
$( "#tweets" ).click(function() {
  fetchTweets('tweets');
});
$("#input").keypress(function(e) {
  if(e.which == 13) {
    fetchTweets('tweets');
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

$( "#favorites" ).click(function() {

  fetchTweets('favorites');
});

//scroll shadow effect
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll > 0) {
    $("nav").addClass("active");
  }
  else {
    $("nav").removeClass("active");
  }
});

//Strangely suspicious code...
$("#vine").click(function(){
  $("#twitterOutput").addClass("foo-bar");
    setTimeout(function(){$("#twitterOutput").removeClass("foo-bar");},5000);

});

// header Animation

$(window).scroll(function() {
  console.log($(document).scrollTop());
  let scroll =$(document).scrollTop();

  if (scroll > 50&&scroll<300) {
    $('nav').addClass('shrink');
  }
  else if(scroll>300){
    //alert("over 300")
    $('nav').addClass('remove-title');
  }
  else{
    $('nav').removeClass('shrink');
    $('nav').removeClass('remove-title');
  }
});
