'use strict';
// ###### DESTRUCTURING ARRAYS CHALLENG #######

// Number 1
// const [firstBook, secondBook] = books
// const [ , , thirdBook] = books

// // Number 2
// const ratings = [
//   ['rating', 4.19],
//   ['ratingsCount', 144584],
// ];

// const [[, rating], [, ratingsCount]] = ratings;

// // [4.19, 144584] = [rating, ratingsCount]
// console.log(rating, ratingsCount);

// // Number 3
// const ratingStars = [63405, 1808];
// const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;
// console.log(fiveStarRatings, oneStarRatings, threeStarRatings);

// ############ CHALLENGE 1 ####################

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// const properties = Object.values(game.odds)
// console.log(properties)
// let sum = 0
// for (let i = 0; i < properties.length; i++) {
// sum += properties[i]
// }
// const average = sum/properties.length
// console.log(average)

// // 1.
// const [players1, players2] = game.players;
// console.log(players1, players2);

// //2.
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// //3.
// const allPlayers = [...players1, ...players2];
// // console.log(players1)
// // console.log(players2)
// console.log(allPlayers);

// // 4.
// const playersFinal = [...players1, 'Thiago', 'Coutinho', 'Perisc'];
// // console.log(players1)
// console.log(playersFinal);

// //.5
// const { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);

// //6
// function printGoals(...players) {
//   console.log(`${players.length} goals were scored`);
// }
// printGoals(...game.scored);

// // 7.

// team1 < team2 && console.log(`Team1 is more likely to win`);

// team1 > team2 && console.log(`Team2 is more likely to win`);

// ############ CHALLENGE 2 ####################

// No. 1
for (const [x, y] of game.scored.entries()) console.log(`Goal ${x + 1}: ${y}`);

// No. 2
const properties = Object.values(game.odds);
console.log(properties);
let sum = 0;
for (const value of properties) {
  sum += value;
}
const average = sum / properties.length;
console.log(average);

//No. 3
for (const [x, y] of Object.entries(game.odds)) {
  const now = x === 'x' ? 'draw' : `victory ${game[x]}`;
  console.log(`Odd of ${now} ${y}`);
}

// No 4
// SOLVE THIS
// const scorers = {};
// for (let x of game.scored) {
//   x = scorers;
// }
// console.log(scorers)

// ################  SET ##############
const learnSet = new Set(['Ada', 'Obi', 'Obi', 'Nkechi', 'Ada']);
console.log(learnSet);
learnSet.add('Chi');
console.log(learnSet);
console.log(learnSet.has('Chi'));
learnSet.delete('Chi');
console.log(learnSet);
console.log(learnSet.size);
// console.log(learnSet.clear)
const prompty = prompt('What name do you want to check? ');
const checkSet = learnSet.has(prompty)
  ? `${prompty} is present`
  : learnSet.add(prompty) && `${prompty} was absent but has been added`;
console.log(checkSet);
console.log(learnSet);
