const inputs = require("fs").readFileSync("./dev/stdin").toString().trim().split(" ").map(el => +el);

const solution = (inputs) => {
  let result = 1;
  let flag = false;
  let [a, b] = inputs;
  
  // 마지막 숫자 1을 빼기 위해서는 10으로 나눈 몫을 구하는 부분을 몰랐음
  while (a<=b){
    if (a===b){
      flag = true;
      break;
    }

    // 마지막 숫자가 1이면 1을 뺀다.
    if (b%2 === 0) b = parseInt(b / 2);
    else if (b%10 === 1) b = parseInt(b / 10);
    else break;

    result++;
  }

  return flag ? result : -1
};

console.log(solution(inputs));
