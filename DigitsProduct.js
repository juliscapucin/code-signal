const solution = (product) => {
  let res = ``;
  if (product < 10) return product > 0 ? product : 10;
  for (let i = 9; i > 1; i--) {
    while (!(product % i)) {
      product /= i;
      res = i + res;
    }
  }
  return product - 1 ? -1 : +res;
};

// Given an integer product, find the smallest positive (i.e. greater than 0) integer the product of whose digits is equal to product. If there is no such integer, return -1 instead.

// Example

// For product = 12, the output should be
// solution(product) = 26;
// For product = 19, the output should be
// solution(product) = -1.
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] integer product

// Guaranteed constraints:
// 0 ≤ product ≤ 600.

// [output] integer
