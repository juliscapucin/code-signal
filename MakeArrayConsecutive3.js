function solution(statues) {
  statues.sort((a, b) => a - b);
  let missingStatues = [];
  let j = statues[statues.length - 1];
  let i = statues[0];

  while (i <= j) {
    missingStatues.push(i);
    i++;
  }

  return missingStatues.length - statues.length;
}
