'use strict';
// ###### DESTRUCTURING ARRAYS CHALLENG #######

// Number 1
// const [firstBook, secondBook] = books
// const [ , , thirdBook] = books

// Number 2
const ratings = [
  ['rating', 4.19],
  ['ratingsCount', 144584],
];

const [[, rating], [, ratingsCount]] = ratings;

// [4.19, 144584] = [rating, ratingsCount]
console.log(rating, ratingsCount);

// Number 3
const ratingStars = [63405, 1808];
const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;
console.log(fiveStarRatings, oneStarRatings, threeStarRatings);

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

// 1.
const [players1, players2] = game.players;
console.log(players1, players2);

//2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

//3.
const allPlayers = [...players1, ...players2];
// console.log(players1)
// console.log(players2)
console.log(allPlayers);

// 4.
const playersFinal = [...players1, 'Thiago', 'Coutinho', 'Perisc'];
// console.log(players1)
console.log(playersFinal);

//.5
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

//6
function printGoals(...players) {
  console.log(`${players.length} goals were scored`);
}
printGoals(...game.scored);

// 7.

team1 < team2 && console.log(`Team1 is more likely to win`);

team1 > team2 && console.log(`Team2 is more likely to win`);
