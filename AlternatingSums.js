function solution(a) {
  let evenTotal = 0
  let oddTotal = 0

  for (let i = 0; i < a.length; i += 2) {
    evenTotal += a[i]
  }
  for (let j = 1; j < a.length; j += 2) {
    oddTotal += a[j]
  }

  return [evenTotal, oddTotal]
}

const people = [60, 59, 35, 56, 23, 18]

console.log(solution(people))
