function solution(cell) {
  const letters = "abcdefgh";
  const positions = [];
  const options = [
    [1, 2],
    [2, 1],
    [2, -1],
    [1, -2],
    [-1, -2],
    [-2, -1],
    [-2, 1],
    [-1, 2],
  ];

  for (let i = 0; i < options.length; i++) {
    if (
      letters.indexOf(cell[0]) + options[i][0] <= 7 &&
      letters.indexOf(cell[0]) + options[i][0] >= 0 &&
      parseInt(cell[1]) + +options[i][1] <= 8 &&
      parseInt(cell[1]) - +options[i][1] >= 1
    ) {
      positions.push(
        `${letters[letters.indexOf(cell[0]) + options[i][0]]}${
          parseInt(cell[1]) + options[i][1]
        }`
      );
    }
  }
  return positions.length;
}

const knight = "d5";
const knight2 = "a1";

console.log(solution(knight2));

for (let i = 0; i <= 8; i++) {
  if (letters.indexOf(cell[0]) + 2 <= 8) {
  }
  if (letters.indexOf(cell[0]) - 2 >= 0) {
  }
  if (numbers.indexOf(cell[1]) + 2 <= 8) {
  }
  if (numbers.indexOf(cell[1]) - 2 >= 1) {
  }
}
