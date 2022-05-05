function solution(image) {
  let sequence = 0;
  let blurredLine = [];
  let blurredImage = [];

  for (let i = 1; i < image.length - 1; i++) {
    for (let j = 1; j < image[i].length - 1; j++) {
      sequence =
        image[i][j - 1] +
        image[i][j] +
        image[i][j + 1] +
        image[i - 1][j - 1] +
        image[i - 1][j] +
        image[i - 1][j + 1] +
        image[i + 1][j - 1] +
        image[i + 1][j] +
        image[i + 1][j + 1];

      blurredLine.push(Math.floor(sequence / 9));
    }
    blurredImage.push(blurredLine);
    blurredLine = [];
  }

  return blurredImage;
}

const photo = [
  [7, 4, 0, 1],
  [5, 6, 2, 2],
  [6, 10, 7, 8],
  [1, 4, 2, 0],
];

console.log(solution(photo));
