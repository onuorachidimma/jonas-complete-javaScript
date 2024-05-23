'use strict'

// ########## FUNCTIONS  ###########
function describeCountry (country, population, capitalCity){
    return `${country} has ${population} people and its capital city is ${capitalCity}`
}

const nigera = describeCountry("Nigeria", 120000000, "Abuja");
const angola = describeCountry("Angola", 10000000, "Luanda");
const germany = describeCountry("Germany", 100000, "Berlin");
console.log(nigera, angola, germany)


// ########## FUNCTION DECLARATION VS EXPRESSIONS  ###########
// Function declaration
function percentageOfWorld1(population){
    return population / 7900 * 100
}
const nigeriaPopulation = percentageOfWorld1(120000)
console.log(nigeriaPopulation)
const chinaPopulation = percentageOfWorld1(1441)
console.log(chinaPopulation)
const germanyPopulation = percentageOfWorld1(100000)
console.log(germanyPopulation)

// Function expression
const percentageOfWorld2 = function(country, population){
    return `${country} has ${population} people, so it's about ${(population / 7900) * 100}% of the world population`
}

const nigeriaPopulationExp = percentageOfWorld2("Nigeria", 120000)
console.log(nigeriaPopulationExp)
const chinaPopulationExp = percentageOfWorld2("China", 1441)
console.log(chinaPopulationExp)
const germanyPopulationExp = percentageOfWorld2("Germany", 100000)
console.log(germanyPopulationExp)


// ########## ARROW FUNCTIONS  ###########
const percentageOfWorld3 = (country, population) => `${country} has ${population} people, so it's about ${(population / 7900) * 100}% of the world population`

const nigeriaPopulationArr = percentageOfWorld2("Nigeria", 120000)
console.log(nigeriaPopulationArr)
const chinaPopulationArr = percentageOfWorld2("China", 1441)
console.log(chinaPopulationArr)
const germanyPopulationArr = percentageOfWorld2("Germany", 100000)
console.log(germanyPopulationArr)


// ########## FUNCTIONS CALLING OTHER FUNCTIONS  ###########
function describePopulation (country, population){

    const populationPercentage = percentageOfWorld1(population);
    const countryPopulationStats = `${country} has ${population} people, which is about ${populationPercentage} of the world`
    console.log(countryPopulationStats)
}

describePopulation("Nigeria", 1000000)
describePopulation("China", 1200000)
describePopulation("Germany", 90000)


// function greetMe(name){
//     return `Goodday, ${name}`
// }

// function greetNow(myname){
//     const greetname = greetMe(myname);
//     console.log(greetname)
// }
// const greetings = greetNow(prompt("WHat is your name?"))


// ########## INTRO TO ARRAYS  ###########

const populationArr = [120, 150, 22, 11]

console.log(populationArr.length === 4)
const percentages = [percentageOfWorld1(populationArr[0]), percentageOfWorld1(populationArr[1]), percentageOfWorld1(populationArr[2])]
console.log(percentages)

// ########## BASIC ARRAY OPERATIONS(OBJECTS)  ###########
const neighbours = ["Niger", "Cameroun", "Chad" ]
console.log(neighbours)

neighbours.push("Utopia")
console.log(neighbours)

neighbours.pop("Utopia")
console.log(neighbours)

if (!neighbours.includes("Germany")){
    console.log('Probably not a central european country :D')
}

neighbours[neighbours.indexOf("Chad")] = "Ghana"
console.log(neighbours)

// ########## INTRO TO OBJECTS  ###########

// const myCountry = {
//     country: "Nigeria",
//     capital: "Abuja",
//     language: "English",
//     population: 120000000,
//     neighbours: ["Niger", "Cameroun", "Chad" ]
// }


// ########## DOT VS BRACKET NOTATION  ###########
// console.log(`'${myCountry.country} has ${myCountry.population} ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}'.`)

// console.log(myCountry)
// myCountry.population += 2000000
// console.log(myCountry.population)

// myCountry['population'] -= 2000000
// console.log(myCountry.population)


// ########## OBJECTS METHODS  ###########

const myCountry = {
    country: "Nigeria",
    capital: "Abuja",
    language: "English",
    population: 120000000,
    // neighbours: neighbours
    neighbours: ["Niger", "Cameroun", "Chad" ],
    describe: function(){
        console.log(`${this.country} has ${this.population} ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`)
    },
    checkIsland: function(){
        this.isIsland = this.neighbours.length === 0 ? true : false;
    }
}
myCountry.describe()
myCountry.checkIsland()
console.log(myCountry);



// ##########   ITERATION: THE FOR LOOP  ###########
for (let voter = 1; voter <= 50; voter++){
    console.log(`Voter number ${voter} is currently voting`)
}