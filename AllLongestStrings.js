function solution(inputArray) {
  let wordLength = 0
  let newWordLength
  let longestWords = []

  for (let i = 0; i < inputArray.length; i++) {
    newWordLength = inputArray[i].length

    if (newWordLength > wordLength) {
      wordLength = newWordLength

      longestWords = [inputArray[i]]
    } else if (newWordLength === wordLength) {
      wordLength = newWordLength

      longestWords.push(inputArray[i])
    }
  }

  return longestWords
}

const stringsArray = ['eye', 'ai', 'oi', 'yes', 'custom', 'fantasy']

console.log(solution(stringsArray))
