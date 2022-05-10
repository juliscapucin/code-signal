const solution = (inputArray) => {
  const foo = (a, b) =>
    [...a].reduce((pre, val, idx) => pre + (val !== b[idx]), 0) === 1;

  const bar = (a, b) =>
    !b.length ||
    b.some(
      (val, idx) =>
        foo(a[0], val) &&
        bar(
          [val, ...a],
          b.filter((_, i) => i !== idx)
        )
    );

  return inputArray.some((val, idx) =>
    bar(
      [val],
      inputArray.filter((_, i) => i !== idx)
    )
  );
};

const combi = ["aba", "bbb", "bab"];
const combi2 = ["ab", "bb", "aa"];

console.log(solution(combi));
