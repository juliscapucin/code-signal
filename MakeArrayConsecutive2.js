function solution(statues) {
  const sortedStatues = statues.sort(function (a, b) {
    return a - b
  })
  let missingStatues = 0

  for (let i = sortedStatues.length - 1; i > 0; i--) {
    let statueDifference = sortedStatues[i] - sortedStatues[i - 1]
    if (statueDifference > 1) {
      missingStatues += statueDifference - 1
    }
  }

  return missingStatues
}

const statuesArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(solution(statuesArray))
