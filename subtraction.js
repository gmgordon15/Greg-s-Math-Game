answer = 0
const answerOption1 = document.querySelector(".answer1")
const answerOption2 = document.querySelector(".answer2")
const answerOption3 = document.querySelector(".answer3")

function makeEquation() {
    const randomnum1 = Math.floor(Math.random() * 12);
    const randomnum2 = Math.floor(Math.random() * 12);
    const wrongAnswer1 = Math.floor(Math.random() * 12);
    const wrongAnswer2 = Math.floor(Math.random() * 12);
    allAnswers = [];
    randomizeAnswers = [];


    if (randomnum1 > randomnum2) {
        answer = eval(randomnum1 - randomnum2);
        document.querySelector(".number1").innerHTML = randomnum1;
        document.querySelector(".number2").innerHTML = randomnum2;


    } else {
        answer = eval(randomnum2 - randomnum1);
        document.querySelector(".number1").innerHTML = randomnum2;
        document.querySelector(".number2").innerHTML = randomnum1;
    }

    allAnswers = [answer, wrongAnswer1, wrongAnswer2];
    randomizeAnswers = []

    for (i = allAnswers.length; i--;) {
        randomizeAnswers.push(allAnswers.splice(Math.floor(Math.random() * (i + 1)), 1)[0]);

    };

    answerOption1.innerHTML = randomizeAnswers[0]
    answerOption2.innerHTML = randomizeAnswers[1]
    answerOption3.innerHTML = randomizeAnswers[2]

};

//New Game Button

let newProblemButton = document.querySelector(".newProblem");
newProblemButton.addEventListener("click", makeEquation); {
    console.log("started game")
}

//Scoreboard:
var clicks = 0;

function scoreClick() {
    clicks += 1
    document.querySelector(".score").innerHTML = clicks
}
//Reset Score:
var clicksNothing = 0

function resetScore() {
    clicksNothing = 0
    document.querySelector(".score").innerHTML = clicksNothing
};


answerOption1.addEventListener("click", function() {
    if (answerOption1.innerHTML == answer) {
        makeEquation();
        scoreClick();
    } else {
        getModal.style.display = "block"
        resetScore();
    }
});

answerOption2.addEventListener("click", function() {
    if (answerOption2.innerHTML == answer) {
        makeEquation();
        scoreClick();
    } else {
        getModal.style.display = "block"
        resetScore();
    }
});
answerOption3.addEventListener("click", function() {
    if (answerOption3.innerHTML == answer) {
        makeEquation();
        scoreClick();
    } else {
        getModal.style.display = "block";
        resetScore();
    }
});

var getModal = document.querySelector(".modal")
var span = document.querySelector(".close")

span.onclick = function() {
    getModal.style.display = "none";
};