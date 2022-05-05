function solution(n, firstNumber) {
  let numberRight = firstNumber;

  for (let numberLeft = firstNumber - 1; ; numberLeft--) {
    numberRight++;

    if (numberRight > n - 1) {
      numberRight = 0;
    }
    if (numberLeft < 0) {
      numberLeft = n - 1;
    }
    if (numberLeft === numberRight) {
      break;
    }
  }
  return numberRight;
}

const circle = 4;
const firstNum = 1;

console.log(solution(circle, firstNum));
