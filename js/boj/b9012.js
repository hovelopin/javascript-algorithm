// 16시 35분 (시작) => 17시 5분 ( 끝 )
const [n, ...inputs] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const ans = [];

const solution = (n) => {
  for (let i = 0; i < n; ++i) {
    const stack = [];
    let flag = true;

    for (let j = 0; j < inputs[i].length; ++j) {
      // ( 이거면 스택에 넣는다. )면 stack의 길이를 파악하고 뽑는다.
      if (inputs[i][j] === "(") {
        stack.push(inputs[i][j]);
      } else {
        if (stack.length <= 0) {
          stack.push(inputs[i][j]);
          flag = false;
          break;
        }
        stack.pop();
      }
    }

    // 길이를 확인해서 스택에 길이가 남아있으면 false 없으면 true
    stack.length ? (flag = false) : (flag = true);
    // flag를 확인해서 yes no를 ans에 넣는다.
    flag ? ans.push("YES") : ans.push("NO");
  }

  return ans;
};

console.log(solution(n).join("\n"));
