function solution(divisor, bound) {
  for (let i = bound; i > 0; i--) {
    if (Number.isInteger(i / divisor)) {
      return i;
    }
  }
}
