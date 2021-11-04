//Random Numbers
let randomnum1 = Math.floor(Math.random() * 12);
let randomnum2 = Math.floor(Math.random() * 12);


//Get Answers
answer1 = document.querySelector(".answer1")
answer2 = document.querySelector(".answer2")
answer3 = document.querySelector(".answer3")

//Number for Equation
num1 = document.querySelector('.number1')
num2 = document.querySelector('.number2')


function makeEquation() {
    //Numbers for equation
    let randomnum1 = Math.floor(Math.random() * 12);
    let randomnum2 = Math.floor(Math.random() * 12);
    num1.innerHTML = randomnum1;
    num2.innerHTML = randomnum2;

    //Potential Answers
    answer = eval(randomnum1 + randomnum2)
    wrongAnswer1 = Math.floor(Math.random() * 12)
    wrongAnswer2 = Math.floor(Math.random() * 12)

    allAnswers = [answer, wrongAnswer1, wrongAnswer2]
    switchAnswers = []


    for (i = allAnswers.length; i--;) {
        switchAnswers.push(allAnswers.splice(Math.floor(Math.random() * (i + 1)), 1)[0]);
    };

    answer1.innerHTML = switchAnswers[0];
    answer2.innerHTML = switchAnswers[1];
    answer3.innerHTML = switchAnswers[2];

};

//Button Starter
const newProblem = document.querySelector('.newProblem')

//Add Event Listener
newProblem.addEventListener('click', makeEquation); {

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




//match answer

var getModal = document.querySelector(".modal")
var span = document.querySelector(".close")

wrongMessage = document.querySelector(".wrongMessage")






answer1.addEventListener('click', function() {
    if (answer1.innerHTML == answer) {
        makeEquation();
        scoreClick();
    } else {
        getModal.style.display = "block";
        resetScore();
    }
});

answer2.addEventListener('click', function() {
    if (answer2.innerHTML == answer) {
        makeEquation();
        scoreClick();
    } else {
        getModal.style.display = "block";
        resetScore();
    }
});

answer3.addEventListener('click', function() {
    if (answer3.innerHTML == answer) {
        makeEquation();
        scoreClick();
    } else {
        getModal.style.display = "block";
        resetScore();
    }
});

span.onclick = function() {
    getModal.style.display = "none";
}