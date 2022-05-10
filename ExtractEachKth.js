function solution(inputArray, k) {
  return inputArray.filter((item, index) => (index + 1) % k);
}

// function solution2(arr, k) {
//   arr.forEach((el, i) => console.log(i));
//   return arr.filter((el, i) => (i + 1) % k);
// }

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbers2 = [2, 4, 6, 8, 10];
const k = 3;
const k2 = 2;

console.log(solution(numbers2, k2));
