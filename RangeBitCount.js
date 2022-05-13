function solution(a, b) {
  let numArr = [];
  for (let i = a; i <= b; i++) {
    numArr.push(i);
  }
  return numArr
    .map((item) => item.toString(2))
    .join("")
    .match(/1/g).length;
}
