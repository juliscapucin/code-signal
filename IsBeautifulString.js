function solution(inputString) {
  s = "abcdefghijklmnopqrstuvwxyz";

  console.log(inputString.split("a").length - 1);
  console.log(inputString.split("b").length - 1);
  console.log(inputString.split("c").length - 1);

  console.log(inputString.split("a"));

  for (i = 1; i < s.length; i++) {
    if (
      inputString.split(s[i]).length - 1 >
      inputString.split(s[i - 1]).length - 1
    ) {
      return false;
    }
  }
  return true;
}

// function solution(inputString) {
//   const word = inputString.split("").sort();
//   let letterArray = [];
//   let sortedArray = [];
//   let isBeautiful;

//   for (let i = 0; i < word.length; i++) {
//     if (i === 0) {
//       letterArray.push(word[i]);
//     } else if (i === word.length - 1) {
//       if (letterArray.includes(word[i])) {
//         letterArray.push(word[i]);
//         sortedArray.push(letterArray);
//         letterArray = [];
//       } else {
//         sortedArray.push(letterArray);
//         letterArray = [];

//         sortedArray.push(word[i]);
//       }
//     } else if (letterArray.includes(word[i])) {
//       letterArray.push(word[i]);
//     } else {
//       sortedArray.push(letterArray);
//       letterArray = [];
//       letterArray.push(word[i]);
//     }
//   }

//   console.log(sortedArray);
//   if (sortedArray.length > 1) {
//     for (let i = 0; i < sortedArray.length - 1; i++) {
//       if (sortedArray[i].length >= sortedArray[i + 1].length)
//         isBeautiful = true;
//       else isBeautiful = false;
//     }
//   } else isBeautiful = true;

//   return isBeautiful;
// }

const inputWord = "aabbb";
const inputWord2 = "bbbaacdafe";
const inputWord3 = "bbc";

console.log(solution(inputWord3));
