function solution(inputString) {
  const splitString = inputString.split(".");
  const regExp = /[a-zA-Z]/g;

  for (let i = 0; i < splitString.length; i++) {
    if (
      !splitString[i] ||
      splitString.length !== 4 ||
      splitString[i] > 255 ||
      regExp.test(splitString[i])
    ) {
      return false;
    } else if (splitString[i].length > 1) {
      if (splitString[i][0] == 0) {
        return false;
      }
    }
  }
  return true;
}

const ipAddress = "64.233.161.00";

console.log(solution(ipAddress));
