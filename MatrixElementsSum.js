function solution(matrix) {
  let sum = 0
  for (let j = 0; j < matrix[0].length; j++) {
    for (let i = 0; i < matrix.length; i++) {
      if (matrix[i][j] === 0) break
      else sum += matrix[i][j]
    }
  }
  return sum
}

const matrixArray = [
  [1, 0, 3, 5],
  [0, 2, 3, 2],
  [4, 5, 0, 2],
  [1, 0, 2, 0],
]

console.log(matrixArray[3].indexOf(0))

console.log(solution(matrixArray))
