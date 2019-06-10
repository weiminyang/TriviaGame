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
    
    
    
    function initialization(){
        time = 5;
        questionArea.empty();
        clearInterval(intervalId);
        var buttonGroup = $("<div>");
        buttonGroup.attr("class","btn-group-vertical");
        buttonGroup.attr("id","button-group");
        questionArea.append(buttonGroup);
        for(var i=0;i<questions[questionNumber].length;i++){
            var questionButton=$("<button>");
            questionButton.attr("class","btn btn-outline-secondary");
            questionButton.attr("id","question"+i);
            questionButton.text(questions[questionNumber][i]);
            $("#button-group").append(questionButton);
            
        }
        intervalId =setInterval(run, 1000);
    }
    function gameOver(){
        clearInterval(intervalId);
        questionArea.empty();
        var overText = $('<h4 id="overtext">');
        overText.text("All done, here is how you did!");
        var result1 = $('<h4 id="result1">');
        result1.text ('Correct Answer:'+correctAnswers);
        var result2 = $('<h4 id="result2">');
        result2.text ('Incorrect Answer:'+incorrectAnswers);
        var result3 = $('<h4 id="result3">');
        result3.text ('Unanswered:'+unAnswered);
        var startOver = $("<button>");
        console.log(correctAnswers);
        console.log(incorrectAnswers);
        console.log(unAnswered);
        startOver.attr("class","btn btn-primary");
        startOver.attr("id","start-over");
        startOver.text("Start Over?");
        questionArea.append(overText);
        questionArea.append(result1);
        questionArea.append(result2);
        questionArea.append(result3);
        questionArea.append(startOver);
        $("#start-over").on("click",function(){
            questionNumber=0;
            initialization();
        })
    }
    function nextQuestion(){
        if(questionNumber<questions.length)
            {
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
            imageTimeOut.attr('src','./assets/images/time-out.jpg');
            imageTimeOut.attr('width','500px');
            questionArea.append(imageTimeOut);
            questionNumber++;
            unAnswered++;
            setTimeout(nextQuestion,2000);
            
        }
        choose();
        
    }
   function uncoverAnswer(){
    var uncovered;
    if(questionNumber===0||questionNumber===1||questionNumber===3||questionNumber===5||questionNumber===6){
        uncovered="C";
    }
    else if(questionNumber===2){
        uncovered="A";
    }
    else if(questionNumber===4||questionNumber===7){
        uncovered="B";
    }
    var uncover = $("<p>");
        uncover.text("The correct answer was:"+uncovered);
        questionArea.append(uncover);
        // C. John and Mary
        // C. in the 19th century, when it became a symbol of the abolition of slavery
        // A. Buttermilk
        // C. a four-story Georgian-style home in Missouri
        // B. compact disk player
        // C. Byron Nelson
        // C. Willie Mays
        // B. 18
   }
    
    function choose(){

    $("#question1").on("click",function(){
        questionArea.empty();
        clearInterval(intervalId);
        if(questionNumber===2){
            var correct = $("<h4>");
                correct.text("Correct!!");
                questionArea.append(correct);
                var imageCorrect = $('<img id="correct">');
                imageCorrect.attr('src','./assets/images/correct.jpg');
                imageCorrect.attr('width','500px');
                questionArea.append(imageCorrect);
                questionNumber++;
                correctAnswers++;
        }
        else{
            uncoverAnswer();
            var nope = $("<h4>");
            nope.text("Nope!!");
            questionArea.append(nope);
            var imageNope = $('<img id="correct">');
            imageNope.attr('src','./assets/images/nope.png');
            imageNope.attr('width','500px');
            questionArea.append(imageNope);
            questionNumber++;
            incorrectAnswers++;
        }
        setTimeout(nextQuestion,2000);
        })
    $("#question2").on("click",function(){
        questionArea.empty();
        clearInterval(intervalId);
        if(questionNumber===4||questionNumber===7){
            var correct = $("<h4>");
                correct.text("Correct!!");
                questionArea.append(correct);
                var imageCorrect = $('<img id="correct">');
                imageCorrect.attr('src','./assets/images/correct.jpg');
                imageCorrect.attr('width','500px');
                questionArea.append(imageCorrect);
                questionNumber++;
                correctAnswers++;
        }
        else{
            uncoverAnswer();
            var nope = $("<h4>");
            nope.text("Nope!!");
            questionArea.append(nope);
            var imageNope = $('<img id="correct">');
            imageNope.attr('src','./assets/images/nope.png');
            imageNope.attr('width','500px');
            questionArea.append(imageNope);
            questionNumber++;
            incorrectAnswers++;
        }
        setTimeout(nextQuestion,2000);
        })
    $("#question3").on("click",function(){
        questionArea.empty();
        clearInterval(intervalId);
        if(questionNumber===0||questionNumber===1||questionNumber===3||questionNumber===5||questionNumber===6){
            var correct = $("<h4>");
                correct.text("Correct!!");
                questionArea.append(correct);
                var imageCorrect = $('<img id="correct">');
                imageCorrect.attr('src','./assets/images/correct.jpg');
                imageCorrect.attr('width','500px');
                questionArea.append(imageCorrect);
                questionNumber++;
                correctAnswers++;
        }
        else{
            uncoverAnswer();
            var nope = $("<h4>");
            nope.text("Nope!!");
            questionArea.append(nope);
            var imageNope = $('<img id="correct">');
            imageNope.attr('src','./assets/images/nope.png');
            imageNope.attr('width','500px');
            questionArea.append(imageNope);
            questionNumber++;
            incorrectAnswers++;
        }
        setTimeout(nextQuestion,2000);
        })
    $("#question4").on("click",function(){
        questionArea.empty();
        clearInterval(intervalId);
        var nope = $("<h4>");
            nope.text("Nope!!");
            questionArea.append(nope);
            uncoverAnswer();
            var imageNope = $('<img id="correct">');
            imageNope.attr('src','./assets/images/nope.png');
            imageNope.attr('width','500px');
            questionArea.append(imageNope);
            questionNumber++;
            incorrectAnswers++;
            setTimeout(nextQuestion,2000);
        })
    }
        
        
      
        
   
        
        

})




})
