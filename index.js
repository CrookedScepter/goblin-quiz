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
    "between 3 and 4 feet tall and weigh between 40 and 80 pounds. Your size is Small.",
    "Less than 4ft"
];

const question = [question1, question2, question3];
const answer = [answers1, answers2, answers3];

let questionNumber = -1;


function changeQuestionAndAnswerText() {
    document.querySelector("#question").innerHTML = question[questionNumber];
    document.querySelector("#answer-1").innerHTML = answer[questionNumber][0];
    document.querySelector("#answer-2").innerHTML = answer[questionNumber][1];
    document.querySelector("#answer-3").innerHTML = answer[questionNumber][2];
    document.querySelector("#answer-4").innerHTML = answer[questionNumber][3];
}

function displayAnswerPage() {
    if (questionNumber === 3) {
        alert("answer time!")
    }
}

document.querySelector("#refresh-answers-button"),addEventListener("click", function() {
    questionNumber++;
    if (questionNumber === 3) {
        displayAnswerPage();
    } else {
        changeQuestionAndAnswerText();
    }
})

//still need to add a system for rewarding points based on answers. this will inform the results on the end screen