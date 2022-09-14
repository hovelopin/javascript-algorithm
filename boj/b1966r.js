// 21시 ( 시작 ) =>
const [cases, ...inputs] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const ans = [];
const solution = (inputs) => {
  console.log(inputs);
  for (let i = 0; i < cases; i++) {
    let count = 1;
    // n과 k를 구하고 queue에 배열을 넣었다.
    let m = Number(inputs[i * 2].split(" ")[1]);
    const queue = inputs[i * 2 + 1].split(" ").map((i) => +i);

    while (true) {
      const target = queue.shift();

      // target이 queue에서 가장 크고 m이 0이면 출력
      if (Math.max(...queue) <= target && m === 0) {
        ans.push(count);
        break;
        // target이 max보다 작고 0이면 뒤에 넣고 m을 다시 설정한다.
      } else if (Math.max(...queue) > target && m === 0) {
        queue.push(target);
        m = queue.length - 1;
      } else if (Math.max(...queue) > target) {
        queue.push(target);
        m -= 1;
      } else if (Math.max(...queue) <= target) {
        count += 1;
        m -= 1;
      }
    }
  }
  console.log(ans);
};

console.log(solution(inputs));
