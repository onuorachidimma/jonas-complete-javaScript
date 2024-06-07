'use strict';
 const newGame = document.querySelector('.btn--new')
 const score = document.querySelectorAll('.score')
 const currentScore = document.querySelectorAll('.current-score')
 const rollingDice = document.querySelector('.dice')
 const rollDice = document.querySelector('.btn--roll')

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

 
// ROLL DICE
const diceArr = ['./dice-1.png', './dice-2.png', './dice-3.png', './dice-4.png', './dice-5.png', './dice-6.png']

rollDice.addEventListener('click', function(){
    function randomArray(arr){
        const randomDice = Math.floor(Math.random() * arr.length)
        return arr[randomDice]
    }
    const newArr = randomArray(diceArr)
    console.log(newArr)
    // console.log(newArr, "I am clicked")
    rollingDice.style.display = 'block'
    diceArr.forEach(dice => {
        rollingDice.src = newArr
    })
    
})
    

