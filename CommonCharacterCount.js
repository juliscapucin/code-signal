function solution(s1, s2) {
  const string1 = s1.split('')
  const string2 = s2.split('')
  const commonLetter = []

  for (let i = 0; i < string1.length; i++) {
    for (let j = 0; j < string2.length; j++) {
      if (string1[i] === string2[j]) {
        commonLetter.push(string1[i])
        string1.splice(i, 1)
        string2.splice(j, 1)

        i = -1
        j = -1
      }
    }
  }

  return commonLetter.length
}

const str1 = 'abcdefghxyzttw'
const str2 = 'hgfedcbaabcwwt'

console.log(solution(str1, str2))
