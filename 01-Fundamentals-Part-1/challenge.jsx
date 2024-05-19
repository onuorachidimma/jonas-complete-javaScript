/* Write your code below. Good luck! 🙂 */

// CHALENGE #1

// ### Test 2 ###
// const massMark = 78
// const heightMark = 1.69
// const massJohn = 92
// const heightJohn = 1.95

// ### Test 2 ###
const massMark = 95
const heightMark = 1.88
const massJohn = 85
const heightJohn = 1.76
const BMIMark = massMark / (heightMark * heightMark) 
const BMIJohn = massJohn / (heightJohn * heightJohn) 
console.log(BMIMark, BMIJohn);

const markHigherBMI = BMIMark > BMIJohn
console.log(markHigherBMI);


// CHALLENGE #2
/* Write your code below. Good luck! 🙂 */

if (BMIMark > BMIJohn) {
    console.log("Mark's BMI is higher than John's!")
} else{
    console.log("John's BMI is higher than Mark's!")
}

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn}!)`)
} else{
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark}!)`)
}

// CHALLENGE #3
/* Write your code below. Good luck! 🙂 */
const scoreDolphins =  (96 + 108 + 89) / 2
const scoreKoalas =  (88 + 91 + 110) / 2

if (scoreDolphins > scoreKoalas){
    console.log("Dolphins win the trophy")
}else if(scoreKoalas > scoreDolphins){
    console.log("Koalas win the trophy")
}else{
    console.log("Both win the trophy")
}