function solution(a, b, c) {
  if (a + b === a + c) {
    return a;
  } else if (b + a === b + c) {
    return b;
  } else if (c + a === c + b) {
    return c;
  }
}
