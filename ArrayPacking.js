function solution(a) {
  let newA = a.map((item) => ("00000000" + item.toString(2)).slice(-8));
  return parseInt(newA.reverse().join(""), 2);
}
