function solution(inputArray) {
  let curDif = 0;
  let prevDif = 0;

  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] <= inputArray[i + 1]) {
      curDif = inputArray[i + 1] - inputArray[i];
    } else {
      curDif = inputArray[i] - inputArray[i + 1];
    }
    if (curDif > prevDif) {
      prevDif = curDif;
    }
  }

  return prevDif;
}
