function solution(time) {
  const regex = /[0-1][0-9]:[0-5][0-9]/;
  const regex2 = /[2][0-3]:[0-5][0-9]/;

  if (regex.test(time) || regex2.test(time)) {
    return true;
  } else return false;
}
