// 14시 ( 시작 ) =>
const [n, ...inputs] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((input) => +input);

const solution = (n, inputs) => {
  const stack = [];
  const ans = [];
  let cnt = 1;

  for (let i = 0; i < n; i++) {
    const number = inputs.shift();

    // 만일 inputs에서 뽑은 숫자가 cnt보다 크면 ++해서 stack에 넣고
    while (cnt <= number) {
      // cnt를 넣고 cnt값이 증가한다.
      stack.push(cnt++);
      ans.push("+");
    }

    // 크지 않다면 stack에서 뽑아서 number랑 확인한다.
    const popItem = stack.pop();
    if (popItem !== number) {
      return "NO";
    }
    ans.push("-");
  }

  return ans.join("\n");
};

console.log(solution(n, inputs));
