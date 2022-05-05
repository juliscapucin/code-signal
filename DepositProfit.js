function solution(deposit, rate, threshold) {
  let total = deposit;
  let years = 0;

  while (total < threshold) {
    total += (total * rate) / 100;
    years++;
  }

  return years;
}
