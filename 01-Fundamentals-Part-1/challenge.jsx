/* Write your code below. Good luck! 🙂 */
let massMark, massJohn, heightMark, heightJohn
massMark = 78
heightMark = 1.69
massJohn = 92
heightJohn = 1.95
const BMIMark = massMark / (heightMark * heightMark) 
const BMIJohn = massJohn / (heightJohn * heightJohn) 
console.log(BMIMark, BMIJohn)
massMark = 95
heightMark = 1.88
massJohn = 85
heightJohn = 1.76

console.log(BMIMark, BMIJohn);

const markHigherBMI = BMIMark > BMIJohn
console.log(markHigherBMI);