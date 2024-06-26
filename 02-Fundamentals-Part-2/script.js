"use strict";

// ########## FUNCTIONS  ###########
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} people and its capital city is ${capitalCity}`;
}

const nigera = describeCountry("Nigeria", 120000000, "Abuja");
const angola = describeCountry("Angola", 10000000, "Luanda");
const germany = describeCountry("Germany", 100000, "Berlin");
console.log(nigera, angola, germany);

// ########## FUNCTION DECLARATION VS EXPRESSIONS  ###########
// Function declaration
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}
const nigeriaPopulation = percentageOfWorld1(120000);
console.log(nigeriaPopulation);
const chinaPopulation = percentageOfWorld1(1441);
console.log(chinaPopulation);
const germanyPopulation = percentageOfWorld1(100000);
console.log(germanyPopulation);

// Function expression
const percentageOfWorld2 = function (country, population) {
  return `${country} has ${population} people, so it's about ${
    (population / 7900) * 100
  }% of the world population`;
};

const nigeriaPopulationExp = percentageOfWorld2("Nigeria", 120000);
console.log(nigeriaPopulationExp);
const chinaPopulationExp = percentageOfWorld2("China", 1441);
console.log(chinaPopulationExp);
const germanyPopulationExp = percentageOfWorld2("Germany", 100000);
console.log(germanyPopulationExp);

// ########## ARROW FUNCTIONS  ###########
const percentageOfWorld3 = (country, population) =>
  `${country} has ${population} people, so it's about ${
    (population / 7900) * 100
  }% of the world population`;

const nigeriaPopulationArr = percentageOfWorld2("Nigeria", 120000);
console.log(nigeriaPopulationArr);
const chinaPopulationArr = percentageOfWorld2("China", 1441);
console.log(chinaPopulationArr);
const germanyPopulationArr = percentageOfWorld2("Germany", 100000);
console.log(germanyPopulationArr);

// ########## FUNCTIONS CALLING OTHER FUNCTIONS  ###########
function describePopulation(country, population) {
  const populationPercentage = percentageOfWorld1(population);
  const countryPopulationStats = `${country} has ${population} people, which is about ${populationPercentage} of the world`;
  console.log(countryPopulationStats);
}

describePopulation("Nigeria", 1000000);
describePopulation("China", 1200000);
describePopulation("Germany", 90000);

// function greetMe(name){
//     return `Goodday, ${name}`
// }

// function greetNow(myname){
//     const greetname = greetMe(myname);
//     console.log(greetname)
// }
// const greetings = greetNow(prompt("WHat is your name?"))

// ########## INTRO TO ARRAYS  ###########

const populationArr = [120, 150, 22, 11];

console.log(populationArr.length === 4);
const percentages = [
  percentageOfWorld1(populationArr[0]),
  percentageOfWorld1(populationArr[1]),
  percentageOfWorld1(populationArr[2]),
];
console.log(percentages);

// ########## BASIC ARRAY OPERATIONS(OBJECTS)  ###########
const neighbours = ["Niger", "Cameroun", "Chad"];
console.log(neighbours);

neighbours.push("Utopia");
console.log(neighbours);

neighbours.pop("Utopia");
console.log(neighbours);

if (!neighbours.includes("Germany")) {
  console.log("Probably not a central european country :D");
}

neighbours[neighbours.indexOf("Chad")] = "Ghana";
console.log(neighbours);

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
  neighbours: ["Niger", "Cameroun", "Chad"],
  describe: function () {
    console.log(
      `${this.country} has ${this.population} ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
    );
  },
  checkIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
  },
};
myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);

// ##########   ITERATION: THE FOR LOOP  ###########
for (let voter = 1; voter <= 50; voter++) {
  console.log(`Voter number ${voter} is currently voting`);
}

// ##########   LOOPING ARRAYS, BREAKING AND CONTINUING  ###########
console.log("____I AM THE NEW POPULATION PERCENTAGE___________");
const populationArray = [120, 150, 22, 11];
const percentages2 = [];
for (let popPercent = 0; popPercent < populationArray.length; popPercent++) {
  percentages2.push(percentageOfWorld1(populationArray[popPercent]));
}
console.log(percentages2);

// ##########   WHILE LOOP  ###########
const populationArray1 = [120, 150, 22, 11];
const percentages3 = [];
let popPercent = 0;
console.log("_______I AM WHILE LOOP________");
while (popPercent < populationArray1.length) {
  percentages3.push(percentageOfWorld1(populationArray1[popPercent]));
  popPercent++;
}
console.log(percentages3);

// ##########  LOOPING BACKWARDS AND LOOPS IN LOOPS ###########
const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];
console.log("_______I AM LOOP IN LOOPS________");
for (
  let loopCountry1 = 0;
  loopCountry1 < listOfNeighbours.length;
  loopCountry1++
)
  for (
    let loopInloop = 0;
    loopInloop < listOfNeighbours[loopCountry1].length;
    loopInloop++
  )
    console.log(`Neighbour: ${listOfNeighbours[loopCountry1][loopInloop]}`);

// ##########  ASSIGNMENT ###########
console.log("_______I AM THE ASSIGNMENT________");
// Given two arrays of temperatures, join and calculate the amplitude of the temperatures
// const array1 = [1, 2, 3, , 4, 5, "error", 6, 7, 8, 9, 10];
// const array2 = ["error1", 21, 31, , 41, 51, 11, 61, 71, 81, 91, 10];

const temperatureAltitude = (temp1, temp2) => {
  const temp = temp1.concat(temp2);
  console.log(temp);
  let max = Number.NEGATIVE_INFINITY;
  let min = Number.POSITIVE_INFINITY;
  for (let i = 0; i < temp.length; i++) {
    const curTemp = temp[i];
    if (typeof curTemp !== "number") {
      continue;
    }
    if (curTemp > max) {
      max = curTemp;
    }
    if (curTemp < min) {
      min = curTemp;
    }
  }
  console.log(max, min);
  return max - min;
};
const amplitude = temperatureAltitude(
  ["error1", 21, 31, 41, 51, 11, 61, 71, 81, 91, 10],
  [1, 2, 3, 4, 5, "error", 6, 7, 8, 9, 10]
);
console.log(amplitude);
