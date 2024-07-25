'use strict'
// ###### DESTRUCTURING ARRAYS CHALLENG #######

// Number 1
// const [firstBook, secondBook] = books
// const [ , , thirdBook] = books


// Number 2
const ratings = [['rating', 4.19], ['ratingsCount', 144584]];

const [[ , rating], [ ,ratingsCount]] = ratings
 
// [4.19, 144584] = [rating, ratingsCount]
console.log(rating, ratingsCount)

// Number 3
const ratingStars = [63405, 1808];
const [fiveStarRatings, oneStarRatings, threeStarRatings = 0 ] = ratingStars
console.log(fiveStarRatings, oneStarRatings, threeStarRatings)