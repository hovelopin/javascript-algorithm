// 15시 ( 시작 ) => 15시 10분 ( 끝 )
const fs = require("fs");
const input = +fs.readFileSync("./dev/stdin").toString();

let star = "*";
let start = 1;

const solution = (n) => {
  if (n === 1) {
    return console.log(star.repeat(start));
  }

  console.log(star.repeat(start));
  start++;

  return solution(n - 1);
};

solution(input);
