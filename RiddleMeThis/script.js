import { riddles } from './riddles.js';

let score = 0;
let timerId;
let timeLeft = 10;
let answeringAllowed = true;
let unansweredRiddles = [...riddles]; // Clone the riddles array to track unanswered riddles

document.getElementById('start-button').onclick = function() {
    this.style.display = 'none';
    document.querySelector('.score').style.display = '';
    document.getElementById('timer').style.display = '';
    document.getElementById('back-button').style.display = '';
    startGame();
};

document.getElementById('back-button').onclick = function() {
    location.reload();
};

function startGame() {
    shuffleUnansweredRiddles(); // Ensure riddles are shuffled at the start
    showNextRiddle();
    startTimer();
}

function shuffleUnansweredRiddles() {
    unansweredRiddles.sort(() => Math.random() - 0.5);
}

function displayRiddle(riddle) {
    document.getElementById('riddle-question').textContent = riddle.question;
    document.querySelector('.riddle').style.display = '';

    const choicesList = document.getElementById('riddle-choices');
    choicesList.innerHTML = '';
    choicesList.style.display = '';

    riddle.choices.forEach(choice => {
        const li = document.createElement('li');
        li.textContent = choice;
        li.onclick = () => {
            if (answeringAllowed) {
                clearInterval(timerId);
                checkAnswer(choice, riddle.answer, li);
                answeringAllowed = false;
            }
        };
        choicesList.appendChild(li);
    });

    const circle = document.getElementById('timer-circle');
    circle.style.transition = 'stroke-dashoffset 0.01s linear'; // Quick transition
    circle.style.strokeDashoffset = '0'; // Reset the timer visually to full instantly
    answeringAllowed = true;
}




function startTimer() {
    clearInterval(timerId);
    timeLeft = 10; // Total countdown time in seconds

    const circle = document.getElementById('timer-circle');
    circle.style.transition = 'stroke-dashoffset 1s linear'; // Reset to normal transition for countdown
    circle.style.strokeDashoffset = '0'; // Start with a full circle visually

    const timerText = document.getElementById('timer-text');
    timerText.textContent = timeLeft.toString();

    document.getElementById('timer').style.display = '';

    timerId = setInterval(() => {
        timeLeft -= 1;
        timerText.textContent = timeLeft.toString();

        const offset = 251.2 * ((10 - timeLeft) / 10 + 0.08);
        circle.style.strokeDashoffset = offset.toString();

        if (timeLeft <= 0) {
            clearInterval(timerId);
            showNextRiddle();
        }
    }, 1000);
}


function checkAnswer(choice, correctAnswer, selectedLi) {
    if (choice === correctAnswer) {
        score++;
        selectedLi.style.backgroundColor = '#32c292';
    } else {
        score--;
        selectedLi.style.backgroundColor = '#F72585';
    }

    if (score < 0) {
        score = 0;
    }

    document.getElementById('score').textContent = score;
    clearInterval(timerId);

    setTimeout(showNextRiddle, 1000);
}

function showNextRiddle() {
    if (unansweredRiddles.length === 0) {
        alert('You have answered all the riddles!');
        location.reload(); // Restart the game or implement game over logic
        return;
    }

    // Select the next riddle randomly from the remaining unanswered riddles
    let riddleIndex = Math.floor(Math.random() * unansweredRiddles.length);
    let riddle = unansweredRiddles.splice(riddleIndex, 1)[0]; // Remove the selected riddle from the pool

    displayRiddle(riddle);
    startTimer();
}
