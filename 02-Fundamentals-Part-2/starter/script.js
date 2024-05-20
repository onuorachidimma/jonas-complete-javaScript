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
function percentageOfWorld1(country, population){
    return `${country} has ${population} people, so it's about ${(population / 7900) * 100}% of the world population`
}
const nigeriaPopulation = percentageOfWorld1("Nigeria", 120000)
console.log(nigeriaPopulation)
const chinaPopulation = percentageOfWorld1("China", 1441)
console.log(chinaPopulation)
const germanyPopulation = percentageOfWorld1("Germany", 100000)
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