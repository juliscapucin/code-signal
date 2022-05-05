function solution(inputString) {
  let newString = [];
  let sortedString = inputString.split("").sort();
  let eraseIndex;

  for (let i = 0; i < sortedString.length; i++) {
    if (newString.includes(sortedString[i])) {
      sortedString.splice(i, 1);
      eraseIndex = newString.indexOf(sortedString[i]);

      newString.splice(eraseIndex, 1);
      i = -1;
    } else {
      newString.push(sortedString[i]);
      sortedString.splice(i, 1);
      i = -1;
    }
  }

  if (newString.length > 1) {
    return false;
  } else {
    return true;
  }
}

const text = "aabb";
const text2 = "abbcabb";
const text3 = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbccccaaaaaaaaaaaaa";

console.log(solution(text));
