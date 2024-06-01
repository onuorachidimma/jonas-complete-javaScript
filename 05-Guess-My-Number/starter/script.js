'use strict';

const Message = document.querySelector('.message');
let GuessNum = Math.floor(Math.random() * 20) + 1;
let highScore = document.querySelector('.highscore').textContent
console.log(typeof highScore)
let score = 20

const checkMatch = () => {
    
    const Guess = Number(document.querySelector('.guess').value);
    // WHEN GUESS IS NOT A NUMBER
    if(!Guess){
        document.querySelector('.message').textContent = 'Please input a number!';
    }
    // WHEN GUESS IS CORRECT
    else if (Guess === GuessNum) {
        Message.textContent = "Correct!";
        document.querySelector('body').style.backgroundColor = 'green'   //change color of background if correct
        document.querySelector('.number').style.width = '30rem'   //change color of width of number if correct
        document.querySelector('.number').textContent = GuessNum
        
        // IMPLEMENT HIGH SCORE
        if (document.querySelector('.score').textContent > document.querySelector('.highscore').textContent){
            document.querySelector('.highscore').textContent = document.querySelector('.score').textContent
        }else{
            return document.querySelector('.highscore').textContent
        }
        
    } else{  // WHEN GUESS IS WRONG
        if(document.querySelector('.score').textContent > 1){
            Message.textContent = Guess > GuessNum ? "Too High!" : "Too Low";   //IF GUESS IS GREATER OR LESS THAN GUESSNUM
            document.querySelector('.score').textContent -= 1
        }else{
            document.querySelector('.score').textContent = "0"
            Message.textContent = "Game Over!"
        }
    }
};

document.querySelector('.check').addEventListener('click', checkMatch);

const Again = () => {
    document.querySelector('body').style.backgroundColor = '#222' //revert to old color
    document.querySelector('.number').style.width = '15rem' //revert to old width of number
    GuessNum = Math.floor(Math.random() * 20) + 1;
    document.querySelector('.guess').value = ' ';
    document.querySelector('.number').textContent = '?'
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = "20"
};

document.querySelector('.again').addEventListener('click', Again);