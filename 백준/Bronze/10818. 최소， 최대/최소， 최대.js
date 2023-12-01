const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = input[0];

const numbers = input[1].split(" ").map(Number);

var max = numbers[0];
var min = numbers[0];
for (var i = 1; i <= N; i++) {
  if (max <= numbers[i]) {
    max = numbers[i];
  }
  if (min > numbers[i]) {
    min = numbers[i];
  }
}
console.log(min, max);
