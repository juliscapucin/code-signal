function solution(n, l, r) {
  let ways = 0;

  if (l === r && l + r !== n) ways = 0;

  if (l + r < n) {
    l = n - r;
  }

  if (l + r > n) {
    r = n - l;
  }

  while (l <= r) {
    if (l + r === n) ways++;
    l++;
    r--;
  }

  return ways;
}
