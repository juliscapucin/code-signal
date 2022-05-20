function solution(n, m) {
  if (m == n) return 3 * n - 2;
  else {
    if (m == 2 * n) return 2 * m - 2;
    if (n == 2 * m) return 2 * n - 2;

    let block = 0;
    for (let i = 1; i < m; i++) {
      let temp = (-n / m) * i + n;
      block = temp == parseInt(temp) ? block + 1 : block;
    }

    return m + n - 1 + block;
  }
}

// Imagine a white rectangular grid of n rows and m columns divided into two parts by a diagonal line running from the upper left to the lower right corner. Now let's paint the grid in two colors according to the following rules:

// A cell is painted black if it has at least one point in common with the diagonal;
// Otherwise, a cell is painted white.
// Count the number of cells painted black.

// Example

// For n = 3 and m = 4, the output should be
// solution(n, m) = 6.

// There are 6 cells that have at least one common point with the diagonal and therefore are painted black.

// For n = 3 and m = 3, the output should be
// solution(n, m) = 7.

// 7 cells have at least one common point with the diagonal and are painted black.
