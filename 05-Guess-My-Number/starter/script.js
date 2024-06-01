'use strict';

const Message = document.querySelector('.message');
let GuessNum = Math.floor(Math.random() * 20) + 1;
let highScore = document.querySelector('.highscore').textContent
console.log(typeof highScore)
let score = 20

const checkMatch = () => {
    const Guess = Number(document.querySelector('.guess').value);
    // console.log(GuessNum)
    // console.log(typeof Guess)
    // console.log(typeof GuessNum)

    // when guess is wrong


    if (Guess === GuessNum) {
        Message.textContent = "Correct!";
        document.querySelector('body').style.backgroundColor = 'green'   //change color of background if correct

        document.querySelector('.number').style.width = '30rem'   //change color of width of number if correct

        document.querySelector('.number').textContent = GuessNum
        
        // Implement high Score
        if (GuessNum > document.querySelector('.highscore').textContent){
            document.querySelector('.highscore').textContent = GuessNum
        }else{
            return document.querySelector('.highscore').textContent
        }
        
        
        
        
    }else if (Guess > GuessNum) {
        if(document.querySelector('.score').textContent > 1){
            Message.textContent = "Too High!";
            document.querySelector('.score').textContent -= 1
        }else{
            document.querySelector('.score').textContent = "0"
            Message.textContent = "Game Over!"
        }

        // Message.textContent = "Too high!";
        // document.querySelector('.score').textContent -= 1
        
        // if (document.querySelector('.score').textContent == 0){
        //     Message.textContent = "Game Over!"
        // }
    } else if (Guess < GuessNum) {
        if(document.querySelector('.score').textContent > 1){
            Message.textContent = "Too low!";
            document.querySelector('.score').textContent -= 1
        }else{
            document.querySelector('.score').textContent = "0"
            Message.textContent = "Game Over!"
        }
        

        // if (document.querySelector('.score').textContent == 0){
            
        // }

        // when guess is correct
    } 
};

document.querySelector('.check').addEventListener('click', checkMatch);

const Again = () => {
    document.querySelector('body').style.backgroundColor = '#222' //revert to old color
    document.querySelector('.number').style.width = '15rem' //revert to old width of number
    GuessNum = Math.floor(Math.random() * 20) + 1;

    document.querySelector('.guess').value = ' ';
    // GuessNum.textContent = "?"
    document.querySelector('.number').textContent = '?'
    document.querySelector('.message').textContent = 'Start guessing...';

    document.querySelector('.score').textContent = "20"

};

document.querySelector('.again').addEventListener('click', Again);