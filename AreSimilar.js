function solution(a, b) {
  if (a === b) return true

  let isSimilar = true
  let badPosition = 0
  let badIndex

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      badPosition++
      if (badPosition > 2) {
        isSimilar = false
      } else if (badPosition === 1) {
        badIndex = i
      } else if (
        badPosition === 2 &&
        a[i] + b[i] !== a[badIndex] + b[badIndex]
      ) {
        isSimilar = false
      }
    }
  }
  return isSimilar
}

const arrayA = [1, 1, 4]
const arrayB = [1, 2, 3]

console.log(solution(arrayA, arrayB))
