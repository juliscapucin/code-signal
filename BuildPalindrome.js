function solution(st) {
  console.log(st.split("").reverse().join(""));
  console.log(st == Array.from(st).reverse().join(""));
  console.log(st);

  if (isPalindrome(st)) return st;
  for (var i = 0; i < st.length; i++) {
    if (isPalindrome(st.slice(i, st.length))) {
      return st + Array.from(st.slice(0, i)).reverse().join("");
    }
  }
}

function isPalindrome(string) {
  return string == Array.from(string).reverse().join("");
}

const word = "abcdc";

console.log(solution(word));
