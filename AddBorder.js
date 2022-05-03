function solution(picture) {
  let lineArray = ''
  let finalArray = [...picture]

  for (let i = 0; i < picture[0].length; i++) {
    lineArray = `${lineArray}*`
  }
  finalArray.push(lineArray)
  finalArray.unshift(lineArray)

  for (let j = 0; j < finalArray.length; j++) {
    finalArray[j] = `*${finalArray[j]}*`
  }

  return finalArray
}

const rectangle = ['abc', 'ded']

console.log(solution(rectangle))
