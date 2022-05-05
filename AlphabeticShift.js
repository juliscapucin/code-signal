function solution(inputString) {
  const splitString = inputString.split("");
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  for (let i = 0; i < splitString.length; i++) {
    if (splitString[i] === "z") {
      splitString[i] = "a";
    } else {
      splitString[i] = alphabet[alphabet.indexOf(splitString[i]) + 1];
    }
  }

  return splitString.join("");
}

const text = "dsbaz";
console.log(solution(text));
