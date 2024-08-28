const question1 = "Which of these meals sounds the most appetizing?";
const answers1 = [
    "A chicken caesar salad",
    "Ramen with chashu pork",
    "Mashed potatoes with extra butter",
    "Flesh"
];

const question2 = "Which of these would you most want to loot?";
const answers2 = [
    "A long-forgotten holy book",
    "A scroll detailing an ancient and powerful spell",
    "The ring that you gave to your one true love",
    "A big pile of gold coins"
];

const question3 = "How tall are you?";
const answers3 = [
    "5ft to 6ft",
    "6ft or taller",
    "Less than 4ft",
    "between 3 and 4 feet tall and weigh between 40 and 80 pounds. Your size is Small."
];

const question = [question1, question2, question3];
const answer = [answers1, answers2, answers3];

let questionNumber = -1;
let goblinScore = 0;


function changeQuestionAndAnswerText() {
    document.querySelector("#question").innerHTML = question[questionNumber];
    document.querySelector("#answer-1").innerHTML = answer[questionNumber][0];
    document.querySelector("#answer-2").innerHTML = answer[questionNumber][1];
    document.querySelector("#answer-3").innerHTML = answer[questionNumber][2];
    document.querySelector("#answer-4").innerHTML = answer[questionNumber][3];
}

$("#answer-4").on("click", function() {
    goblinScore++;
})

function displayAnswerPage() {
    $("#answer-container-parent").addClass("hidden");
    
    switch (goblinScore) {
        case 0:
            $("h1").text("Sorry, you're a human");
            $("#result-body-0").removeClass("hidden");
            break;

        case 1:
            $("h1").text("You're a human, but a little sloppy");
            $("#result-body-1").removeClass("hidden");
            break;

        case 2:
            $("h1").text("Maybe you're a goblin?");
            $("#result-body-2").removeClass("hidden");
            break;

        case 3:
            $("h1").text("CONGRATS: YOU'RE A GOBBO");
            $("#result-body-3").removeClass("hidden");
            break;
    }
}

$("#start-button").on("click", function() {
    $("div").removeClass("hidden");
    $("#start-button").addClass("hidden");
    questionNumber++;
    changeQuestionAndAnswerText();
})

$("#answer-container div").on("click", function() { 
    questionNumber++;
    if (questionNumber === 3) {
        displayAnswerPage();
    } else {
        changeQuestionAndAnswerText();
    }
})

//change class of button when it is clicked to make it look like it is being clicked - add class then set timeout to remove it?