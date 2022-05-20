function solution(arr) {
  let sol;
  if (arr[0] === arr[arr.length - 1]) {
    if (Number.isInteger(arr.length / 2)) {
      arr[arr.length / 2] + arr[arr.length / 2 - 1] === arr[0]
        ? (sol = true)
        : (sol = false);
    } else {
      arr[Math.floor(arr.length / 2)] === arr[0] ? (sol = true) : (sol = false);
    }
  } else sol = false;

  return sol;
}
