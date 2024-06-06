'use strict';
 const newGame = document.querySelector('.btn--new')
 const score = document.querySelectorAll('.score')
 const currentScore = document.querySelectorAll('.current-score')
 const rollingDice = document.querySelector('.dice')

// FUNCTION TO RESET GAME
 function resetGame(){
    for (let i = 0; i < score.length && i < currentScore.length; i++){
        score[i].textContent = '0'
        currentScore[i].textContent = '0'
    }
    rollingDice.style.display = 'none'
    // console.log('I am clicked')
 }newGame.addEventListener('click', resetGame)

//  newGame.addEventListener('click', function resetGame(){
//     for (let i = 0; i < score.length && i < currentScore.length; i++){
//         score[i].textContent = '0'
//         currentScore[i].textContent = '0'
//     }
//     rollingDice.style.display = 'none'
//  })