function solution(n) {
  let initialNum = n.toString().split("");
  let options = [];
  let option;

  for (let i = 0; i <= initialNum.length; i++) {
    initialNum = n.toString().split("");

    option = initialNum.splice(i, 1).join("");
    options.push(parseInt(initialNum.join("")));
  }

  return Math.max(...options);
}

const digit = 151;

console.log(solution(digit));
