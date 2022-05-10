function solution(inputString) {
  const regex = /[A-Fa-f0-9\-]/g;
  const regexHifen = /\-/g;

  const splitString = inputString.split("-");

  console.log(regex.test(inputString));

  if (
    inputString.length < 17 ||
    inputString.match(regexHifen).length !== 5 ||
    inputString.match(regex).length < 17
  ) {
    return false;
  }

  for (let i = 0; i < splitString.length; i++) {
    if (splitString[i].length !== 2) {
      return false;
    } else return true;
  }
}

// solution = (s) => /^([0-9A-F]{2}-){5}[0-9A-F]{2}$/.test(s);

const code = "00-1B-63-84-45-E6";
const code2 = "0076-1B-63-84-45-";
const code3 = "99-1B-63-84-??-00";
const code4 = "99-1B-63-aa-99-00";
const code5 = "gg-1B-63-ff-99-00";

console.log(solution(code5));
