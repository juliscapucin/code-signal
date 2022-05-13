function solution(a, b) {
  if (a > b || b - a === 1 || (b - a) % 2 !== 0) {
    return true;
  } else return false;
}
