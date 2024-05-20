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
const isIsland = false




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


// ######### EQUALITY OPERATORS ##############
const numNeighbours = Number(prompt('How many neighbour countries does your contry have?'));

if (numNeighbours === 1) {
    console.log("Only 1 border")
}else if(numNeighbours > 1){
    console.log("More than 1 border")
}else{
    console.log("No borders")
}


// ######### LOGICAL OPERATORS ##############
if ( language === "English" && population < 50000000 && isIsland){
    console.log(`You should live in ${country} :)`)
}else{
    console.log(` ${country} does not meet your criteria :(`)
}

// ######### SWITCH STATEMENT ##############
const switchLanguage = "German"

switch (switchLanguage){
    case "chinese":
    case "mandarin":
        console.log('MOST number of native speakers!')
        break;
    case "spanish":
        console.log('2nd place in number of native speakers')
        break;
    case "english":
        console.log('2rd place')
        break;
    case "hindi":
        console.log('Number 4')
        break;
    case "arabic":
        console.log('5th most spoken language')
        break;
        default:
            console.log('Great language too :D')
}


// ######### TERNARY OPERATORS ##############
population = 120000000
// population > 33000000 ? console.log(`${country}'s population is above average`) : console.log(`${country}'s population is below average`)

console.log(
    `${country}'s population is ${population > 33 ? 'above' : 'below'} average`
  );