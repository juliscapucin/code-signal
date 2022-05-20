function solution(arr) {
  if (arr.length > 0) {
    let first = arr[0];
    let last = arr[arr.length - 1];

    arr.splice(0, 1, last);
    arr.splice(arr.length - 1, 1, first);
  }

  return arr;
}
