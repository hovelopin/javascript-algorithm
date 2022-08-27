const fs = require("fs");
let input = Number(fs.readFileSync("./dev/stdin").toString().trim());

function solution(n) {
  if (n === 0) {
    return 1;
  }
  return n * solution(n - 1);
}

console.log(solution(input));
