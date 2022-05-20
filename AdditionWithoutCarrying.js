function solution(param1, param2) {
  const param1String = param1.toString().split("");
  const param2String = param2.toString().split("");
  let sums = [];

  while (param1String.length !== param2String.length) {
    param1String.length > param2String.length
      ? param2String.unshift("0")
      : param1String.unshift("0");
  }

  for (let i = 0; i < param1String.length; i++) {
    if (parseInt(param1String[i]) + parseInt(param2String[i]) >= 10) {
      sums.push(
        (parseInt(param1String[i]) + parseInt(param2String[i])).toString()[1]
      );
    } else {
      sums.push(parseInt(param1String[i]) + parseInt(param2String[i]));
    }
  }

  return parseInt(sums.join(""));
}
