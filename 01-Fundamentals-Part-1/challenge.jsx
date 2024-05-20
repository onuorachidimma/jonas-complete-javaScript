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
const scoreDolphins =  (96 + 108 + 89) / 3
const scoreKoalas =  (88 + 91 + 110) / 3
console.log(scoreDolphins, scoreKoalas)

if (scoreDolphins > scoreKoalas && scoreDolphins > 100){
    console.log("Dolphins win the trophy")
}else if(scoreKoalas > scoreDolphins && scoreKoalas >= 100){
    console.log("Koalas win the trophy")
}else if(scoreKoalas === scoreDolphins && scoreKoalas >= 100 && scoreDolphins >= 100){
    console.log("Both win the trophy")
}else{
    console.log("No team won the trophy")
}

// CHALLENGE #4
const bill = 275;

/* Write your code below. Good luck! 🙂 */
const tip = bill >= 50 && bill <= 300 ? bill * 15/100 : bill * 20/100
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)