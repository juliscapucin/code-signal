const solution = (n) => {
  let result = new Array(n);
  for (let i = 0; i < n; i++) {
    result[i] = new Array(n);
  }

  let p = 1,
    r = 0;
  for (; n > 0; n -= 2) {
    for (let a = 0; a < n; a++) result[r][a + r] = p++;
    for (let b = r + 1; b < n + r; b++) result[b][n - 1 + r] = p++;
    for (let c = n - 2 + r; c >= r; c--) result[n - 1 + r][c] = p++;
    for (let d = n - 2 + r; d > r; d--) result[d][r] = p++;
    r++;
  }
  return result;
};

// Construct a square matrix with a size N × N containing integers from 1 to N * N in a spiral order, starting from top-left and in clockwise direction.

// Example

// For n = 3, the output should be

// solution(n) = [[1, 2, 3],
//                     [8, 9, 4],
//                     [7, 6, 5]]
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] integer n

// Matrix size, a positive integer.

// Guaranteed constraints:
// 3 ≤ n ≤ 100.

// [output] array.array.integer
