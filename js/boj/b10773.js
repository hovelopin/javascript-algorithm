// 15시 50분 (시작) => 16시 ( 끝 )
const [n, ...inputs] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((input) => +input);

const stack = [];
const solution = (n, inputs) => {
  inputs.forEach((input) => {
    input !== 0 ? stack.push(input) : stack.pop();
  });
  const res = stack.reduce((acc, cur) => acc + cur, 0);
  return console.log(res);
};

solution(n, inputs);
