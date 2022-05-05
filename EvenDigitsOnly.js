function solution(n) {
  let evenDigitsOnly = true;
  n.toString()
    .split("")
    .forEach((el) => {
      if (el % 2 > 0) evenDigitsOnly = false;
    });
  return evenDigitsOnly;
}

const num = 248622;
const num2 = 642386;

console.log(solution(num2));
