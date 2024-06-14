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
const players = document.querySelectorAll('.player');
const playing = document.querySelector('.player--active');
const player1 = document.querySelector('.player--1');
const player0 = document.querySelector('.player--0');

// Initialize current scores for both players
scorePlayer0.textContent = 0;
scorePlayer1.textContent = 0;
let score = [0, 0]
let currentScore = 0;
let activePlayer = 0;

function switchPlayer(){
  // Switch player
  document.getElementById(`current--${activePlayer}`).textContent =
  0;
  activePlayer = activePlayer === 0 ? 1 : 0
  document.getElementById(`current--${activePlayer}`).textContent =
    0;
  currentScore = 0
  player0.classList.toggle('player--active')
  player1.classList.toggle('player--active')
}

// const diceArr = ['./dice-1.png', './dice-2.png', './dice-3.png', './dice-4.png', './dice-5.png', './dice-6.png'];

// function switchPlayer() {}
// Roll dice functionalty
rollDice.addEventListener('click', function () {
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
    switchPlayer()
 
  }
});

holdScore.addEventListener('click', function(){
    score[activePlayer] += currentScore
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];
    document.getElementById(`current--${activePlayer}`).textContent = 0
    switchPlayer()
    if (score[activePlayer] >= 20){
        document.getElementById(`player--${activePlayer}`).classList.add('player--winner')
    }
})
