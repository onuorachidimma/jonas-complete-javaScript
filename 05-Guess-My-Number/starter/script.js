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
        document.querySelector('.score').textContent -= 1
    } else if (Guess < GuessNum) {
        Message.textContent = "Too low!";
        document.querySelector('.score').textContent -= 1

        // when guess is correct
    } else if (Guess === GuessNum) {
        Message.textContent = "Correct!";
        document.querySelector('body').style.backgroundColor = 'green'   //change color of background if correct
        document.querySelector('.number').style.width = '30rem'   //change color of width of number if correct
        document.querySelector('.number').textContent = GuessNum
        
        let highScore = document.querySelector('.highscore').textContent = GuessNum
        
        
    }
};

document.querySelector('.check').addEventListener('click', checkMatch);

const Again = () => {
    document.querySelector('body').style.backgroundColor = '#222' //revert to old color
    document.querySelector('.number').style.width = '15rem' //revert to old width of number
    let GuessNum = Math.floor(Math.random() * 20) + 1;

    document.querySelector('.guess').value = ' ';
    // GuessNum.textContent = "?"
    document.querySelector('.number').textContent = '?'
    document.querySelector('.message').textContent = 'Start guessing...';

    // const highScore = document.querySelector('.highscore').textContent = GuessNum
    if(GuessNum > highScore){
        highScore = GuessNum
    }else{
        return highScore
    }
};

document.querySelector('.again').addEventListener('click', Again);