function solution(n) {
  return Math.pow(
    2,
    n.toString(2).split("").reverse().join("").split("0", 2).join("0").length
  );
}

function solution2(n) {
  return (function (input) {
    // Fuck your "only change the ..." policy

    var result = 0;
    var zeroFound = false;

    for (var i = 0; i < 32; i++) {
      if (!((input >> i) & 1)) {
        if (zeroFound) {
          result = i;
          break;
        }

        zeroFound = true;
      }
    }

    return Math.pow(2, result);
  })(n);
}

function solution3(n) {
  return (
    2 ** [...n.toString(2)].reverse().join(``).split(`0`, 2).join(`0`).length
  );
}
