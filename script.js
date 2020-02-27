var startButton = document.querySelector("#start-btn");
var nextButton = document.querySelector("#next-btn");
var questionTextArea = document.querySelector(".question-area");
var answerOneButton = document.querySelector(".answer-one");
var answerTwoButton = document.querySelector(".answer-two");
var answerThreeButton = document.querySelector(".answer-three");
var answerFourButton = document.querySelector(".answer-four");
// var allAnswerButtons = document.querySelector(".btn-answer");

console.log(answerFourButton);
console.log(answerOneButton);

var questionsAnswers = [ 
    { question: "How do you select an item that contains an ID?",
         answers: [ 
            answerOneButton = {"Oakland Raiders": false},
            answerTwoButton = {"Chicago Bears": false}, 
            answerThreeButton = {"San Francisco 49ers": false}, 
            answerFourButton = {"Washington Redskins": true} 
            ]
    }, 

    { question: "How do you select an item that contains an ID?",
         answers: [ 
            answerOneButton = {"Oakland Raiders": false},
            answerTwoButton = {"Chicago Bears": false}, 
            answerThreeButton = {"San Francisco 49ers": false}, 
            answerFourButton = {"Washington Redskins": true} 
            ]
    }, 

    { question: "How do you select an item that contains an ID?",
         answers: [ 
            answerOneButton = {"Oakland Raiders": false},
            answerTwoButton = {"Chicago Bears": false}, 
            answerThreeButton = {"San Francisco 49ers": false}, 
            answerFourButton = {"Washington Redskins": true} 
            ]
    }, 

    { question: "How do you select an item that contains an ID?",
         answers: [ 
            answerOneButton = {"Oakland Raiders": false},
            answerTwoButton = {"Chicago Bears": false}, 
            answerThreeButton = {"San Francisco 49ers": false}, 
            answerFourButton = {"Washington Redskins": true} 
            ]
    }, 

    { question: "How do you select an item that contains an ID?",
         answers: [ 
            answerOneButton = {"Oakland Raiders": false},
            answerTwoButton = {"Chicago Bears": false}, 
            answerThreeButton = {"San Francisco 49ers": false}, 
            answerFourButton = {"Washington Redskins": true} 
            ]
    }, 

    { question: "How do you select an item that contains an ID?",
         answers: [ 
            answerOneButton = {"Oakland Raiders": false},
            answerTwoButton = {"Chicago Bears": false}, 
            answerThreeButton = {"San Francisco 49ers": false}, 
            answerFourButton = {"Washington Redskins": true} 
            ]
    }, 

    { question: "How do you select an item that contains an ID?",
         answers: [ 
            answerOneButton = {"Oakland Raiders": false},
            answerTwoButton = {"Chicago Bears": false}, 
            answerThreeButton = {"San Francisco 49ers": false}, 
            answerFourButton = {"Washington Redskins": true} 
            ]
    }, 

    { question: "How do you select an item that contains an ID?",
         answers: [ 
            answerOneButton = {"Oakland Raiders": false},
            answerTwoButton = {"Chicago Bears": false}, 
            answerThreeButton = {"San Francisco 49ers": false}, 
            answerFourButton = {"Washington Redskins": true} 
            ]
    }, 

    { question: "How do you select an item that contains an ID?",
         answers: [ 
            answerOneButton = {"Oakland Raiders": false},
            answerTwoButton = {"Chicago Bears": false}, 
            answerThreeButton = {"San Francisco 49ers": false}, 
            answerFourButton = {"Washington Redskins": true} 
            ]
    }, 

    { question: "How do you select an item that contains an ID?",
         answers: [ 
            answerOneButton = {"Oakland Raiders": false},
            answerTwoButton = {"Chicago Bears": false}, 
            answerThreeButton = {"San Francisco 49ers": false}, 
            answerFourButton = {"Washington Redskins": true} 
            ]
    }];

var score = 0;
var highScore = 0;
var highScoreInitials = "";
var currentQuestion = 0;

startButton.addEventListener("click", startGame);

function startGame() {
    startButton.style.display = "none";
    var questionCurrent = questionsAnswers[0].question;
    questionTextArea.innerHTML = "<p>" + questionCurrent + "<p>";
};

nextButton.addEventListener("click", nextButton);

function nextButton() {

}

// allAnswerButtons.addEventListener("click", selectAnswer);
// use this to get all buttons, attributes, and data.

function selectAnswer() {
    if (answerOneButton === false) {
        answerIsWrong();
    } else {
        score++;
        answerIsCorrect();
    }
    if (answerTwoButton === false) {
        answerIsWrong();
    } else {
        score++;
        answerIsCorrect();
    }
    if (answerThreeButton === false) {
        answerIsWrong();
    } else {
        score++;
        answerIsCorrect();
    }
    if (answerFourButton === false) {
        answerIsWrong();
    } else {
        score++;
        answerIsCorrect();
    }
}

function answerIsCorrect(){
    answerIsCorrect.style.backgroundColor = "#0f0";
}

function answerIsWrong(){
    answerIsWrong.style.backgroundColor = "#f00";
}

