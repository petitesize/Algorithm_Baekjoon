const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ");

let makeArr = [];
let newArr = [];

for (var i = 1; i <= N; i++) {
  makeArr.push(i);
  newArr.push(i);
}

for (var i = 1; i <= M; i++) {
  [start, end] = input[i].split(" ");
  startIndex = start - 1;
  endIndex = end - 1;
  tempEnd = endIndex;
  for (var j = startIndex; j <= endIndex; j++) {
    temp = makeArr[tempEnd];
    newArr[j] = temp;
    tempEnd--;
  }
  makeArr = [...newArr];
}

console.log(newArr.join(" "));
