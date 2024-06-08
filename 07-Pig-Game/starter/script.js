// 'use strict';
//  const newGame = document.querySelector('.btn--new')
//  const score = document.querySelectorAll('.score')
//  const currentScore = document.querySelectorAll('.current-score')
//  const rollingDice = document.querySelector('.dice')
//  const rollDice = document.querySelector('.btn--roll')
//  const activePlayer = document.querySelector('.player--active')
//  const holdScore = document.querySelector('.btn--hold')
//  const holdScorePlayer1 = document.getElementById('current--0')
//  const player = document.querySelectorAll('.player')

// let currentScorePlayer1 = 0;
// let currentScorePlayer2 = 0;

//  function scoreToHold (){
//     if(activePlayer){
//         holdScore.addEventListener
//     }
//  }
// // FUNCTION TO RESET GAME
//  function resetGame(){
//     for (let i = 0; i < score.length && i < currentScore.length; i++){
//         score[i].textContent = 0
//         currentScore[i].textContent = 0
//     }
//     rollingDice.style.display = 'none'

//         currentScorePlayer1 = 0;
//         currentScorePlayer2 = 0;

//     // console.log('I am clicked')
//  }newGame.addEventListener('click', resetGame)

//  //  newGame.addEventListener('click', function resetGame(){
// //     for (let i = 0; i < score.length && i < currentScore.length; i++){
// //         score[i].textContent = '0'
// //         currentScore[i].textContent = '0'
// //     }
// //     rollingDice.style.display = 'none'
// //  })

 
// // ROLL DICE
// const diceArr = ['./dice-1.png', './dice-2.png', './dice-3.png', './dice-4.png', './dice-5.png', './dice-6.png']

// rollDice.addEventListener('click', function(){
//     //SHOW RANDOM DICE
//     function randomArray(arr){
//         const randomDice = Math.floor(Math.random() * arr.length)
//         console.log(randomDice + 1)
//         return arr[randomDice]
//     }
//     const newArr = randomArray(diceArr)
//     console.log(newArr)

    
//     rollingDice.style.display = 'block'     //Display rolled dice
//     rollingDice.src = newArr
//     let randomDice = diceArr.indexOf(newArr) + 1; // Get the dice number from the array
//     let currentScorePlayer1 = 0
//     if (activePlayer.classList.contains('player--0')) {
//                 currentScorePlayer1 += randomDice;
//                 holdScorePlayer1.textContent = currentScorePlayer1;
//             } else {
//                 currentScorePlayer2 += randomDice;
//                 holdScorePlayer2.textContent = currentScorePlayer2;
//             }
  
    
    
// })
    

'use strict';
const newGame = document.querySelector('.btn--new');
const score = document.querySelectorAll('.score');
const currentScore = document.querySelectorAll('.current-score');
const rollingDice = document.querySelector('.dice');
const rollDice = document.querySelector('.btn--roll');
const holdScore = document.querySelector('.btn--hold');
const holdScorePlayer1 = document.getElementById('current--0');
const holdScorePlayer2 = document.getElementById('current--1');
const players = document.querySelectorAll('.player');

// Initialize current scores for both players
let currentScorePlayer1 = 0;
let currentScorePlayer2 = 0;

// Function to reset the game
function resetGame() {
    for (let i = 0; i < score.length && i < currentScore.length; i++) {
        score[i].textContent = 0;
        currentScore[i].textContent = 0;
    }
    rollingDice.style.display = 'none';
    currentScorePlayer1 = 0;
    currentScorePlayer2 = 0;
}
newGame.addEventListener('click', resetGame);

// Roll Dice
const diceArr = ['./dice-1.png', './dice-2.png', './dice-3.png', './dice-4.png', './dice-5.png', './dice-6.png'];

rollDice.addEventListener('click', function () {
    // Function to get a random dice image from the array
    function randomArray(arr) {
        const randomDiceIndex = Math.floor(Math.random() * arr.length);
        console.log(randomDiceIndex + 1);
        return arr[randomDiceIndex];
    }

    const newArr = randomArray(diceArr);
    console.log(newArr);

    // Display rolled dice
    rollingDice.style.display = 'block';
    rollingDice.src = newArr;

    // Get the dice number from the array
    let randomDice = diceArr.indexOf(newArr) + 1;

    // Dynamically get the current active player
    const activePlayer = document.querySelector('.player--active');

    // Update the current score of the active player
    if (activePlayer.classList.contains('player--0')) {
        currentScorePlayer1 += randomDice;
        holdScorePlayer1.textContent = currentScorePlayer1;
    } else {
        currentScorePlayer2 += randomDice;
        holdScorePlayer2.textContent = currentScorePlayer2;
    }
});
