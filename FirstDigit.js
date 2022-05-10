function solution(inputString) {
  const regex = /\d/;
  let element = [];

  inputString.split("").forEach((el) => {
    if (regex.test(el)) {
      element.push(el);
    }
  });
  return element[0];
}

// function solution2(s) {
//   return s.match(/\d/)[0];
// }

const text = "jjj576iu";

console.log(solution(text));
