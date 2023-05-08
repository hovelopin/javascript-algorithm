// 시작 (20시 25분) => 끝 (20시 50분)
const [n , inputs] = require("fs").readFileSync("./dev/stdin").toString().trim().split("\n");

const solution = (inputs) => {
  const sortedInputs = inputs.split(" ").map(el => +el).sort((a,b) => a-b);

  let calcSum = 0;

  const mappedInputs = sortedInputs.map((input) => {
    calcSum += input;
    return calcSum;
  })
  
  return mappedInputs.reduce((acc , cur) => acc+cur, 0);
};

console.log(solution(inputs));