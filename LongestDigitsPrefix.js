function solution(inputString) {
  const regex = /^\d+/;
  let num = Math.max(inputString.match(regex));

  if (num !== 0 && inputString[0] === "0") return `0${num.toString()}`;
  else if (num !== 0) return num.toString();
  else return "";
}

const text = "0123aaaaaaaa";

console.log(solution(text));
