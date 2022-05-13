function solution(nCols, nRows, col, row) {
  return nCols * nRows - (nCols * row + nRows * (col - 1) - row * (col - 1));
}
