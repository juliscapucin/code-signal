const friends = [
  [3, 4, 1, 2],
  [2, 3, 4, 1],
  [4, 1, 3, 2],
];

function solution(a) {
  let indexes = {};

  for (let i in a) {
    for (let j in a[i]) {
      if (!indexes[a[i][j]]) {
        indexes[a[i][j]] = [j];
      } else {
        indexes[a[i][j]].push(j);
      }
    }
  }

  let highestQuoted = Object.values(indexes).sort((a, b) => a > b);
  console.log(highestQuoted);

  return indexes;
}

console.log(solution(friends));

///////////////////////////

let text = ["Aloalo", "|", "marciano"];

text.splice(text.indexOf("|"), 1);
text.push("|");
console.log(text);
