function solution(bishop, pawn) {
  console.log(Math.abs(bishop.charCodeAt(0)));
  console.log(Math.abs(pawn.charCodeAt(0)));
  console.log(Math.abs(bishop.charCodeAt(1)));
  console.log(Math.abs(pawn.charCodeAt(1)));

  console.log(Math.abs(bishop.charCodeAt(0) - pawn.charCodeAt(0)));
  console.log(Math.abs(bishop.charCodeAt(1) - pawn.charCodeAt(1)));

  if (bishop.charAt(0) == pawn.charAt(0) || bishop.charAt(1) == pawn.charAt(1))
    return false;
  if (
    Math.abs(bishop.charCodeAt(0) - pawn.charCodeAt(0)) ==
    Math.abs(bishop.charCodeAt(1) - pawn.charCodeAt(1))
  )
    return true;
  else return false;
}

// function solution(bishop, pawn) {
//   return (
//     Math.abs(bishop[0].charCodeAt() - pawn[0].charCodeAt()) ===
//     Math.abs(bishop[1] - pawn[1])
//   );
// }

const bishop = "a1";
const pawn = "h3";

console.log(solution(bishop, pawn));
