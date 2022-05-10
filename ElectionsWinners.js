function solution(votes, k) {
  votes.sort((a, b) => a - b);

  const maxVotes = votes.reduce((a, b) => {
    return Math.max(a, b);
  }, -Infinity);

  let filteredCandidates;

  if (k === 0) {
    filteredCandidates = votes.filter((vote) => vote === maxVotes);
    hasDuplicates(filteredCandidates) === true && (filteredCandidates = []);
  } else {
    filteredCandidates = votes.filter(
      (vote) => vote + k > votes[votes.length - 1]
    );
  }

  return filteredCandidates.length;
}

function hasDuplicates(array) {
  return new Set(array).size !== array.length;
}

const candidates = [2, 3, 5, 2];
const leftVotes = 3;

console.log(solution(candidates, leftVotes));
