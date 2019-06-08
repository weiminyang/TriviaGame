$(document).ready(function() {
var playGround = $("#play-ground");

// var timer{
//     pTag1
// }
var timer1=$("<h4>");
var time = 80;
var intervalId;
intervalId = setInterval(run, 1000);
function run(){
    time--;

    timer1.html("The remaining time: "+time+" seconds!");
}
playGround.append(timer1);
var questionArea = ("<div>");
playGround.append(questionArea);


    var startButton=$("<button>");
 
  
        startButton.attr("class","btn btn-primary");
        startButton.text("prime");
        playGround.append(startButton);
   











})
