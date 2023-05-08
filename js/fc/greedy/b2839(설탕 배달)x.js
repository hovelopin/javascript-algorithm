// 머리가 안돌아가서 내일 다시 풀자!
// 시작 (22시 10분) => 끝 ()
const input = require("fs").readFileSync("./dev/stdin").toString().trim();

const solution = (input) => {
  const count = parseInt(input/5);
  let result = 0;
  
  for(let i = count; i>=0 ;i--){
    let temp = input;
    let cnt = 0;

    while(true){
      rest = temp % (5*i);
      if(rest % 3 === 0){
        result = parseInt(temp / (5*i)) + (rest / 3);
        break;
      }
    }
  }

  return result;
};

console.log(solution(input));
