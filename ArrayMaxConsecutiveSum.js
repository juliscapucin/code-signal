function solution(inputArray, k) {
  let consecutiveSum;
  let biggestSum = 0;

  for (var i = 0; i < inputArray.length - k + 1; i++) {
    consecutiveSum = 0;
    for (var j = 0; j < k; j++) {
      consecutiveSum += inputArray[i + j];
    }
    consecutiveSum > biggestSum ? (biggestSum = consecutiveSum) : biggestSum;
  }
  return biggestSum;
}

const numbers = [1, 3, 4, 5];
const k = 2;

console.log(solution(numbers, k));
