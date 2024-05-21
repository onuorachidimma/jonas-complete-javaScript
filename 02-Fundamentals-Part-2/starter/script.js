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