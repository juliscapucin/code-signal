function solution(min1, min2_10, min11, s) {
  let duration;

  if (s < min1) {
    duration = 0;
  } else if (s <= min1 + min2_10) {
    duration = 1;
  } else if (s >= min1 + min2_10 && s <= min1 + 9 * min2_10) {
    duration = 1 + (s - min1) / min2_10;
  } else {
    duration = 10 + (s - min1 - 9 * min2_10) / min11;
  }

  return Math.floor(duration);
}

// const min1 = 3;
// const min2_10 = 1;
// const min11 = 2;
// const s = 20;

// const min1 = 10;
// const min2_10 = 1;
// const min11 = 2;
// const s = 22;

const min1 = 1;
const min2_10 = 2;
const min11 = 1;
const s = 6;

console.log(solution(min1, min2_10, min11, s));
