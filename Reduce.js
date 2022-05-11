const words = ["aranha", "mosca", "borboleta"];

const biggestWord = words.reduce((a, b) => (a.length > b.length ? a : b));

console.log(biggestWord);

////////////////////

const numbers = [1, 4, 8, 34, 34];
const biggestArray = [];

const biggestNumber = numbers.reduce((a, b) => {
  if (a === b) {
    return [a, b];
  }
  return a > b ? a : b;
}, []);

console.log(biggestNumber);
