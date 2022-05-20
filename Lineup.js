function solution(commands) {
  let command = 0;
  let round = 0;
  const splitCommands = commands.split("");

  for (let i = 0; i < splitCommands.length; i++) {
    if ((splitCommands[i] === "L" || splitCommands[i] === "R") && command === 0)
      command++;
    else if (
      (splitCommands[i] === "L" || splitCommands[i] === "R") &&
      command === 1
    ) {
      command = 0;
      round++;
    } else if (splitCommands[i] === "A" && command === 0) {
      command = 0;
      round++;
    }
  }

  return round;
}
