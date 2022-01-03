"use strict";
// generate a random number between 1 and 20
let lives = 20;
let randomNumber = Math.floor(Math.random() * 20) + 1;
const playerName = prompt("What is your name?");
document.querySelector(".playername").textContent = "Player " + playerName;

const checkButton = document.querySelector(".btn").addEventListener("click", function () {
    const userInput = Number(document.querySelector(".input-text").value);
    document.querySelector(".lives").textContent = lives;

    if (userInput === randomNumber) {
        document.querySelector("body").style.backgroundColor = "green";
        document.querySelector(".result").textContent = "You win!";
        document.querySelector(".secretnumber").textContent = randomNumber;
        document.querySelector(".high-score").textContent = lives;
        const hs = lives;
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
const newGame = document.querySelector(".newgame").addEventListener("click", function () {
    lives = 20;
    randomNumber = Math.floor(Math.random() * 20) + 1;
    document.querySelector("body").style.backgroundColor = "black";
    document.querySelector(".input-text").value = "";
    document.querySelector(".result").textContent = "Start Game";
    document.querySelector(".secretnumber").textContent = "?";
    document.querySelector(".lives").textContent = 20;
    document.querySelector(".playername").textContent = "Player " + playerName;
    document.querySelector(".high-score").textContent = hs;

});
