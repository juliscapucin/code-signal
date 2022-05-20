function solution(candlesNumber, makeNew) {
  let leftovers = candlesNumber;
  let totalCandles = candlesNumber;
  let extraCandles = Math.floor(leftovers / makeNew);

  while (extraCandles > 0) {
    extraCandles = Math.floor(leftovers / makeNew);
    totalCandles += extraCandles;
    leftovers -= extraCandles * makeNew;
    leftovers += extraCandles;
  }

  return totalCandles;
}
