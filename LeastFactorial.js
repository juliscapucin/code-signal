function solution(n) {
  let m = 1;
  let counter = 1;

  if (n === 1) return n;

  while (m < n) {
    m = counter * m;
    counter++;
  }

  return m;
}
