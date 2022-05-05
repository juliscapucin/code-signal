function solution(matrix) {
  let outputItem = 0;
  let outputLine = [];
  let outputMatrix = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (j > 0 && matrix[i][j - 1] === true) {
        outputItem++;
      }
      if (j < matrix[i].length - 1 && matrix[i][j + 1] === true) {
        outputItem++;
      }
      if (i > 0 && matrix[i - 1][j] === true) {
        outputItem++;
      }
      if (i > 0 && j > 0 && matrix[i - 1][j - 1] === true) {
        outputItem++;
      }
      if (i > 0 && j < matrix[i].length - 1 && matrix[i - 1][j + 1] === true) {
        outputItem++;
      }
      if (i < matrix.length - 1 && matrix[i + 1][j] === true) {
        outputItem++;
      }
      if (i < matrix.length - 1 && j > 0 && matrix[i + 1][j - 1] === true) {
        outputItem++;
      }
      if (
        i < matrix.length - 1 &&
        j < matrix[i].length - 1 &&
        matrix[i + 1][j + 1] === true
      ) {
        outputItem++;
      }

      outputLine.push(outputItem);

      outputItem = 0;
    }
    outputMatrix.push(outputLine);

    outputLine = [];
  }
  return outputMatrix;
}

const mine = [
  [true, false, false],
  [false, true, false],
  [false, false, false],
];

console.log(solution(mine));
