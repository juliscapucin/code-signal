function solution(n) {
  let hours = Math.floor(n / 60);
  let minutes = n % 60;

  let finalString = hours
    .toString()
    .split("")
    .concat(minutes.toString().split(""));

  return finalString.reduce((sum, item) => sum + parseInt(item), 0);
}
