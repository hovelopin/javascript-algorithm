// 0시 51분 (시작) =>
const [n, k] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((i) => +i);

const circle = [];
for (let i = 1; i < n + 1; i++) {
  circle.push(i);
}

const solution = () => {
  const out = [];
  let idx = k - 1;
  while (circle.length > 0) {
    const pick = circle.splice(idx, 1);
    out.push(pick[0]);
    idx = (idx + k - 1) % circle.length;
  }

  return out.join(", ");
};

console.log(`<${solution()}>`);
