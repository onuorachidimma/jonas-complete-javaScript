/* Write your code below. Good luck! 🙂 */

const calcAverage = (num1, num2, num3) =>{
    return (num1 + num2 + num3)/ 3
}

// const scoreDolphins = calcAverage(44, 23, 71)
// const scoreKoalas = calcAverage(65, 54, 49)
const scoreDolphins = calcAverage(85, 54, 41)
const scoreKoalas = calcAverage(23, 34, 27)

const checkWinner = (avgDolphins, avgKoalas) =>{
    if (avgDolphins >= avgKoalas * 2){
        console.log(`Dolphins win (${scoreDolphins } vs. ${scoreKoalas})`)
    }else if(avgKoalas >= avgDolphins * 2){
        console.log(`Koala win (${scoreKoalas} vs. ${scoreDolphins})`)
    }else{
        console.log(`No team wins...`)
    }
}

checkWinner(scoreDolphins, scoreKoalas)

