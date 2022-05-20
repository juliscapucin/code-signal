function solution(inputArray, elemToReplace, substitutionElem) {
  let elemIndex = inputArray.indexOf(elemToReplace);

  if (elemIndex === -1) return inputArray;

  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === elemToReplace) {
      inputArray.splice(i, 1, substitutionElem);
    }
  }

  return inputArray;
}
