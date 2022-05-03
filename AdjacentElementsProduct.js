function solution(inputArray) {
  let prevProd = inputArray[0] * inputArray[1]
  let currProd
  let biggestProd

  if (inputArray.length === 2) return prevProd

  for (let i = 1; i < inputArray.length - 1; i++) {
    currProd = inputArray[i] * inputArray[i + 1]

    if (currProd > prevProd) {
      biggestProd = currProd
      prevProd = currProd
    } else {
      biggestProd = prevProd
    }
  }
  return biggestProd
}

const numberArray = [1, 3, 6, 7]
const numberArray2 = [5, 1, 2, 3, 1, 4]
const numberArray3 = [1, 2, 3, 0]
const numberArray4 = [-1, -2]

console.log(solution(numberArray4))
