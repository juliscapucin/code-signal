function solution(cell1, cell2) {
  const oddRows = [1, 3, 5, 7];
  const evenRows = [2, 4, 6, 8];
  const oddRowsCols = [1, 0, 1, 0, 1, 0, 1, 0];
  const evenRowsCols = [0, 1, 0, 1, 0, 1, 0, 1];
  const rows = ["A", "B", "C", "D", "E", "F", "G", "H"];

  let cell1Index = rows.indexOf(cell1[0]);
  let cell2Index = rows.indexOf(cell2[0]);

  let color1;
  let color2;

  if (oddRows.includes(parseInt(cell1[1]))) {
    color1 = oddRowsCols[cell1Index];
  } else color1 = evenRowsCols[cell1Index];

  if (oddRows.includes(parseInt(cell2[1]))) {
    color2 = oddRowsCols[cell2Index];
  } else color2 = evenRowsCols[cell2Index];

  if (color1 === color2) {
    return true;
  } else return false;
}

const input1 = "A1";
const input2 = "A2";

console.log(solution(input1, input2));
