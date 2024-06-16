'use strict';
const newGame = document.querySelector('.btn--new');
let scores = document.querySelector('.score');
const namePlayer = document.querySelectorAll('.name');
// const currentScore = document.querySelectorAll('.current-score');
const rolledDice = document.querySelector('.dice');
const rollDice = document.querySelector('.btn--roll');
const holdScore = document.querySelector('.btn--hold');
let currentScorePlayer0 = document.getElementById('current--0');
let currentScorePlayer1 = document.getElementById('current--1');
const scorePlayer0 = document.getElementById('score--0');
const scorePlayer1 = document.getElementById('score--1');
const players = document.querySelector('.player');
const activeplaying = document.querySelector('.player--active');
const player1 = document.querySelector('.player--1');
const player0 = document.querySelector('.player--0');

// Initialize current scores for both players
let score, currentScore, activePlayer, playing;
function defaultGame() {
  score = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  scorePlayer0.textContent = 0;
  scorePlayer1.textContent = 0;
  currentScorePlayer0.textContent = 0;
  currentScorePlayer1.textContent = 0;

 

  rolledDice.classList.add('hidden');
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
}
defaultGame();

function switchPlayer() {
  // Switch player
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
}

// Roll dice functionalty
rollDice.addEventListener('click', function () {
 if (playing){
   // Randomly generate dice
   let randomDice = Math.floor(Math.random() * 6) + 1;
   console.log(randomDice);
   // Display Dice
   rolledDice.classList.remove('hidden');
   rolledDice.src = `dice-${randomDice}.png`;
 
   if (randomDice !== 1) {
     currentScore += randomDice;
     document.getElementById(`current--${activePlayer}`).textContent =
       currentScore;
   } else {
     switchPlayer();
   }
 }
});

holdScore.addEventListener('click', function () {
  if(playing){
    score[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    score[activePlayer];
  // document.getElementById(`current--${activePlayer}`).textContent = 0;

  if (score[activePlayer] >= 20) {
    // Stop game
    playing = false
    
    rolledDice.classList.add('hidden');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
  } else {
    switchPlayer();
  }
  }
});

// Reset game to default
newGame.addEventListener('click', defaultGame);
