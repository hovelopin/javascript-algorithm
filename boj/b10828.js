// 14시 45분 (시작) => 15시 15분

const fs = require("fs");
const [n, ...inputs] = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const stack = [];
const ans = [];

const solution = (inputs) => {
  inputs.forEach((input) => {
    const order = input.split(" ");

    switch (order[0]) {
      case "push":
        stack.push(+order[1]);
        break;
      case "top":
        stack.length > 0 ? ans.push(stack[stack.length - 1]) : ans.push(-1);
        break;
      case "pop":
        stack.length > 0 ? ans.push(stack.pop()) : ans.push(-1);
        break;
      case "size":
        ans.push(stack.length);
        break;
      case "empty":
        stack.length > 0 ? ans.push(0) : ans.push(1);
        break;
    }
  });
  return console.log(ans.join("\n"));
};

solution(inputs);
