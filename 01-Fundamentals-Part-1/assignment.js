// ######### VALUES AND VARIABLES #############

/*
let country = "Nigeria";
let continent = "Africa";
let population = 120000000;

console.log(country)
console.log(continent)
console.log(population)
console.log(`I am from ${country} in ${continent}. We have a population of ${population} citizens`)
*/



// ######### DATA TYPES ##############

/*
const isIsland = false;
let language;

console.log(typeof isIsland)
console.log(typeof population)
console.log(typeof country)
console.log(typeof language)
console.log(`It is ${isIsland} that ${country} is an Island. `)
*/

// ######### LET, CONST, VAR ##############


const language = "English"
const country = "Nigeria";
const continent = "Africa";
let population = 120000000;



// ######### BASIC OPERATORS ##############
let halfPopulation = population / 2;
console.log(population++);
let finlandPopulation = 6000000
console.log(population > finlandPopulation)
let averagePopulation = 33000000
console.log(population < averagePopulation)

const description1 = country + " is in " + continent + ", " + "and its " + population + " people speak " + language

console.log(description1)

// ######### STRINGS AND TEMPLATE LITERALS ##############
const description2 = `${country} is in ${continent}, and its ${population} people speak ${language}`

console.log(description2)

// ######### IF/ELSE STATEMENTS ##############

const averagePopulationNow = 33000000 - population;

if (population > 33000000){
    console.log(`${country}'s population is ${averagePopulationNow} below average`)
}else{
    console.log(`${country}'s population is ${averagePopulationNow} above average`)
}

if (population > 33000000){
    population = 13000000
    console.log(`${country}'s population is ${averagePopulationNow} below average`)
}else{
    console.log(`${country}'s population is ${averagePopulationNow} above average`)
}

if (population > 33000000){
    population = 130000000
    console.log(`${country}'s population is ${averagePopulationNow} below average`)   
}else{
    console.log(`${country}'s population is ${averagePopulationNow} above average`)
}

