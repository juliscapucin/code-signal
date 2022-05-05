function solution(inputArray) {
  for (var n = 1; ; n++) {
    if (inputArray.every((item) => item % n)) return n;
  }
}
