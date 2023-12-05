const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

var arr = [];
for (var element of input) {
  arr.push(element % 42);
}

var arrSet = new Set(arr);
console.log(arrSet.size);