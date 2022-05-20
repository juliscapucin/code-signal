function solution(n) {
  const nString = n.toString().split("");

  for (let i = nString.length - 1; i > 0; i--) {
    if (parseInt(nString[i]) >= 5) {
      nString[i] = "0";
      nString[i - 1] = parseInt(nString[i - 1]) + 1;
    } else {
      nString[i] = "0";
    }
  }
  return parseInt(nString.join(""));
}
