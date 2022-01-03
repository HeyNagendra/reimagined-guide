"use strict";
// generate a random number between 1 and 20
let lives = 20;
const randomNumber = Math.floor(Math.random() * 20) + 1;

const checkButton = document.querySelector(".btn").addEventListener("click", function () {
    const userInput = Number(document.querySelector(".input-text").value);
    document.querySelector(".lives").textContent = lives;

    if (userInput === randomNumber) {
        document.querySelector(".result").textContent = "You win!";
        document.querySelector(".secretnumber").textContent = randomNumber;
        document.querySelector(".high-score").textContent = lives;
    }
    else if (userInput > randomNumber) {
        document.querySelector(".result").textContent = "TOO  HIGH!";
        lives--;

    }
    else if (userInput < randomNumber) {
        document.querySelector(".result").textContent = "TOO LOW!";
        lives--;
    }
});
