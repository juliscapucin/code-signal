function solution(yourLeft, yourRight, friendsLeft, friendsRight) {
  const yourArms = [yourLeft, yourRight].sort((a, b) => a - b);
  const friendsArms = [friendsLeft, friendsRight].sort((a, b) => a - b);

  if (yourArms[0] === friendsArms[0] && yourArms[1] === friendsArms[1]) {
    return true;
  } else return false;
}
