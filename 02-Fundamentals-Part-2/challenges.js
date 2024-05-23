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


// ########  CHALLENGE #2 ###########

/* Write your code below. Good luck! 🙂 */

const calcTip = (bill) => {
    if (bill >= 50 && bill <= 300){
        return bill * 15 / 100
    }else{
        return bill * 20 / 100
    }
}

const totalBill = calcTip(100)
console.log(totalBill)

const bills = [125, 555, 44]
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
console.log(tips)

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
console.log(totals)



// ########  CHALLENGE #3 ###########
/* Write your code below. Good luck! 🙂 */

const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function(){
       this.bmi = this.mass / (this.height * this.height) 
       return this.bmi
    }
}
mark.calcBMI()

const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function(){
       this.bmi = this.mass / (this.height * this.height) 
       return this.bmi
    }
}
john.calcBMI()

const comp = mark.calcBMI() > john.calcBMI()
console.log(comp ? `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})` : `${john.fullName}'s BMI (${john.bmi} is higher than ${mark.fullName}'s (${mark.bmi})` )