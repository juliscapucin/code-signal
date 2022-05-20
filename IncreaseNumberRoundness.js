function solution(n) {
  const splitN = n.toString().split("");

  let filteredN = splitN.filter((item) => {
    return item !== "0";
  });
  let filteredZeros = splitN.filter((item) => {
    return item === "0";
  });

  if (parseInt(filteredN.concat(filteredZeros).join("")) !== n) {
    return true;
  } else return false;
}
