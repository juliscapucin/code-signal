function solution(n) {
  let rounds = 0;
  let sum = 0;
  let altNum = n.toString();

  while (altNum.length > 1) {
    for (let i = 0; i < altNum.length; i++) {
      sum += parseInt(altNum[i]);
    }
    altNum = sum.toString();
    rounds++;

    sum = 0;
  }

  return rounds;
}

// function solution(n) {
//   c = 0;
//   while (n.toString().length > 1) {
//     n = n
//       .toString()
//       .split("")
//       .reduce((x, y) => Number(x) + Number(y));
//     c++;
//   }
//   return c;
// }

const num = 91;

console.log(solution(num));
