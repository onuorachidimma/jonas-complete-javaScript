'use strict';

const Message = document.querySelector('.message');
let GuessNum = Math.floor(Math.random() * 20) + 1;

const checkMatch = () => {
    const Guess = Number(document.querySelector('.guess').value);
    console.log(GuessNum)
    console.log(typeof Guess)
    console.log(typeof GuessNum)
    if (Guess > GuessNum) {
        Message.textContent = "Too high!";
    } else if (Guess < GuessNum) {
        Message.textContent = "Too low!";
    } else if (Guess === GuessNum) {
        Message.textContent = "Correct!";
        document.querySelector('.number').textContent = GuessNum;
    }
};

document.querySelector('.check').addEventListener('click', checkMatch);