function solution(arr) {
  const regex = [/0/g, /1/g, /2/g, /3/g, /4/g, /5/g, /6/g, /7/g, /8/g, /9/g];
  const arrString = arr.map((item) => item.toString()).join("");
  let filteredString = [];

  for (let i = 0; i < regex.length; i++) {
    if (arrString.match(regex[i]) !== null) {
      filteredString.push(arrString.match(regex[i]));
    }
  }

  let longestLength = filteredString.reduce((a, b) =>
    a.length > b.length ? a : b
  ).length;
  let longest = filteredString.filter((item) => item.length === longestLength);
  let solution = [];

  for (let i = 0; i < longest.length; i++) {
    solution.push(parseInt(longest[i][0]));
  }

  return solution;
}

const a = [12, 34, 69, 38, 57, 72];

console.log(solution(a));
