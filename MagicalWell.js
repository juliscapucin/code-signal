function solution(a, b, n) {
  let dollars = 0;

  while (n > 0) {
    dollars = dollars + a * b;
    n--;
    a++;
    b++;
  }

  return dollars;
}
