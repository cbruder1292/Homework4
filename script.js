var timeEl = document.querySelector(".time");
var startQuiz = document.getElementById("startTimer");
var secondsLeft = 100;
var questNum = 1;
var stopTime = 0;
//This section is for the timer
function sendMessage() {
  timeEl.textContent = "Quiz Over! ";
}

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " Seconds left for quiz!";

    if(secondsLeft <=0) {
      clearInterval(timerInterval);
      sendMessage();
    }

  }, 1000);
}
startQuiz.addEventListener("click", function(){
document.getElementById("q1").classList.remove("blank");
  
    setTime();
});
//This is the end of the timer

//This is all for the wrong answer
var wrongAnswer = document.querySelectorAll(".wrong");
for (var i = 0; i < wrongAnswer.length; i++){
    wrongAnswer[i].addEventListener("click", function(){
        secondsLeft=secondsLeft-10;
        if(secondsLeft <=0){
            sendMessage();
        }
    });
}
//This is the end of wrong anser section

//This whole section is for a correct answer
var rightAnswer = document.querySelectorAll(".right");
for (var j = 0; j < rightAnswer.length; j++){
    rightAnswer[j].addEventListener("click", function(){
        var questId = "q" + questNum;
        var questElement = document.getElementById(questId);
        questElement.classList.add("blank");
        if (questNum === 5) {
          document.getElementById(name);
        var formdiv = document.getElementById("name")
        formdiv.classList.remove("initial");
        stopTime = secondsLeft;
        document.getElementById("score").textContent = "Your score is:" + stopTime;
         }
        questNum++;
        var nextQuestId = "q" + questNum;
        var nextQuestElement =document.getElementById(nextQuestId);
        nextQuestElement.classList.remove("blank");
        

});

}
//End of correct answer section