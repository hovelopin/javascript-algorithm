const input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .slice(0, -1);

const output = [];
input.forEach((str) => {
  const stack = [];
  let flag = true;
  for (const v of str) {
    if (v === "(" || v === "[") stack.push(v);
    else if (
      (v === ")" && stack.pop() !== "(") ||
      (v === "]" && stack.pop() !== "[")
    ) {
      flag = false;
      break;
    }
  }
  if (stack.length) flag = false;
  if (flag) output.push("yes");
  else output.push("no");
});
console.log(output.join("\n"));
