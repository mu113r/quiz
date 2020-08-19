let questions = [{
    question: "What is the baby of a Moth Known as?",
    choices: ["baby", "infant", "kit", "larva"],
    correctAnswer: 3
}, {
    question: "What is the adult of a kid called?",
    choices: ["calf", "doe", "goat", "chick"],
    correctAnswer: 2
}, {
    question: "What is the young of a Bufallo called?",
    choices: ["calf", "baby", "pup", "cow"],
    correctAnswer: 0
}, {
    question: "What a baby Aligator called?",
    choices: ["baby", "gator", "hatchling", "calf"],
    correctAnswer: 2
}, {
    question: "What is a baby Goose called?",
    choices: ["gooser", "gosling", "gup", "pup"],
    correctAnswer: 1
}, {
    question: "What is a baby Hamster called?",
    choices: ["pup", "infant", "chick", "billy"],
    correctAnswer: 0
}, {
    question: "What is a baby Hawk called?",
    choices: ["hawklett", "pup", "larva", "eyas"],
    correctAnswer: 3
}, {
    question: "What is a baby Grasshopper called?",
    choices: ["hopper", "nymph", "stick", "pup"],
    correctAnswer: 1
}, {
    question: "What is a baby Kanguru called?",
    choices: ["kinga", "joey", "calf", "baby"],
    correctAnswer: 1
}, {
    question: "What is a baby Whale called?",
    choices: ["whala", "cub", "grub", "infant"],
    correctAnswer: 1
}, {
    question: "What is a baby Monkey called?",
    choices: ["infant", "baby", "calf", "pup"],
    correctAnswer: 0
}, {
    question: "What is a baby Bear called?",
    choices: ["cub", "baby balu", "young bear", "bearlet"],
    correctAnswer: 0
}];

let currentQuestion = 0;
let correctAnswers = 0;
let quizOver = false;

$(document).ready(function () {
    displayCurrentQuestion();
    $(this).find(".quizMessage").hide();
    $(this).find(".nextButton").on("click", function () {
        if(!quizOver) {
            value = $("input[type='radio']:checked").val();
            if(value == undefined) {
                $(document).find(".quizMessage").text("Please select an answer.");
                $(document).find(".quizMessage").show();
            } else {
                $(document).find(".quizMessage").hide();
                if(value == questions[currentQuestion].correctAnswer) {
                    correctAnswers++;
                }
                currentQuestion++;
                if(currentQuestion < questions.length) {
                    displayCurrentQuestion();
                } else {
                    displayScore();
                    $(document).find(".nextButton").text("Play Again?");
                    quizOver = true;
                }
            }
        } else {
            quizOver = false;
            $(document).find(".nextButton").text("Next Question");
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }
    });
});

function displayCurrentQuestion() {
    console.log("In display current Question");
    let question = questions[currentQuestion].question;
    let questionClass = $(document).find(".quizContainer > .question");
    let choiceList = $(document).find(".choiceList");
    let numChoices = questions[currentQuestion].choices.length;
    $(questionClass).text(question);
    $(choiceList).find("li").remove();
    let choice;
    for(let i = 0;i < numChoices;i++) {
        choice = questions[currentQuestion].choices[i];
        $('<li><input type="radio" value=' + i + ' name="dynradio"/>' + choice + '</li>').appendTo(choiceList);
    }
}

function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}

function displayScore() {
    $(document).find(".result").text("You scored: " + correctAnswers + " out of: " + questions.length);
    $(document).find(".result").show();
}

function hideScore() {
    $(document).find(".result").hide();
}