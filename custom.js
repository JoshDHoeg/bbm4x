var vid = document.getElementById("bgvid");
var shopButton = document.querySelector("#main_wrapper #shop");
var videoButton = document.querySelector("#main_wrapper #watch");
var video_player = document.querySelector("#video_player");


shopButton.addEventListener("click", function() {
  window.location.href = "https://www.grailed.com/bbm4x";
});


videoButton.addEventListener("click", function() {
  video_player.style.visibility = 'visible';
  video_player.style.opacity = '1';
});

video_player.addEventListener("click", function() {
  video_player.style.visibility = 'hidden';
  video_player.style.opacity = '0';
});


// site load_screen -- also uncomment the div in the header and the css style for #load_screen
jQuery(document).ready(function($) {
  $(window).load(function(){
    $('#load_screen').fadeOut('slow',function(){$(this).remove();});
  });
});
