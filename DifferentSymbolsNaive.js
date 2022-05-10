function solution(s) {
  return s
    .split("")
    .sort()
    .filter((el, index, array) => {
      if (index === 0 || el !== array[index - 1]) {
        return el;
      }
    }).length;
}

const input = "ooiuierjfiuea";

console.log(solution(input));
