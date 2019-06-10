$(document).ready(function() {

    var questions=[
        [
            "1.In the year 1900 in the U.S. what were the most popular first names given to boy and girl babies?",
            "A. William and Elizabeth",
            "B. Joseph and Catherine",
            "C. John and Mary",
            "D. George and Anne"
        ],
        [
            "2.When did the Liberty Bell get its name?",
            "A. when it was made, in 1701",
            "B. when it rang on July 4, 1776",
            "C. in the 19th century, when it became a symbol of the abolition of slavery",
            "D. none of the above"
        ],
        [
            "3.In the Roy Rogers -Dale Evans Museum, you will find Roy and Dales stuffed horses. Roy's horse was named Trigger, which was Dales horse?",
            "A. Buttermilk",
            "B. Daisy",
            "C. Scout",
            "D. Tulip"
        ],
        [
            "4.The Daniel Boon museum at the home where he died can best be described how?",
            "A. a log cabin in Kentucky",
            "B. a two-story clapboard house in Tennessee",
            "C. a four-story Georgian-style home in Missouri",
            "D. a three story brick house in Arkansas"
        ],
        [
            "5.Which of the following items was owned by the fewest U.S. homes in 1990?",
            "A. home computer",
            "B. compact disk player",
            "C. cordless phone",
            "D. dishwasher"
        ],
        [
            "6.Who holds the record for the most victories in a row on the professional golf tour?",
            "A. Jack Nicklaus",
            "B. Arnold Palmer",
            "C. Byron Nelson",
            "D. Ben Hogan"
        ],
        [
            "7.Who is third behind Hank Aaron and Babe Ruth in major league career home runs?",
            "A. Reggie Jackson",
            "B. Harmon Killebrew",
            "C. Willie Mays",
            "D. Frank Robinson"
        ],
        [
            "8.In 1990, in what percentage of U.S. married couples did the wife earn more money than the husband?",
            "A. 8",
            "B. 18",
            "C. 38",
            "D. 58"
        ]
        
    ];
    
    
    var playGround = $("#play-ground");
    var questionArea = $("#question-area");
    var correctAnswers=0;
var incorrectAnswers=0;
var unAnswered=0;


var startButton=$("<button>");
startButton.attr("class","btn btn-primary");
startButton.attr("id","start");
startButton.text("start");
playGround.append(startButton);

startButton.on("click",function(){

    
    var timer1=$("<h4>");
    var time = 30;
    var questionNumber=0;
    var intervalId;
    playGround.empty();
    timer1.html("The remaining time: "+time+" seconds!");
    playGround.append(timer1);
    
    var buttonGroup = $("<div>");
    buttonGroup.attr("class","btn-group-vertical");
    buttonGroup.attr("id","button-group");
    questionArea.append(buttonGroup);
    
    function initialization(){
        time = 5;
        for(var i=0;i<questions[questionNumber].length;i++){
            var questionButton=$("<div>");
            questionButton.attr("class","btn btn-outline-secondary");
            questionButton.attr("id","question"+i);
            questionButton.text(questions[questionNumber][i]);
            $("#button-group").append(questionButton);
            
        }
        intervalId = setInterval(run, 1000);
    }
    function gameOver(){
        clearInterval(intervalId);
        
    }
    function nextQuestion(){
        if(questionNumber<questions.length)
            {questionNumber++;
            unAnswered++;
            initialization();
        }
        else
        {
            gameOver();
        }
    }
    initialization();
    
    
    function run(){
        time--;
        timer1.html("The remaining time: "+time+" seconds!");
        playGround.append(timer1);
        if(time===0){
            clearInterval(intervalId);
            questionArea.empty();
            var timeOut = $('<h4 id = "time-out">');
            timeOut.text("Out Of Time!!");
            questionArea.append(timeOut);
            var imageTimeOut = $('<img id="time-out">');
            imageTimeOut.attr('src','./assets/images/correct.jpg');
            imageTimeOut.attr('width','500px');
            questionArea.append(imageTimeOut);
            setTimeout(nextQuestion,2000);
            
        }
    }
    function unAnswerQuestion(){
        unAnswerQuestion++;
    }
    
    

    $("#question1").on("click",function(){
        questionArea.empty();
        var correct = $("<h4>");
            correct.text("Correct!!");
            questionArea.append(correct);
            var imageCorrect = $('<img id="correct">');
            imageCorrect.attr('src','./assets/images/correct.jpg');
            imageCorrect.attr('width','500px');
            
            questionArea.append(imageCorrect);
            clearInterval(intervalId);
        })
        
        // C. John and Mary
        // C. in the 19th century, when it became a symbol of the abolition of slavery
        // A. Buttermilk
        // C. a four-story Georgian-style home in Missouri
        // B. compact disk player
        // C. Byron Nelson
        // C. Willie Mays
        // B. 18
        
   
        
        

})



   











})
