const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  input = line.split(" ").map(Number);
  A = input[0];
  B = input[1];
  rl.close();
});

rl.on("close", () => {
  console.log(`${A + B}\n${A - B}\n${A * B}\n${Math.floor(A / B)}\n${A % B}`);
  process.exit();
});
