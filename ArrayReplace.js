function solution(inputArray, elemToReplace, substitutionElem) {
  const newArray = inputArray.map((el) => {
    if (el === elemToReplace) {
      return (el = substitutionElem);
    } else return el;
  });
  return newArray;
}
