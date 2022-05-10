function solution(text) {
  const regex = /[a-zA-Z]+/g;

  return text.match(regex).reduce((a, b) => {
    return a.length > b.length ? a : b;
  });
}
