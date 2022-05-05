function solution(name) {
  // ^ in the beginning and $ in the end means that the whole string has to match
  return /^[a-z_]\w*$/i.test(name);
}
