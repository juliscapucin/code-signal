function solution(sequence) {
  var filteredItems = 0
  for (var i = 1; i < sequence.length; i++)
    if (sequence[i] <= sequence[i - 1]) {
      filteredItems++
      if (filteredItems > 1) return false
      if (sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1])
        return false
    }
  return true
}
