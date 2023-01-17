var questionGoesHere = document.querySelector("#quiz-question");
var optionsForAnswers = document.querySelector("#ans-option");
var quizQuestions = [

{
    question: "what is an object?",
    answers: [
        "a collectoin of attributes",
        "a function",
        "an integer",
        "all of the above",
    ],
    correctAnswer: 'ans0'

  },

  {
    question: "what is a funtion?",
    answers: [
        "a myth",
        "a legend",
         "reusable code",
         "all of the above",
],
    correctAnswer: 'ans3'

  },];
var timerEl = document.querySelector('#countDown');
var answerEl = document.querySelector('#ans-option');
var startButton = document.querySelector('#start-button');
var currentQ = 0;

function initGame () {
  countdown();
  renderQuestion();
}

function endGame () {
  questionGoesHere.textContent = '';
  optionsForAnswers.innerHTML = '';
  document.querySelector('h1').textContent="YOU WIN";
}

function renderQuestion() {
  questionGoesHere.textContent = '';
  optionsForAnswers.innerHTML = '';
  questionGoesHere.textContent = quizQuestions[currentQ].question;

 for (i=0; i<4;i++) {
    var choice = document.createElement("div");
    choice.textContent= quizQuestions[currentQ].answers[i];
    choice.setAttribute("style" , "font-weight: bold");
    choice.setAttribute("id" , "ans"+i);
    optionsForAnswers.appendChild(choice);

 }
   
}


function countdown() {
  var timeLeft = 75;
  var timeInterval = setInterval(function () {
   
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft;
      timeLeft--;
    } else {
      timerEl.textContent = '';
      clearInterval(timeInterval);
      // Add Modal for Game Over
      displayMessage();
    }
  }, 1000);
}

answerEl.addEventListener("click", function(event) {
  var clicked = event.target;
  if (clicked.id == quizQuestions[currentQ].correctAnswer){
    console.log("yes")
    currentQ++;
    if (currentQ == quizQuestions.length) {
      endGame();
    }else {
    renderQuestion();
    }
  }

})

startButton.addEventListener("click", initGame);
