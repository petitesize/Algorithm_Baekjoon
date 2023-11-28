const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);
const A = input[0];
const B = input[1];
const C = input[2];
var result = 0;
if (A === B || A === C) {
  if (B !== C) result = 1000 + A * 100;
}
if (B === C) {
  if (A !== C) result = 1000 + B * 100;
}

if (A === B && B === C) result = 10000 + A * 1000;
if (A !== B && B !== C && A !== C) {
  var big = A > B ? (A > C ? A : C) : B > C ? B : C;
  result = big * 100;
}
console.log(result);
