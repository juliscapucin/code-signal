function solution(matrix) {
  let square = [];
  let allSquares = [];
  for (let i = 0; i < matrix.length - 1; i++) {
    for (let j = 0; j < matrix[i].length - 1; j++) {
      square.push(matrix[i][j], matrix[i][j + 1]);
      square.push(matrix[i + 1][j], matrix[i + 1][j + 1]);
      allSquares.push(square);
      square = [];
    }
  }

  let uniqueSquares = allSquares.sort().filter((el, index) => {
    if (index === 0 || el > allSquares[index - 1]) {
      return el;
    }
  });

  return uniqueSquares.length;
}
