const [n, ...inputs] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (inputs) => {
  const queue = [];
  // 출력할것들만 모아 놓는다.
  const ans = [];
  // console.log(inputs);
  for (let items of inputs) {
    const newArr = items.split(" ");

    switch (newArr[0]) {
      case "push":
        queue.push(newArr[1]);
        break;
      case "front":
        queue.length > 0 ? ans.push(queue[0]) : ans.push(-1);
        break;
      case "back":
        queue.length > 0 ? ans.push(queue.at(-1)) : ans.push(-1);
        break;
      case "size":
        ans.push(queue.length);
        break;
      case "pop":
        queue.length > 0 ? ans.push(queue.shift()) : ans.push(-1);
        break;
      case "empty":
        queue.length === 0 ? ans.push(1) : ans.push(0);
    }
  }
  return ans.join("\n");
};

console.log(solution(inputs));
