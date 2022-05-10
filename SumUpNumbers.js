function solution(inputString) {
  const regex = /[0-9]+/g;

  if (regex.test(inputString)) {
    let numberArray = inputString.match(regex).map((item) => parseInt(item));
    return numberArray.reduce((a, b) => {
      return (a += b);
    }, 0);
  } else return 0;
}
