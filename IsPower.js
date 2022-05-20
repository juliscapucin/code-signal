function solution(n) {
  let x = 1;
  let y = 2;

  while (Math.pow(x, y) <= n) {
    if (Math.pow(x, y) === n) return true;
    x++;
  }

  x = 1;
  y++;

  while (Math.pow(x, y) <= n) {
    if (Math.pow(x, y) === n) return true;
    x++;
  }

  return false;
}
