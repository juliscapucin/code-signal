function solution(k) {
  let evenBoxes = [];
  let oddBoxes = [];
  let oddNumber = 1;
  let evenNumber = 2;

  while (oddNumber <= k) {
    oddBoxes.push(oddNumber);
    oddNumber += 2;
  }
  while (evenNumber <= k) {
    evenBoxes.push(evenNumber);
    evenNumber += 2;
  }

  let redApples = evenBoxes.reduce((acc, item) => {
    return acc + item * item;
  }, 0);
  let yellowApples = oddBoxes.reduce((acc, item) => {
    return acc + item * item;
  }, 0);

  return redApples - yellowApples;
}
