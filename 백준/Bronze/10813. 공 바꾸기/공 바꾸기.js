const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let [basket, count] = input[0].split(" ").map(Number);
var basketArr = [];

for (var i = 1; i <= basket; i++) {
  basketArr.push(i);
}

for (var i = 1; i <= count; i++) {
  let newArr = input[i].split(" ").map(Number);
  var index = newArr[0] - 1;
  var nextIndex = newArr[1] - 1;
  var temp = basketArr[index];
  basketArr[index] = basketArr[nextIndex];
  basketArr[nextIndex] = temp;
}

console.log(basketArr.join(" "));
