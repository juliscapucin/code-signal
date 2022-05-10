function solution(upSpeed, downSpeed, desiredHeight) {
  let days = 0;
  let height = 0;
  const realSpeed = upSpeed - downSpeed;

  if (desiredHeight >= upSpeed) {
    while (height < desiredHeight - downSpeed) {
      height += realSpeed;
      days++;
    }
  } else {
    days = 1;
  }

  return days;
}

const upSpeed = 100;
const downSpeed = 10;
const desiredHeight = 910;

const upSpeed2 = 6;
const downSpeed2 = 5;
const desiredHeight2 = 10;

console.log(solution(upSpeed2, downSpeed2, desiredHeight2));
