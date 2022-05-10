function solution(inputString) {
  const regex = /[A-F0-9\-]/g;
  const regexHifen = /\-/g;

  if (
    inputString.length < 17 ||
    inputString.match(regexHifen).length !== 5 ||
    inputString.match(regex).length < 17
  ) {
    return false;
  } else if (inputString.split("-").every(i.length === 2)) {
    return true;
  } else {
    return false;
  }
}

const ipAddress = "64.233.161.00";

console.log(solution(ipAddress));
