function solution(arr) {
  let middle = arr.length / 2;

  if (Number.isInteger(middle)) {
    let sum = arr[middle - 1] + arr[middle];
    arr.splice(middle, 1);
    arr.splice(middle - 1, 1, sum);
    return arr;
  } else return arr;
}
