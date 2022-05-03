function solution(inputString) {
  if (inputString.length <= 1) return true

  const halfChar = Math.floor(inputString.length / 2)
  const stringRight = inputString.slice(0, halfChar)
  const stringLeft = inputString.slice(-halfChar)
  const stringLeftReversed = stringLeft.split('').reverse().join('')

  if (stringRight === stringLeftReversed) return true
  return false
}

console.log(solution('zz'))
