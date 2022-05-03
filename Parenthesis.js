function solution(inputString) {
  while (inputString.includes('(')) {
    inputString = inputString.replace(/\(([^()]*)\)/, (_, str) =>
      [...str].reverse().join('')
    )
  }
  return inputString
}

const text = 'foo(bar)baz(blim)'
const text2 = 'foo(bar(baz))blim'

console.log(solution(text))
