function solution(n, k) {
  return parseInt(
    n
      .toString(2)
      .split("")
      .map((v, i, a) => (i == a.length - k ? "0" : v))
      .join(""),
    2
  );
}
