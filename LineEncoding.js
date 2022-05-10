function solution(s) {
  let letters = [];
  let lettersArray = [];

  for (let i = 0; i < s.length; i++) {
    i === 0 && letters.push(s[i]);
    if (i === s.length - 1) {
      if (letters.includes(s[i])) {
        letters.push(s[i]);
        lettersArray.push(`${letters.length}${letters[0]}`);
      } else if (!letters.includes(s[i])) {
        letters.length > 1
          ? lettersArray.push(`${letters.length}${letters[0]}`)
          : lettersArray.push(`${letters[0]}`);
        letters = [];
        lettersArray.push(s[i]);
      }
    } else if (i !== 0 && letters.includes(s[i])) {
      letters.push(s[i]);
    } else if (!letters.includes(s[i])) {
      letters.length > 1
        ? lettersArray.push(`${letters.length}${letters[0]}`)
        : lettersArray.push(`${letters[0]}`);
      letters = [];
      letters.push(s[i]);
    }
  }

  return lettersArray.join("");
}
