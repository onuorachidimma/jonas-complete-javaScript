// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// ######## CHALLENGE #1 ##########

const printForcast = (arr) => {
  console.log(arr);
   let forcast = '';
  for (let i = 0; i < arr.length; i++) {
    forcast += `... ${arr[i]}*C in ${i + 1} days`
  }
  return forcast;
};

// const theForcast = printForcast([17, 21, 23]);
const theForcast = printForcast([12, 5, -5, 0, 4]);
console.log(theForcast);
