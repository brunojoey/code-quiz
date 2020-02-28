var startButton = document.querySelector("#start-btn");
var nextButton = document.querySelector("#next-btn");
var questionTextArea = document.querySelector(".question-area");
var answerOneButton = document.querySelector(".answer-one");
var answerTwoButton = document.querySelector(".answer-two");
var answerThreeButton = document.querySelector(".answer-three");
var answerFourButton = document.querySelector(".answer-four");
var allAnswerButtons = document.querySelector(".btn-answer");
var score = 0;
var highScore = 0;
var highScoreInitials = "";
var currentQuestion = 0;
nextButton.style.display = "none";
var answers = document.getElementById("answers-area");
var timeEl = document.querySelector(".time-left");

var questions = [ 
    { 
        question: "How do you select an item that contains an ID?",
        answers: [ 
            {label: "Oakland Raiders", value: false},
            {label: "Chicago Bears", value: false}, 
            {label: "San Francisco 49ers", value: false}, 
            {label: "Washington Redskins", value: true},
        ]
    },
    { 
        question: "How do you select an item that contains an ID?",
        answers: [ 
            {label: "Oakland Raiders", value: false},
            {label: "Chicago Bears", value: false}, 
            {label: "San Francisco 49ers", value: false}, 
            {label: "Washington Redskins", value: true},
        ]
    },
    { 
        question: "How do you select an item that contains an ID?",
        answers: [ 
            {label: "Oakland Raiders", value: false},
            {label: "Chicago Bears", value: false}, 
            {label: "San Francisco 49ers", value: false}, 
            {label: "Washington Redskins", value: true},
        ]
    },
    { 
        question: "How do you select an item that contains an ID?",
        answers: [ 
            {label: "Oakland Raiders", value: false},
            {label: "Chicago Bears", value: false}, 
            {label: "San Francisco 49ers", value: false}, 
            {label: "Washington Redskins", value: true},
        ]
    },
    { 
        question: "How do you select an item that contains an ID?",
        answers: [ 
            {label: "Oakland Raiders", value: false},
            {label: "Chicago Bears", value: false}, 
            {label: "San Francisco 49ers", value: false}, 
            {label: "Washington Redskins", value: true},
        ]
    },
    { 
        question: "How do you select an item that contains an ID?",
        answers: [ 
            {label: "Oakland Raiders", value: false},
            {label: "Chicago Bears", value: false}, 
            {label: "San Francisco 49ers", value: false}, 
            {label: "Washington Redskins", value: true},
        ]
    },
    { 
        question: "How do you select an item that contains an ID?",
        answers: [ 
            {label: "Oakland Raiders", value: false},
            {label: "Chicago Bears", value: false}, 
            {label: "San Francisco 49ers", value: false}, 
            {label: "Washington Redskins", value: true},
        ]
    },
    { 
        question: "How do you select an item that contains an ID?",
        answers: [ 
            {label: "Oakland Raiders", value: false},
            {label: "Chicago Bears", value: false}, 
            {label: "San Francisco 49ers", value: false}, 
            {label: "Washington Redskins", value: true},
        ]
    },
    { 
        question: "How do you select an item that contains an ID?",
        answers: [ 
            {label: "Oakland Raiders", value: false},
            {label: "Chicago Bears", value: false}, 
            {label: "San Francisco 49ers", value: false}, 
            {label: "Washington Redskins", value: true},
        ]
    },
    { 
        question: "How do you select an item that contains an ID?",
        answers: [ 
            {label: "Oakland Raiders", value: false},
            {label: "Chicago Bears", value: false}, 
            {label: "San Francisco 49ers", value: false}, 
            {label: "Washington Redskins", value: true},
        ]
    }];

startButton.addEventListener("click", startGame);

function startGame() {
    setTime();
    startButton.style.display = "none";
    nextButton.style.display = "block";
    var questionCurrent = questions[0].question;
    questions[0].answers.forEach(function(answer) {
        var button = document.createElement("button");
        button.textContent = answer.label;
        button.setAttribute("data-value", answer.value);
        answers.appendChild(button);
    });
    questionTextArea.innerHTML = "<p>" + questionCurrent + "<p>";
};

nextButton.addEventListener("click", nextQuestion);

function nextQuestion() {
    
}

function setTime() {
  var timerInterval = setInterval(function() {
    var secondsLeft = 120;
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }

  }, 1000);
}

function sendMessage() {
    
}


answers.addEventListener("click", selectAnswer);

function selectAnswer(event) {
    if (event.target.matches("button")) {
        var selectedAnswer = event.target.getAttribute("data-value");
        if (selectedAnswer === "true") {
            score++;
            secondsLeft--;
            answerIsCorrect();
            console.log("You're right!");
        } else {
            answerIsWrong();
        }
    }
}

function answerIsCorrect(){
    questionTextArea.style.backgroundColor = "#0f0";
}

function answerIsWrong(){
    questionTextArea.style.backgroundColor = "#f00";
}
setTime();

