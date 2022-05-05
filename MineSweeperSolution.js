/**
 * The simplest way to accomplish this task is to manually check each direction for every element in the matrix.
 * We can create a `directions` array to shorten the code for doing so, having it represent the x and y deltas.
 *
 * Aside from that, it's rather self-explanatory.
 */

const directions = [
  [1, -1],
  [1, 0],
  [1, 1],
  [0, -1],
  [0, 1],
  [-1, -1],
  [-1, 0],
  [-1, 1],
];

solution = (matrix) =>
  matrix.map((row, y) =>
    row.map((col, x) =>
      directions.reduce(
        (count, i) =>
          (count += !!(matrix[y + i[0]] && matrix[y + i[0]][x + i[1]])),
        0
      )
    )
  );
