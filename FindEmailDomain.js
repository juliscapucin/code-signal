function solution(address) {
  console.log(address.split("@"));
  console.log(address.split("@").pop());
  console.log(address.split("@").shift());
  return address.split("@").pop();
}

const email = "John.Smith@example.com";

console.log(solution(email));
