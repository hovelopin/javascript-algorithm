// 22시 40분 ( 시작 ) => 못풀었다.
const fs = require("fs");
const n = +fs.readFileSync("./dev/stdin").toString().trim();

const ans = [];
let count = 0;

// 원반 갯수 , 출발지 , 나머지 , 목적지
const solution = (num, from, other, to) => {
  if (num === 0) {
    return;
  } else {
    // 받아온 원반 갯수보다 하나 적은 원반들을 목적지가 아닌 곳으로 재귀적으로 이동!
    // 예시 ) 즉 , 3번에 도달하기 위해 2번에 먼저 (1,2)를 쌓아놓고
    solution(num - 1, from, to, other);
    ans.push([from, to]);
    count++;
    // 다른 곳으로 옮겼던 원반들을 그 위에 올린다.
    // 예시 ) 즉 ,
    solution(num - 1, other, from, to);
  }
};

solution(n, 1, 2, 3);
console.log(count);
console.log(ans.map((el) => el.join(" ")).join("\n"));
