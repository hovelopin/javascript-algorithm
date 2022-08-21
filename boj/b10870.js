// 21시 (시작) => 21시 4분 (끝)
const fs = require("fs");
let input = Number(fs.readFileSync("./dev/stdin").toString().trim());

const solution = (n) => {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }

  return solution(n - 1) + solution(n - 2);
};

console.log(solution(input));
