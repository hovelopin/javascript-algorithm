// 시작 (22시 30분) => 끝 (22시 51분)
const inputs = require("fs").readFileSync("./dev/stdin").toString().trim();

const solution = (S) => {
  let n = 1;

  while(true){
    if(n**2 + n > 2*S){
      break;
    }
    n++;
  }
  
  return n-1;
};

console.log(solution(inputs));
