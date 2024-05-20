'use strict'

// ########## FUNCTIONS ASSSIGNMENT ###########
function describeCountry (country, population, capitalCity){
    return `${country} has ${population} people and its capital city is ${capitalCity}`
}

const nigera = describeCountry("Nigeria", 120000000, "Abuja");
const angola = describeCountry("Angola", 10000000, "Luanda");
const germany = describeCountry("Germany", 100000, "Berlin");
console.log(nigera, angola, germany)