function solution(n) {
  let output
  const numString = n.toString()
  const stringMiddle = numString.length / 2

  const leftString = [...numString].splice(0, stringMiddle)
  const rightString = [...numString].splice(stringMiddle * -1, stringMiddle)

  const sumLeft = () => {
    subSumLeft = 0
    for (let i = 0; i < leftString.length; i++) {
      subSumLeft += parseInt(leftString[i])
    }
    return subSumLeft
  }

  const sumRight = () => {
    subSumRight = 0
    for (let i = rightString.length - 1; i >= 0; i--) {
      subSumRight += parseInt(rightString[i])
    }
    return subSumRight
  }

  if (sumLeft() === sumRight()) {
    output = true
  } else {
    output = false
  }

  return output
}

const num = 234756

console.log(solution(num))
